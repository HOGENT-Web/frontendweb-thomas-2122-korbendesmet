import axios from "axios";
import config from '../config.json';
import { createContext, useCallback, useMemo, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [gevondenMenuItems, setGevondenMenuItems] = useState([]);
    const [menuItem, setMenuItem] = useState([]);

    const createMenuItem = useCallback(async (data) => {
        await axios.post(`${config.base_url}/menu-items`, data);
    }, []);

    const zoekMenuItems = useCallback(async () => {
        const data = await axios.get(`${config.base_url}/menu-items`);
        setGevondenMenuItems(data.data);
    }, []);

    const getMenuItemById = useCallback(async (id) => {
        const data = await axios.get(`${config.base_url}/menu-items/${id}`);
        setMenuItem(data.data);
    }, []);

    const updateMenuItem = useCallback(async (id, data) => {
        await axios.put(`${config.base_url}/menu-items/${id}`, data);
    }, []);

    const removeMenuItem = useCallback(async (id) => {
        await axios.delete(`${config.base_url}/menu-items/${id}`);
    }, []);

    const value = useMemo(() => ({
        createMenuItem,
        zoekMenuItems, gevondenMenuItems,
        getMenuItemById, menuItem,
        updateMenuItem,
        removeMenuItem
    }), [createMenuItem, zoekMenuItems, gevondenMenuItems, getMenuItemById, menuItem, updateMenuItem, removeMenuItem])

    return (
        <MenuContext.Provider value={value}>
            {
                children
            }
        </MenuContext.Provider>
    );
};