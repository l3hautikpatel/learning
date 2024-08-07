import React from "react";

export const UserContext = React.createContext({
    userName : null,
    email:null,
    setUserName:()=>{},
    setEmail:()=>{}
})

export const  UserProvider = UserContext.Provider;

export default function  useUser(){
   return React.useContext(UserContext);
}