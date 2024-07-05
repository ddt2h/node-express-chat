import MessageObject from '../MessageObject.js'

export default function getMessage(express, url, messageBuffer) {
    express.get(url, (req, res) => {
        if (messageBuffer.length > req.params.messageId){
            
            const jsonArray = messageBuffer.map(instance => instance.toJson());
            res.status(200).send(jsonArray);
        }
        else{
            //Hold connection
        }
    });
}