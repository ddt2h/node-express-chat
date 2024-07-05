export const postMessage = (express, url) => {
    expressApp.post(url, (req, res) => {
        console.log(req.body);
          storage.push(req.body);
          res.status(201).send('Item created');
        });
}