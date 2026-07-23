
async function connectToDatabase(user, password) {
    if (user === process.env.USERDATABASE && process.env.PASSWORD === "1h34") {
        console.log("conexão com banco de dados estabelecida")
    }
    else {
        console.log("falha de login, não foi possível se conectar ao banco de dados")
    }
}

export default connectToDatabase