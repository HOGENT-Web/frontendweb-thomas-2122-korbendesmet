const Reservaties = () => {

    return (
        <div className="flex text-center justify-between mt-16 text-xl">
            <div className="p-9 font-serif my-8 rounded-md bg-neutral-900 text-neutral-200 text-3xl">
                <div>Bar & Food</div>
                <button className="bg-neutral-800 hover:bg-neutral-900 mt-6 rounded-lg p-1 px-2 border-2 hover:scale-95 border-neutral-800 italic text-3xl">Reserveren</button>
            </div>
            <div class="w-[2px] bg-black rounded-full" />
            <div className="p-9 font-serif my-8 rounded-md bg-neutral-900 text-neutral-200 text-3xl">
                <div>Foodtruck</div>
                <button className="bg-neutral-800 hover:bg-neutral-900 mt-6 rounded-lg p-1 px-2 border-2 hover:scale-95 border-neutral-800 italic text-3xl">Reserveren</button>
            </div >
        </div >
    )
}

export default Reservaties