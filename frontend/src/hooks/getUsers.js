import axiosInstance from "../axiosInstance";

//check if user available from local storage
export const getUsers = () => 
    localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null; 

//define email and password as input
//save data to local storage
export const login = async (email, password) => {
    try {
        const response = await axiosInstance.post('/user/login', { email, password });
        localStorage.setItem("user", JSON.stringify(response.data));
        return response.data;
    } catch (error) {
        console.error("Invalid email or password, try again!", error);
        throw error;
    }
}

export const register = async (registerData) => {
    try {
        const response = await axiosInstance.post('/user/register', registerData);
        localStorage.setItem("user", JSON.stringify(response.data));
        return response.data;
    } catch (error) {
        console.error("There was an error registering the user!", error);
        throw error;
    }
}

export const logout = () => localStorage.removeItem("user");