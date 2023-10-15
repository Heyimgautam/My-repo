import React,{useState,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {add} from '../Store/cartSlice'
const Home = () => {
    const dispatch = useDispatch();
   const [products, setProducts] = useState([]);
    useEffect(()=>{
    const fetchProducts = async()=>{
        const result = await fetch('https://fakestoreapi.com/products');
        const data = await result.json();
        console.log(data);
        setProducts(data);
    };
    fetchProducts();
    },[])
    const onHandle = (prod)=>{
       dispatch(add(prod));
    }
  return (
    <>
    <div>
        <h1>Home page</h1>
      <div>
      <h3>Products</h3>
     <div className="style-grid">
        {products.map((product)=>{
            return(
              <div className="item" key={product.id}> 
               <img src={product.image} alt="image error..." />
               <h4>{product.title}</h4>
               <h5>$ {product.price}</h5>
               <button onClick = {()=>onHandle(product)}>Add to cart</button>
              </div> 
            )
        })}
     </div>
      </div>  
    </div>
    </>
  )
}

export default Home
