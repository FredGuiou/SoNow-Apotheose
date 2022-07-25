require('dotenv').config();
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.ACCES_SECRET_KEY;

const authTokenMiddleware = (req, res, next) => {

    let accesToken = req.headers['x-access-token'] || req.headers['authorization'];
    if (!!accesToken && accesToken.startsWith('Bearer ')) {
        accesToken = accesToken.slice(7, accesToken.length);
    }

    if (accesToken) {
        jwt.verify(accesToken, SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(401).json('token_not_valid');
            } else {
                req.decoded = decoded;

                const expiresIn = 24 * 60 * 60;
                const newToken  = jwt.sign({
                    user : decoded.user
                },
                SECRET_KEY,
                {
                    expiresIn: expiresIn
                });

                res.header('Authorization', 'Bearer ' + newToken);
                next();
            }
        });
    } else {
        return res.status(401).json('token_required');
    }
};

module.exports = authTokenMiddleware;