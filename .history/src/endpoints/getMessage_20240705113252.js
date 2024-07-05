import MessageObject from '../MessageObject.js'

export default function getMessage(express, url, messageBuffer) {
    express.get(url, (req, res) => {
        if (messageBuffer.length < req.params.messageId){

            let jsonVec;
            for (let i = req.params.messageId; i < messageBuffer.length - req.params.messageId; i++){
                jsonVec.push(messageBuffer[i].toJson());
            }
            res.status(200).send();
        }
        res.status(201).send('Created');
    });
}