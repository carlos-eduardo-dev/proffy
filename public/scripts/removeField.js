document.querySelector("#remove-time").addEventListener('click', removeField)

function removeField() {

    const container = document.querySelector('#schedule-items')

    const fieldsContainer = document.querySelectorAll('.schedule-item')

    const removeFieldContainer = fieldsContainer[fieldsContainer.length - 1]

    if ((fieldsContainer.length - 1) > 0) {
        container.removeChild(removeFieldContainer)
    }
}