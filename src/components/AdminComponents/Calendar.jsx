import { useCallback, useContext, useState, useEffect } from "react"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"

import { ReservatieContext } from "../../contexts/ReservatieProvider";

//Andere manier om de events te renderen
function renderEventContent(eventInfo) {
    return (
        <>
            <div><b>{eventInfo.event.title}</b> ({eventInfo.event._def.extendedProps.aantalPersonen}p)</div>
        </>
    )
}

const Calendar = () => {
    const { reservaties, getAllReservaties } = useContext(ReservatieContext);

    const handleClick = event => {
        console.log(event);
    };

    useEffect(() => {
        getAllReservaties();
    }, [getAllReservaties]);

    console.log(reservaties)
    const reservatieList = reservaties.map(item => ({
        title: item.voornaam + ' ' + item.achternaam,
        date: item.datum,
        datum: item.datum,
        aantalPersonen: item.aantalPersonen,
        telefoon: item.telefoon,
        email: item.email,
        tijdslot: item.tijdslot,
    }));

    return (
        <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridWeek"
            // events={[
            //     { title: 'event 1', date: '2022-08-12T12:50:00Z' },
            //     { title: 'event 1', date: '2022-08-12T12:50:00Z' },
            //     { title: 'event 1', date: '2022-08-12T12:50:00Z' },
            //     { title: 'event 1', date: '2022-08-12T12:50:00Z' },
            //     { title: 'event 1', date: '2022-08-12T12:50:00Z' },

            // ]}
            events={reservatieList}
            eventContent={renderEventContent}
            eventClick={handleClick}
            height={650}
        />
    )
}

export default Calendar