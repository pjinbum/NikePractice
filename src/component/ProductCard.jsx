import React from 'react'

const ProductCard = ({menu}) => {
  return (
    <div style={{border : '1px solid black' , width : '351px'}}>
        <img style={{width : '349px' , height : '349px'}} src={menu?.img} />
        {/* <div style={{color : 'orange' , fontWeight : 'bold'}}>{menu.choice == true ? '베스트셀러' : ''}</div> */}
        <div style={{fontWeight : 'bold' }}>{menu.title}</div>
        <div style={{color : 'gray'}}>{menu.price}</div>
        <div style={{color : 'skyblue'}}>{menu.new == true ? '신제품' : ''}</div>
    </div>
  )
}

export default ProductCard