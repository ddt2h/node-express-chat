export const postMessage = (express, url) => {
    express.post(url, (req, res) => {
        storage.push(req.body);
        res.status(201).send('Item created');
    });
}