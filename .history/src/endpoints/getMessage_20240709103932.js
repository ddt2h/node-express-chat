export default function getMessage(express, url, messageBuffer, pendingRequests) {
    express.get(url, (req, res) => {
        const slicedArray = messageBuffer.slice(req.params.messageId);

        const jsonArray = slicedArray.map(instance => instance.toJson());

        if (jsonArray.length) {
            res.status(200).send(jsonArray);
        } else {
            pendingRequests.push({ req, res }, req.body.author);
        }
    });
}

