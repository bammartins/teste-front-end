import FormValidate from "../../src/scripts/utils/FormValidate.js";
const assert = require('assert');
const formValidate = new FormValidate();

describe('Name', () => {
    it('Deve retornar true se a quantidade de caracteres for maior que 3', () => {
        assert.equal(formValidate.validateName('Bruno Martins'), true);
        assert.equal(formValidate.validateName('Bruno'), true);
        assert.equal(formValidate.validateName('Bru'), true);
        assert.equal(formValidate.validateName('B A M') ,true);
    });

    it('Deve retornar false se a quantidade de caracteres for menor que 3', () => {
        assert.equal(formValidate.validateName('B'), false);
        assert.equal(formValidate.validateName('BR'), false);
        assert.equal(formValidate.validateName(''), false);
    });


})