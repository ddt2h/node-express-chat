export const postMessage = (express, url) => {
    expressApp.post(url, (req, res) => {

        storage.push(req.body);
        res.status(201).send('Item created');
    });
}