/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContextType } from "../../types.ts";
import { useNavigate } from "react-router-dom";
import React from "react";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const [isAuthentificated, setIsAuthentificated] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthentificated(Boolean(token));
  }, []);

  const login = () => {
    localStorage.setItem("authToken", "fakeToken1234");
    setIsAuthentificated(true);
    navigate("/home");
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setIsAuthentificated(false);
    navigate("/login");
  };

  const clear = () => {
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ isAuthentificated, login, logout, clear }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used in AuthProvider");
  return context;
};
