import axios from "axios";
import { createContext, useCallback, useMemo, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [gevondenMenuItems, setGevondenMenuItems] = useState([]);

    const zoekMenuItems = useCallback(async () => {
        const data = await axios.get('http://localhost:9000/api/menu-items/');
        setGevondenMenuItems(data.data);
    }, []);

    const value = useMemo(() => ({
        gevondenMenuItems,
        zoekMenuItems
    }), [gevondenMenuItems, zoekMenuItems])

    return (
        <MenuContext.Provider value={value}>
            {
                children
            }
        </MenuContext.Provider>
    );
};