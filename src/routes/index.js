const { Router } = require('express');
const router = Router();


/*
app.get('/json', (req, res) => {
    res.json({"title": "Hii"});
});
*/
router.get('/', (req, res) => {
    res.send('Hello world');
});

router.get('/test', (req, res) => {
    const data = {
        "name": "Fazt",
        "website": "faztweb.com"
    };
    res.json(data);
});


module.exports = router;