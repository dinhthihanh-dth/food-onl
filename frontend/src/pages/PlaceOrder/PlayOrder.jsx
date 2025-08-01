
import React, { useEffect, useState, useContext } from 'react';
import './PlayOrder.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PlayOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);

  const [data, setData] = useState({
    ho: "",
    ten: "",
    email: "",
    duong: "",
    thanhPho: "",
    tinhThanh: "",
    sdt: ""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  }

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.forEach((item) => {
      if (cartItems[item._id] > 0) {
        const itemInfo = { ...item, quantity: cartItems[item._id] };
        orderItems.push(itemInfo);
      }
    })

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 20000,
    }


    let response = await axios.post(`${url}/api/order/place`, orderData, {
      headers: {
        token: token
      }
    })

    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      console.error("Đặt hàng thất bại");
    }
  }

  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate('/cart');
    } else if (getTotalCartAmount() === 0) {
      navigate('/cart');
    }
  }, [token]);


  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Thông tin giao hàng</p>
        <div className="multi-fields">
          <input name='ho' onChange={onChangeHandler} value={data.ho} type="text" placeholder='Họ' />
          <input name='ten' onChange={onChangeHandler} value={data.ten} type="text" placeholder='Tên' />
        </div>
        <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Địa chỉ email' />
        <input name='duong' onChange={onChangeHandler} value={data.duong} type="text" placeholder='Đường' />
        <div className="multi-fields">
          <input name='thanhPho' onChange={onChangeHandler} value={data.thanhPho} type="text" placeholder='Thành phố' />
          <input name='tinhThanh' onChange={onChangeHandler} value={data.tinhThanh} type="text" placeholder='Tỉnh/Thành' />
        </div>
        <input name='sdt' onChange={onChangeHandler} value={data.sdt} type="text" placeholder='Số điện thoại' />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Tổng giỏ hàng</h2>
          <div>
            <div className="cart-total-details">
              <p>Tạm tính</p>
              <p>{getTotalCartAmount()} VND</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Phí giao hàng</p>
              <p>{getTotalCartAmount() === 0 ? 0 : 20000} VND</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Tổng cộng</b>
              <b>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 20000} VND</b>
            </div>
          </div>
          <button type='submit'>TIẾP TỤC THANH TOÁN</button>
        </div>
      </div>
    </form>
  );
};

export default PlayOrder;
