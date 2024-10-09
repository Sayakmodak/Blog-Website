/*import {createContext, useEffect, useState} from "react";
import axios from "axios";

export const Authcontext = createContext(); 

export const AuthContextProvider = ({children})=>{
    const [currUser, setCurrUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    const login = async (value)=>{
        const res = await axios.post("http://localhost:3000/api/auth/login", value);
        setCurrUser(res.data);
    }

    const logout = async (value)=>{
        await axios.post("http://localhost:3000/api/auth/logout");
        setCurrUser(null);
    }

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(currUser));
    }, [currUser]);

    return (
        <Authcontext.Provider value={{login, logout, currUser}}>
            {children}
        </Authcontext.Provider>
    )
}*/


import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  
  const login = async (inputs) => {
    const res = await axios.post("http://localhost:3000/api/auth/login", inputs);
    console.log(res);
    setCurrentUser(res.data);
  };

  const logout = async (inputs) => {
    await axios.post("http://localhost:3000/api/auth/logout");
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
