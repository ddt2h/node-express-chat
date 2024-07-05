import MessageObject from '../MessageObject.js'

export const postMessage = (express, url, messageBuffer) => {
    express.post(url, (req, res) => {
        messageBuffer.push(MessageObject(req.body));
        res.status(201).send(req.body);
    });
}