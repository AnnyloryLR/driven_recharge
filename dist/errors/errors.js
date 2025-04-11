"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conflictError = conflictError;
exports.conflictError2 = conflictError2;
exports.notFound = notFound;
exports.UnprocessableEntity = UnprocessableEntity;
exports.badRequest = badRequest;
function conflictError(entity) {
    return {
        type: "conflict",
        message: "".concat(entity, " j\u00E1 existe!")
    };
}
function conflictError2() {
    return {
        type: "conflict2",
        message: "s\u00E3o permitidos no m\u00E1ximo 3 telefones por CPF!"
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
        message: "não é possível processar essa tipo de dado!"
    };
}
function badRequest() {
    return {
        type: "badRequest",
        message: "esta operação não pode ser realizada!"
    };
}
