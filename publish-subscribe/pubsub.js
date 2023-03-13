class PubSub {
    constructor() {
        this.events = {};
    }

    subscribe(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }

    unsubscribe(event, callback) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter((cb) => cb !== callback);
        }
    }

    publish(event, data) {
        if (this.events[event]) {
            this.events[event].forEach((cb) => cb(data));
        }
    }
}

const pubsub = new PubSub();

const subscriber1 = (data) => console.log(`Subscriber 1 received data: ${data}`);
const subscriber2 = (data) => console.log(`Subscriber 2 received data: ${data}`);
const subscriber3 = (data) => console.log(`Subscriber 3 received data: ${data}`);

pubsub.subscribe("dataUpdated", subscriber1);
pubsub.subscribe("dataUpdated", subscriber2);
pubsub.subscribe("dataDeleted", subscriber3);

pubsub.publish("dataUpdated", "Data updated!"); // Output: "Subscriber 1 received data: Data updated!", "Subscriber 2 received data: Data updated!"
pubsub.publish("dataDeleted", "Data deleted!"); // Output: "Subscriber 3 received data: Data deleted!"

pubsub.unsubscribe("dataUpdated", subscriber2);

pubsub.publish("dataUpdated", "Data updated again!"); // Output: "Subscriber 1 received data: Data updated again!"
