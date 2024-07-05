export const postMessage = (express, url, pushBufferCallback) => {
    express.post(url, (req, res) => {
        messageBuffer.push(req.body);
        res.status(201).send('Item created');
    });
}