import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Buffer } from 'buffer';
import { AdminContext } from '../contexts/AdminProvider';
import * as api from '../contexts';
import config from '../config.json';

const JWT_TOKEN_KEY = config.token_key;

export const AuthenticationContext = createContext();

function parseJWT(token) {
    if (!token) { return {} };

    const base64Url = token.split('.')[1];
    const payload = Buffer.from(base64Url, 'base64');
    const jsonPayload = payload.toString('ascii');
    return JSON.parse(jsonPayload);
}

function parseExp(exp) {
    if (!exp) return null;
    if (typeof exp !== 'number') exp = Number(exp);
    if (isNaN(exp)) return null;
    return new Date(exp * 1000);
}

const useAuth = () => useContext(AuthenticationContext);

export const useSession = () => {
    const { token, admin, ready, loading, error } = useAuth();
    return { token, admin, ready, error, loading, isAuthed: Boolean(token) };
};

export const useLogin = () => {
    const { login } = useAuth();
    return login;
}

export const useLogout = () => {
    const { logout } = useAuth();
    return logout;
};

export const AuthenticationProvider = ({ children }) => {
    const { createAdmin, getAdminById, loginAdmin } = useContext(AdminContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [token, setToken] = useState(localStorage.getItem(JWT_TOKEN_KEY));
    const [admin, setAdmin] = useState(null);
    const [ready, setReady] = useState(false);

    const setSession = useCallback(async (token, admin) => {
        const { exp, adminID } = parseJWT(token);
        const expiry = parseExp(exp);
        const stillValid = expiry >= new Date();

        if (stillValid) {
            localStorage.setItem(JWT_TOKEN_KEY, token);
        } else {
            localStorage.removeItem(JWT_TOKEN_KEY);
            token = null;
        };

        api.setAuthToken(token);
        setToken(token);
        setReady(token && stillValid);

        if (!admin && stillValid) {
            admin = await getAdminById(adminID);
        };
        setAdmin(admin);
    }, [getAdminById]);

    useEffect(() => {
        setSession(token);
    }, [token, setSession]);

    const register = useCallback(async (adminData) => {
        const admin = await createAdmin(adminData);
        return admin;
    }, [createAdmin]);

    const login = useCallback(async (email, password) => {
        try {
            setLoading(true);
            setError('');
            const { token, admin } = await loginAdmin(email, password);
            await setSession(token);
            setAdmin(admin);
            return true;
        } catch (error) {
            console.error(error);
            setError('Login failed, try again');
            return false;
        } finally {
            setLoading(false);
        };
    }, [loginAdmin, setSession]);

    const logout = useCallback(() => {
        setSession(null);
        setAdmin(null);
    }, [setSession, setAdmin]);

    const value = useMemo(() => ({
        token,
        admin,
        ready,
        error,
        loading,
        register,
        login,
        logout,
        setAdmin
    }), [token, admin, ready, error, loading, register, login, logout, setAdmin]);

    return (
        <AuthenticationContext.Provider value={value}>
            {
                children
            }
        </AuthenticationContext.Provider>
    )
};