import Calendar from "./../components/Calendar"

export default function Main() {
    return (
        <div className="flex flex-grow bg-neutral-100">
            <div className="w-[20%] bg-neutral-900">
                test
            </div>
            <div className="w-[80%]">
                <Calendar />
            </div>
        </div>
    );
};