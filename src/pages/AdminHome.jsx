import { useCallback, useContext, useState, useEffect } from "react"
import Calendar from "../components/AdminComponents/Calendar"
import Menuitems from "../components/AdminComponents/Menuitems"

export default function Main() {
    const [component, setComponent] = useState('1');

    const toggleView = event => {
        setComponent(event.target.id);
        if (event.target.id === '1') {
            document.getElementById("1").className = "mx-3 my-4 px-4 py-2 rounded-3xl border border-neutral-900 bg-neutral-900 text-white text-xl underline"
            document.getElementById("2").className = "mx-3 my-4 px-4 py-2 rounded-3xl border border-neutral-900 bg-neutral-900 text-white text-xl hover:underline"
            document.getElementById("3").className = "mx-3 my-4 px-4 py-2 rounded-3xl border border-neutral-900 bg-neutral-900 text-white text-xl hover:underline"
            document.getElementById("4").className = "mx-3 my-4 px-4 py-2 rounded-3xl border border-neutral-900 bg-neutral-900 text-white text-xl hover:underline"
            document.getElementById("5").className = "mx-3 my-4 px-4 py-2 rounded-3xl border border-neutral-900 bg-neutral-900 text-white text-xl hover:underline"
            return
        }
        if (event.target.id === '2') {
            document.getElementById("1").className = "mx-3 my-4 px-4 py-2 rounded-3xl border border-neutral-900 bg-neutral-900 text-white text-xl hover:underline"
            document.getElementById("2").className = "mx-3 my-4 px-4 py-2 rounded-3xl border border-neutral-900 bg-neutral-900 text-white text-xl underline"
            document.getElementById("3").className = "mx-3 my-4 px-4 py-2 rounded-3xl border border-neutral-900 bg-neutral-900 text-white text-xl hover:underline"
            document.getElementById("4").className = "mx-3 my-4 px-4 py-2 rounded-3xl border border-neutral-900 bg-neutral-900 text-white text-xl hover:underline"
            document.getElementById("5").className = "mx-3 my-4 px-4 py-2 rounded-3xl border border-neutral-900 bg-neutral-900 text-white text-xl hover:underline"
            return
        }
        if (event.target.id === '3') {
            document.getElementById("1").className = "mx-3 my-4 px-4 py-2 rounded-3xl border border-neutral-900 bg-neutral-900 text-white text-xl hover:underline"
            document.getElementById("2").className = "mx-3 my-4 px-4 py-2 rounded-3xl border border-neutral-900 bg-neutral-900 text-white text-xl hover:underline"
            document.getElementById("3").className = "mx-3 my-4 px-4 py-2 rounded-3xl border border-neutral-900 bg-neutral-900 text-white text-xl underline"
            document.getElementById("4").className = "mx-3 my-4 px-4 py-2 rounded-3xl border border-neutral-900 bg-neutral-900 text-white text-xl hover:underline"
            document.getElementById("5").className = "mx-3 my-4 px-4 py-2 rounded-3xl border border-neutral-900 bg-neutral-900 text-white text-xl hover:underline"
            return
        }
        if (event.target.id === '4') {
            document.getElementById("1").className = "mx-3 my-4 px-4 py-2 rounded-3xl border border-neutral-900 bg-neutral-900 text-white text-xl hover:underline"
            document.getElementById("2").className = "mx-3 my-4 px-4 py-2 rounded-3xl border border-neutral-900 bg-neutral-900 text-white text-xl hover:underline"
            document.getElementById("3").className = "mx-3 my-4 px-4 py-2 rounded-3xl border border-neutral-900 bg-neutral-900 text-white text-xl hover:underline"
            document.getElementById("4").className = "mx-3 my-4 px-4 py-2 rounded-3xl border border-neutral-900 bg-neutral-900 text-white text-xl underline"
            document.getElementById("5").className = "mx-3 my-4 px-4 py-2 rounded-3xl border border-neutral-900 bg-neutral-900 text-white text-xl hover:underline"
            return
        }
        if (event.target.id === '5') {
            document.getElementById("1").className = "mx-3 my-4 px-4 py-2 rounded-3xl border border-neutral-900 bg-neutral-900 text-white text-xl hover:underline"
            document.getElementById("2").className = "mx-3 my-4 px-4 py-2 rounded-3xl border border-neutral-900 bg-neutral-900 text-white text-xl hover:underline"
            document.getElementById("3").className = "mx-3 my-4 px-4 py-2 rounded-3xl border border-neutral-900 bg-neutral-900 text-white text-xl hover:underline"
            document.getElementById("4").className = "mx-3 my-4 px-4 py-2 rounded-3xl border border-neutral-900 bg-neutral-900 text-white text-xl hover:underline"
            document.getElementById("5").className = "mx-3 my-4 px-4 py-2 rounded-3xl border border-neutral-900 bg-neutral-900 text-white text-xl underline"
            return
        }
    };
    console.log(component);

    const renderSwitch = (component) => {
        switch (component) {
            case '1':
                return <Calendar />
            case '2':
                return <Menuitems />
            case '3':
                return <Calendar />
            case '4':
                return <Calendar />
            case '5':
                return <Calendar />
            default:
                return <div className="mt-12 text-2xl text-center">Deze error zou u normaal niet mogen zien...</div>;
        }
    };

    return (
        <div className="flex flex-col flex-grow bg-neutral-100" >
            <div className="grid grid-cols-5 mx-auto">
                <button id="1" onClick={toggleView} className="mx-3 my-4 px-4 py-2 rounded-3xl border border-neutral-900 bg-neutral-900 text-white text-xl underline">Overzicht</button>
                <button id="2" onClick={toggleView} className="mx-3 my-4 px-4 py-2 rounded-3xl border border-neutral-900 bg-neutral-900 text-white text-xl hover:underline">Menu</button>
                <button id="3" onClick={toggleView} className="mx-3 my-4 px-4 py-2 rounded-3xl border border-neutral-900 bg-neutral-900 text-white text-xl hover:underline">Brasserie</button>
                <button id="4" onClick={toggleView} className="mx-3 my-4 px-4 py-2 rounded-3xl border border-neutral-900 bg-neutral-900 text-white text-xl hover:underline">Foodtruck</button>
                <button id="5" onClick={toggleView} className="mx-3 my-4 px-4 py-2 rounded-3xl border border-neutral-900 bg-neutral-900 text-white text-xl hover:underline">Admins</button>
            </div>
            <div className="mx-6 flex-grow">
                {renderSwitch(component)}
            </div>
        </div >
    );
};