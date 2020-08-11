const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

function convertHoursToMinutes (time) {
    const hour = time.split(":")[0]
    const minutes = time.split(":")[1]

    const numHours = Number(hour)
    const numMinutes = Number(minutes)
    
    return (numHours * 60) + numMinutes
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}