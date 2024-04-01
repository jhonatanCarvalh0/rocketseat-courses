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

/**
 * HTTP STATUS CODES
 * 1xx: Informational; EX: 100 Continue;
 * 2xx: Success; EX: 200 OK;
 * 3xx: Redirection; EX: 301 Moved Permanently;
 * 4xx: Client Error; EX: 400 Bad Request;
 * 5xx: Server Error; EX: 500 Internal Server Error;
 */

import http from 'node:http'

const users = []

const server = http.createServer((request, response) => {
    const { url, method } = request
    if (url === '/users' && method === 'GET') {
        // Resposta precisa ser String ou Buffer ou Uint8Array
        return response
            // status 200 OK - Indica que a requisição foi bem sucedida
            .writeHeader(200)
            .setHeader('Content-Type', 'application/json')
            .end(JSON.stringify(users))
    }

    if (url === '/users' && method === 'POST') {
        users.push({
            id: 1,
            name: 'Lucas',
            email: 'lucas@email.com'
        })
        // status 201 Created - Indica que um novo recurso foi criado
        return res.writeHead(201).end()
    }

    // status 404 Not Found - Indica que o recurso solicitado não foi encontrado
    return response.writeHeader(404).end()
})

server.listen(3333, () => {
    console.log('Server started on port 3333')
    console.log('http://localhost:3333')
})