import MessageObject from '../MessageObject.js'

export default function postMessage(express, url, messageBuffer, pendingRequests, db) {
    express.post(url, (req, res) => {
        const newMessage = new MessageObject(req.body);
        messageBuffer.push(newMessage);

        db.set(`message:${messageBuffer.length}`, JSON.stringify(message), (err, reply) => {
            if (err) {
              console.error(err);
              return;
            }
            console.log('Message saved:', reply);
          });

        while (pendingRequests.length > 0) {
            const pendingRequest = pendingRequests.shift();
            const jsonArray = [newMessage.toJson()];
            pendingRequest.res.status(200).send(jsonArray);
        }

        res.status(201).send('Created');
    });
}