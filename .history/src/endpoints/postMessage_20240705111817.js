import MessageObject from '../MessageObject.js'

export default function postMessage(express, url, messageBuffer) {
    express.post(url, (req, res) => {
        console.log(req.body);
        messageBuffer.push(new MessageObject(req.body));
        res.status(201).send(req.body);
    });
}