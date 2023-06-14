'use client'
import React, { useState, createContext, useEffect } from "react";

interface IGlobalContextProps {
  theme: string;
  setTheme: (theme: string) => void;
  checkTheme: boolean;
  setCheckTheme: (theme: boolean)=>void;
}

export const GlobalContext =  createContext<IGlobalContextProps>({
  theme: "",
  setTheme: ()=> {},
  checkTheme: false,
  setCheckTheme: ()=>{},
})

export const GlobalContextProvider = ({children}: any)=>{
  
  const [theme, setTheme] = useState("dark")
  const [checkTheme, setCheckTheme] = useState(false)

  useEffect(() => {
    !checkTheme?setTheme("dark"):setTheme("light")
   },[checkTheme])

  return(
    <GlobalContext.Provider
      value={{
        theme:theme,
        setTheme:setTheme,
        checkTheme:checkTheme,
        setCheckTheme:setCheckTheme
      }}>
        {children}
      </GlobalContext.Provider>
  )
}