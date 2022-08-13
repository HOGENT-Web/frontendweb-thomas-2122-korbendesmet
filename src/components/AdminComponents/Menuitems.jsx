import { useEffect, useContext } from "react";
import { AiOutlineDelete, AiOutlinePlus } from 'react-icons/ai';

import { MenuContext } from "../../contexts/MenuProvider";


const Menuitems = () => {
    const { gevondenMenuItems, zoekMenuItems, createMenuItem, removeMenuItem } = useContext(MenuContext);

    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const handleAdd = async () => {
        document.getElementById("error1").hidden = true
        document.getElementById("error2").hidden = true
        document.getElementById("error3").hidden = true

        if (gevondenMenuItems.some(menuItem => menuItem.beschrijving === document.getElementById("beschrijving").value.trim()) === true)
            return document.getElementById("error3").hidden = false;
        if (document.getElementById("beschrijving").value.trim() === '' || document.getElementById("prijs").value.trim() === '')
            return document.getElementById("error2").hidden = false

        const beschrijving = capitalize(document.getElementById("beschrijving").value.trim());
        const prijs = document.getElementById("prijs").value.trim()

        createMenuItem({ beschrijving, prijs });
        document.getElementById("prijs").value = '';
        document.getElementById("beschrijving").value = '';
        await zoekMenuItems();
        await zoekMenuItems();
        await zoekMenuItems();
    };

    const handleDelete = async () => {
        document.getElementById("error1").hidden = true
        document.getElementById("error2").hidden = true
        document.getElementById("error3").hidden = true

        if (document.getElementById("menuItemList").value !== '') {
            removeMenuItem(document.getElementById("menuItemList").value);
            await zoekMenuItems();
            await zoekMenuItems();
            await zoekMenuItems();
        } else document.getElementById("error1").hidden = false
    };

    useEffect(() => {
        zoekMenuItems();
    }, [zoekMenuItems]);

    return (
        <div className="rounded-lg p-4 h-96 mt-14 w-[50%] mx-auto">
            <select multiple id='menuItemList' className=" px-2 bg-neutral-100 border border-neutral-900 w-full h-[50%]">
                {
                    gevondenMenuItems.map((menuitem) => (
                        <option key={menuitem.menuItemID} value={menuitem.menuItemID}>{menuitem.menuItemID} | €{menuitem.prijs} | {menuitem.beschrijving}</option>
                    ))
                }
            </select>
            <div className="flex justify-center gap-6 my-12">
                <AiOutlineDelete title="Verwijderen" onClick={handleDelete} color='black' size={40} className=' hover:cursor-pointer' />
                <AiOutlinePlus title="Toevoegen" onClick={handleAdd} color='black' size={40} className='hover:cursor-pointer ' />
            </div>
            <div className="flex justify-between">
                <input id="prijs" type="number" placeholder="prijs" className="px-2 py-1 bg-neutral-100 border border-neutral-900 w-[7%]" />
                <input id="beschrijving" type="text" placeholder="beschrijving" className="px-2 py-1 bg-neutral-100 border border-neutral-900 w-[90%]" />
            </div>
            <label id="error1" className="absolute right-10 text-red-400 font-semibold" hidden={true}>Gelieve een menuitem te selecteren</label>
            <label id="error2" className="absolute right-10 text-red-400 font-semibold" hidden={true}>Gelieve alle velden in te voeren</label>
            <label id="error3" className="absolute right-10 text-red-400 font-semibold" hidden={true}>Dit gerecht bestaat reeds</label>
        </div>
    )
}

export default Menuitems