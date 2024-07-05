import MessageObject from '../MessageObject.js'

export default function getMessage(express, url, messageBuffer) {
    express.get(url, (req, res) => {
        if (messageBuffer.length > req.params.messageId){
            
            let jsonVec = [...messageBuffer.toJson()];
            res.status(200).send(jsonVec);
        }
        else{
            //Hold connection
        }
    });
}