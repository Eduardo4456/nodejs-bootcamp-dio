async function getBaseName(senderName : string) {
    let base = await getHearderText()

    return base
}

async function getHearderText(): Promise<string> {
    return "EMAIL PARA VOCÊ"
}

export { getBaseName }