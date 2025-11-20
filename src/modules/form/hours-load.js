import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"
import { hoursClick } from "./hours-click.js"

const hours = document.getElementById("hours")

export function hoursLoad({ date, schedulesOfTheDay }) {
    // Clears the list of hours
    hours.innerHTML = ""

    // Retrieves the scheduled dates
    const unavailableHours = schedulesOfTheDay.map((schedule) => 
        dayjs(schedule.when).format("HH:mm")
    )

    const opening = openingHours.map((hour) => {
        // Retrieves the hour
        const [scheduleHour] = hour.split(":")

        // Checks if the date is in the past
        const isHourAfterCurrentDate = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())

        // Verifies whether the hour was scheduled or not
        const available = !unavailableHours.includes(hour) && isHourAfterCurrentDate

        // Defines if the current hour is available
        return {
            hour,
            available,
        }
    })

    // Renders the hours
    opening.forEach(({ hour, available }) => {
        const li = document.createElement("li")

        li.classList.add("hour")
        li.classList.add(available ? "hour-available": "hour-unavailable")

        li.textContent = hour

        if(hour === "9:00") {
            hourHeaderAdd("Manhã")
        } else if(hour === "13:00") {
            hourHeaderAdd("Tarde")
        } else if(hour === "18:00") {
            hourHeaderAdd("Noite")
        }

        hours.append(li)
    })

    // Adds the click event for the available hours
    hoursClick()
}

function hourHeaderAdd(title) {
    const header = document.createElement("li")
    header.classList.add("hour-period")
    header.textContent = title
    
    hours.append(header)
}