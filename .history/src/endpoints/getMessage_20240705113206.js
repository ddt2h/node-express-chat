import MessageObject from '../MessageObject.js'

export default function getMessage(express, url, messageBuffer) {
    express.get(url, (req, res) => {
        if (messageBuffer.length < req.params.messageId){

            let jsonVec;
            for (let i = 0; i < messageBuffer.length; i++){

            }
            res.status(200).send();
        }
        res.status(201).send('Created');
    });
}