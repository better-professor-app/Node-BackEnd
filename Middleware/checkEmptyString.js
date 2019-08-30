


module.exports = (req, res, next) => {

    // if()

    const info = Object.entries(req.body)

    for (const [prop, value] of info) {
        if (!value.trim()) {
            return res.status(400).json({message: `Empty Property: ${prop}`})
        } else {
            return next()
        }
    }

};