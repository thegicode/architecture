
let state = 0

function setState(newState) {
    state = newState
}

function getState() {
    return state
}

function sendMessage(message) {
    if (message === "increment") {
        setState(getState() + 1)
    } else if (message === "decrement") {
        setState(getState() - 1)
    }
}

export {
    sendMessage,
    getState
}

