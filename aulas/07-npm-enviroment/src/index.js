import connectToDatabase from "./database/data.js"

async function main() {
    await connectToDatabase("user1", "1h34")
}

main()