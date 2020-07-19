const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 20 * * 6', function (){
    console.log('Executando tarefa 1', new Date().getSeconds())
})

setTimeout(() =>{
    tarefa1.cancel()
    console.log('cancelando tarefa');
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(4,6)]
regra.hour = 20
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function (){
    console.log('Executando tarefa 2', new Date().getSeconds())
})