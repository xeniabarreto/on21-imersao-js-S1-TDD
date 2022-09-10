<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

# Tema da Aula

Turma Online 21 - Imersão JavaScript | Semana 1 | 2022 | Professora Leticia

### Instruções
Antes de começar, vamos organizar nosso setup.
* Fork esse repositório 
* Clone o fork na sua máquina (Para isso basta abrir o seu terminal e digitar `git clone url-do-seu-repositorio-forkado`)
* Entre na pasta do seu repositório (Para isso basta abrir o seu terminal e digitar `cd nome-do-seu-repositorio-forkado`)
* [Add outras intrucoes caso necessario]

### Objetivo
Apresentar o conceito de testes, seus benefícios e dificuldades de implementação. Aprofundar conhecimento em testes unitários, custos de desenvolvimento, benefícios e implementação. Apresentar TDD e seus benefícios.

### Resumo
O que veremos na aula de hoje?
- [Tema da Aula](#tema-da-aula)
    - [Instruções](#instruções)
    - [Objetivo](#objetivo)
    - [Resumo](#resumo)

- [Conteúdo](#conteúdo)

  - [Introdução à Testes](#introdução-a-testes)
    - [O que são e para que servem ](#o-que-são-testes-e-para-que-servem)
    - [Abordagens](#abordagens)
    - [Tipos de teste](#tipos-de-teste)
    - [Sete princípios de teste de software](#sete-princípios-de-teste-de-software)
    - [Ferramentas](#ferramentas)  
  
  - [Testes Unitarios](#testes-unitarios)
    - [O que são e para que servem](#o-que-são-testes-unitários-e-para-que-servem)
    - [Beneficios](#benefícios-dos-testes-unitários)
    - [Implementação](#implementação-de-testes-unitários)

  - [TDD: Test Driven Development](#tdd-test-driven-development)
    - [O que é e para que serve](#o-que-é-tdd-e-para-que-servem)
    - [Beneficios](#benefícios-do-tdd)
    - [Implementação](#implementação-do-tdd)

  - [Exercícios](#exercícios)
  - [Material da aula](#material-da-aula)
  - [Links Úteis](#links-úteis)

# Conteúdo

## Introdução a Testes  

#### O que são testes e para que servem
[CONTEUDO]

#### Abordagens
**Teste Caixa Branca**

Também é chamado de Caixa de Vidro, Caixa Transparente, Teste Estrutural. As técnicas de teste de caixa branca como estruturas internas, como estruturas de dados usadas, ou design interno, estrutura de código e funcionamento do software.

**Teste de Caixa Preta**

Também é chamado de Teste Comportamental, Baseado em Especificações e Teste de Entrada-Saída. O teste de caixa preta é um tipo de teste de software no qual a funcionalidade do software não é conhecida, os testadores avaliam a funcionalidade do software em teste sem olhar para a estrutura interna do código.

**Teste de Caixa Cinza** 
Esse tipo de teste une os dois anteriores, por isso o termo "cinza". Avalia tanto os aspectos internos quanto os externos, de entrada e saída.

#### Tipos de teste
* Principais: (visão geral)
    * Testes Unitários: Valida se cada unidade de software funciona conforme o esperado. Uma unidade é o menor componente testável de um aplicativo;
    * Testes de Integração: Valida se as unidades do sistema funcionam juntas, integradas. Pode ocorrer delas apresentarem incompatibilidades ao funcionarem em conjunto, mesmo após terem sido aprovadas no teste de unidade;
    * Testes Ponta a Ponta (End-to-End, E2E): Valida o sistema de ponta a ponta, para garantir que o software funcione em todos os sistemas de destino pretendidos;
    * Testes de aceitação: Valida a aprovação do clientes. Os tipos de testes de aceitação são testes alfa, beta e gama;
* Outros tipos: (visão geral)
    * Teste de Regressão: Verifica se novos recursos quebram funcionalidade existentes;
    * Teste de Stress: Testa quanta tensão o sistema pode suportar antes de falhar.;
    * Teste de Performance: Testa o desempenho do software em diferentes cargas de trabalho;
    * Teste Funcional: Verifica funções, emulando cenários de negócios, com base em requisitos funcionais;
    * Teste de Caos: Testa a integridade, simulando e identificando proativamente falhas antes que elas levem a um tempo de inatividade não planejado ou uma experiência negativa do usuário.

#### Sete princípios de teste de software

**1. Teste demonstra a presença de defeitos**

"O teste fala sobre a presença de defeitos e não fala sobre a ausência de defeitos". O objetivo do teste de software é fazer com que o software falhe. O teste de software reduz a presença de defeitos, mas não pode garantir que o software esteja 100% livre de bugs.

**2. Teste exaustivo é impossível**

O processo de testar a funcionalidade do software em todas as entradas e pré-condições possíveis - válidas ou inválidas - é conhecido como teste exaustivo. O teste exaustivo é impossível porque o software nunca pode testar em todos os casos de teste, isso demandaria mais custo, tempo, esforço, etc., o que é impraticável. O que fazemos é testar apenas alguns casos de teste e assumir que o software está correto e produzirá a saída correta em todos os casos de teste.

**3. Teste antecipado**

Incorporar o teste o mais cedo possível no processo de desenvolvimento. Ele desempenha um papel crítico no ciclo de vida de desenvolvimento de software, quanto mais cedo bugs forem identificados mais barato e fácil será a correção.

**4.  Agrupamento de defeitos**

Em um projeto, um pequeno número de módulos pode conter a maioria dos bugs. O Princípio de Pareto (Regra 80-20) para teste de software afirma que 80% do defeito de software vem de 20% dos módulos

**5. Paradoxo do Pesticida**

Repetir os mesmos casos de teste, repetidamente, não encontrará novos bug. É necessário revisar os casos de teste, e adicionar ou atualizar os casos de teste para encontrar novos bugs.

**6. Teste depende do contexto**

A abordagem de teste depende do contexto do software desenvolvido. Diferentes tipos de software precisam realizar diferentes tipos de teste.

**7. A ilusão da ausência de erros**

Se um software construído é 99% livre de bugs, mas não segue o atende às expectativas e necessidades do usuário, então ele é inutilizável.

#### Ferramentas
**Jest**
[CONTEUDO]
**Cypress**
[CONTEUDO]
**Outros**
[CONTEUDO]

## Testes Unitários
   #### O que são testes unitários e para que servem
   [CONTEUDO]

   #### Benefícios dos testes unitários
   [CONTEUDO]

   #### Implementação de testes unitários
   Um bom teste unitário deve seguir o F.I.R.S.T.:

* Rápido (Fast): Projetos grandes costumam ter muitos testes, tempo é dinheiro.
* Isolado (Isolated): Um teste unitário deve ser executado isoladamente, sem comunicações com sistemas externos ou bancos de dados.
* "Repetível" (Repeatable): Sua execução deve ter resultados consistentes caso não haja nenhuma alteração.
* "Auto-verificável" (Self-validating): O teste deve ser capaz de detectar de maneira automática se passou ou falhou.
* Minucioso (Thorough): Cobrir caminho felizes, infelizes, casos raros (edge cases)

E ainda:

* Simples: Teste devem ser fáceis de implementar e ler, sem repetição do código da função testada.
* Oportuno: A escrita de um teste não deve demorar mais que a escrita do código testado.

```
// Considere que serão utilizados apenas valores numéricos
function add(a, b) {
    return a + b;
}

fuction mul(a, b) {
    return a * b;
}

function sub(a, b) {
    return a - b;
} 

function div(a, b) {
    a / b;
} 

describe("Arithmetic functions", () => {
    test('2 + 3 = 5', () => {
        expect(add(2, 3)).toBe(5);
    });

    test('3 * 4 = 12', () => {
        expect(mul(3, 4)).toBe(12);
    });

    test('5 - 6 = -1', () => {
        expect(sub(5, 6)).toBe(-1);
    });

    test('8 / 4 = 2', () => {
        expect(div(8, 4)).toBe(2);
    });
});
```

## TDD: Test Driven Development
   #### O que é TDD e para que servem
   [CONTEUDO]

   #### Benefícios do TDD
   [CONTEUDO]

   #### Implementação do TDD
   [CONTEUDO]

***
### Exercícios 
* [Exercicio para sala](/exercicios/para-sala/)
* [Exercicio para casa](/exercicios/para-casa/)

### Material da aula 
* [Material](/material)

### Links Úteis
* [What is software testing?](https://www.ibm.com/topics/software-testing)
* [TESTE DE SOFTWARE: INTRODUÇÃO, CONCEITOS BÁSICOS E TIPOS DE TESTES](https://blog.onedaytesting.com.br/teste-de-software/)
* [What Is Software Testing | Everything You Should Know](https://www.softwaretestingmaterial.com/software-testing/)
* [Os sete Princípios do Teste](https://medium.com/@marcio_rc/os-sete-princ%C3%ADpios-do-teste-de954ae080d0)
* [Software Engineering | Seven Principles of software testing](https://www.geeksforgeeks.org/software-engineering-seven-principles-of-software-testing/)
* [What Is the Best Unit Testing Framework for JavaScript?](https://www.testim.io/blog/best-unit-testing-framework-for-javascript/)
* [Jest](https://jestjs.io/pt-BR/)
* [UnitTest](https://martinfowler.com/bliki/UnitTest.html)
* [Entenda de uma vez por todas o que são testes unitários, para que servem e como fazê-los](https://dayvsonlima.medium.com/entenda-de-uma-vez-por-todas-o-que-s%C3%A3o-testes-unit%C3%A1rios-para-que-servem-e-como-faz%C3%AA-los-2a6f645bab3)
* [F.I.R.S.T principles of testing](https://medium.com/@tasdikrahman/f-i-r-s-t-principles-of-testing-1a497acda8d6)
* [Unit testing best practices with .NET Core and .NET Standard](https://docs.microsoft.com/en-us/dotnet/core/testing/unit-testing-best-practices)
* [Unit Testing in JavaScript: A Tutorial](https://www.browserstack.com/guide/unit-testing-in-javascript)
* [Jest Tutorial – JavaScript Unit Testing Using Jest Framework](https://www.softwaretestinghelp.com/jest-testing-tutorial/)
* [Javascript Unit Testing: Get Started Quickly and Easily](https://www.testim.io/blog/javascript-unit-testing/)
* [Entendendo e Aplicando o Test Driven Development (TDD)](https://blog.onedaytesting.com.br/test-driven-development/)
* [JavaScript TDD using Jest](https://medium.com/@suvodeep4119/javascript-tdd-using-jest-9b535c6be7be)
* [O que é TDD?](https://dev.to/womakerscode/o-que-e-tdd-4b5f)
* [3 Steps to Frictionless TDD with Jest and VS Code](https://derekndavis.com/posts/3-steps-to-frictionless-tdd-with-jest-and-vscode)

<p align="center">
Desenvolvido com :purple_heart:  
</p>

