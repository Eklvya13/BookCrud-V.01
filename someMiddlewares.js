const logger = (req, res, next) => {
    const curLog = {
        'date': new Date(),
        'url': req.url,
        'method': req.method,
        'data': 'dummy'
    };
    console.log(curLog);
    next();
}


module.exports = { logger }