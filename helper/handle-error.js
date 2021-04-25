const wrap = (fn) => async (req, res, next) => {
    try {
        const result = await fn(req, res, next)
        return result
    } catch (e) {
        if (e.name === 'ValidationError') {
            e.stattus = 400
        }
next(e)
    }
}

module.exports = wrap