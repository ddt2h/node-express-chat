export default function getOnline(express, url, pendingRequests) {
    express.get(url, (req, res) => {
        if (pendingRequests.length) {
            const authorsJson = JSON.stringify({ authors: pendingRequests.map(item => item.author) });
            res.status(200).send(authorsJson);
        } else {
            pendingRequests.push({ req, res });
        }
    });
}

