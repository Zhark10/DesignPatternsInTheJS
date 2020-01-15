class DataBase {
    constructor(definitionData) {
        // here breaked a new instance (after first)
        const isInstanceExist = DataBase.initialized
        if (isInstanceExist) return DataBase.instance

        DataBase.initialized = true
        DataBase.instance = this
        this.data = definitionData
    }

    getData() {
        return this.data
    }
}

// created new instance
const postgres = new DataBase('PostgreSQL')
console.log(postgres.getData())

const mongo = new DataBase('MongoDB')
// it's still a PostgreSQL connection
console.log(mongo.getData())

const mysql = new DataBase('MySQL')
// and below too...
console.log(mysql.getData())