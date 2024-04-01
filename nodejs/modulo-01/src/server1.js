//Modulo 1 - Iniciando com NodeJS
import http from 'node:http';

const server1 = http.createServer((request, response) => {
  return response.end('Hello World');
});

server1.listen(3333, () => {
  console.log('Server started on port 3333');
  console.log('http://localhost:3333');
  console.log('Fim do modulo 1 🎉')
  console.log(`
Questão 1.
  De acordo com a aula, como habilitamos o uso das importações utilizando o ESModules?
Sua resposta
  O Adicionando no arquivo \`package.json\` a propriedade \`"type"\` com o valor de \`"module"\`
####

Questão 2.
  O prefixo \`node:\` na importação de um módulo serve para informar que esse módulo é interno do Node.js:
Sua resposta
  Verdadeiro
####

Questão 3.
  Para que serve o módulo \`http\` do Node.js?
Sua resposta
  Para criar e lidar com as requisições HTTP em uma porta específica
####

Questão 4.
  Sobre o parâmetro \`request\` é possível afirmar que: Através desse objeto é possível obter todas as informações presente na requisição, como dados enviados em JSON, parâmetros de rota nomeados e não nomeados, entre outros.
Sua resposta
  Verdadeiro
####
`)
});

