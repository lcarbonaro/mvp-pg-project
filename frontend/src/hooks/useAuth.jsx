import { useState, useEffect, createContext, useContext } from 'react';
import * as getUsers from './getUsers';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = getUsers.getUsers();
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);
// if user name and password are correct get user from server
    const login = async (email, password) => {
        try {
            const response = await getUsers.login(email, password);
            setUser(response);
            toast.success('Login Successful');
            const returnUrl = new URLSearchParams(window.location.search).get('returnUrl');
            navigate(returnUrl || '/');
        } catch (error) {
            console.error("Invalid email or password, try again!", error);
            toast.error('Invalid email or password');
            throw error;
        }
    };

    const logout = () => {
        getUsers.logout();
        setUser(null);
        toast.success('You are logged out');
        navigate('/'); // redirect to homepage after logout
    };

    const register = async (data) => {
        try {
            const response = await getUsers.register(data);
            setUser(response);
            toast.success('Registration Successful');
            navigate('/');
        } catch (error) {
            console.error("Registration failed!", error);
            toast.error('Registration failed');
            throw error;
        }
    };
    AuthProvider.propTypes = {
         children: PropTypes.node.isRequired,
          };
        
//pass all functions  to children
    return (
        <AuthContext.Provider value={{ user, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);








