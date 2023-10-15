import React from 'react'
import {remove} from '../Store/cartSlice'
import {useDispatch, useSelector} from 'react-redux'
import {getNodeText} from '@testing-library/react'
const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state)=>state.cart);
    const onHandleRemove = (prod)=>{
        dispatch(remove(prod));
    }
    return (
    <>
    <div>
        <h1>Welcome in the cart</h1>
        <div className = "style-grid">
            {products.map((product)=>{
                return(
                    <div className="item" key={product.id}>
                         <img src={product.image} alt="product is not found" />
                         <h4>{product.title}</h4>
                         <h5>${product.price}</h5>
                         <button onClick={()=>onHandleRemove(product.id)}>Remove</button>
                    </div>
                )
            })}
        </div>
    </div>
    </>
  )
}

export default Cart
