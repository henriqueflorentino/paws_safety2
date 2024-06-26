# ![capatopo](https://github.com/henriqueflorentino/paws_safety2/assets/141787273/d76ef6ac-0765-44c9-902e-6119d841f26a)

# PawsSafety 🐾

## 🌐 Visite o site 
A base funcional do projeto está pronta! Nesse modelo implementamos a responsividade, mas caso aconteça algum problema na visualização do site peço para que ajuste o zoom da pagina para que assim consiga ver o resultado esperado.<br />
> [PawsSafety || Conheça nosso site! ](https://paws-safety.netlify.app/)

## 🔗 Assista a apresentação do nosso projeto!
Nesse video estamos apresentando o nosso Elevator Pitch + A implementação do site em funcionamento + Demonstração do Banco de Dados.<br />
> [PawsSafety || Elevator Pitch ](https://www.youtube.com/watch?v=aoKoGreTEEQ)


## 📜 Sobre o projeto 
> Nosso site consiste em um ambiente virtual dedicado a apoiar a causa animal e promover a adoção responsável. A ideia surgiu após uma análise realizada pelo nosso grupo, onde percebemos a dificuldade de encontrar animais para adoção de maneira confiável.<br />
> O projeto foi idealizado como uma plataforma para resolver esses problemas. Nela, os usuários podem se cadastrar, listar seus animais para adoção e adotar animais de outros usuários. Isso cria um ecossistema centrado que facilita as adoções e apoia indivíduos interessados em garantir a segurança dos animais durante todo o processo.

## 📂 Prototipagem
Confira o nosso FIGMA, onde aqui idealizamos o formato do nosso site, identidade, cores e design geral<br />
> [PawsSafety || Conheça nosso FIGMA! ](https://www.figma.com/file/4BZW83YcSUZudV12h0fniL/PawsSafety-Page?type=design&node-id=0-1&mode=design&t=hGjAcsi8cmQYh7lF-0)

## 🎯 Funcionalidades das telas

* ## Home
    ![image](https://github.com/henriqueflorentino/paws_safety2/assets/141787273/569801eb-38ba-422a-9462-a13b8cd448db)<br />
    A tela **`HOME`**, tem como função principal reunir de forma resumida todas as páginas presentes no site, onde através de um botão, como na imagem de exemplo o **`Saiba mais`**, vai redirecionar para a página referênciada;
* ## Adotar
    ![image](https://github.com/henriqueflorentino/paws_safety2/assets/141787273/8cb1fbf9-f43c-4d28-932c-f3dfac0bfb7b)<br />
    A tela **`ADOTAR`**, tem como função principal listar os animais disponíveis para adoção, onde o usuário pode realizar a ação;
* ## Anunciar
    ![image](https://github.com/henriqueflorentino/paws_safety2/assets/141787273/ca23d3e8-8565-4957-afe5-bc0b94d7eda7)<br />
    A tela **`ANUNCIAR`**, tem como função principal permitir que o usuário anuncie um animal para adoção, onde é necessário preencher as informações do animal;
* ## Chat
    ![image](https://github.com/henriqueflorentino/paws_safety2/assets/141787273/7f03eb42-577f-4e92-bbdf-62c37307a307)<br />
    A tela **`CHAT`**, tem como função principal permitir a comunicação entre emails, do usuário que está adotando e o anunciante, isso para tirar dúvidas e obter mais detalhes;
* ## Sobre
    ![image](https://github.com/henriqueflorentino/paws_safety2/assets/141787273/74893136-61f9-4470-9bc8-6e4d2cc4331d)<br />
    A tela **`SOBRE`**, tem como função principal reunir os valores e objetivos principais da PawsSafety, onde o usuário pode ficar mais informado e familiarizado com nosso ambiente, além de poder acessar o perfil/contato dos desenvolvedores do projeto;


## 🔎 Site em funcionamento:


https://github.com/henriqueflorentino/paws_safety2/assets/94813609/3828a394-20a9-45ce-8ed3-8a83e633c0ea






## 🗃️ Apresentando o Banco de Dados
* ### 1️⃣ Projeto e Implementação de Banco de Dados Relacionais (Modelo Conceitual e Modelo Lógico)
### Modelo Conceitual:

**`Usuarios`**
* **`id:`** int (chave primária)
* **`username:`** varchar(255)
* **`password:`** varchar(255)

### Modelo Lógico:
![image](https://github.com/henriqueflorentino/paws_safety2/assets/94813609/a4534ed9-85a5-449c-bd94-e195725006f5)

* ### 2️⃣ Aspectos de Programação em Ambiente de Banco de Dados
> Conexão feita com o Banco de Dados MySQL (Railway + Beekeeper Studio)

A conexão com o banco de dados MySQL é estabelecida no arquivo **`server.js`**:
![image](https://github.com/henriqueflorentino/paws_safety2/assets/94813609/cfd73c35-b1da-4dd4-ae8c-c955e0e1b3ae)

* ### 3️⃣ Implementação de CRUD
  
**`Cadastro de Usuário:`**
* **`Endpoint:`** /register
* **`Método:`** POST
* **`Descrição:`** Recebe um username e password, aplica hash na senha e armazena no banco de dados.
![image](https://github.com/henriqueflorentino/paws_safety2/assets/94813609/fbe4eeef-c4bc-4a9c-831c-837745d67775)

**`Login de Usuário:`**
* **`Endpoint:`** /login
* **`Método:`** POST
* **`Descrição:`** Recebe um username e password, verifica as credenciais e autentica o usuário.
![image](https://github.com/henriqueflorentino/paws_safety2/assets/94813609/f24f2c86-a5b5-459d-bd17-28f90fe60dc2)

* ### 4️⃣ Configuração de SGBD Integrado com a Solução Desenvolvida
  
**`Escolha:`** MySQL

> A configuração do banco de dados MySQL no Railway foi feita utilizando as variáveis de ambiente para gerenciar a conexão de maneira segura e eficiente. As informações de conexão foram extraídas e configuradas conforme necessário no projeto. Utilizamos o Beekeeper Studio para vizulizarmos de forma mais prática o BD
  
**`Variavies de Ambiente utilizadas:`**

**`MYSQLHOST:`** roundhouse.proxy.rlwy.net
* **`MYSQLUSER:`** root
* **`MYSQLPASSWORD:`** dhuJYWsKfFxvJNYVzxFfSJQDNHBZfmNN
* **`MYSQLDATABASE:`** railway
* **`MYSQLPORT:`** 36373

## 📈 Banco em funcionamento:


https://github.com/henriqueflorentino/paws_safety2/assets/94813609/a069aa80-3c25-42ae-8ec6-87958f1f39dd





## 💡 Integrantes do projeto

* [Felipe Avelino Pedaes](https://github.com/ITzspi)
* [Henrique Almeida Florentino](https://github.com/henriqueflorentino)
* [Luiz Felipe Vieira Soares](https://github.com/luizfelipesoarees)

