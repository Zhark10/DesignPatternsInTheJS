// 1. Earlier

function OldHouse(numberOfFloors, numberOfEntrances) {
    this.numberOfFloors = numberOfFloors
    this.numberOfEntrances = numberOfEntrances
}

OldHouse.prototype.buildAHouse = function () {
    return `House is built. Floors: ${this.numberOfFloors}. Entrances: ${this.numberOfEntrances}`
}

const house_1 = new OldHouse(12, 5);
console.log(house_1.buildAHouse())


// 2. Our time

class NewHouse {
    constructor(numberOfFloors, numberOfEntrances) {
        this.numberOfEntrances = numberOfEntrances
        this.numberOfFloors = numberOfFloors
    }

    buildAHouse = () => {
        return `House is built. Floors: ${this.numberOfFloors}. Entrances: ${this.numberOfEntrances}`
    }
}

const house_2 = new NewHouse(24, 10);
console.log(house_2.buildAHouse())