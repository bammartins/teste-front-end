import FormValidate from "../../src/scripts/utils/FormValidate.js";
const assert = require('assert');
const formValidate = new FormValidate();

describe('Email', () => {
    it('Deve retornar true ao receber uma entrada de email valido', () =>{
        assert.equal(formValidate.validateEmail('am.bruno@live.com'), true);
        assert.equal(formValidate.validateEmail('am.bruno@live.com.br'), true);
        assert.equal(formValidate.validateEmail('am.brun0@live.com.br'), true);
    })
    it('Deve retornar false ao receber uma entrada email invalido', () => {
        assert.equal(formValidate.validateEmail('am.bruno.com'), false);
        assert.equal(formValidate.validateEmail('am.bruno.com.br'), false);
        assert.equal(formValidate.validateEmail('am.brun0.com.br'), false);
    })
    it('Deve retornar false caso nao receba uma entrada de email', () => {
        assert.equal(formValidate.validateEmail(''), false);
    })

})