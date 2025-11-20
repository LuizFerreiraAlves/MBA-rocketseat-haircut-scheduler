import dayjs from "dayjs"
import { apiConfig } from "./api-config.js"

export async function scheduleFetchByDay({ date }) {
    try {
        // Searches the shedules of the day
        const response = await fetch(`${apiConfig.baseURL}/schedules`)

        // Converts to JSON
        const data = await response.json()

        // Filters the schedules by the selected date
        const schedulesOfTheDay = data.filter((schedule) => 
            dayjs(date).isSame(schedule.when, "day")
        )

        return schedulesOfTheDay
    } catch(error) {
        alert("Não possível buscar os agendamentos do dia selecionado.")
    }
}