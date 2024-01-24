const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    try{
        let token = req.header('x-token');
        if(!token){
            return res.status(400).send('Token Not found');
        }
        let decode = jwt.verify(token,'jwtSecret');
        req.user = decode.user
        next();
    }
    catch(err){
        console.log(err);
        return res.status(500).send('Invalid token')
    }
}