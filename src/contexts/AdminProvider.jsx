import axios from "axios";
import config from '../config.json';
import { createContext, useCallback, useMemo, useState } from "react";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
    const [admins, setAdmins] = useState([]);
    const [admin, setAdmin] = useState([]);

    const createAdmin = useCallback(async (data) => {
        const admin = {
            voornaam: data.voornaam,
            achternaam: data.achternaam,
            email: data.email,
            wachtwoord: data.wachtwoord
        };

        await axios.post(`${config.base_url}/admins`, admin);
    }, []);

    const getAllAdmins = useCallback(async () => {
        const data = await axios.get(`${config.base_url}/admins`);
        setAdmins(data.data);
    }, []);

    const getAdminById = useCallback(async (id) => {
        const data = await axios.get(`${config.base_url}/admins/${id}`);
        setAdmin(data.data);
    }, []);

    const updateAdmin = useCallback(async (id, data) => {
        await axios.put(`${config.base_url}/admins/${id}`, data);
    }, []);

    const loginAdmin = useCallback(async (email, wachtwoord) => {
        const { data } = await axios.post(`${config.base_url}/admins/login`, { email, wachtwoord });
        return data;
    }, []);

    const removeAdmin = useCallback(async (id) => {
        await axios.delete(`${config.base_url}/admins/${id}`);
    }, []);

    const value = useMemo(() => ({
        createAdmin,
        admins, getAllAdmins,
        admin, getAdminById,
        updateAdmin,
        loginAdmin,
        removeAdmin,
    }), [createAdmin, admins, getAllAdmins, admin, getAdminById, updateAdmin, loginAdmin, removeAdmin]);

    return (
        <AdminContext.Provider value={value}>
            {
                children
            }
        </AdminContext.Provider>
    );
};