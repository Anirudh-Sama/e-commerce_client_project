import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className = 'descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122) </div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur eligendi praesentium consequatur nemo odit corporis ea hic quam, numquam quisquam. Accusantium soluta odio, necessitatibus magnam voluptatibus voluptatum fugiat ratione perspiciatis atque, repellendus autem error nesciunt quidem! Deleniti suscipit omnis rerum!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, deserunt delectus cumque vitae necessitatibus id maiores? Deleniti sit voluptas harum eligendi optio consequatur culpa repudiandae ea tenetur explicabo? Tenetur, temporibus.</p>
        </div>
    </div>
  )
}

export default DescriptionBox