export class MessageObject {
    #author;
    #message;
    #data;

    constructor(author, message, data){
        this.#author = author;
        this.#message = message;
        this.#data = data;
    }

    constructor(body){
        this.#author = body.author;
        this.#message = body.message;
        this.#data = body.data;
    }
}