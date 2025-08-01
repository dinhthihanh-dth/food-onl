import { useNavigate } from 'react-router-dom';
import React, { useContext, useState } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'


const Cart = () => {
    const navigate = useNavigate(); 
  const { cartItems, food_list, removeFromCart, getTotalCartAmount,url } = useContext(StoreContext);

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Sản phẩm</p>
          <p>Tên sản phẩm</p>
          <p>Giá</p>
          <p>Số lượng</p>
          <p>Thành tiền</p>
          <p>Xóa</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className='cart-items-title cart-items-item'>
                  <img src={url+"/images/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price} đ</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price * cartItems[item._id]} đ</p>
                  <p className='remove-btn' onClick={() => removeFromCart(item._id)}>X</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Tổng giỏ hàng</h2>
          <div>
            <div className="cart-total-details">
              <p>Tạm tính</p>
              <p>{getTotalCartAmount()}VND</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Phí giao hàng</p>
              <p>{getTotalCartAmount()===0?0:20000}VND</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Tổng cộng</b>
              <b>{getTotalCartAmount()===0?0:getTotalCartAmount()+20000}VND</b>
            </div>
          </div>
          <button onClick={() => navigate('/order')}>TIẾP TỤC THANH TOÁN</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Nếu bạn có mã giảm giá, hãy nhập tại đây</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='Nhập mã giảm giá' />
              <button>Áp dụng</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Cart
