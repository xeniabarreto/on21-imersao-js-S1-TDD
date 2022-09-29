const filterCharacter = require('./filter')
const{ isAlive } = require('./is-Alive')

const mockPersonagens = [
    {
        "name": "leia",
        "alive": false
    },

    {   
        "name": "chihiro",
        "alive": true
    },

    {
        "name": 'mononoke',
        "alive": true
    }
]

//olhar Doc
jest.spyOn()
jest.mock('./is-Alive', () => {  //isAlive aqui é como um modulo externo
    isAlive: jest.fn(() => true)
})

describe('filtrar personagem', () => {
    test('filtra pelo nome de um personagem', () => {
        const resultado = filterCharacter(mockPersonagens, 'chihiro')

        expect(resultado.length).toEqual(1)
    });

    //ABAIXO TA QUEBRADO
    test('Filtra a lista de personagens e verificar se ele está vivo', () => {
        //const mockIsALive = jest.fn(() => true)
        const resultado = filterCharacter(mockPersonagens, "chihiro", mockIsALive)

        expect(resultado.length).toEqual(1)
        //expect(mockIsALive).toBeCalledTimes(resultado.length)
    })
})

//jest.mock('./isAlive') // para importar o Alive do objto acima
//o primeiro parâmetro é o caminho da função? 



/* /exemplo que nao esta sendo usado ln 26 a 29
const mock = jest.fn(() => true) //função pronta do jest
// olhar documentção
expect(mock).toHaveBeenCalledWith(false)  //ver se a função foi chamada com parametro



describe('Chama função filter', () => {
    test('', () => {

    })
}) */

/*comentário da Karu:
"Do que eu entendi, a gente usa o mock do modulo quando precisa usar esse modulo dentro do outra função. Aí a gente indica que tentando a função atual, sempre que a função mockada for chamada ela vai retornar o que indicarmos "*/