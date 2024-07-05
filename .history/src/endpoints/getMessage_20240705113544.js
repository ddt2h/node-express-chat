import MessageObject from '../MessageObject.js'

export default function getMessage(express, url, messageBuffer) {
    express.get(url, (req, res) => {
        console.log(messageBuffer.length, req.params.messageId);
        if (messageBuffer.length < req.params.messageId){
            
            let jsonVec;
            for (let i = req.params.messageId; i < messageBuffer.length - req.params.messageId; i++){
                jsonVec.push(messageBuffer[i].toJson());
            }
            res.status(200).send(jsonVec);
        }
        res.status(401).send('bad');
    });
}