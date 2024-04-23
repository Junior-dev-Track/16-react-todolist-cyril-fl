import React, { useState, useEffect } from "react";
import { CalendarToolBox, Calendar } from "../script/calendar.js";

const CalendarView = () => {
    const thisCalendar = new Calendar();
    const [initDate, setInitDate] = useState(thisCalendar.initDate);
    const initMonth = thisCalendar.getMonthName(initDate);
    const [calendarRows, setCalendarRows] = useState([]);

    useEffect(() => {
        const generateCalendarRows = () => {
            const rows = [];
            let day = 0;
            let firstDayIndex = thisCalendar.getFirstDay(initDate);
            let daysInMonth = thisCalendar.getDaysInMonth(initDate);

            // Boucle pour générer les lignes du calendrier
            for (let i = 0; i < 6; i++) {
                const rowCells = [];

                // Boucle pour générer les cellules de chaque ligne
                for (let j = 0; j < 7; j++) {
                    if (i === 0 && j < firstDayIndex) {
                        rowCells.push(<td key={`empty-${j}`}></td>); // Utilisation de la méthode push() pour ajouter les cellules à la ligne
                    } else if (day < daysInMonth) {
                        let id = thisCalendar.initMonth[day].id;
                        rowCells.push(
                            <td
                                key={id}
                                className={`dayNum ${handleDateColor(day)}`}
                            >
                                {day + 1}
                            </td>
                        );
                        day++;
                    }
                }
                // Création de la ligne de calendrier
                rows.push(
                    <tr key={`row-${i}`} className="calendarRaw">
                        {rowCells}
                    </tr>
                );
            }
            return rows;
        };

        setCalendarRows(generateCalendarRows());
    }, [initDate]);

    const handleDateColor = (date) => {
        let calendar = thisCalendar.initMonth;
        let givenDate = calendar[date];

        return thisCalendar.isCurrentDay(givenDate) ? "color" : "uncolor";
    };

    return (
        <>
            <div className="blockCalendar">
                <h2 className={"tilte2"}>{initMonth}</h2>

                <table className="calendar">
                    <thead>
                    <tr className={"calendarRaw"}>
                        {thisCalendar.dayNames.map((dayName) => (
                            <th key={dayName} className={"dayName"}>
                                {dayName.slice(0, 3)}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>{calendarRows}</tbody>
                </table>
            </div>
        </>
    );
};

export default CalendarView;
