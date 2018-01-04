#LOG

*28/12/2017

*Criar um novo repositorio com todos os ficheiros iniciais
  .Instalar Express, body-parser, nedb eibd, ejs
  .Retirar os comentarios de app.js e apagar os require não necessários
  .Alterar o server require em app.js [/utilities/server]
  .Alterar no ficheiro server.js o path para api_routes [acrescentar ../]
 
 *Criar a pagina de acesso online
  .Criar a rota em api_outes.js
  .Apagar a rota [/api/info/:id]
  .Apagar a respetetiva função em api_controllers.js
  .Criar a função home em api_controllers para apresentar a pagina principal
  .Colocar requesitos do ejs no ficheiro server.js  [app.set("view engine", "ejs");]
  .Colocados os botões de navegação entre pagina adicionar dispositivo e testar dispositivo
  
 *Criar a a pagina para adicionar dispositivos
  .Criado o methodo GET para redirecionamento para a pagina /control/add_device
  .Criada a função de renderização da pagina em api_controllers
  .Criado o ficheiro add_device.ejs
  .Criada o array com os dados de cada um dos dispositivos passiveis de ser adicionados
  
