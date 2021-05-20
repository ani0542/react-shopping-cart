import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
// import data from './data';
import data from "./data"
import { useState } from 'react';


function App() {

  const { products } = data;
  const [cartItems, setCartItems] = useState([]);



  //adding an item

  const onAdd = (product) => {
    const exist = cartItems.find((x)=>x.id === product.id)
    
     if(exist){
       const updateItems = cartItems.map((value)=>{
         return value.id === product.id ? {...exist,qty:exist.qty+1} : value
       })
       setCartItems(updateItems)
     }

     else {
      setCartItems([
        ...cartItems,
        {...product,qty:1}
      ])
    }
  };

  

  //removing an item


  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {

      const updateItems = cartItems.map((value)=>{
        return value.id === product.id ? {...exist, qty:exist.qty-1} : value
      })

      setCartItems(updateItems)
    }
  };


  //jsx----------------------
  return (
    <div >
      <Header countCartItems={cartItems.length}></Header>
        <div className='row'>
          <Main products={products} onAdd={onAdd}></Main>
          <Basket
             cartItems={cartItems}
             onAdd={onAdd}
             onRemove={onRemove}
          ></Basket>
        </div>
    </div>
  );
}

export default App;
