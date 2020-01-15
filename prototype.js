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
    name: { value: 'Vadim Veselov' },
    programmingLanguage: { value: 'Clojure' },
})

console.log(theBestMember.registration())