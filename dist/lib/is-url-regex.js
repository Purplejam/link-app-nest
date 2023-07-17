"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlRegexValidator = void 0;
const urlRegexValidator = (url) => {
    //eslint-disable-next-line
    const urlPattern = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/i;
    return urlPattern.test(url);
};
exports.urlRegexValidator = urlRegexValidator;
