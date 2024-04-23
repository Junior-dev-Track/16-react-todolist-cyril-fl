import {useState} from "react";
import  {CalendarToolBox, CalendarCreate} from "../script/calendar.js";

const Calendar = () => {
    // let thisCalendar = new CalendarCreate();

    // console.log(thisCalendar)

    return (
        <>
            <div className="blockCalendar">
                <h2 className={'tilte2'}>{
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

export default { Calendar }