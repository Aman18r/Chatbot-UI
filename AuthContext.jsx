import { createContext, useContext, useEffect, useState } from "react";
import { loginUser } from "../../helpers/api_comminication";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem("user"));
        if (savedUser) {
            setUser(savedUser);
            setIsLoggedIn(true);
        }
    }, []);

    const login = async (email, password) => {
        try {
            const data = await loginUser(email, password);
            setUser({ email: data.email, name: data.name });
            setIsLoggedIn(true);
            localStorage.setItem("user", JSON.stringify({ email: data.email, name: data.name }));
        } catch (error) {
            console.error("Login failed:", error.message);
        }
    };

    const signup = async (name, email, password) => {
        try {
           
            const newUser = { name, email };
            setUser(newUser);
            setIsLoggedIn(true);
            localStorage.setItem("user", JSON.stringify(newUser));
        } catch (error) {
            console.error("Signup failed:", error.message);
        }
    };

    const logout = () => {
        setUser(null);
        setIsLoggedIn(false);
        localStorage.removeItem("user");
    };

    const value = {
        user,
        isLoggedIn,
        login,
        signup,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom Hook for using Auth Context
export const useAuth = () => useContext(AuthContext);
