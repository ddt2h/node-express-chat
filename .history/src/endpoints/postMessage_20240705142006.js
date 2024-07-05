import MessageObject from '../MessageObject.js'

export default function postMessage(express, url, messageBuffer, pendingRequests) {
    express.post(url, (req, res) => {
        messageBuffer.push(new MessageObject(req.body));

        // Notify pending requests
        while (pendingRequests.length > 0) {
            const pendingRequest = pendingRequests.shift();
            const jsonArray = [newMessage.toJson()];
            pendingRequest.res.status(200).send(jsonArray);
        }

        res.status(201).send('Created');
    });
}