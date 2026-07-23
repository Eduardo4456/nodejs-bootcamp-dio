import {connectToDatabase, disconectDatabase, databaseType} from './utils/database.js'

import {getDataFromApi} from './utils/api.js'

getDataFromApi()

connectToDatabase("my-database")
disconectDatabase("my-database")

console.log(databaseType)