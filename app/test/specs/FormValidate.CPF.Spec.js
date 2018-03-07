import FormValidate from "../../src/scripts/utils/FormValidate.js";
const assert = require('assert');
const formValidate = new FormValidate();

describe('CPF (com e sem mask)', () => {
    it('Deve retornar true se o valor corresponder a um cpf valido', () => {
        assert.equal(formValidate.validateCpf('114.105.176-16'), true)
        assert.equal(formValidate.validateCpf('11410517616'), true)
    });

    it('Deve retornar false se o valor NAO corresponde a um cpf valido', () => {
        assert.equal(formValidate.validateCpf('11410517633'), false);
        assert.equal(formValidate.validateCpf('114.105.176-33'), false);
        assert.equal(formValidate.validateCpf('114.XXX.176-33'), false);
    });

    it('Deve retornar false se o valor da entrada para cpf for letras', () => {;
        assert.equal(formValidate.validateCpf('xxx.xxx.xxx-xx'), false);
        assert.equal(formValidate.validateCpf('xxxxxxxxxxx'), false);
    });

    it('Deve retornar false se NAO receber uma entrada para cpf', () => {
        assert.equal(formValidate.validateCpf(''), false);
    });
});