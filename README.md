# zip-zop

## _To-do list_

- [ ] Apagar os retalhos de código redudantes do [`Navegador`](./zip-zop-frontend/src/components/Navegador/index.js) e criar um novo componente para as abas;
- [ ] Criar arquivos simulados para compôr telas estáticas;
- [ ] Clonar todas as interfaces visuais;
- [ ] Adicionar customização da tradução utilizando i18n;
- [ ] Adicionar _carousel_ à tela inicial para navegar entre as telas;
- [ ] [`API`] Devolver as mensagens separadas por data em um objeto;
- [ ] Programar um gerador de links de convite.

---

## Tecnologias

| Artefato                                     | Tecnologia                                  |
|----------------------------------------------|---------------------------------------------|
| Paleta de cores                              | [Flat UI Colors](https://flatuicolors.com/) |
| Ícones                                       | [Freepik](http://freepik.com/)              |
| [Protótipo visual](https://figma.fun/9UvNVd) | [Figma](https://figma.com/)                 |
| Interfaces visuais                           | [React Native](https://reactnative.dev/)    |
| API                                          | [Express.js](https://expressjs.com/pt-br/)  |
| Banco de dados                               | [MongoDB Atlas](https://cloud.mongodb.com/) |

---

## Motivação

Estou desenvolvendo este app para aperfeiçoar minhas técnicas de desenvolvimento mobile com a biblioteca React Native e as outras tecnologias supracitadas. Trata-se do clone de um aplicativo de mensagens e chamadas de voz para smartphones. _A priori_, clonarei todas as interfaces visuais do app de referência. Em breve, adicionarei uma API que consumirá o serviço de consulta e, porventura, um serviço de sockets que utilizará o número de telefone do usuário.

O app permitirá ao usuário selecionar um dos idiomas disponíveis e cadastrar em seu dispositivo traduções de idiomas não suportados pelo [processo de intercionalização i18n](https://www.npmjs.com/package/i18n). O cadastro de uma nova tradução será feito por meio de um formulário, perguntando a grafia estrangeira de cada texto exibido no app. Será utilizada a dependência [`expo-localization`](https://docs.expo.io/versions/latest/sdk/localization/) e haverá a opção de exportar uma tradução e importá-la por meio do arquivo gerado. Todas as traduções cadastradas estão disponíveis no arquivo [`translations.json`](./zip-zop-frontend/src/config/translations.json), seguindo este modelo:

```
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
  <img width="216px" src="https://i.imgur.com/fa6AvLT.png" alt="Frase em português brasileiro" />
  <img width="216px" src="https://i.imgur.com/pe39nIJ.png" alt="Phrase in english" />
</div>

---

## Créditos

- [Playground - SVGR](https://react-svgr.com/playground/?native=true)
- [Imgur: The magic of the Internet](https://imgur.com/)

Créditos pelas mídias utilizadas disponíveis [aqui](./zip-zop-frontend/src/assets/README.md).