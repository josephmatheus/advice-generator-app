import { generateAdvice } from './services/generate-advice.js'
import { drawButton } from './variables.js'

drawButton.addEventListener('click', () => {
    generateAdvice()
})

generateAdvice()