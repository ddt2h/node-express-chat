import MessageObject from '../MessageObject.js'

export default function postMessage(express, url, messageBuffer) {
    express.get(url, (req, res) => {
        messageBuffer.push(new MessageObject(req.body));

        res.status(201).send('Created');
    });
}