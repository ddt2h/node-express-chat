import path from 'path';

export default function getPage(express, __dirname) {
    express.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../front', 'index.html'));
    });
}

