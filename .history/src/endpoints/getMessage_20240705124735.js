import MessageObject from '../MessageObject.js'

import * as notification from '../notifyClients.js';

export default function getMessage(express, url, messageBuffer) {
    express.get(url, (req, res) => {
        const slicedArray = messageBuffer.slice(req.params.messageId, messageBuffer.length);

        const jsonArray = slicedArray.map(instance => instance.toJson());

        if (jsonArray.length) {
            res.status(200).send(jsonArray);
        }
        else {
            //Otherwise we hold...
            const client = { req, res, messageId };
            notification.clients.push(client);

            req.on('close', () => {
                notification.clients = notification.clients.filter(c => c !== client);
            });
        }
    });
}

