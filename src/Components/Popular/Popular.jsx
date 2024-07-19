import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

// Popular defines the structure of the entire list
const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {/* item is array element */}
        {/* i is the index */}
        {/* Item is an individual component of data product  */}
        {data_product.map((item, i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price = {item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular
