// import {useState} from "react";
import { CalendarToolBox, Calendar } from "../script/calendar.js";

const CalendarView = () => {
    let thisCalendar = new Calendar();
        let initDate =thisCalendar.initDate
        let initMonth = thisCalendar.getMonthName(initDate)


    // console.log(thisCalendar)

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


                    {/*<tr><th>Lun</th><th>Mar</th><th>Mer</th><th>Jeu</th><th>Ven</th><th>Sam</th><th>Dim</th></tr>*/}
                    </thead>

                </table>

            </div>
        </>
    )
}

export default CalendarView