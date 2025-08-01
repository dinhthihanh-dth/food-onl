import React from 'react';
import './about.css';
import aboutImage from '../../assets/5.png'; 

const About = () => {
  return (
<div className="about-container">
  <div className="about-content">
   
 <div className="about-image">
     <img src={aboutImage} alt="Giới thiệu về Tomato" />
    </div>
    <div className="about-text">
      <h1>Về chúng tôi</h1>
      <p className="intro">
        Chào mừng bạn đến với <strong>Tomato</strong> – nơi mang đến trải nghiệm ẩm thực Á – Âu nhanh chóng và tiện lợi.
      </p>

      <div className="about-section">
        <h2>🌐 Hoạt động linh hoạt</h2>
        <p>
          Chúng tôi phục vụ cả <strong>mua hàng online</strong> lẫn <strong>tại cửa hàng offline</strong>, giúp bạn dễ dàng thưởng thức món ăn yêu thích mọi lúc mọi nơi.
        </p>
      </div>

      <div className="about-section">
        <h2>🍱 Ẩm thực đa dạng</h2>
        <p>
          Thực đơn kết hợp tinh hoa <strong>ẩm thực châu Á</strong> (Việt, Nhật, Hàn, Trung) và <strong>ẩm thực châu Âu</strong> (Ý, Pháp, Mỹ), phù hợp mọi khẩu vị.
        </p>
      </div>

      <div className="about-section">
        <h2>🚀 Cam kết phục vụ</h2>
        <p>
          Đội ngũ đầu bếp và nhân viên chuyên nghiệp, phục vụ nhanh chóng – ngon miệng – chất lượng mọi lúc.
        </p>
      </div>

      <div className="about-footer">
        Hãy đến với Tomato – ăn nhanh, sống khỏe, tận hưởng trọn vẹn!
      </div>
    </div>
  </div>
</div>

  );
};

export default About;
