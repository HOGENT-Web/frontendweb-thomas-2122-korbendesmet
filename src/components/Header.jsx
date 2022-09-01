import { useNavigate } from "react-router-dom"
import { useState, useCallback } from "react"
import { FormProvider, useForm } from "react-hook-form"
import logo from "./../images/Quarante-logo-big.png"

import { useLogin, useLogout, useSession } from './../contexts/AuthenticationProvider';


const Header = () => {
    const [enabled, changeState] = useState(false);
    let nav = useNavigate();
    const methods = useForm();
    const { handleSubmit, register } = methods;


    const login = useLogin();
    const logout = useLogout();
    const { isAuthed, loading } = useSession();

    //TODO: Error if login is false and not all fields in use
    const onSubmit = useCallback(async (data) => {
        document.getElementById("errorLogin").hidden = true;
        const temp = await login(data.email, data.wachtwoord);
        if (temp === false) return document.getElementById("errorLogin").hidden = false;
        changeState(!enabled)
    }, [enabled, login]);

    const handleLogout = useCallback(() => {
        logout();
    }, [logout]);

    return (
        <div id="header">
            {
                !isAuthed ?
                    <div>
                        <div className="flex justify-between py-3 px-7 md:px-24 bg-neutral-900">
                            <div className="relative w-52">
                                <img onClick={() => nav('/')} src={logo} className="object-contain hover:cursor-pointer" alt="Green uk oil logo" />
                            </div>
                            <div className="my-auto">
                                <button id="loginButton" onClick={() => changeState(!enabled)} className="text-white text-xl p-2 hover:bg-neutral-800 rounded-lg border border-neutral-900 hover:border-neutral-700">Log in</button>
                            </div>
                        </div>
                        {
                            enabled ?
                                <div className="absolute top-28 right-0 rounded-l-lg bg-neutral-900 h-fit">
                                    <FormProvider {...methods}>
                                        <form onSubmit={handleSubmit(onSubmit)} id="form" className="mx-3 text-sm text-neutral-200">
                                            <label className="block ml-1 mt-2">Email: </label>
                                            <input {...register('email')} id="email" type="text" label="email" className="w-full bg-neutral-900 border border-neutral-200 rounded-lg p-1" />
                                            <label className="block ml-1 mt-2">Wachtwoord: </label>
                                            <input {...register('wachtwoord')} id="password" type="password" label="wachtwoord" className="w-full bg-neutral-900 border border-neutral-200 rounded-lg p-1" />
                                            <input id="submit" type="submit" disabled={loading} value="inloggen" className="underline hover:bg-neutral-800 bg-neutral-900 border border-neutral-900 hover:border-neutral-200 rounded-lg p-1 px-2 mt-3 float-right mb-2 italic" />
                                            <div id="errorLogin" hidden={true} className="text-red-400 text-sm mt-4">Verkeerde gegevens!</div>
                                        </form>
                                    </FormProvider>
                                </div> : null
                        }
                    </div>
                    :
                    <div>
                        <div className="flex justify-between py-3 px-7 md:px-24 bg-neutral-900">
                            <div className="relative w-52">
                                <img onClick={() => nav('/')} src={logo} className="object-contain hover:cursor-pointer" alt="Green uk oil logo" />
                            </div>
                            <div className="my-auto">
                                <button id="menuButton" onClick={() => nav('/admin')} className="text-white text-xl p-2 hover:bg-neutral-800 rounded-lg border border-neutral-900 hover:border-neutral-700">Menu</button>
                                <button id="logoutButton"  onClick={() => handleLogout()} className="text-white text-xl p-2 hover:bg-neutral-800 rounded-lg border border-neutral-900 hover:border-neutral-700">Log uit</button>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Header