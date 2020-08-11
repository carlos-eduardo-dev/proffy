
const createProffy = require("./createProffy")
const Database = require("./db")
Database.then(async (db) => {


    proffyValue = {
        name: "Carlos Edyadnfjanfc",
        avatar: "https://avatars2.githubusercontent.com/u/64539355?s=460&u=767e81b2520e99d443bfa0ea76e7d85e713bed07&v=4",
        whatsapp: "156110651",
        bio: "fjadsifqew"
    }

    classValue = {
        subject: "Quimica",
        cost: "20"    
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    const selectedProffys = await db.all("SELECT * FROM proffys")
    
    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectedClassesAndProffys)

    
    
    
    const selectedClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"

    `)

    console.log(selectedClassesSchedules)
})