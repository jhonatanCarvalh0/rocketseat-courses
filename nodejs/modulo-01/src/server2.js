// Módulo 2 - Estrutura de Aplicação

/* MÉTODOS HTTP
* GET => Buscar informações do back-end;
* POST => Criar uma informação no back-end;
* PUT => Alterar uma informação no back-end; EX: Atualizar um usuário;
* PATCH => Alterar uma informação específica; EX: Atualizar a senha do usuário;
* DELETE => Deletar uma informação no back-end;
*/

/**
 * ROTAS
 * Rota: URL completa;
 * Recurso: Qual entidade estamos acessando do sistema;
 *
 * ENDPOINT
 * Método + Rota = Endpoint;
 * Ex: GET http://localhost:3333/users || GET /users
 * Ex2: POST http://localhost:3333/users || POST /users
 */

/**
 * STATEFUL x STATELESS
 * Stateful: O servidor guarda o estado do cliente em memória;
 * Stateless: O servidor não guarda o estado do cliente;
 *
 * array users[] é um exemplo de stateful pois o servidor guarda o estado do cliente;
 */

/**
 * JSON - JavaScript Object Notation
 * Json é um objeto JavaScript;
 * Formato de dados muito utilizado em APIs;
 * Formato textual;
 * Chave e valor;
 * { "key": "value" }
 * */

/**
 * HEADER E BODY DA REQUISIÇÃO
 * header da requisição => Cabeçalho da requisição
 * header da requisição => Indica o tipo de conteúdo que está sendo enviado;
 * Content-Type: application/json => Indica que o conteúdo está sendo enviado em JSON;
 * body da requisição => Corpo da requisição;
 * body da requisição => Dados para criação ou atualização de um registro;
 * body da requisição => JSON;
 * body da requisição => { "name": "Lucas", "email": "lucas@email.com" }
 */

import http from 'node:http'

const users = []

const server = http.createServer((request, response) => {
    const { url, method } = request
    if (url === '/users' && method === 'GET') {
        // Resposta precisa ser String ou Buffer ou Uint8Array
        return response
            .setHeader('Content-Type', 'application/json')
            .end(JSON.stringify(users))
    }
    if (url === '/users' && method === 'POST') {
        users.push({
            id: 1,
            name: 'Lucas',
            email: 'lucas@email.com'
        })
    }

    return response.end('Hello World')
})

server.listen(3333, () => {
    console.log('Server started on port 3333')
    console.log('http://localhost:3333')
})