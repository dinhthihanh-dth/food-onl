import React from 'react';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';

const Menu = () => {
  return (
    <div className="menu-page">
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Thực đơn</h1>
      <FoodDisplay category="All" hideTitle={true} />
    </div>
  );
};

export default Menu;
