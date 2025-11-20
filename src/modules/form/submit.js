import dayjs from "dayjs"
import { scheduleNew } from "../../services/schedule-new.js"
import { schedulesDay } from "../schedules/load.js"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

// Current date
const currentDate = dayjs(new Date()).format("YYYY-MM-DD")

// Load the current date
selectedDate.value = currentDate

// Defines the current date as the first date you can schedule
selectedDate.min = currentDate

form.onsubmit = async (event) => {
    // Prevent the formulary's default behavior, which is loading the page
    event.preventDefault()

    try {
        // Retrieves the client's name
        const name = clientName.value.trim()

        if(!name) {
            return alert("Informe o nome do cliente!")
        }

        // Retrieves the selected date
        const hourSelected = document.querySelector(".hour-selected")
        
        if(!hourSelected) {
            return alert("Selecione um horário!")
        }

        const [hour] = hourSelected.innerText.split(":")
        
        // Insert the hour in the date
        const when = dayjs(selectedDate.value).add(hour, "hour")
        
        // Generates an ID for the scheduling
        const id = new Date().getTime()
        
        // Creates the schedule
        await scheduleNew({
            id,
            name,
            when
        })

        // Reload the schedules
        await schedulesDay()

        // Clears the submitted data
        clientName.value = ""
    } catch(error) {
        alert("Não foi possível realizar o agendamento!")
    }
}