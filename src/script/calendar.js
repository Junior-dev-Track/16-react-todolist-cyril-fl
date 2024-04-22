class CalendarTools {
    constructor(date = new Date()) {
        this.date = date;
    }

    getYear() {
        const year = this.date.getFullYear()
        return year
    }

    getDayInMonth() {
        const year = this.date.getFullYear()
        const month = this.date.getMonth()
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        return daysInMonth
    }

    getMonthName() {
        const month = this.date.getMonth()
        const monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
        return monthNames[month]
    }

    getDayName() {
        const day = this.date.getDay()
        const dayNames = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
        return dayNames[day]
    }

    getFirstDay() {
        const newDate = new Date (this.date.getFullYear(), this.date.getMonth(), 1)
        return newDate.getDay()
    }
}

export default CalendarTools;