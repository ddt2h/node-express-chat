import MessageObject from '../MessageObject.js'

export default function getMessage(express, url, messageBuffer) {
    express.get(url, (req, res) => {
        if (messageBuffer.length < req.params.messageId){

        }
        res.status(201).send('Created');
    });
}