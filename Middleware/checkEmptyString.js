


module.exports = (req, res, next) => {

    if(Object.keys(req.body).length === 0) {
        next()
    } 
    else {

        const info = Object.entries(req.body)
        
        for (let [prop, value] of info) {
            if (!value.trim()) {
                return res.status(400).json({message: `Empty Property: ${prop}`})
            } else {
                return next()
            }
        }

    }

};