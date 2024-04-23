
class CalendarToolBox {
    constructor(date = new Date()) {
        this.initDate = date;
    }

    getYear(date) {
        const year = date.getFullYear()
        return year
    }

    getDayInMonth(date) {
        const year = date.getFullYear()
        const month = date.getMonth()
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        return daysInMonth
    }

    getMonthName(date) {
        const month = date.getMonth()
        const monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
        return monthNames[month]
    }

    getDayName(date) {
        const day = date.getDay()
        const dayNames = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
        return dayNames[day]
    }

    getFirstDay(date) {
        const newDate = new Date (date.getFullYear(), date.getMonth(), 1)
        return newDate.getDay()
    }



    init() {
        const Calendar = []
        const currentDate = new Date();
        const dayInMonth = this.getDayInMonth(currentDate);
        const year = this.getYear(currentDate);
        const month = currentDate.getMonth() + 1;

        for (let i = 1; i <= dayInMonth; i++) {
            const dateString = `${year}-${month}-${i}`;
            const dateObj = new Date(dateString);
            const dayName = this.getDayName(dateObj);
            // console.log(dateObj)

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


class CalendarCreate extends CalendarToolBox {
    constructor() {
        super()
        this.initMonth = super.init()
    }

    isCurrentDay(date) {
        const currentDate = new Date();
        const givenDate = new Date(date);


        const currentDay = currentDate.getDate();
        const currentMonth = currentDate.getMonth() + 1; // Les mois commencent à partir de 0, donc on ajoute 1
        const currentYear = currentDate.getFullYear();

        const givenDay = givenDate.getDate();
        const givenMonth = givenDate.getMonth() + 1; // Les mois commencent à partir de 0, donc on ajoute 1
        const givenYear = givenDate.getFullYear();

        if (currentDay === givenDay &&
            currentMonth === givenMonth &&
            currentYear === givenYear) {
            return true
        } else {
            return false
        }
    }
}


export default {CalendarToolBox, CalendarCreate}