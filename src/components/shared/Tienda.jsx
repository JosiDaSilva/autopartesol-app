import { useState } from 'react';
import {
  RiMenu3Fill,
  RiShoppingCartFill,
  RiCloseLine
} from "react-icons/ri";
// Components

import { useContext } from "react";
import { cartContext } from "../../Context/cartContext";


import Sidebar from "./Sidebar";
import Car from "./Car";
import Header from "./Header";
import Card from "./Card";
import Buscador from './Buscador';




function Tienda() {
 const { countProducts}= useContext(cartContext)
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  
  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

 
 
  const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [ setCountProducts] = useState(0);

  return (
  
    
    <div className="bg-[#262837] w-full min-h-screen">
      
          
      <Sidebar showMenu={showMenu} />
      <Car showOrder={showOrder} setShowOrder={setShowOrder}
     allProducts={allProducts}
     setAllProducts={setAllProducts}
     total={total}
     setTotal={setTotal}
     countProducts={countProducts}
     setCountProducts={setCountProducts}
      />
      {/* Menu movil */}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        
       
        <button onClick={toggleOrders} className=" text-orange-500 grid">
        <span className=" bg- [#f07c04] rounded-tl-sl py-0 px-4 text-white -translate-y-0.01 translate-x-2">{countProducts}</span> 
        <RiShoppingCartFill className='py-0 -translate-y-2 translate-x-1' />  
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />  
                   } 
                
        </button>
      </nav>
      <main className="lg:pl-32 lg:pr-96 pb-20">
        <div className="md:p-8 p-4">
          {/* Header */}
          <Header />
          {/* Title content */}
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
          <div className="flex items-center justify-center mb-16">
            <h2 className="text-xl text-gray-300">Selecciona tus productos</h2>
           
          </div >
          <Buscador/>
          </div>
          <div >
       
            {/* Card */}
            <div className="flex items-center justify-center mb-16">
            <h2 className="text-xl text-gray-300">Todos nuestros productos</h2>
           
          </div >
          <Card 
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts} />
          </div>
        </div>
       
      </main>
         
      </div>
     
   
  );
  
  }

export default Tienda;
