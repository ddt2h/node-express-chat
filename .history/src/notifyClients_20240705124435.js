let clients = [];

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