"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conflictError = conflictError;
exports.notFound = notFound;
exports.UnprocessableEntity = UnprocessableEntity;
exports.badRequest = badRequest;
function conflictError(entity) {
    return {
        type: "conflict",
        message: "".concat(entity, " j\u00E1 est\u00E1 cadastrado!")
    };
}
function notFound(entity) {
    return {
        type: "notFound",
        message: "".concat(entity, " n\u00E3o existe!")
    };
}
function UnprocessableEntity() {
    return {
        type: "UnprocessableEntity",
        message: "não é possível processar!"
    };
}
function badRequest() {
    return {
        type: "badRequest",
        message: "esta operação não pode ser realizada sem a data de devolução!"
    };
}
