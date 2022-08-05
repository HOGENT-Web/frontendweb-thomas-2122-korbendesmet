import axios from "axios";
import config from '../config.json';
import { createContext, useCallback, useMemo, useState } from "react";

export const ReservatieContext = createContext();

export const ReservatieProvider = ({ children }) => {
    const [reservaties, setReservaties] = useState([]);
    const [reservatie, setReservatie] = useState([]);

    const createReservatie = useCallback(async (data) => {

        const reservatie = {
            datum: data.datum,
            voornaam: data.voornaam,
            achternaam: data.achternaam,
            aantalPersonen: data.aantalPersonen,
            tijdslot: data.tijdslot,
            reservatietype: data.reservatietype
        };

        await axios.post(`${config.base_url}/reservaties`, reservatie);
    }, []);

    const getAllReservaties = useCallback(async () => {
        const data = await axios.get(`${config.base_url}/reservaties`);
        setReservaties(data.data);
    }, []);

    const getReservatieById = useCallback(async (id) => {
        const data = await axios.get(`${config.base_url}/reservaties/${id}`);
        setReservatie(data.data);
    }, []);

    const updateReservatie = useCallback(async (id, data) => {
        await axios.put(`${config.base_url}/reservaties/${id}`, data);
    }, []);

    const removeReservatie = useCallback(async (id) => {
        await axios.delete(`${config.base_url}/reservaties/${id}`);
    }, []);

    const value = useMemo(() => ({
        createReservatie,
        getAllReservaties, reservaties,
        getReservatieById, reservatie,
        updateReservatie,
        removeReservatie
    }), [createReservatie, getAllReservaties, reservaties, getReservatieById, reservatie, updateReservatie, removeReservatie])

    return (
        <ReservatieContext.Provider value={value}>
            {
                children
            }
        </ReservatieContext.Provider>
    );
};