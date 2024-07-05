export default function getPage(express, __dirname) {
    express.get(url, (req, res) => {
        app.get('/', (req, res) => {
            res.sendFile(path.join(__dirname, '../front', 'index.html'));
        });
    });
}

