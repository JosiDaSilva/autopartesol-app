import React from "react";
import { useContext } from "react";
import { cartContext } from "../Context/cartContext";

export const AddButton = ({
 
}) => {
  const { onAddProduct}= useContext(cartContext);
  return (
    <div className="grid justify-center gap-2" >
    <button  className="bg-[#f07c04] p-1 flex 
rounded-xl text-white text-center justify-center" id= "Agregar" onClick={()=>onAddProduct()}> Agregar</button>
          
     </div>
  );
}
