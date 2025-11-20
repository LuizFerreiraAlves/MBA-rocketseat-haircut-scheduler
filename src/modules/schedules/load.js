import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { schedulesShow } from "../schedules/show.js"
import { hoursLoad } from "../form/hours-load.js"

// Select the input
const selectedDate = document.getElementById("date")

export async function schedulesDay() {
    // Obtians the input date
    const date = selectedDate.value

    // Retrieves the schedule from the API
    const schedulesOfTheDay = await scheduleFetchByDay({ date })

    // Shows the schedules
    schedulesShow({ schedulesOfTheDay })
    
    // Available hours
    hoursLoad({ date, schedulesOfTheDay })
}