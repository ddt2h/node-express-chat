import MessageObject from '../MessageObject.js'

export default function getMessage(express, url, messageBuffer) {
    express.get(url, (req, res) => {
        const slicedArray = messageBuffer.slice(req.params.messageId, messageBuffer.length);

        const jsonArray = slicedArray.map(instance => instance.toJson());
        res.status(200).send(jsonArray);
    });
}