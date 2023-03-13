import { sendMessage, getState } from "./actor.js"

function process() {
    setInterval(() => {
        sendMessage("increment")
    }, 1000)

    setInterval(() => {
        console.log(getState())
    }, 2000)
}

export default process