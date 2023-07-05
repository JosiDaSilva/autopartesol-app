import React from "react";
import { useContext, useState } from "react";
import { cartContext } from "../../Context/cartContext";
import { data } from "../../data/products";
export const Card = () => {
 
  const { onAddProduct}= useContext(cartContext);

 


  return (
    
      
      <div className= "p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
      {data.map(product => (
        <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300' key={product.id}>
          <figure>
            <img src={product.imagen} alt="" className="w-30 h-40 object-fill -mt-20 shadow-2xl rounded-full" />
          </figure>
          <div className='info-product'>
            <h2 className="text-s">{product.nombre}</h2>
            <h2 className="text-s">{product.aplicación}</h2>
            <span className='text-gray-300'>${product.precio},00</span>
          <p className="text-s">Cód. Orig: {product.código_original}</p>
     
         

   <div className="grid justify-center gap-2">
    <button  className="bg-[#f07c04] p-1 flex 
rounded-xl text-white text-center justify-center" id= "Agregar"  onClick={()=>onAddProduct(product)}> Agregar</button>
          
     </div>
     
      


          </div>
        </div>
      ))}
      
    </div>
  );
};


export default Card;
