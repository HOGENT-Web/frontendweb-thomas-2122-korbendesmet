import { useCallback, useContext, useState } from "react"

const BrasserieCard = () => {
    const [modalEnabled, toggleModal] = useState(false);

    const demoteGebruiker = useCallback(async (id) => {
        console.log(id)
    }, []);

    return (
        <div className="flex w-[30%]">
            <div className="flex flex-col p-9 font-serif my-8 rounded-l-md bg-neutral-900 text-neutral-200 text-3xl">
                <div>Bar & Food</div>
                <div className="flex-grow" />
                <button onClick={() => toggleModal(!modalEnabled)} className="underline hover:bg-neutral-800 bg-neutral-900 border border-neutral-900 hover:border-neutral-200 rounded-lg p-1 px-2 italic text-3xl">Reserveren</button>
            </div>
            <div className="w-[50%] p-5 text-left font-light  border-l border-neutral-600 my-8 rounded-r-md bg-neutral-900 text-neutral-200 text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            </div>
            {
                modalEnabled ?
                    <div className="z-10 grid place-items-center fixed h-screen w-screen top-0 left-0 bg-black/[.75]">
                        <div className="container rounded-xl border bg-neutral-200 flex flex-col w-fit">
                            <div className="text-neutral-200 rounded-t-xl font-serif font-bold underline text-4xl border-b-2 py-4 px-5 bg-neutral-900">RESERVATIE</div>
                            <div className="text-xl py-3 px-5">
                                <div className="h-64">t</div>
                            </div>
                            <div className="rounded-b-xl py-3 px-5 ">
                                <button onClick={() => toggleModal(!modalEnabled)}
                                    className="font-serif rounded-md py-1 px-3 mr-6 italic hover:underline">Reservatie annuleren!</button>
                                <button onClick={() => demoteGebruiker(1) && toggleModal(!modalEnabled)}
                                    className="text-neutral-200 rounded-md py-1 px-3 font-serif bg-neutral-900 italic hover:underline">Reservatie plaatsen!</button>
                            </div>
                        </div>
                    </div> : null
            }
        </div>
    )
}

export default BrasserieCard