import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../components/RelatedProducts/RelatedProducts'

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId))
  return (
    <div>
      <Breadcrumbs product = {product}></Breadcrumbs>
      <ProductDisplay product = {product}></ProductDisplay>
      <DescriptionBox></DescriptionBox>
      <RelatedProducts></RelatedProducts>
    </div>
  )
}

export default Product