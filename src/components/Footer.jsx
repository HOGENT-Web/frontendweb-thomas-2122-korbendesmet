import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { IoMailOpen } from "react-icons/io5";


const Footer = () => {
    return (
        <div className="flex justify-around bg-neutral-100 border-t border-neutral-900 p-5 uppercase">
            <div className="">
                <div>Quarante©</div>
                <div>Appelterre-Dorp 40</div>
                <div>9400 NINOVE</div>
            </div>
            <div>
                <div>Algemene voorwaarden</div>
                <div className="flex justify-center mt-3">
                    <a href="https://google.com/" className="hover:scale-110 ease-out duration-300"><AiFillFacebook size={32} /></a>
                    <a href="https://google.com/" className="hover:scale-110 ease-out duration-300"><AiFillInstagram size={32} /></a>
                    <a href="mailto:test@test.com" className="hover:scale-110 ease-out duration-300"><IoMailOpen size={32} /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer