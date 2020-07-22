class Developer {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    get info() {
        return `${this.firstName} ${this.lastName}`
    }
}

function junior(developer) {
    developer.isJunior = true
    developer.skills = ['решать легкие задачи', 'пить кофе', 'хотеть домой']
    developer.getJuniorInfo = function() {
        return developer.info + ' умеет ' + this.skills.join(', ')
    }
    return developer
}

function middle(developer) {
    developer.isMiddle = true
    developer.skills = ['решать все задачи', 'помогать джунам', 'ненавидеть свой код', 'работать 25 часов в сутки']
    developer.getMiddleInfo = function() {
        return developer.info + ' умеет ' + this.skills.join(', ')
    }
    return developer
}

function senior(developer) {
    developer.isSenior = true
    developer.skills = ['решать все задачи', 'выступать на конференциях', 'взламывать Пентагон на css']
    developer.getSeniorInfo = function() {
        return developer.info + ' умеет ' + this.skills.join(', ')
    }
    return developer
}

const junior1 = junior(new Developer('Степан', 'Иванов'))
const middle1 = middle(new Developer('Степан', 'Иванов'))
const senior1 = senior(new Developer('Степан', 'Иванов'))

console.log(junior1.getJuniorInfo())
console.log(middle1.getMiddleInfo())
console.log(senior1.getSeniorInfo())