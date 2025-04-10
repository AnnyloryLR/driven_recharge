"use strict";
exports.__esModule = true;
exports.badRequest = exports.UnprocessableEntity = exports.notFound = exports.conflictError2 = exports.conflictError = void 0;
function conflictError(entity) {
    return {
        type: "conflict",
        message: "".concat(entity, " j\u00E1 existe!")
    };
}
exports.conflictError = conflictError;
function conflictError2() {
    return {
        type: "conflict2",
        message: "s\u00E3o permitidos no m\u00E1ximo 3 telefones por CPF!"
    };
}
exports.conflictError2 = conflictError2;
function notFound(entity) {
    return {
        type: "notFound",
        message: "".concat(entity, " n\u00E3o existe!")
    };
}
exports.notFound = notFound;
function UnprocessableEntity() {
    return {
        type: "UnprocessableEntity",
        message: "não é possível processar essa tipo de dado!"
    };
}
exports.UnprocessableEntity = UnprocessableEntity;
function badRequest() {
    return {
        type: "badRequest",
        message: "esta operação não pode ser realizada!"
    };
}
exports.badRequest = badRequest;
