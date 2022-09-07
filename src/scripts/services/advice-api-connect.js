async function adviceApiConnect(){
    const url = 'https://api.adviceslip.com/advice'
    const response = await fetch(url, {cache: "no-store"})
    return await response.json()
}

export { adviceApiConnect }