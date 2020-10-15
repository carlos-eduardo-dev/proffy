document.querySelector("#add-time").addEventListener('click', cloneField)

function cloneField() {

    const container = document.querySelector('#schedule-items')

    const fieldsContainer = document.querySelectorAll('.schedule-item')

    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    const fields = newFieldContainer.querySelectorAll("input")

    let clone = true
    fields.forEach(function (field) {
        if (field.value == "") {
            clone = false
        }
    });

    if (clone != false) {
        fields.forEach(function (field) {
            field.value = ""
        });

        container.appendChild(newFieldContainer)
    }
}