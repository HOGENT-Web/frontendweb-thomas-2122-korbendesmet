import { useNavigate } from "react-router-dom"

export default function PageNotFound() {
    let nav = useNavigate();

    return (
        <div className="flex flex-grow bg-neutral-100">
            <div className="flex flex-col mx-auto my-auto">
                <div className="mx-auto text-7xl font-serif text-center">Pagina niet gevonden!</div>
                <button onClick={() => nav('/')} className="text-neutral-200 mx-auto mt-6 text-2xl mb-44 rounded-md w-fit py-1 px-3 font-serif bg-neutral-900 italic hover:underline">HOME!</button>
            </div>
        </div>
    );
};