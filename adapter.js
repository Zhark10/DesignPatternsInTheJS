class BadSupportService {
    help(message, type = 'hardly') {
        if (message.length > 10 || type === 'hardly') {
            console.log('I can`t help you!')
        } else {
            console.log('I try to help you')
        }
    }
}

class GoodSupportService {
    helpByHardQuestion(message) {
        const answer = 'I will help you'
        console.log(`Question: ${message}. Answer: ${answer}`)
    }

    helpBySimpleQuestion(message) {
        const answer = 'You may think that I have already helped you'
        console.log(`Question: ${message}. Answer: ${answer}`)
    }
}

class AdapterForNewSupport {
    constructor() {
        this.initialized = new GoodSupportService()
    }

    help(message, type = 'hardly') {
        if (message.length > 10 || type === 'hardly') {
            this.initialized.helpByHardQuestion(message)
        } else {
            this.initialized.helpBySimpleQuestion(message)
        }
    }
}

const badSupport = new BadSupportService();
console.log(badSupport.help('please, help me!', 'simple'))

const goodSupport = new GoodSupportService();
console.log(goodSupport.helpByHardQuestion('please, help me!'))
console.log(goodSupport.helpBySimpleQuestion('please, help me!'))

const adaptedSupport = new AdapterForNewSupport();
console.log(adaptedSupport.help('please, help me!', 'simple'))