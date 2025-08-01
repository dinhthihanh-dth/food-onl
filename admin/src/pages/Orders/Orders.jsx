import React, { useEffect, useState } from 'react';
import './Order.css';
import { toast } from "react-toastify";
import axios from "axios";
import { assets } from '../../assets/assets';

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(url + "/api/order/list");
      if (response.data.success) {
        setOrders(response.data.data);
      } else {
        toast.error("Lỗi khi lấy danh sách đơn hàng");
      }
    } catch (err) {
      toast.error("Không thể kết nối đến máy chủ");
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(url + "/api/order/status", {
        orderId,
        status: event.target.value, // ✅ đã sửa
      });

      if (response.data.success) {
        toast.success("Cập nhật trạng thái thành công");
        fetchAllOrders(); // cập nhật lại danh sách
      } else {
        toast.error("Cập nhật trạng thái thất bại");
      }
    } catch (err) {
      toast.error("Lỗi khi cập nhật trạng thái");
    }
  };

  // ✅ Hàm định dạng VNĐ
  const formatVND = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(amount);
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className='order add'>
      <h3>Trang Đơn Hàng</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className='order-item'>
            <img src={assets.parcel_icon} alt="parcel icon" />
            <div>
              <p className='order-item-food'>
                {order.items?.map((item, idx) =>
                  `${item.name} x ${item.quantity}${idx !== order.items.length - 1 ? ', ' : ''}`
                )}
              </p>

              <p className="order-item-name">
                {order.address?.firstName} {order.address?.lastName}
              </p>

              <p className='order-item-address'>
                {order.address?.street}, {order.address?.city}, {order.address?.state}, {order.address?.country}, {order.address?.zipcode}
              </p>

              <p>Số lượng món: {order.items.length}</p>
              <p>Tổng tiền: {formatVND(order.amount)}</p> {/* ✅ Hiển thị VNĐ chuẩn */}

              <select onChange={(event) => statusHandler(event, order._id)} value={order.status}>
                <option value="Đang xử lý">Đang xử lý</option>
                <option value="Đang giao hàng">Đang giao hàng</option>
                <option value="Đã giao">Đã giao</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
