import { schedulesDay } from "../schedules/load.js"

// Selects the date input
const selectedDate = document.getElementById("date")

// Reloads the date list when the input changes
selectedDate.onchange = () => schedulesDay()