module.exports = (app, repositories, logger) => {
    const loadPaymentsController = require('./PaymentsController')
    app.use("/api/payment-methods", loadPaymentsController(repositories, logger))

    const loadProbesController = require('./ProbesController')
    app.use("/probes", loadProbesController())
}

