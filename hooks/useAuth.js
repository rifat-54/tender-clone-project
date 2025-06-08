import React, { createContext, useContext } from "react";
import { View } from "react-native";

const AuthContext=createContext({})
export const AuthProvider = ({ children }) => {

    const signInWithGoogle=async()=>{
        await Google.logInAsync()
    }


  return <AuthContext.Provider value={{
    user:'sonny'
  }}>{children}</AuthContext.Provider>;
};


export default function useAuth(){
    return useContext(AuthContext)
}