import { useState, useCallback, useEffect, useContext } from "react";
import { FormProvider, useForm } from "react-hook-form"

import { AdminContext } from "../../contexts/AdminProvider";


const Admins = () => {
    const { createAdmin, admins, getAllAdmins, removeAdmin } = useContext(AdminContext);
    const methods = useForm();
    const { handleSubmit, register } = methods;
    const [viewEnabled, toggleView] = useState(false);
    const [demoteModalEnabled, toggleDemoteModal] = useState(false);

    const verwijderAdmin = useCallback(async (id) => {
        await removeAdmin(id)
        await getAllAdmins()
        toggleDemoteModal(!demoteModalEnabled)
    }, [demoteModalEnabled, getAllAdmins, removeAdmin]);

    const onSubmit = useCallback(async (data) => {
        const regexEmail = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;

        document.getElementById("errorWachtwoord").hidden = true;
        document.getElementById("errorEmail").hidden = true;
        if (data.wachtwoord1 !== data.wachtwoord2) return document.getElementById("errorWachtwoord").hidden = false;
        if (regexEmail.test(data.email) === false) return document.getElementById("errorEmail").hidden = false;
        const admin = {
            voornaam: data.voornaam,
            achternaam: data.achternaam,
            email: data.email,
            wachtwoord: data.wachtwoord1
        };
        await createAdmin(admin)
        toggleView(!viewEnabled)
        await getAllAdmins()
    }, [createAdmin, getAllAdmins, viewEnabled]);

    useEffect(() => {
        getAllAdmins();
    }, [getAllAdmins]);

    // adminID

    // voornaam
    // achternaam
    // email
    // wachtwoord

    return (
        <div className="mx-auto my-10">
            {
                viewEnabled ?
                    <div>
                        <div onClick={() => toggleView(!viewEnabled)} className="mx-auto rounded-t-lg text-neutral-100 px-2 py-1 bg-neutral-900 hover:underline hover:cursor-pointer w-fit">Admin overzicht</div>
                        <div className="border rounded-xl border-neutral-900 divide-neutral-900 p-6 mx-auto w-[30%]">
                            <FormProvider {...methods}>
                                <form onSubmit={handleSubmit(onSubmit)} id="form">
                                    <div className="flex justify-between">
                                        <input {...register('voornaam')} id="voornaam" type="text" placeholder="Voornaam" className="bg-neutral-100 rounded-lg border border-neutral-900 px-2 py-1" />
                                        <input {...register('achternaam')} id="achternaam" type="text" placeholder="Achternaam" className="bg-neutral-100 rounded-lg border border-neutral-900 px-2 py-1" />
                                    </div>
                                    <input {...register('email')} id="email" placeholder="Email adres" type="text" label="email" className="bg-neutral-100 rounded-lg border border-neutral-900 px-2 py-1 mt-4 w-full" />
                                    <div className="flex justify-between mt-4">
                                        <input {...register('wachtwoord1')} id="wachtwoord1" type="password" placeholder="Wachtwoord" className="bg-neutral-100 rounded-lg border border-neutral-900 px-2 py-1" />
                                        <input {...register('wachtwoord2')} id="wachtwoord2" type="password" placeholder="Herhaal wachtwoord" className="bg-neutral-100 rounded-lg border border-neutral-900 px-2 py-1" />
                                    </div>
                                    <input type="submit" value="Admin toevoegen" className="mt-4 text-center text-xl rounded-lg text-neutral-100 px-2 py-1 bg-neutral-900 hover:underline hover:cursor-pointer w-full" />
                                </form>
                            </FormProvider>
                        </div>
                        <div id="errorWachtwoord" hidden={true} className="text-red-400 text-sm text-center">Beide wachtwoorden komen niet overeen.</div>
                        <div id="errorEmail" hidden={true} className="text-red-400 text-sm text-center">Gelieve een geldig email adres in te geven.</div>
                    </div>
                    :
                    <div>
                        <div onClick={() => toggleView(!viewEnabled)} className="mx-auto rounded-t-lg text-neutral-100 px-2 py-1 bg-neutral-900 hover:underline hover:cursor-pointer w-fit">Admin aanmaken</div>
                        <div className="mx-auto border rounded-xl border-neutral-900 divide-y divide-neutral-900 w-[45%]">
                            {
                                admins.map((admin) => (
                                    <div key={admin.adminID} className="flex flex-row py-1 w-full">
                                        <div className="grid my-auto grid-cols-2 w-full">
                                            <div className="ml-2 capitalize p-1 font-bold">{admin.voornaam} {admin.achternaam}</div>
                                            <div className="p-1">({admin.email})</div>
                                        </div>
                                        <button className="p-2 ml-4 mr-2 rounded-lg bg-red-500 hover:bg-red-700 text-white" onClick={() => toggleDemoteModal(!demoteModalEnabled)}>Verwijderen</button>
                                        {
                                            demoteModalEnabled ?
                                                <div className="grid place-items-center fixed h-screen w-screen top-0 left-0 bg-black/[.2]">
                                                    <div className="container rounded-xl border bg-neutral-200 flex flex-col w-2/6">
                                                        <div className="text-neutral-200 rounded-t-xl font-serif font-bold text-center underline text-4xl border-b-2 py-4 px-5 bg-neutral-900">Admin verwijderen</div>
                                                        <div className="text-xl py-3 px-5 border-b-2 text-center">Bent u zeker of u deze admin wilt verwijderen? Dit kan niet ongedaan gemaakt worden!</div>
                                                        <div className="rounded-b-xl py-3 px-5 ml-auto">
                                                            <button onClick={() => verwijderAdmin(admin.adminID)} className="mr-2 font-serif text-2xl rounded-md py-1 px-3 italic hover:underline">Ja!</button>
                                                            <button onClick={() => toggleDemoteModal(!demoteModalEnabled)} className="text-neutral-200 text-2xl rounded-md py-1 px-3 font-serif bg-neutral-900 italic hover:underline">Nee!</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                : null
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
            }
        </div >
    )
}

export default Admins