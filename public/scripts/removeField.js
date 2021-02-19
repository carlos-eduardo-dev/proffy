function removeField($event) {
    const field = $event.target.parentNode

    field.remove()

    removeButtonClose()
}

function removeButtonClose() {
    const fieldsContainer = document.querySelectorAll('.schedule-item')

    if (fieldsContainer.length <= 1) {
        const btn = document.querySelectorAll('.remove-time')
        btn.forEach(function (btn) {
            btn.style.display = 'none'
        })
    }
}