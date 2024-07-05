import MessageObject from '../MessageObject.js'

let clients = [];

export default function getMessage(express, url, messageBuffer) {
    express.get(url, (req, res) => {
        const slicedArray = messageBuffer.slice(req.params.messageId, messageBuffer.length);

        const jsonArray = slicedArray.map(instance => instance.toJson());

        if (jsonArray.length) {
            res.status(200).send(jsonArray);
        }
        else {
            //Otherwise we hold...
            setTimeout(() => {
                res.status(204).send(jsonArray);
            }, 5000);
        }
    });
}

export default function notifyClients(messageBuffer) {
    clients.forEach(client => {
        const { req, res, messageId } = client;
        const slicedArray = messageBuffer.slice(messageId, messageBuffer.length);
        const jsonArray = slicedArray.map(instance => instance.toJson());

        if (jsonArray.length) {
            res.status(200).send(jsonArray);
            clients = clients.filter(c => c !== client);
        }
    });
}