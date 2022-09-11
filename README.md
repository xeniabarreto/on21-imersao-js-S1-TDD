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
[CONTEUDO]

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
   [CONTEUDO]

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
* 

<p align="center">
Desenvolvido com :purple_heart:  
</p>

