
# Projeto Trivia

 Este foi um projeto feito na **Trybe** em que testamos nossos conhecimentos ao acessar uma Api de perguntas, e manipular ela para criarmos um jogo.estilização dos componentes. Ele tem como objetivo mostrar meus conhecimentos em **Javascript**, **CSS**, **React**, **manipulação de componentes**, **ciclos de vida de componentes**, **local storage**, **tela de login**, **Redux** e **rotas**. 

---
<br>
Este projeto foi importante, pois ele foi desenvolvido em grupo, onde utilizamos a metodologia Kanban e pair programing, assim temos uma experiência de como é trabalhar em equipe no mercado de trabalho.

<br>

### Desafios

Houveram muitos desafios nesse projeto, como a utilização da biblioteca Redux que tinhamos acabado de conhecer, criar diversas rotas, salvar o score no local storage, desenvolver componentes individualmente ou em pair programming e depois adicionar a nossa aplicação e utilizar ciclos de vida pra deixar nossa aplicação com um melhor funcionamento.



### **Tecnologias utilizadas**
---
---

<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"></img>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"></img>
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"></img>
<img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white"></img>
<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"></img>



---
---
<br>
<br>

## **SOBRE:**
---
 Neste projeto, através de uma requisição a uma Api de perguntas e resposas, foi criado uma aplicação que simula um jogo. </br>

 Ao entrar na aplicação, iniciamos em uma página de login, onde temos o campo **Nome**, **Email** e um botão jogar que está desativado. e também temos um botão de configuração.

 Para iniciar a partida, devemos colocar um nome e um **Email válido**, após isso, o botão jogar será ativado. (Email válido é um onde temos um nome@domínio.com, pode ser qualquer um ex: nome@nome.com).

 Ao clicar no botão jogar o usuário irá ser redirecionado a página onde o jogo é iniciado.
 
Na página de jogo, temos um Header contendo uma foto de usuário, o nome do jogador inserido na tela de login, o número da questão atual, a pontuação atual do usuário, e o nível de pergunta atual.

Na parte de baixo, temos uma pergunta (em inglês), o tema da pergunta na cor verde, 4 possíveis respostas e um time de 30 segundos.

Caso o usuário clique em uma resposta, o timer é pausado e um escrito próxima aparece na tela. Caso o usuário acerte a pergunta, a opção escolhida ficará marcada pela cor verde e as perguntas erradas ficarão marcadas pela cor vermelha. Caso o usuário marque a resposta errada, a opção escolhida ficará marcada pela cor vermelha e a resposta correta ficará marcada pela resposta correta.

Caso o usuário não escolha nenhuma opção até o fim do tempo, a resposta correta ficará marcada pela cor verde, e o botão de próxima irá aparecer na tela.

depois de 5 respostas respondidas, um botão de feedback aparece, redirecionando o usuário para outra tela onde contém as informações da partida, como o número de respostas acertadas, nome, foto e a pontuação, junto com dois botões, **Jogar novamente** e **Ver Ranking**.

Se o usuário clicar no botão de Jogar novamente, ele será redirecionado a tela de login, caso clique no botão de Ver Ranking, ele será redirecionado a uma página onde tem as pontuações dos jogadores, que ficam salva no local storage.


Na página de login, se o usuário clicar no botão de configuração, ele será redirecionado para a página de configuração, onde tem 3 opções para editar as perguntas, são elas: **Dificuldade**, **Categoria** e **Tipo**, ao clicar em salvar, a configuração é salva no estado global do Redux, e as perguntas e respostas virão de acordo com a configuração escolhida.

**OBS:** Algumas opções de configuração dá erro, pois a api devolve de forma incorreta, por exemplo, na configuração as opções : Dificuldade:difícil, Categoria:Esporte, Tipo:verdadeiro ou falso, a api não tem essas opções de configuração então dá erro.
Então isso pode ocorrer dependendo da combinação escolhida pelo usuário.
 




## Baixando o projeto
---
Caso queira clonar para rodar localmente, após dar o gitclone em sua máquina, devemos entrar na pasta raíz do projeto e executar no terminal o comando **npm install** para instalar todas as dependências, e após tudo instalado, é preciso rodar o comando **npm start** para iniciar em seu navegador. É necessário o node.js instalado.



## Caso queira ver na prática como funciona, acesse o link abaixo: 
---
<br>

