import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lựa chọn hàng đầu cho món Á và Âu</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />

                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Trang chủ</li>
                        <li>Về chúng tôi</li>
                        <li>Vận chuyển</li>
                        <li>Chính sách bảo mật</li>
                    </ul>
                   

                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <li>+8423468364</li>
                    <li>tomato@gmail.com</li>
        
                </div>
            </div>
            <hr/>
            <p className="footer-copyright">Cpoyright 2025 @ tomato.com</p>
        </div>
    )
}

export default Footer
