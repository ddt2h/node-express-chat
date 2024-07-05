export const postMessage = (express, url, pushBufferCallback) => {
    express.post(url, (req, res) => {
        pushBufferCallback(req.body);
        res.status(201).send('Item created');
    });
}