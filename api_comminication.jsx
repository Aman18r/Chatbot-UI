import axios from "axios";

export const loginUser = async (email, password) => {
    try {
        const res = await axios.post("/user/login", { email, password });
        if (res.status !== 200) {
            throw new Error("Unable to login");
        }
        const data = res.data; // Directly access data from response
        return data;
    } catch (error) {
        console.error("Login failed:", error.message);
        throw error; // Re-throw the error for further handling
    }
};
