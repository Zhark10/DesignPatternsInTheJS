'Conference'

const cardForPartyMaker = {
    residencePlace: 'Stereo hostel',
    conferencePlace: 'Korston Tower',
    city: 'Kazan',

    registration() {
        const {
            city,
            conferencePlace,
            residencePlace,
            name,
            programmingLanguage
        } = this;
        return ({
            residencePlace,
            conferencePlace,
            city,
            name,
            favourite: `I like ${programmingLanguage}`
        })
    }
}

const theBestMember = Object.create(cardForPartyMaker, {
    name: {
        value: "Veselov Vadim",
    },
    programmingLanguage: { value: 'Clojure' },
})

const progressToSenior = Object.create(theBestMember, {
    middleToSenior: {
        value: true
    }
})

theBestMember.value = 'lol'

console.log(theBestMember.registration())
console.log(progressToSenior.registration())