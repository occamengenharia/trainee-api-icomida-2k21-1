module.exports = (err, req, res, next) => {
    console.error(err.stack);
    body.message = 'Server error';
    res.json(body);
    return;
};