import { useState, useCallback, useEffect, useContext } from "react";
import { FormProvider, useForm } from "react-hook-form"

import { FoodtruckContext } from "../../contexts/FoodtruckProvider";

const Foodtruck = () => {
    const { foodtruckOpeningsuren, getAllOpeningsuren, updateOpeningsuur } = useContext(FoodtruckContext);
    const methods = useForm();
    const { handleSubmit, register } = methods;
    const [view, toggleView] = useState(false);
    const [maandag, toggleMaandag] = useState(true);
    const [dinsdag, toggleDinsdag] = useState(true);
    const [woensdag, toggleWoensdag] = useState(true);
    const [donderdag, toggleDonderdag] = useState(true);
    const [vrijdag, toggleVrijdag] = useState(true);
    const [zaterdag, toggleZaterdag] = useState(true);
    const [zondag, toggleZondag] = useState(true);

    useEffect(() => {
        getAllOpeningsuren();
    }, [getAllOpeningsuren]);

    const onSubmit = useCallback(async (data) => {
        const maandag = {
            beginUur: data.maandagBeginUur,
            eindUur: data.maandagEindUur
        }
        const dinsdag = {
            beginUur: data.dinsdagBeginUur,
            eindUur: data.dinsdagEindUur
        }
        const woensdag = {
            beginUur: data.woensdagBeginUur,
            eindUur: data.woensdagEindUur
        }
        const donderdag = {
            beginUur: data.donderdagBeginUur,
            eindUur: data.donderdagEindUur
        }
        const vrijdag = {
            beginUur: data.vrijdagBeginUur,
            eindUur: data.vrijdagEindUur
        }
        const zaterdag = {
            beginUur: data.zaterdagBeginUur,
            eindUur: data.zaterdagEindUur
        }
        const zondag = {
            beginUur: data.zondagBeginUur,
            eindUur: data.zondagEindUur
        }
        await updateOpeningsuur(1, maandag)
        await updateOpeningsuur(2, dinsdag)
        await updateOpeningsuur(3, woensdag)
        await updateOpeningsuur(4, donderdag)
        await updateOpeningsuur(5, vrijdag)
        await updateOpeningsuur(6, zaterdag)
        await updateOpeningsuur(7, zondag)
        toggleView(!view)
        await getAllOpeningsuren()
    }, [getAllOpeningsuren, updateOpeningsuur, view]);

    const checkUren = (beginUUr, eindUur) => {
        if (beginUUr === "00:00:00") return 'GESLOTEN'
        return beginUUr.slice(0, -3) + "-" + eindUur.slice(0, -3)
    };

    return (
        <div>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)} id="form">
                    {
                        !view ?
                            <>
                                <div onClick={() => toggleView(!view)} className="mx-auto rounded-t-lg text-neutral-100 px-2 py-1 bg-neutral-900 hover:underline hover:cursor-pointer w-fit">Foodtruck openingsuren instellen</div>
                                <div className="flex flex-col gap-y-4 border rounded-xl border-neutral-900 divide-neutral-900 p-6 mx-auto w-fit">
                                    {
                                        foodtruckOpeningsuren.map((openingsuur) => (
                                            <div key={openingsuur.foodtruckID} className="grid grid-cols-2 gap-14">
                                                <div>{openingsuur.dag.charAt(0).toUpperCase() + openingsuur.dag.slice(1)}:</div>
                                                <div className="mx-auto">{checkUren(openingsuur.beginUur, openingsuur.eindUur)}</div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </>
                            :
                            <>
                                <div onClick={() => toggleView(!view)} className="mx-auto rounded-t-lg text-neutral-100 px-2 py-1 bg-neutral-900 hover:underline hover:cursor-pointer w-fit">Terug</div>
                                <div className="grid grid-cols-4 gap-y-4 border rounded-xl border-neutral-900 divide-neutral-900 p-6 mx-auto w-fit">
                                    <div className="flex">
                                        <input className="mr-2 scale-110" id="maandag" type="checkbox" defaultChecked="yes" onClick={() => toggleMaandag(!maandag)} />
                                        <div className="my-auto text-xl">Maandag</div>
                                    </div>
                                    {
                                        maandag ?
                                            <div className="flex ml-2 col-span-3">
                                                <input {...register('maandagBeginUur')} id="beginUur" type="text" placeholder="Begin uur" className="bg-neutral-100 rounded-lg border border-neutral-900 px-2 py-1" />
                                                <div className="flex">
                                                    <div className="my-auto mx-2">:</div>
                                                    <input {...register('maandagEindUur')} id="eindUur" type="text" placeholder="Eind uur" className="bg-neutral-100 rounded-lg border border-neutral-900 px-2 py-1" />
                                                </div>
                                            </div>
                                            :
                                            <input id="gesloten" value="GESLOTEN" disabled="true" type="text" className="col-span-3 text-center bg-neutral-100 rounded-lg border border-neutral-900 px-2 py-1 ml-2" />

                                    }
                                    <div className="flex">
                                        <input className="mr-2 scale-110" id="dinsdag" type="checkbox" defaultChecked="yes" onClick={() => toggleDinsdag(!dinsdag)} />
                                        <div className="my-auto text-xl">Dinsdag</div>
                                    </div>
                                    {
                                        dinsdag ?
                                            <div className="flex ml-2 col-span-3">
                                                <input {...register('dinsdagBeginUur')} id="beginUur" type="text" placeholder="Begin uur" className="bg-neutral-100 rounded-lg border border-neutral-900 px-2 py-1" />
                                                <div className="flex">
                                                    <div className="my-auto mx-2">:</div>
                                                    <input {...register('dinsdagEindUur')} id="eindUur" type="text" placeholder="Eind uur" className="bg-neutral-100 rounded-lg border border-neutral-900 px-2 py-1" />
                                                </div>
                                            </div>
                                            :
                                            <input id="gesloten" value="GESLOTEN" disabled="true" type="text" className="col-span-3 text-center bg-neutral-100 rounded-lg border border-neutral-900 px-2 py-1 ml-2" />

                                    }
                                    <div className="flex">
                                        <input className="mr-2 scale-110" id="woensdag" type="checkbox" defaultChecked="yes" onClick={() => toggleWoensdag(!woensdag)} />
                                        <div className="my-auto text-xl">Woensdag</div>
                                    </div>
                                    {
                                        woensdag ?
                                            <div className="flex ml-2 col-span-3">
                                                <input {...register('woensdagBeginUur')} id="beginUur" type="text" placeholder="Begin uur" className="bg-neutral-100 rounded-lg border border-neutral-900 px-2 py-1" />
                                                <div className="flex">
                                                    <div className="my-auto mx-2">:</div>
                                                    <input {...register('woensdagEindUur')} id="eindUur" type="text" placeholder="Eind uur" className="bg-neutral-100 rounded-lg border border-neutral-900 px-2 py-1" />
                                                </div>
                                            </div>
                                            :
                                            <input id="gesloten" value="GESLOTEN" disabled="true" type="text" className="col-span-3 text-center bg-neutral-100 rounded-lg border border-neutral-900 px-2 py-1 ml-2" />

                                    }
                                    <div className="flex">
                                        <input className="mr-2 scale-110" id="donderdag" type="checkbox" defaultChecked="yes" onClick={() => toggleDonderdag(!donderdag)} />
                                        <div className="my-auto text-xl">Donderdag</div>
                                    </div>
                                    {
                                        donderdag ?
                                            <div className="flex ml-2 col-span-3">
                                                <input {...register('donderdagBeginUur')} id="beginUur" type="text" placeholder="Begin uur" className="bg-neutral-100 rounded-lg border border-neutral-900 px-2 py-1" />
                                                <div className="flex">
                                                    <div className="my-auto mx-2">:</div>
                                                    <input {...register('donderdagEindUur')} id="eindUur" type="text" placeholder="Eind uur" className="bg-neutral-100 rounded-lg border border-neutral-900 px-2 py-1" />
                                                </div>
                                            </div>
                                            :
                                            <input id="gesloten" value="GESLOTEN" disabled="true" type="text" className="col-span-3 text-center bg-neutral-100 rounded-lg border border-neutral-900 px-2 py-1 ml-2" />

                                    }
                                    <div className="flex">
                                        <input className="mr-2 scale-110" id="vrijdag" type="checkbox" defaultChecked="yes" onClick={() => toggleVrijdag(!vrijdag)} />
                                        <div className="my-auto text-xl">Vrijdag</div>
                                    </div>
                                    {
                                        vrijdag ?
                                            <div className="flex ml-2 col-span-3">
                                                <input {...register('vrijdagBeginUur')} id="beginUur" type="text" placeholder="Begin uur" className="bg-neutral-100 rounded-lg border border-neutral-900 px-2 py-1" />
                                                <div className="flex">
                                                    <div className="my-auto mx-2">:</div>
                                                    <input {...register('vrijdagEindUur')} id="eindUur" type="text" placeholder="Eind uur" className="bg-neutral-100 rounded-lg border border-neutral-900 px-2 py-1" />
                                                </div>
                                            </div>
                                            :
                                            <input id="gesloten" value="GESLOTEN" disabled="true" type="text" className="col-span-3 text-center bg-neutral-100 rounded-lg border border-neutral-900 px-2 py-1 ml-2" />

                                    }
                                    <div className="flex">
                                        <input className="mr-2 scale-110" id="zaterdag" type="checkbox" defaultChecked="yes" onClick={() => toggleZaterdag(!zaterdag)} />
                                        <div className="my-auto text-xl">Zaterdag</div>
                                    </div>
                                    {
                                        zaterdag ?
                                            <div className="flex ml-2 col-span-3">
                                                <input {...register('zaterdagBeginUur')} id="beginUur" type="text" placeholder="Begin uur" className="bg-neutral-100 rounded-lg border border-neutral-900 px-2 py-1" />
                                                <div className="flex">
                                                    <div className="my-auto mx-2">:</div>
                                                    <input {...register('zaterdagEindUur')} id="eindUur" type="text" placeholder="Eind uur" className="bg-neutral-100 rounded-lg border border-neutral-900 px-2 py-1" />
                                                </div>
                                            </div>
                                            :
                                            <input id="gesloten" value="GESLOTEN" disabled="true" type="text" className="col-span-3 text-center bg-neutral-100 rounded-lg border border-neutral-900 px-2 py-1 ml-2" />

                                    }
                                    <div className="flex">
                                        <input className="mr-2 scale-110" id="zondag" type="checkbox" defaultChecked="yes" onClick={() => toggleZondag(!zondag)} />
                                        <div className="my-auto text-xl">Zondag</div>
                                    </div>
                                    {
                                        zondag ?
                                            <div className="flex ml-2 col-span-3">
                                                <input {...register('zondagBeginUur')} id="beginUur" type="text" placeholder="Begin uur" className="bg-neutral-100 rounded-lg border border-neutral-900 px-2 py-1" />
                                                <div className="flex">
                                                    <div className="my-auto mx-2">:</div>
                                                    <input {...register('zondagEindUur')} id="eindUur" type="text" placeholder="Eind uur" className="bg-neutral-100 rounded-lg border border-neutral-900 px-2 py-1" />
                                                </div>
                                            </div>
                                            :
                                            <input id="gesloten" value="GESLOTEN" disabled="true" type="text" className="col-span-3 text-center bg-neutral-100 rounded-lg border border-neutral-900 px-2 py-1 ml-2" />

                                    }
                                    {/* <div onClick={onSubmit} className="col-span-4 mt-2 text-center text-xl rounded-lg text-neutral-100 px-2 py-1 bg-neutral-900 hover:underline hover:cursor-pointer">Openingsuren aanpassen</div> */}
                                    <input type="submit" value="Openingsuren aanpassen" className="col-span-4 mt-2 text-center text-xl rounded-lg text-neutral-100 px-2 py-1 bg-neutral-900 hover:underline hover:cursor-pointer" />
                                </div>
                                <div className="text-center">TIP: Het formaat is 00:00 voor een uur in te stellen.</div>
                            </>
                    }
                </form>
            </FormProvider>
        </div >
    )
}

export default Foodtruck