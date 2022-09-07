import { advice, adviceNumber } from '../variables.js'
import { adviceApiConnect } from './advice-api-connect.js'

async function generateAdvice(){
    const advices = await adviceApiConnect()
    advice.innerHTML = `${advices.slip.advice}`
    adviceNumber.innerHTML = `Advice #${advices.slip.id}`
}

export { generateAdvice }