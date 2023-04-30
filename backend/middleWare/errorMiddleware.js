const errorHandler = (err,req,res,next) => {

    //status of the error
    const statusCode = res.statusCode? res.
    statusCode: 500
    res.status(statusCode)
    
    //error message
    res.json({
        message: err.message,
        //show stack only in development pace
        stack: process.env.NODE_ENV === "development" ? err.stack : null

    })

};

module.exports = errorHandler;