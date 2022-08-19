import BrasserieCard from "./../components/BrasserieCard"
import FoodtruckCard from "./../components/FoodtruckCard"
import Menu from "./../components/Menu"
import Afbeelding from "./../images/Olijven.jpg"

export default function Main() {
    return (
        <div className="flex flex-col flex-grow bg-neutral-100">
            <div className="bg-cover bg-center bg-[url('/src/images/Banner.png')]">
                <div className="text-neutral-900 text-5xl md:text-8xl rounded-lg w-fit mx-auto text-center mt-56 mb-60 font-serif p-3 bg-neutral-200/60 stroke-white">Eat, drink & enjoy all day long</div>
            </div>
            <div className="">
                <div className="w-[100%] mx-auto px-8">
                    <div className="flex flex-wrap text-center my-16 text-xl md:w-[90%] mx-auto justify-around px-4">
                        <BrasserieCard />
                        <div class="w-[2px] bg-black rounded-full" />
                        <FoodtruckCard />
                    </div>
                </div>
                <div className="flex flex-col bg-neutral-900 text-neutral-200">
                    <div className="mx-auto my-14 font-serif text-6xl">Quarante</div>
                    <div className="lg:w-[50%] w-full mb-16 mx-auto md:grid md:grid-cols-2 gap-12 text-right px-12">
                        <div>
                            <div>SHARING FOOD. SIPPING WINE.</div>
                            <div className="mt-6 mb-12">Quarante is een concept dat zich gedurende de dag transformeert. Het moment van de dag bepaalt de sfeer in het restaurant, de wijnbar en het hotel. Onze locatie in hartje Appelterre waar we zelf als gast zouden willen vertoeven en waar mensen zich écht goed voelen.</div>
                            <div className="flex gap-6 float-left">
                                <div className="text-left">
                                    <div>maandag ~ gesloten</div>
                                    <div>dinsdag ~ 10u-18u</div>
                                    <div>woensdag ~ 10u-18u</div>
                                    <div>donderdag ~ 10u-21u</div>
                                </div>
                                <div className="text-left">
                                    <div>vrijdag ~ 10u-21u</div>
                                    <div>zaterdag ~ 10u-18u</div>
                                    <div>zondag ~ gesloten</div>
                                </div>
                            </div>
                        </div>
                        <img alt="Afbeelding van Olijven" src={Afbeelding} className="mt-60 md:mt-0 h-80 rotate-6 rounded-lg" />
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    );
};