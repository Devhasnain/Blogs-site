import { createContext, useState } from "react";

export const MainStore=createContext();
export const Context=(props)=>{
    const [menuOpen,setMenuOpen]=useState(false);
    const [data,setData]=useState([]);
    return <MainStore.Provider value={{menuOpen,setMenuOpen,data,setData}}>
        {props.children}
    </MainStore.Provider>
};
