import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Skeleton, Table, Image, Button, message, Popconfirm } from "antd";
import { Link } from "react-router-dom";
import api from "../../../../API";

// Định nghĩa kiểu dữ liệu cho Product
interface Product {
  _id: string;
  title: string;
  imageUrls: string[];
  price: number;
  description: string;
  available: boolean;
  type: string;
}

const AdminProductPage: React.FC = () => {
  const queryClient = useQueryClient()

  // Sử dụng useQuery với kiểu dữ liệu Product[]
  const { data, isLoading } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await api.get(`/products`);
      return response.data.map((product: Product) => ({
        key: product._id,
        ...product,
      }))
    },
  })

  // useMutation với kiểu tham số là string (id của product)
  const { mutate } = useMutation({
    mutationFn: async (id: string) => {
      await api.delete(`/products/${id}`)
    },
    onSuccess: () => {
      message.success("Xoá sản phẩm thành công")
      queryClient.invalidateQueries({
        queryKey: ["products"],
      })
    },
  });

  // Cấu hình các cột của bảng với kiểu dữ liệu rõ ràng
  const columns = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
      render: (_: any, __: Product, index: number) => index + 1,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Images",
      key: "imageUrls",
      dataIndex: "imageUrls",
      render: (_: any, item: Product) => {
        return (
          <div style={{ display: "flex", gap: "8px" }}>
            {item.imageUrls && item.imageUrls.length > 0 ? (
              item.imageUrls.map((images, index) => (
                <Image
                  key={index}
                  width={80}
                  src={images}
                  alt={`Image ${index + 1}`}
                />
              ))
            ) : (
              <span className="text-danger">Chưa có hình ảnh!</span>
            )}
          </div>
        )
      },
    },
    {
      title: "Price ",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Tình trạng",
      dataIndex: "available",
      key: "available",
      render: (available: boolean) => {
        return available ? "Còn hàng" : "Hết hàng";
      },
    },
    {
      title: "Loại hàng",
      dataIndex: "type",
      key: "type",
      render: (type: string) => {
        return type === "type1" ? "Hàng cũ" : "Hàng mới";
      },
    },
    {
      title: "",
      render: (_: any, products: Product) => (
        <div className="flex space-x-2">
          <Popconfirm
            title="Xóa sản phẩm"
            description="Bạn có chắc chắn xóa product này không?"
            onConfirm={() => mutate(products._id)}
            okText="Đồng ý"
            cancelText="Huỷ"
          >
            <Button danger>Remove</Button>
          </Popconfirm>
          <Link to={`/admin/products/${products._id}`}>
            <Button type="primary">Update</Button>
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div>
      <h1 className="text-3xl mb-4">Quản lý sản phẩm</h1>
      <Skeleton loading={isLoading} active>
        <Link to="/admin/products/add">
          <button className="btn btn-success p-2 mb-3">Add new product</button>
        </Link>
        <Table dataSource={data} columns={columns} />
      </Skeleton>
    </div>
  );
};

export default AdminProductPage;
