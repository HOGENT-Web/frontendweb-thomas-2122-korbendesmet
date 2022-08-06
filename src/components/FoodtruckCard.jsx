import { useCallback, useContext, useState } from "react"

const FoodtruckCard = () => {
    const [modalEnabled, toggleModal] = useState(false);

    const demoteGebruiker = useCallback(async (id) => {

    }, []);

    return (
        <div className="flex w-[30%]">
            <div className="w-[50%] p-5 text-right font-light  border-r border-neutral-600 my-8 rounded-l-md bg-neutral-900 text-neutral-200 text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            </div>
            <div className="flex flex-col p-9 font-serif my-8 rounded-r-md bg-neutral-900 text-neutral-200 text-3xl">
                <div>Foodtruck</div>
                <div className="flex-grow" />
                <button onClick={() => toggleModal(!modalEnabled)} className="underline hover:bg-neutral-800 bg-neutral-900 border border-neutral-900 hover:border-neutral-200 rounded-lg p-1 px-2 italic text-3xl">Reserveren</button>
            </div>
            {
                modalEnabled ?
                    <div className="grid place-items-center fixed h-screen w-screen top-0 left-0 bg-black/[.7]">
                        <div className="container rounded border-2 border-gray-600 bg-gray-100 flex flex-col w-2/6">
                            <div className="text-2xl border-b-2 py-4 px-5 font-medium bg-black/[.02]">demoteAdmin</div>
                            <div className="text-xl py-3 px-5 border-b-2">demoteAdminConf</div>
                            <div className="py-3 px-5 bg-black/[.02]">
                                <button onClick={() => toggleModal(!modalEnabled)}
                                    className="px-4 py-1 rounded-md bg-gray-400 text-white cursor-pointer hover:bg-gray-500 ease-in duration-100 float-right">Nee!</button>
                                <button onClick={() => demoteGebruiker(1) && toggleModal(!modalEnabled)}
                                    className="mx-3 px-4 py-1 rounded-md bg-red-500 text-white cursor-pointer hover:bg-red-700 ease-in duration-100 float-right">Ja!</button>
                            </div>
                        </div>
                    </div>
                    : null
            }
        </div>
    )
}

export default FoodtruckCard