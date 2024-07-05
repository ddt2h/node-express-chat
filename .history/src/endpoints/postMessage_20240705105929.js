export const postMessage = (express, url, messageBuffer) => {
    express.post(url, (req, res) => {
        pushBufferCallback(req.body);
        res.status(201).send('Item created');
    });
}