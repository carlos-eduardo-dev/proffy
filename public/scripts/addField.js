document.querySelector("#add-time").addEventListener('click', cloneField)

function cloneField() {
    const newFieldsContainer = document.querySelector(".schedule-item").cloneNode(true)
    const fields = newFieldsContainer.querySelectorAll("input")

    let clone = true
    fields.forEach(function(field) {
        if (field.value == "") {
            clone = false
        }
    });

    if (clone != false) {
        fields.forEach(function(field) {
            field.value = ""
        });
    
        document.querySelector("#schedule-items").appendChild(newFieldsContainer)
    }
}