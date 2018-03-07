import FormValidate from "../../src/scripts/utils/FormValidate.js";
const assert = require('assert');
const formValidate = new FormValidate();

describe('Phone tests', () =>{
    it('Deve retornar true se o pattern de telefone for atendido', () => {        
        assert.equal(formValidate.validatePhone('(11) 96837-2707'), true);
        assert.equal(formValidate.validatePhone('(11) 4451-0485'), true);
    })

    it('Deve retornar false se o pattern de telefone NAO for atendido', () => {
        assert.equal(formValidate.validatePhone('(11) 44510485'), false);
        assert.equal(formValidate.validatePhone('(11) 968372707'), false);
        assert.equal(formValidate.validatePhone('(11)968372707'), false);
        assert.equal(formValidate.validatePhone('()'), false);
    })
    
    it('Deve retornar false caso nao receba uma entrada para telefone', () => {
        assert.equal(formValidate.validatePhone('()'), false);
    })
    
    it('Deve retornar false se a entrada para telefone for Letras ou Caracteres especiais', () => {
        assert.equal(formValidate.validatePhone('(##) ####-####'), false);
        assert.equal(formValidate.validatePhone('(XX) XXXXX-XXXX'), false);
    })

    
})