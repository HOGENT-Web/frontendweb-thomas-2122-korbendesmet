import axios from "axios";
import config from '../config.json';
import { createContext, useCallback, useMemo, useState } from "react";

export const BrasserieContext = createContext();

export const BrasserieProvider = ({ children }) => {
    const [brasserieOpeningsuren, setOpeningsuren] = useState([]);
    const [brasserieOpeningsuur, setOpeningsuur] = useState([]);

    const createOpeningsuur = useCallback(async (data) => {

        const openingsuur = {
            beschrijving: data.beschrijving,
            prijs: data.prijs
        };

        await axios.post(`${config.base_url}/brasserie`, openingsuur);
    }, []);

    const getAllOpeningsuren = useCallback(async () => {
        const data = await axios.get(`${config.base_url}/brasserie`);
        setOpeningsuren(data.data);
    }, []);

    const getOpeningsuurById = useCallback(async (id) => {
        const data = await axios.get(`${config.base_url}/brasserie/${id}`);
        setOpeningsuur(data.data);
    }, []);

    const updateOpeningsuur = useCallback(async (id, data) => {
        await axios.put(`${config.base_url}/brasserie/${id}`, data);
    }, []);

    const removeOpeningsuur = useCallback(async (id) => {
        await axios.delete(`${config.base_url}/brasserie/${id}`);
    }, []);

    const value = useMemo(() => ({
        createOpeningsuur,
        getAllOpeningsuren, brasserieOpeningsuren,
        getOpeningsuurById, brasserieOpeningsuur,
        updateOpeningsuur,
        removeOpeningsuur
    }), [])

    return (
        <BrasserieContext.Provider value={value}>
            {
                children
            }
        </BrasserieContext.Provider>
    );
};