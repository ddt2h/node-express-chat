import MessageObject from '../MessageObject.js'

export default function getMessage(express, url, messageBuffer, pendingRequests) {
    express.get(url, (req, res) => {
        express.get(url, (req, res) => {
            const messageId = parseInt(req.params.messageId, 10);
            const slicedArray = messageBuffer.slice(messageId);
    
            const jsonArray = slicedArray.map(instance => instance.toJson());
    
            if (jsonArray.length) {
                res.status(200).send(jsonArray);
            } else {
                // Store the pending request
                pendingRequests.push({ req, res });
            }
        });
    });
}

