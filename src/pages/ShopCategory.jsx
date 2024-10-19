import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../context/ShopContext'

const ShopCategory = ({ banner }) => {
  const { all_product } = useContext(ShopContext)
  console.log(all_product)
  
  return (
    <div className="shop-category">
      <img src={banner} alt="Shop banner" />
    </div>
  )
}

export default ShopCategory
