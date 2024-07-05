export default class MessageObject {
    #author;
    #message;
    #data;

    constructor(body) {
        this.#author = body.author;
        this.#message = body.message;
        this.#data = body.data;
    }

    toJson() {
        return JSON.stringify({author: this.#author, message: this.#message, data: this.#data});
    }
}