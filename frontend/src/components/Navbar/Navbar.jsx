import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';


const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Trang chủ");

  const {getTotalCartAmount,token,setToken} = useContext(StoreContext);

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/")

  }


  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("Trang chủ")} className={menu === "Trang chủ" ? "active" : ""}>Trang chủ</Link>
        <Link to='/menu' onClick={() => setMenu("Thực đơn")} className={menu === "Thực đơn" ? "active" : ""}>Thực đơn</Link>
        <Link to='/about' onClick={() => setMenu("Về chúng tôi")} className={menu === "Về chúng tôi" ? "active" : ""}>Về chúng tôi</Link>
        <Link to='/contact' onClick={() => setMenu("Liên hệ")} className={menu === "Liên hệ" ? "active" : ""}>Liên hệ</Link>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className='navbar-search-icon'>
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className='dot'></div>
        </div>
        {!token?<button onClick={()=>setShowLogin(true)}>Đăng nhập</button>
          :<div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={()=>navigate('/myorder')}><img src={assets.bag_icon} alt="" /><p>Đặt hàng</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Đăng xuất</p></li>
            </ul>
          </div>
}
                  
      </div>
    </div>
  )
}

export default Navbar
