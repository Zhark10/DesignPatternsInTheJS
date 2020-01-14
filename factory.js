class SimpleSubscription {
    constructor(name, age) {
        this.name = name
        this.age = age
        this.cost = 400
    }
}

class PremiumSubscription {
    constructor(name, age) {
        this.name = name
        this.age = age
        this.cost = 1400
    }
}

class SubscriptionFactory {
    static list = {
        simple: SimpleSubscription,
        premium: PremiumSubscription
    }

    privilege = (age, cost) => {
        const value = 300;
        if (age > 60) {
            return {
                cost: cost - value,
                description: `Подписка оформлена со льготой по возрасту ${value} рублей`
            }
        }
        return {
            cost,
            description: 'Льготы отсутствуют'
        }
    }

    create = (name, age, type) => {
        const Subscription = SubscriptionFactory.list[type]
        const subscription = new Subscription(name, age);
        const { cost, description } = this.privilege(age, subscription.cost);
        subscription.cost = cost;
        subscription.description = description;
        subscription.type = type;
        return subscription;
    }
}

const factory = new SubscriptionFactory();

const subscriptions = [
    factory.create('Alexey', 45, 'premium'),
    factory.create('Victor', 53, 'premium'),
    factory.create('Ivan', 52, 'simple'),
    factory.create('Vasily', 62, 'premium'),
    factory.create('Elena', 61, 'simple')
]

console.log(subscriptions)