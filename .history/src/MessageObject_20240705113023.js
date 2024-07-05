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

    }
}