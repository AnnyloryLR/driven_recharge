"use strict";
exports.__esModule = true;
function errorHandler(error, req, res, next) {
    console.log(error);
    if (error.type === "conflict") {
        res.status(409).send(error.message);
        return;
    }
    if (error.type === "conflict2") {
        res.status(409).send(error.message);
        return;
    }
    if (error.type === "notFound") {
        res.status(404).send(error.message);
        return;
    }
    if (error.type === "UnprocessableEntity") {
        res.status(422).send(error.message);
        return;
    }
    if (error.type === "badRequest") {
        res.status(400).send(error.message);
        return;
    }
    res.status(500).send(error.message);
}
exports["default"] = errorHandler;
