import { useNavigate, Outlet } from "react-router-dom";
import { useSession } from './../contexts/AuthenticationProvider';

const IsAuth = () => {
    const { isAuthed } = useSession();
    let nav = useNavigate();

    return (
        isAuthed ? <Outlet /> : nav('/')
    );
}

export default IsAuth;