import dayjs from "dayjs"

// Select the sections "morning", "afternoon" and "night"
const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")

export function schedulesShow({ schedulesOfTheDay }) {
    try {
        // Clears the lists
        periodMorning.innerHTML = ""
        periodAfternoon.innerHTML = ""
        periodNight.innerHTML = ""

        // Renders the schedules by period
        schedulesOfTheDay.forEach((schedule) => {
            const item = document.createElement("li")
            const time = document.createElement("strong")
            const name = document.createElement("span")

            // Adds the schedule ID
            item.setAttribute("data-id", schedule.id)
            time.textContent = dayjs(schedule.when).format("HH:mm")
            name.textContent = schedule.name

            // Creates the cancel icon
            const cancelIcon = document.createElement("img")
            cancelIcon.classList.add("cancel-icon")
            cancelIcon.setAttribute("src", "./src/assets/cancel.svg")
            cancelIcon.setAttribute("alt", "Cancelar")

            // Adds the icon, time and name in the item
            item.append(time, name, cancelIcon)

            // Gets the time
            const hour = dayjs(schedule.when).hour()

            // Renders the schedule in the section according to the period
            if(hour <= 12) {
                periodMorning.appendChild(item)
            } else if(hour > 12 && hour <= 18) {
                periodAfternoon.appendChild(item)
            } else {
                periodNight.appendChild(item)
            }
        })
    } catch(error) {
        alert("Não foi possível exibir os agendamentos.")
    }
}