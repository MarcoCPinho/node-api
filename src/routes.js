const express = require('require');
const routes = express.Router();

// Rotas
router.get("/", (req, res) => {
    // Product.create({
    //     title: 'React Native',
    //     description: 'Build native apps with React',
    //     url: 'http://github.com/facebook/react-native'
    // });
    
    return res.send('Hello World!');
});

module.exports = routes;