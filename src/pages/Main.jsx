function Main() {
  return (
    <div className="flex-grow bg-neutral-100">
      <div className="flex-col bg-cover bg-center bg-[url('/src/images/Banner.png')]">
        <div className="text-white text-6xl text-center pt-60 pb-60 font-serif">Eat, drink & enjoy
          all day long</div>
      </div>
      <div className="flex  text-center mt-16 text-xl justify-center gap-20">
        <div className="">
          <div>Bar & Food</div>
          <button className="bg-neutral-800/80 hover:bg-neutral-800 hover:scale-105 mt-1 p-1 px-2 border border-neutral-800 italic text-3xl">Reserveren</button>
        </div>
        <div className="">
          <div>Foodtruck</div>
          <button className="bg-neutral-800/80 mt-1 hover:bg-neutral-800 hover:scale-105 p-1  px-2  border border-neutral-800 italic text-3xl">Reserveren</button>
        </div>
      </div>
    </div>
  );
}

export default Main;