// import {useState} from "react";
import { CalendarToolBox, Calendar } from "../script/calendar.js";
import {useState} from "react";

const CalendarView = () => {
    let thisCalendar = new Calendar();
        let initDate =thisCalendar.initDate
        let initMonth = thisCalendar.getMonthName(initDate)

    // let isCurrentDayArray = []
    // thisCalendar.ForEachDay((day) => {

    // console.log(thisCalendar.isCurrentDay(initMonth[0]))


    // const [currentDate, setCurrentDate] = useState(false);


    const handleDateColor = (date) => {
        let calendar = thisCalendar.initMonth
        let givenDate = calendar[date]

            return thisCalendar.isCurrentDay(givenDate) ? 'color' : 'uncolor'
     }


    //
    // const handleDateColorsss = (date) => {
    //     let calendar = thisCalendar.initMonth
    //     let givenDate = calendar[date]
    //
    //     setCurrentDateColor( () => {
    //         return thisCalendar.isCurrentDay(givenDate)
    //     })
    //
    //     return currentDateColor ? 'color' : 'uncolor'
    // }


    const generateCalendarRows = () => {
        const calendarRows = [];
        let day = 0;
        let calendarInitDate = thisCalendar.initDate;
        let firstDayIndex = thisCalendar.getFirstDay(calendarInitDate)
        let daysInMonth = thisCalendar.getDaysInMonth(calendarInitDate)

        // Boucle pour générer les lignes du calendrier
         for (let i = 0; i < 6; i++) {
            const rowCells = [];

            // Boucle pour générer les cellules de chaque ligne
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDayIndex) {
                    rowCells.push(<td key={`empty-${j}`}></td>); // Utilisation de la méthode push() pour ajouter les cellules à la ligne
                } else if (day < daysInMonth) {
                    let id = thisCalendar.initMonth[day].id
                    rowCells.push(<td
                                    key={id}
                                    className={`dayNum ${handleDateColor(day)}`}
                                    >
                                    {day+1}</td>);
                    day++;
                }
            }
            // Création de la ligne de calendrier
            calendarRows.push(<tr key={`row-${i}`} className="calendarRaw">{rowCells}</tr>);
        }
        return calendarRows;
    }




    return (
        <>
            <div className="blockCalendar">
                <h2 className={'tilte2'}>{
                    initMonth
                }</h2>

                <table className="calendar">
                    <thead>
                    <tr className={'calendarRaw'}>
                        {thisCalendar.dayNames.map((dayName) => (
                            <th key={dayName} className={'dayName'} >{ dayName.slice(0, 3) }</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {
                        generateCalendarRows()
                    }
                    </tbody>

                </table>

            </div>
        </>
    )
}

export default CalendarView