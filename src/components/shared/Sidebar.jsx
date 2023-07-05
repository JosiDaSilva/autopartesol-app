import React from "react";
import { LogoutButton } from "./Logout";
import { Link } from "react-router-dom";


import {
  RiHome6Line

} from "react-icons/ri";

const Sidebar = (props) => {
  const { showMenu } = props;

  return (
    <div
      className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${
        showMenu ? "left-0" : "-left-full"
      }`}
    >
      <div>
        <ul className="pl-1">
          <li>
            
            <img
        src="autopartes-sol-srl.png" alt=""
        className="w-15 h-15  -mt-10 shadow-2xl rounded-full"
      />
           
          </li>
          <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl">
            <Link to="/"
              className="bg-[#f07c04] p-4 flex justify-center rounded-xl text-white"
            >
              <RiHome6Line className="text-2xl" />
            </Link>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-t1-x1 rounded-bl-xl group transition-colors">
          <Link to="/Buscar"
          className="group-hover:bg-[#f07c04] p-4 flex justify-center rounded-xl text-[#f07c04] group-hover:text-white transition-colors text-2xl"
             
              
            >
              Buscar
            </Link>
        
        </li>
          
        <li className="hover:bg-[#262837] p-4 rounded-t1-x1 rounded-bl-xl group transition-colors">
          <Link to="/Perfil"
          className="group-hover:bg-[#f07c04] p-4 flex justify-center rounded-xl text-[#f07c04] group-hover:text-white transition-colors text-2xl"
             
              
            >
              Perfil
            </Link>
        
        </li>
        
         
          <li className="hover:bg-[#262837] p-4 rounded-t1-x1 rounded-bl-xl group transition-colors">
         
         <LogoutButton/>
        </li>
        </ul>
      </div>
     
        
         
       
      
    </div>
  );
};

export default Sidebar;