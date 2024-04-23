
export class CalendarToolBox {
    constructor(date = new Date()) {
        this.initDate = date;
        this.monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
        this.dayNames = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

    }

    getYear(date) {
        const year = date.getFullYear()
        return year
    }

    getDaysInMonth(date) {
        const year = date.getFullYear()
        const month = date.getMonth()
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        return daysInMonth
    }

    getMonthName(date) {
        date = new Date(date)
        const month = date.getMonth()
        return this.monthNames[month]
    }

    getDayName(date) {
        const day = date.getDay()
        return this.dayNames[day]
    }

    getFirstDay(date) {
        const newDate = new Date (date.getFullYear(), date.getMonth(), 1)
        return newDate.getDay()
    }



    init() {
        const Calendar = []
        const currentDate = new Date();
        const dayInMonth = this.getDaysInMonth(currentDate);
        const year = this.getYear(currentDate);
        const month = currentDate.getMonth();

        for (let i = 1; i <= dayInMonth; i++) {
            const dateObj = new Date(year, month,i);
            const dayName = this.getDayName(dateObj);

            let day = {
                id:`${year}${month}${i}`,
                dateFormat: dateObj,
                dayNum: i,
                dayName: dayName,
                month: month,
                year: year,
            }
            Calendar.push(day)
        }

        return Calendar
    }
}

export class Calendar extends CalendarToolBox {
    constructor() {
        super()
        this.initMonth = super.init()
    }

    isCurrentDay(date) {
        const {currentYear, currentMonth, currentDay} = this.today()
        const givenDate = new Date(date.dateFormat)

        const givenDay = givenDate.getDate()
        const givenMonth = givenDate.getMonth()
        const givenYear = givenDate.getFullYear()

        const currentDateId = `${currentYear}${currentMonth}${currentDay}`
        const givenDateId = `${givenYear}${givenMonth}${givenDay}`

        return currentDateId === givenDateId ? true : false
    }

    today() {
        const currentDate = new Date();
        const currentDay = currentDate.getDate();
        const currentMonth = currentDate.getMonth(); // Les mois commencent à partir de 0, donc on ajoute 1
        const currentYear = currentDate.getFullYear();
        return {currentYear, currentMonth, currentDay}
    }
}


export default { CalendarToolBox, Calendar };