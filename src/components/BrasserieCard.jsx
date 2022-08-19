import { useCallback, useContext, useState, useEffect } from "react"
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar, utils } from "@hassanmojab/react-modern-calendar-datepicker";
import { FormProvider, useForm } from "react-hook-form"

import { ReservatieContext } from "./../contexts/ReservatieProvider";

const BrasserieCard = () => {
  const [modalEnabled, toggleModal] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [disabledDays, setDisabledDays] = useState([]);
  const [myCustomLocale, setMyCustomLocale] = useState({});
  const [time, setTime] = useState('');
  const [middagLimit, setMiddagLimit] = useState(false);
  const [avondLimit, setAvondLimit] = useState(false);

  const methods = useForm();
  const { handleSubmit, register } = methods;

  const { createReservatie } = useContext(ReservatieContext);

  //TODO: Check if list is full and that 1 person can't claim all slots
  const onSubmit = useCallback(async (data) => {
    const regexTel = /^(((\+|00)32[ ]?(?:\(0\)[ ]?)?)|0){1}(4(60|[789]\d)\/?(\s?\d{2}\.?){2}(\s?\d{2})|(\d\/?\s?\d{3}|\d{2}\/?\s?\d{2})(\.?\s?\d{2}){2})$/;
    const regexEmail = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;

    document.getElementById("error").hidden = true;
    document.getElementById("errorTel").hidden = true;
    document.getElementById("errorEmail").hidden = true;
    if (data.voornaam === '' || data.achternaam === '' || data.telefoon === '' || data.email === '' || data.aantalPersonen === '' || time === '')
      return document.getElementById("error").hidden = false;
    if (regexTel.test(data.telefoon) === false) return document.getElementById("errorTel").hidden = false;
    if (regexEmail.test(data.email) === false) return document.getElementById("errorEmail").hidden = false;
    const returnData = {
      datum: `${selectedDay.year}-${selectedDay.month}-${selectedDay.day}`,
      ...data,
      tijdslot: time,
      reservatietype: 'brasserie'
    }
    toggleModal(!modalEnabled);
    setSelectedDay(null);
    setTime('');
    await createReservatie(returnData);
  }, [createReservatie, modalEnabled, selectedDay, time]);

  const changeTime = useCallback(async (tijdstip) => {
    if (tijdstip === time) {
      document.getElementById("middag").className = "disabled:bg-neutral-100/5 disabled:text-neutral-500 rounded-xl bg-white p-3 shadow-[0_1rem_4rem_rgba(0,0,0,0.3)] w-[45%]"
      document.getElementById("avond").className = "disabled:bg-neutral-100/5 disabled:text-neutral-500 rounded-xl bg-white p-3 shadow-[0_1rem_4rem_rgba(0,0,0,0.3)] w-[45%]"
      setTime('');
      return
    }
    else if (tijdstip === 'middag') {
      setTime(tijdstip);
      document.getElementById("middag").className = "disabled:bg-neutral-100/5 disabled:text-neutral-500 rounded-xl bg-neutral-900 text-neutral-200 p-3 shadow-[0_1rem_4rem_rgba(0,0,0,0.3)] w-[45%]"
      document.getElementById("avond").className = "disabled:bg-neutral-100/5 disabled:text-neutral-500 rounded-xl bg-white p-3 shadow-[0_1rem_4rem_rgba(0,0,0,0.3)] w-[45%]"
    }
    else if (tijdstip === 'avond') {
      setTime(tijdstip);
      document.getElementById("middag").className = "disabled:bg-neutral-100/5 disabled:text-neutral-500 rounded-xl bg-white p-3 shadow-[0_1rem_4rem_rgba(0,0,0,0.3)] w-[45%]"
      document.getElementById("avond").className = "disabled:bg-neutral-100/5 disabled:text-neutral-500 rounded-xl bg-neutral-900 text-neutral-200 p-3 shadow-[0_1rem_4rem_rgba(0,0,0,0.3)] w-[45%]"
    }
  }, [time]);

  useEffect(() => {
    //Just a test
    setDisabledDays([
      {
        year: 2022,
        month: 8,
        day: 13,
      },
      {
        year: 2022,
        month: 8,
        day: 14,
      },
      {
        year: 2022,
        month: 8,
        day: 15,
      }
    ]);

    setMyCustomLocale({
      // months list by order
      months: [
        'Januari',
        'Februari ',
        'Maart',
        'April',
        'Mei',
        'Juni',
        'Juli',
        'Augustus',
        'September',
        'Oktober',
        'November',
        'December',
      ],

      // week days by order
      weekDays: [
        {
          name: 'Maandag',
          short: 'MA',
        },
        {
          name: 'Dinsdag',
          short: 'DI',
        },
        {
          name: 'Woensdag',
          short: 'WO',
        },
        {
          name: 'Donderdag',
          short: 'DO',
        },
        {
          name: 'Vrijdag',
          short: 'VR',
        },
        {
          name: 'Zaterdag',
          short: 'ZA',
          isWeekend: true,
        },
        {
          name: 'Zondag', // used for accessibility 
          short: 'ZO', // displayed at the top of days' rows
          isWeekend: true, // is it a formal weekend or not?
        },
      ],

      // just play around with this number between 0 and 6
      weekStartingIndex: 6,

      // return a { year: number, month: number, day: number } object
      getToday(gregorainTodayObject) {
        return gregorainTodayObject;
      },

      // return a native JavaScript date here
      toNativeDate(date) {
        return new Date(date.year, date.month - 1, date.day);
      },

      // return a number for date's month length
      getMonthLength(date) {
        return new Date(date.year, date.month, 0).getDate();
      },

      // return a transformed digit to your locale
      transformDigit(digit) {
        return digit;
      },

      // texts in the date picker
      nextMonth: 'Next Month',
      previousMonth: 'Previous Month',
      openMonthSelector: 'Open Month Selector',
      openYearSelector: 'Open Year Selector',
      closeMonthSelector: 'Close Month Selector',
      closeYearSelector: 'Close Year Selector',
      defaultPlaceholder: 'Select...',

      // for input range value
      from: 'from',
      to: 'to',


      // used for input value when multi dates are selected
      digitSeparator: ',',

      // if your provide -2 for example, year will be 2 digited
      yearLetterSkip: 0,

      // is your language rtl or ltr?
      isRtl: false,
    })

  }, []);

  return (
    <div className="flex lg:w-[30%] justify-center">
      <div className="flex flex-col p-5 font-serif my-8 rounded-l-md bg-neutral-900 text-neutral-200 text-3xl">
        <div>Bar & Food</div>
        <div className="flex-grow" />
        <button onClick={() => toggleModal(!modalEnabled)} className="underline hover:bg-neutral-800 bg-neutral-900 border border-neutral-900 hover:border-neutral-200 rounded-lg p-1 px-2 italic text-3xl">Reserveren</button>
      </div>
      <div className="w-[60%] shrink-0 p-5 text-left font-light  border-l border-neutral-600 my-8 rounded-r-md bg-neutral-900 text-neutral-200 text-md">
        Quarante is een concept dat zich in de dag transformeert. Het moment van de dag bepaalt de sfeer in de bar, winkel of evenement.
      </div>
      {
        modalEnabled ?
          <div className="z-10 grid place-items-center fixed h-screen w-screen top-0 left-0 bg-black/[.75]">
            <div className="container rounded-xl border bg-neutral-200 flex flex-col w-fit">
              <div className="text-neutral-200 rounded-t-xl font-serif font-bold underline text-4xl border-b-2 py-4 px-5 bg-neutral-900">BRASSERIE</div>
              <div className="text-xl py-3 px-5 my-2 mx-auto">
                <div className="text-sm mt-1 font-semibold">
                  <Calendar
                    value={selectedDay}
                    onChange={setSelectedDay}
                    minimumDate={utils().getToday()}
                    disabledDays={disabledDays}
                    colorPrimary="#171717"
                    renderFooter={() => (
                      <button onClick={() => setSelectedDay(null) || setTime(null)} className="relative bottom-5 bg-neutral-900 w-20 text-xl rounded-lg text-neutral-200 h-10">
                        Reset!
                      </button>
                    )}
                    locale={myCustomLocale}
                  />
                </div>
                {
                  selectedDay ?
                    <div className="flex justify-between my-4">
                      <button disabled={middagLimit} id="middag" onClick={() => changeTime('middag')} className="disabled:bg-neutral-100/5 disabled:text-neutral-500 rounded-xl bg-white p-3 shadow-[0_1rem_4rem_rgba(0,0,0,0.3)] w-[45%]">Middag</button>
                      <button disabled={avondLimit} id="avond" onClick={() => changeTime('avond')} className="disabled:bg-neutral-100/5 disabled:text-neutral-500 rounded-xl bg-white p-3 shadow-[0_1rem_4rem_rgba(0,0,0,0.3)] w-[45%]">Avond</button>
                    </div> : null
                }
                {
                  time ?
                    <div className="flex justify-center">
                      <FormProvider {...methods}>
                        <div className="flex flex-col w-full">
                          <input {...register('voornaam')} placeholder="voornaam" type="text" label="voornaam" className="text-center rounded-xl py-1 px-2" />
                          <input {...register('achternaam')} placeholder="achternaam" type="text" label="achternaam" className="my-3 text-center rounded-xl py-1 px-2" />
                          <input {...register('telefoon')} placeholder="telefoonnummer" type="text" label="telefoonnummer" className="text-center rounded-xl py-1 px-2" />
                          <input {...register('email')} placeholder="email adres" type="text" label="email" className="my-3 text-center rounded-xl py-1 px-2" />
                          <input {...register('aantalPersonen')} placeholder="aantal personen" type="number" label="aantalPersonen" className="text-center rounded-xl py-1 px-2" />
                        </div>
                      </FormProvider>
                    </div> : null
                }
                <div id="error" hidden={true} className="absolute text-red-400">Gelieve alle velden correct in te vullen.</div>
                <div id="errorTel" hidden={true} className="absolute text-red-400 text-sm">Gelieve een geldig telefoonnummer in te geven.</div>
                <div id="errorEmail" hidden={true} className="absolute text-red-400 text-sm">Gelieve een geldig email adres in te geven.</div>
              </div>
              <div className="rounded-b-xl py-3 px-5 ">
                <button onClick={() => toggleModal(!modalEnabled) || setSelectedDay(null) || setTime('')}
                  className="font-serif rounded-md py-1 px-3 mr-6 italic hover:underline">Reservatie annuleren!</button>
                <input onClick={handleSubmit(onSubmit)} type="submit" value="Reservatie plaatsen!" className="text-neutral-200 rounded-md py-1 px-3 font-serif bg-neutral-900 italic hover:underline" />
              </div>
            </div>
          </div > : null
      }
    </div >
  )
}

export default BrasserieCard