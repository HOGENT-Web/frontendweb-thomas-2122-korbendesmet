import { useNavigate } from "react-router-dom"
import logo from "./../images/Quarante-logo-big.png"

const Header = () => {
    let nav = useNavigate();

    return (
        <div className="flex justify-between py-3 px-7 md:px-24 bg-neutral-900">
            <div className="relative w-52">
                <img onClick={() => nav('/')} src={logo} className="object-contain hover:cursor-pointer" alt="Green uk oil logo" />
            </div>
            <div className="my-auto">
                <button onClick={() => nav('/login')} className="text-white text-xl p-2 hover:bg-neutral-800 rounded-lg border border-neutral-900 hover:border-neutral-700">Log in</button>
            </div>
        </div>
    )
}

export default Header