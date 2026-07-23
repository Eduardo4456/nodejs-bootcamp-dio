const databaseType = {
    userTyper: "admin",
    typedata: "datalocal"
}

async function connectToDatabase(dataName) {
    //lógica do banco
    console.log("conectado ao banco " + dataName)
}

async function disconectDatabase(dataName) {
    console.log("desconectando do banco de dados " + dataName)
}

export {
    connectToDatabase,
    disconectDatabase,
    databaseType
}