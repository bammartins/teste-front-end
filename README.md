![Easynvest](https://camo.githubusercontent.com/c4ee611d69893fec43b903eb88a444530eaf8e7f/68747470733a2f2f7777772e656173796e766573742e636f6d2e62722f66617669636f6e2e69636f)

# Teste de Front-end Easynvest
Este teste é apresentado aos candidatos as vagas de desenvolvimento Front-end para avaliar os quesitos técnicos.

### O Desafio

Seu objetivo é criar um simples app que deve conter duas páginas, uma que exibe um formulário com os campos abaixo, e outra que liste os dados cadastrados.

* Nome completo
* CPF
* Telefone
* Email

### Pré-requisitos: 
 - Deve ser possível criar, listar e excluir os dados cadastrados pelo formulário;
 - Os inputs de texto e botão devem ter a aparência conforme o guia de estilo abaixo (com validações);
 - Fazer a persistência dos dados no `localStorage` ou `IndexedDB`;
 - Não é permitido a utilização de nenhum framework, recomandado uso de ECMAScript 6+;

Para ter o estado inicial da lista de usuário utilizar este recurso abaixo:

> GET https://private-21e8de-rafaellucio.apiary-mock.com/users

Response:

```json

[
  {
    "name": "My name 1",
    "cpf": "04080757247",
    "phone": "11987654321",
    "email": "myemail1@test.com.br"
  },
  {
    "name": "My name 2",
    "cpf": "77797584192",
    "phone": "11987654321",
    "email": "myemail2@test.com.br"
  },
  {
    "name": "My name 3",
    "cpf": "45486737688",
    "phone": "11987654321",
    "email": "myemail3@test.com.br"
  }
]
```

A partir deste ponto utilizar o `localStorage/IndexedDB` para persistir localmente as informações.

Save:

```json
{
  "name": "My name 4",
  "cpf": "74668869066",
  "phone": "11987654321",
  "email": "myemail4@test.com.br"
}
```

Lista local:
```json
[
  {
    "name": "My name 1",
    "cpf": "04080757247",
    "phone": "11987654321",
    "email": "myemail1@test.com.br"
  },
  {
    "name": "My name 2",
    "cpf": "77797584192",
    "phone": "11987654321",
    "email": "myemail2@test.com.br"
  },
  {
    "name": "My name 4",
    "cpf": "74668869066",
    "phone": "11987654321",
    "email": "myemail4@test.com.br"
  }
]
```

### Plus:
 - A página ser responsiva;
 - Permitir edição;
 - Uso de pré-processador css;
 - Testes End to End;

### O que esperamos:
 - Testes, no mínimo testes unitários;
 - Padrão de Projeto e boas práticas de Orientação a Objetos;
 - Utilizar ECMAScript 6+;
 - Criar um passo a passo de como rodar sua aplicação [(Sugestão)](https://github.com/wearehive/project-guidelines/blob/master/README.sample.md);
 - Criar uma breve descrição da solução utilizada.


## Guia de estilo

### Input:
 - Cor da fonte sem foco: <span style="color:#efeeed">*#efeeed*</span>.
 - Cor da fonte com foco: <span style="color:#333333">*#333333*</span>.
 - Cor da borda: <span style="color:#EFEEED">*#EFEEED*</span>.

### Botão Inativo:
 - Cor da fonte sem foco: <span style="color:#dddcdc">*#DDDCDC*</span>.
 - Cor de background: <span style="color:#f6f6f6">*#F6F6F6*</span>.

![defualt](./images/default.png)

### Input Inválido:
 - Cor da fonte: <span style="color:#EB4A46">*#EB4A46*</span>.
 - Cor da borda: <span style="color:#EB4A46">*#EB4A46*</span>.

![errors](./images/errors.png)

### Botão Ativo:
 - Cor da fonte com foco: <span style="color:#ffffff">*#FFFFFF*</span>.
 - Cor de background: <span style="color:#00c8b3">*#00C8B3*</span>.
 - Opacidade do botão com hover: 70%.

![success](./images/success.png)

**Criar animação de loading ao clicar no submit*
