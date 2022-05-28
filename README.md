# zip-zop

## _To-do list_

- [X] Apagar os retalhos de código redudantes do [`Navegador`](./frontend/src/components/Navegador/index.js) e criar um novo componente para as abas;
- [X] Adicionar idioma "Chewie";
- [X] Adicionar [Moment.js](https://momentjs.com/) ao projeto e separar as mensagens por dia;
- [X] Decidir entre:
  - **Retornar um vetor da API e organizar as mensagens por data pelo front-end;**
  - Organizar as mensagens por data pela API e retornar um objeto ao front-end.
- [X] Levar o usuário até a última mensagem da conversa;
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
- [X] Adicionar _carousel_ à tela inicial para navegar entre as telas;
- [ ] Aprimorar rolagem do _carousel_ para identificar com antecedência para qual tela o usuário deslizará; (Sugestão)
  - Uma função para verificar para qual lado o usuário está deslizando;
  - Outra função para confirmar que o usuário terminou de deslizar e evitar alarme falso.
- [ ] [`API`] Percorrer todas as mensagens e retornar o número de mensagens não visualizadas;
- [ ] Programar um gerador de links de convite.

---

## Tecnologias

| Artefato                                     | Tecnologia                                  |
|----------------------------------------------|---------------------------------------------|
| [Protótipo visual](https://figma.fun/9UvNVd) | [Figma](https://figma.com/)                 |
| _Front-end_                                  | [React Native](https://reactnative.dev/)    |
| _Back-end_                                   | [Express.js](https://expressjs.com/pt-br/)  |
| Banco de dados                               | [MongoDB Atlas](https://cloud.mongodb.com/) |

---

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

---

## Galeria

<div style="flex-direction: row; align-items: center;">
  <img width="216px" src="https://i.imgur.com/Ddh68kz.png" alt="Tela de carregamento" />
  <img width="216px" src="https://i.imgur.com/034ulVy.png" alt="Contatos" />
  <img width="216px" src="https://i.imgur.com/IObjpcd.png" alt="Conversas" />
  <img width="216px" src="https://i.imgur.com/cLuKL6B.png" alt="Conversa com Harry Potter" />
</div>

---

## Créditos

- [Browse Fonts - Google Fonts](https://fonts.google.com/)
- [Free vector icons - SVG, PSD, PNG, EPS & Icon Font - Thousands of free icons](https://www.flaticon.com/)
- [Font Awesome](https://fontawesome.com/)
- [Playground - SVGR](https://react-svgr.com/playground/?native=true)
- [Imgur: The magic of the Internet](https://imgur.com/)

Créditos pelas mídias utilizadas disponíveis [aqui](./frontend/src/assets/README.md).