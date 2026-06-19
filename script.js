let userQuary = document.getElementById('support-input')
let containerEl = document.getElementById('main-container')
let botEl = document.getElementById('Bot')
let emptyEl = document.getElementById('empty')

let personStatus = ''
let supportBot = document.createElement('div')
supportBot.classList.add('divsupport')
botEl.appendChild(supportBot)

//paragraph
let paraEl = document.createElement('p')
paraEl.textContent = 'Hello!. How can i help you'
paraEl.classList.add('Bot-chat')
supportBot.appendChild(paraEl)
let usercontainer = document.createElement('div')
let paraE2 = document.createElement('p')
let typeOfPerson = document.createElement('p')


function displayuserPersona(data) {


    let user = userQuary.value
    userQuary.value = ''
    paraE2.textContent = ''



    //botDivElement

    usercontainer.classList.add('userchat')
    botEl.appendChild(usercontainer)


    //paragraph

    paraE2.id = 'paraid'
    paraE2.classList.add('Bot-chat')

    usercontainer.appendChild(paraE2)


    paraE2.textContent = user
    if (user === 'I’m very upset' || user === 'This is terrible' || user === 'I’m so happy' || user === 'This always happens!' || user === 'I already told you' || user === 'Again the same problem' || user === 'ASAP,' || user === 'urgent,' || user === 'right now' || user === 'immediately' || user === 'fastly') {
        personStatus = 'Frustrated User'

    } else if (user === 'API' || user === 'server' || user === 'database' || user === 'authentication' || user === 'JSON' || user === 'HTTP' || user === 'error') {
        personStatus = 'Technical Expert'

    } else if (user === 'sales' || user === 'Revenue' || user === 'impact' || user === 'calculate') {
        personStatus = 'Business Executive'

    } else if (user === '') {
        personStatus = 'required*'
    } else {
        personStatus = 'Escalates conversations to a human support'
    }


    typeOfPerson.classList.add('type')
    typeOfPerson.textContent = personStatus
    botEl.appendChild(typeOfPerson)


}





userQuary.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {

        let user = userQuary.value
        displayuserPersona()
    }
})


userQuary.addEventListener('blur', function(event) {
    let error = emptyEl.textContent
    if (userQuary.value === '') {
        error = 'Required*'
    }
})
