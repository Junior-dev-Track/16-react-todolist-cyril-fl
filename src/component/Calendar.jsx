import {useState} from "react";
import CalendarTools from "../script/calendar.js";

const Calendar = () => {
    let thisCalendar = new CalendarTools();

    return (
        <>
            <div className="blockCalendar">
                <h2 className={'tilte2'}>{
                    thisCalendar.getMonthName()
                }</h2>

                <table className="calendar">
                    <thead>
                        <tr><th>Lun</th><th>Mar</th><th>Mer</th><th>Jeu</th><th>Ven</th><th>Sam</th><th>Dim</th></tr>
                    </thead>

                </table>

            </div>
        </>
    )
}

export default Calendar