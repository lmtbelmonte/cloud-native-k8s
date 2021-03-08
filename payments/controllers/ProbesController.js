// Luis Merino Troncoso
// Controlador para las sondas tanto la de Liveness como la de readyness

class ProbesController {

    async handleLiveness(req, res) {
          res.send ({"ok": true})   // TODO: Implementation of liveness probe API       
    }

    async handleReadiness(req, res) {
         res.send ({"ok": true})  // TODO: Implementation of readiness probe API        
    }
}

module.exports = (repositories) => {

    var controller = new ProbesController()
    var express = require('express')
    var router = express.Router()

    router.get('/liveness', function (req, res) { // TODO: Add API route for liveness
        controller.handleLiveness(req, res)
    })

    router.get('/readiness', function (req, res) { // TODO: Add API route for readiness
        controller.handleReadiness(req, res)
    })

    return router
}