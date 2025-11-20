export function hoursClick() {
    const hours = document.querySelectorAll('.hour-available')

    hours.forEach(( available ) => {
        available.addEventListener("click", (selected) => {
            // Removes the class from all the elements initially
            hours.forEach((hour) => {
                hour.classList.remove("hour-selected")
            })

            // Adds the class on the clicked "li"
            selected.target.classList.add("hour-selected")
        })
    })
}