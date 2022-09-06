import { advice, adviceNumber } from '../variables.js'
import { adviceApiConnect } from './advice-api-connect.js'

async function generateAdvice(){
    const advices = await adviceApiConnect()
    advice.innerHTML = `<p id="advice" class="advice">
                            ${advices.slip.advice}
                        </p>`
    adviceNumber.innerHTML = `  <h4 id="advice-number" class="advice-number">
                                    Advice #${advices.slip.id}
                                </h4>`
}

export { generateAdvice }