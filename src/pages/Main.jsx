import Reservaties from "./../components/Reservaties"
import Menu from "./../components/Menu"

export default function Main() {
  return (
    <div className="flex flex-col flex-grow bg-neutral-100">
      <div className="bg-cover bg-center bg-[url('/src/images/Banner.png')]">
        <div className="text-neutral-900 text-5xl md:text-8xl rounded w-fit mx-auto text-center mt-56 mb-60 font-serif p-3 bg-neutral-200/50 stroke-white">Eat, drink & enjoy all day long</div>
      </div>
      <div className="w-[50%] mx-auto px-8">
        <Reservaties />
        <Menu />
      </div>
    </div>
  );
}