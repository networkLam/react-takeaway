import { useState,useEffect,useRef } from 'react'
import FoodItem from './FoodItem'
import './index.scss'
import { useDispatch } from 'react-redux';
import { setHeight } from '../../store/modules/takeaway';


const FoodsCategory = ({ name, foods }) => {
  const heigh =  useRef(null);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(setHeight(heigh.current.offsetHeight))
  },[dispatch])
  return (
    <div className="category" ref={heigh}>
      <dl className="cate-list">
        <dt className="cate-title">{name}</dt>

        {foods.map(item => {
          return <FoodItem key={item.id} {...item} />
        })}
      </dl>
    </div>
  )
}

export default FoodsCategory
