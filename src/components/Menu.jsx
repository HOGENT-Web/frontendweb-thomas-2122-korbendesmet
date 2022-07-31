import { useEffect, useContext } from "react";
import { MenuContext } from './../contexts/MenuProvider';

function currencyFormat(num) {
    return '$ ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

const Menu = () => {
    const { gevondenMenuItems, zoekMenuItems } = useContext(MenuContext);


    useEffect(() => {
        zoekMenuItems();
    }, [zoekMenuItems]);

    return (
        <div className="flex flex-col font-serif my-16">
            <div className="mx-auto text-6xl mb-6">Menu</div>
            <div className="text-xl divide-y divide-neutral-900">
                {
                    gevondenMenuItems.map((MenuItem) => (
                        <div key={MenuItem.menuItemID} className="flex hover:bg-neutral-200 p-3 gap-14 justify-between italic grow-1 ease-in duration-50 first:rounded-t-md last:rounded-b-md">
                            <div>{MenuItem.beschrijving}</div>
                            <div className="font-sans text-lg shrink-0 my-auto">{currencyFormat(MenuItem.prijs)}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Menu