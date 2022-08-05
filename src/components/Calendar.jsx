import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"

//Andere manier om de events te renderen
function renderEventContent(eventInfo) {
    return (
        <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
        </>
    )
}

const Calendar = () => {
    const handleClick = event => {
        console.log(event);
        console.log(event.event._def.title);
        console.log(event.event._def.date);
    };

    return (
        <div className="">
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridWeek"
                events={[
                    { title: 'event 1', date: '2022-08-04T12:50:00Z' },
                    { title: 'event 2', date: '2022-08-04T12:30:00Z' }
                ]}
                eventContent={renderEventContent}
                eventClick={handleClick}
            />
        </div >
    )

}

export default Calendar