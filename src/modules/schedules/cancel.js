import { schedulesDay } from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel.js"

const periods = document.querySelectorAll(".period")

// Generates a click event for every list
periods.forEach((period) => {
    // Captures the click event
    period.addEventListener("click", async (event) => {
        if (event.target.classList.contains("cancel-icon")) {
            // Gets the parent "li" from the clicked element
            const item = event.target.closest("li")

            // Gets the schedule ID
            const { id } = item.dataset

            console.log(id)

            // Confirms the selection
            if(id) {
                const userConfirmation = confirm("Tem certeza que deseja cancelar o agendamento?")

                if(userConfirmation) {
                    // Requests the cancellation
                    await scheduleCancel({ id })

                    // Reloads the page and schedules
                    await schedulesDay()
                }
            }
        }
    })
})