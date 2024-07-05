export class MessageObject {
    #author;
    #message;
    #data;

    constructor(author, message, data){
        this.#author = author;
        this.#message = message;
        this.#data = data;
    }
}