import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Đặt đồ ăn yêu thích của bạn tại đây</h2>
        <p>Lựa chọn thực đơn đa dạng món có cả món Á và Âu</p>
        <Link to="/menu">
          <button>Xem thực đơn</button>
        </Link>
      </div>
    </div>
  )
}

export default Header
