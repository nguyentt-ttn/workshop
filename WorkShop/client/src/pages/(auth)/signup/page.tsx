import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input, message } from "antd";
import api from "../../../API";
import { useNavigate } from "react-router-dom";


type FieldType = {
    username?: string;
    email: string;
    password?: string;
    confirmPassword?: string;
    remember?: string;
};

const SignupPage = () => {
    const nav = useNavigate()
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    const { mutate } = useMutation({
        mutationFn: async (formData: FieldType) => {
            const response = await api.post("http://localhost:3000/api/signup", formData);
            return response.data;
        },
        onSuccess: () => {
            nav('/signin')
            messageApi.success("Signup success!");
            form.resetFields();
        },
        onError:(error:any)=>{
            console.log(error)
            messageApi.error(error.response.data.message || "Signup failed")
        }
    });

    const onFinish = (values: FieldType) => {
        mutate(values);
    };

    return (
        <>
            {contextHolder}
            <Form
                name="signup"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
                form={form}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    hasFeedback
                    rules={[
                        { required: true, message: "Trường username bắt buộc phải nhập!" },
                        {
                            min: 3,
                            message: "Username tối thiểu phải 3 ký tự!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    hasFeedback
                    rules={[
                        { required: true, message: "Trường email bắt buộc phải nhập!" },
                        { type: "email", message: "Định dạng email không đúng!" },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Password"
                    name="password"
                    hasFeedback
                    rules={[
                        { required: true, message: "Trường Password bắt buộc phải nhập!" },
                        { min: 6, message: "Password tối thiểu phải 6 ký tự!" },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    dependencies={["password"]}
                    hasFeedback
                    rules={[
                        { required: true, message: "Trường confirm password bắt buộc nhập!" },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue("password") === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error("Confirm password phải trùng khớp với password!"));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default SignupPage;
