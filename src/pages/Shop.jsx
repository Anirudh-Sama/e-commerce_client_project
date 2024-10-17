import React from 'react'
import Hero from '../components/hero/Hero'
import Popular from '../components/popular/Popular'
import Offers from '../components/Offers/Offers'
import NewCollections from '../components/NewCollections/NewCollections'

const Shop = () => {
  return (
    <div>
        <Hero></Hero>
        <Popular></Popular>
        <Offers></Offers>
        <NewCollections></NewCollections>
    </div>
  )
}

export default Shop