/* user из БД */
const user = {
    name: "Иван",
    lastname: "Иванов",
    email: "ivanov@mail.ru",
    id: "1",
    about: "Тут я рассказываю о себе...",
    avatar: "https://www.pngitem.com/pimgs/m/80-800194_transparent-users-icon-png-flat-user-icon-png.png"
}
const users = {
    0: {name: "Марина", lastname: "Крутелева"},
    1: {name: "Марина", lastname: "Солдатова"},
    2: {name: "Ева", lastname: "Жолдина"},
    3: {name: "Нона", lastname: "Мандрыкина"},
    4: {name: "Ева", lastname: "Мандрыкина"},
    5: {name: "Венедикт", lastname: "Солдатов"},
    6: {name: "Нона", lastname: "Язина"},
    7: {name: "Сигизмунд", lastname: "Моряев"},
    8: {name: "Ульяна", lastname: "Иньшова"},
    9: {name: "Юнона", lastname: "Крутелева"},
    10:{name: "Самсон", lastname: "Мандрыкин"}
}

export function getUser(){
    return user;
}
export function getUsers(){
    return users;
}