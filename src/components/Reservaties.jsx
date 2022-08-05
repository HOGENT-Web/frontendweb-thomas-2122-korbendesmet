const Reservaties = () => {

    return (
        <div className="w-[100%] mx-auto px-8">
            <div className="flex text-center my-16 text-xl w-[90%] mx-auto">
                <div className="flex mx-auto w-[30%]">
                    <div className="flex flex-col p-9 font-serif my-8 rounded-l-md bg-neutral-900 text-neutral-200 text-3xl">
                        <div>Bar & Food</div>
                        <div className="flex-grow" />
                        <button className="underline hover:bg-neutral-800 bg-neutral-900 border border-neutral-900 hover:border-neutral-200 rounded-lg p-1 px-2 italic text-3xl">Reserveren</button>
                    </div>
                    <div className="w-[50%] p-5 text-left font-light  border-l border-neutral-600 my-8 rounded-r-md bg-neutral-900 text-neutral-200 text-md">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    </div>
                </div>
                <div class="w-[2px] bg-black rounded-full" />
                <div className="flex mx-auto w-[30%]">
                    <div className="w-[50%] p-5 text-right font-light  border-r border-neutral-600 my-8 rounded-l-md bg-neutral-900 text-neutral-200 text-md">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    </div>
                    <div className="flex flex-col p-9 font-serif my-8 rounded-r-md bg-neutral-900 text-neutral-200 text-3xl">
                        <div>Foodtruck</div>
                        <div className="flex-grow" />
                        <button className="underline hover:bg-neutral-800 bg-neutral-900 border border-neutral-900 hover:border-neutral-200 rounded-lg p-1 px-2 italic text-3xl">Reserveren</button>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Reservaties