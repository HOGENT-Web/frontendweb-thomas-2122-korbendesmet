import axios from "axios";
import config from '../config.json';
import { createContext, useCallback, useMemo, useState } from "react";

export const FoodtruckContext = createContext();

export const FoodtruckProvider = ({ children }) => {
    const [foodtruckOpeningsuren, setOpeningsuren] = useState([]);
    const [foodtruckOpeningsuur, setOpeningsuur] = useState([]);

    const createOpeningsuur = useCallback(async (data) => {

        const openingsuur = {
            beschrijving: data.beschrijving,
            prijs: data.prijs
        };

        await axios.post(`${config.base_url}/foodtruck`, openingsuur);
    }, []);

    const getAllOpeningsuren = useCallback(async () => {
        const data = await axios.get(`${config.base_url}/foodtruck`);
        setOpeningsuren(data.data);
    }, []);

    const getOpeningsuurById = useCallback(async (id) => {
        const data = await axios.get(`${config.base_url}/foodtruck/${id}`);
        setOpeningsuur(data.data);
    }, []);

    const updateOpeningsuur = useCallback(async (id, data) => {
        await axios.put(`${config.base_url}/foodtruck/${id}`, data);
    }, []);

    const removeOpeningsuur = useCallback(async (id) => {
        await axios.delete(`${config.base_url}/foodtruck/${id}`);
    }, []);

    const value = useMemo(() => ({
        createOpeningsuur,
        getAllOpeningsuren, foodtruckOpeningsuren,
        getOpeningsuurById, foodtruckOpeningsuur,
        updateOpeningsuur,
        removeOpeningsuur
    }), [createOpeningsuur, foodtruckOpeningsuren, foodtruckOpeningsuur, getAllOpeningsuren, getOpeningsuurById, removeOpeningsuur, updateOpeningsuur])

    return (
        <FoodtruckContext.Provider value={value}>
            {
                children
            }
        </FoodtruckContext.Provider>
    );
};