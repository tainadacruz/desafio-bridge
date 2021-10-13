# desafio-bridge

## Sobre o desafio:

Criar um Progressive Web App (PWA) que calcula o menor número real duodígito múltiplo de X. Um número duodígito é aquele cujo seus algarismos têm no máximo dois números distintos. Exemplos: 9990, 4747, 122.

## Principais tecnologias utilizadas:

O backend foi desenvolvido em Java com Springboot. Para o frontend, fora aplicada a biblioteca React e a estilização foi auxiliada pelo Bootstrap. A ferramenta para fazer requisições fora o Axios. Para o banco de dados, foi utilizado o Apache e o MySQL com o auxílio do software Xampp.

## Como executar:

Essas intruções foram executadas no sistema operacional Manjaro KDE, e podem mudar de acordo com o sistema.

Requisitos de instalação: Node.js, React.js, Xampp

Database: Com o Xampp instalado, inicialize-o no terminal através do comando:
    
    /opt/lampp/lampp start panel

Crie uma base de dados nomeada "desafio-bridge" no localhost. A tabela e a inserção de dados será executada no backend.

Backend (versão mais simples) -> Abra o projeto "springboot-backend" no ambiente de desenvolvimento de sua preferência (o ambiente utilizado  por mim foi o IntelliJ IDEA). Execute o projeto clicanco no botão de play.

Frontend -> No terminal, execute dentro da pasta "react-app" o comando npm start:

    cd react-frontend/react-app
    npm start
