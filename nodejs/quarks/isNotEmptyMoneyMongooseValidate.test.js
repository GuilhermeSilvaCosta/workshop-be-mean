'use strict';

const valueTRUE = 1;
const valueFALSE = 'a';

const Quark = require('./isNotEmptyMoneyMongooseValidate');

const validateTRUE = Quark.validator(valueTRUE);
const validateFALSE = Quark.validator(valueFALSE);

console.log(valueTRUE+' is NotEmptyMoney?', validateTRUE);
console.log(valueFALSE+' is NotEmptyMoney?', validateFALSE);