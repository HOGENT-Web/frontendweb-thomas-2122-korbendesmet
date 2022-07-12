import { createContext, useMemo, useContext } from "react";
import config from '../config.json';

const JWT_TOKEN_KEY = config.token_key;
const useAuth = () => useContext(AuthenticationContext);

export const AuthenticationContext = createContext();

export const useSession = () => {
    const { token, gebruiker, ready, loading, error, hasRole } = useAuth();
    return {
        token,
        gebruiker,
        ready,
        error,
        loading,
        isAuthed: Boolean(token),
        hasRole
    };
};

export const AuthenticationProvider = ({ children }) => {
    const value = useMemo(() => ({

    }), []);

    return (
        <AuthenticationContext.Provider value={value}>
            {
                children
            }
        </AuthenticationContext.Provider>
    )
};