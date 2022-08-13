import { useCallback, useContext, useState, useEffect } from "react"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import moment from 'moment';
import 'moment/locale/nl'

import { ReservatieContext } from "../../contexts/ReservatieProvider";

//Andere manier om de events te renderen
function renderEventContent(eventInfo) {
    if (eventInfo.event._def.extendedProps.tijdslot === 'middag')
        return <div className="bg-green-700 text-neutral-200 rounded px-1"><b>{eventInfo.event.title}</b> ({eventInfo.event._def.extendedProps.aantalPersonen}p)</div>
    return <div className="bg-blue-700 text-neutral-200 rounded px-1"><b>{eventInfo.event.title}</b> ({eventInfo.event._def.extendedProps.aantalPersonen}p)</div>
};

const Calendar = () => {
    const { reservaties, getAllReservaties } = useContext(ReservatieContext);
    const [template, setTemplate] = useState(null);

    const handleClick = event => {
        const temp = new Date(event.event._def.extendedProps.datum);
        setTemplate(<div className="z-40 grid place-items-center fixed h-screen w-screen top-0 left-0 bg-black/[.2]">
            <div className="container rounded-xl border bg-neutral-200 flex flex-col w-fit">
                <div className="text-neutral-200 rounded-t-xl font-serif font-bold text-center text-4xl border-b-2 py-4 px-5 bg-neutral-900"><u>{event.event._def.extendedProps.reservatietype.charAt(0).toUpperCase() + event.event._def.extendedProps.reservatietype.slice(1)}</u> reservatie</div>
                <div className="text-center text-xl border-b-2 mt-6">Naam: {event.event._def.title}</div>
                <div className="text-center text-xl border-b-2">Tijdslot: {event.event._def.extendedProps.tijdslot}</div>
                <div className="text-center text-xl border-b-2">Aantal: {event.event._def.extendedProps.aantalPersonen}</div>
                <div className="text-center text-xl border-b-2 mt-6">Telefoonnummer: {event.event._def.extendedProps.telefoon}</div>
                <div className="text-center text-xl border-b-2">Email: {event.event._def.extendedProps.email}</div>
                <div className="text-center text-xl border-b-2 my-6">Datum: {moment(temp).locale("nl").format("DD MMMM")}</div>

                <div className="rounded-b-xl py-3 px-5 ml-auto">
                    <button onClick={() => setTemplate(null)} className="text-neutral-200 text-2xl rounded-md py-1 px-3 font-serif bg-neutral-900 italic hover:underline">Sluiten!</button>
                </div>
            </div>
        </div>)
    };

    useEffect(() => {
        getAllReservaties();
    }, [getAllReservaties]);

    const reservatieList = reservaties.map(item => ({
        title: item.voornaam + ' ' + item.achternaam,
        date: item.datum,
        datum: item.datum,
        aantalPersonen: item.aantalPersonen,
        telefoon: item.telefoon,
        email: item.email,
        tijdslot: item.tijdslot,
        reservatietype: item.reservatietype,
    }));

    return (
        <>
            <div className="flex w-fit mx-auto">
                <div>Legende: </div>
                <div className="bg-green-700 text-neutral-200 px-1 ml-2">middag</div>
                <div className="bg-blue-700 text-neutral-200 px-1">avond</div>
            </div>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridWeek"
                events={reservatieList}
                eventContent={renderEventContent}
                eventClick={handleClick}
                height={620}
            />
            {
                template
            }
        </>
    )
}

export default Calendar