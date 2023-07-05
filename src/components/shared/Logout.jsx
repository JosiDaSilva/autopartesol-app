import React from "react";
import { useAuth } from "./AuthContext";

export const LogoutButton = () => {

 const { logout } = useAuth();

  return (
    <button className="group-hover:bg-[#f07c04] p-4 flex justify-center rounded-xl text-[#f07c04] group-hover:text-white transition-colors text-2xl"onClick={() => logout({ returnTo: window.location.origin })}>
     Salir
    </button>
  );
};