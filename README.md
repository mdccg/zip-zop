# zip-zop

- [zip-zop](#zip-zop)
  - [Motivação](#motivação)
  - [Pilha de tecnologia](#pilha-de-tecnologia)
  - [Galeria](#galeria)
  - [Lista de afazeres](#lista-de-afazeres)

## Motivação

Estou desenvolvendo este app para aperfeiçoar minhas técnicas de desenvolvimento mobile com a biblioteca React Native e as outras tecnologias supracitadas. Trata-se do clone de um aplicativo de mensagens e chamadas de voz para smartphones. _A priori_, clonarei todas as interfaces visuais do app de referência. Em breve, adicionarei uma API que consumirá o serviço de consulta e, porventura, um serviço de sockets que utilizará o número de telefone do usuário.

O app permitirá ao usuário selecionar um dos idiomas disponíveis e cadastrar em seu dispositivo traduções de idiomas não suportados pelo [processo de intercionalização i18n](https://www.npmjs.com/package/i18n). O cadastro de uma nova tradução será feito por meio de um formulário, perguntando a grafia estrangeira de cada texto exibido no app. Será utilizada a dependência [`expo-localization`](https://docs.expo.io/versions/latest/sdk/localization/) e haverá a opção de exportar uma tradução e importá-la por meio do arquivo gerado. Todas as traduções cadastradas estão disponíveis no arquivo [`translations.json`](./frontend/src/config/translations.json), seguindo este modelo:

```json
{
  "en": {
    "Olá": "Hello"
  },
  "it": {
    "Olá": "Ciao"
  }
}
```

## Pilha de tecnologia

As seguintes tecnologias foram utilizadas para desenvolver este app:

| Papel | Tecnologia |
|-|-|
| Protótipo visual | [Figma](https://figma.com/) |
| Ambiente de execução | [Node](https://nodejs.org/en/) |
| Linguagem de programação | [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) |
| Front-end | [React Native](https://reactnative.dev/) |
| Back-end | [Express.js](https://expressjs.com/pt-br/) |
| Banco de dados | [MongoDB Atlas](https://cloud.mongodb.com/) |

Os créditos pelas mídias utilizadas estão disponíveis [aqui](./frontend/src/assets/README.md).

## Galeria

![Tela de carregamento](https://i.imgur.com/Ddh68kz.png)
![Contatos](https://i.imgur.com/034ulVy.png)
![Conversas](https://i.imgur.com/IObjpcd.png)
![Conversa com Harry Potter](https://i.imgur.com/cLuKL6B.png)

## Lista de afazeres

- [ ] Criar arquivos simulados para compôr telas estáticas;
  - [X] Contatos;
  - [X] Conversas;
  - [ ] Grupos;
  - [ ] Transmissões;
  - [ ] Status;
  - [ ] Chamadas.
- [ ] Clonar todas as interfaces visuais;
- [ ] Adicionar opção de personalizar todos os planos de fundo ou de uma única conversa;
- [ ] Adicionar customização da tradução utilizando i18n;
- [ ] Aprimorar rolagem do _carousel_ para identificar com antecedência para qual tela o usuário deslizará; (Sugestão)
  - Uma função para verificar para qual lado o usuário está deslizando;
  - Outra função para confirmar que o usuário terminou de deslizar e evitar alarme falso.
- [ ] [`API`] Percorrer todas as mensagens e retornar o número de mensagens não visualizadas;
- [ ] Programar um gerador de links de convite.