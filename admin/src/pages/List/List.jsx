import React, { useState, useEffect } from 'react';
import './List.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({url}) => {
 



  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Không lấy được danh sách sản phẩm!");
      }
    } catch (error) {
      toast.error("Lỗi khi lấy dữ liệu từ server!");
      console.error(error);
    }
  };
  const removeFood = async(foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, {id:foodId});
    await fetchList();
    if (response.data.success) {
    toast.success("Món ăn đã xóa thành công!")
} else {
    toast.error("Món ăn không xóa thành công!");
}
  }




  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex-col">
    <p>Danh sách tất cả món ăn</p>
    <div className="list-table">
        <div className="list-table-format title">
            <b>Hình ảnh</b>
            <b>Tên món ăn</b>
            <b>Danh mục</b>
            <b>Giá</b>
            <b>Hoạt động</b>
        </div>
        {list.map((item,index)=>{
    return (
        <div key={index} className='list-table-format'>
            <img src={ `${url}/images/` + item.image} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{item.price}</p>
            <p onClick={()=>removeFood(item._id)} className='cursor'>X</p>
        </div>
    )
})}
    </div>
</div>
  );
};

export default List;
