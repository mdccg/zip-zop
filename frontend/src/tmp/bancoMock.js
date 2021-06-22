const usuarioMock = {
  _id: '60ca20fe63ede769d8188774',
  fotoPerfil: 'https://github.com/mdccg.png',
  nome: 'Avrelivs Dvmbledore',
  recado: 'CHRISTO NIHIL PRÆPONERE',
  numero: '+55 67 1111-1111'
};

const contatosMock = [
  {
    _id: '60c75914d1f224481aeb3d13',
    fotoPerfil: 'https://i.imgur.com/jXVrdVT.jpg',
    nome: 'A. Abner', // Como o próprio contato salvou seu nome, ex.: ~Fulano
    recado: 'CHRISTO NIHIL PRÆPONERE',
    numero: '+55 11 1111-1111',
    vistoUltimo: '2021-06-20T12:52:30.363Z'
  },

  {
    _id: '60ca01080df020d4e37494f1',
    fotoPerfil: 'https://i.imgur.com/RQY730L.jpg',
    nome: 'Albus Dumbledore',
    recado: 'Hogwarts sempre estará lá para aqueles que a ela recorrerem',
    numero: '+44 9¾ 1111-1111'
  },

  {
    _id: '60ca02b38ea9e7afc26b528f',
    fotoPerfil: 'https://i.imgur.com/BXT7dxd.jpg',
    nome: 'Severus Snape',
    numero: '+44 9¾ 2222-2222'
  },

  {
    _id: '60ca09ff5faec1adaa75061d',
    fotoPerfil: 'https://i.imgur.com/GRElp9O.png',
    nome: 'Harry Potter',
    recado: 'Eu juro solenemente não fazer nada de bom',
    numero: '+44 9¾ 3333-3333',
    online: true,
    vistoUltimo: '2021-06-19T21:46:50.511Z'
  },
];

const configuracoesContatosMock = [
  {
    _id: '60c7593f04808452f543a8ff',
    contato: contatosMock[0],
    apelido: 'Abner Ariel-sensei ♰', // Como o usuário salvou o nome do contato
    notificacoesMutadas: false,
    notificacaoPersonalizada: {
      mensagem: {
        ringtone: '/storage/emutaled/0/Music/bell.mp3',
        vibracao: 'Longa', // enum: ['Desativada', 'Padrão', 'Curta', 'Longa']
        /**
         * enum: [
         *   'Sem popup',
         *   'Apenas quando a tela estiver ligada',
         *   'Apenas quando a tela estiver desligada',
         *   'Sempre mostrar popup',
         * ]
         */
        notificacaoPopup: 'Apenas quando a tela estiver desligada',
        luz: 'Azul', // enum: ['Nenhuma', 'Branca', 'Vermelha', 'Amarela', 'Verde', 'Ciano', 'Azul', 'Roxa']
        altaPrioridade: true // Mostrar notificações deste contato antes das outras
      },
      chamada: {
        ringtone: '/storage/emutaled/0/Music/alarm.mp3',
        vibracao: 'Desativada'
      }
    },
    visibilidadeMidia: true,
    grupos: ['60c759198632f6e5f29a6615', '60c7592062240b2170dcef18']
  },

  {
    _id: '60ca01508f16733de240972a',
    contato: contatosMock[1],
    apelido: 'Dumbledore-sensei <3 🧙‍♂️',
    notificacoesMutadas: false,
    notificacaoPersonalizada: {},
    visibilidadeMidia: true
  },

  {
    _id: '60ca0326f35fcca512cf51eb',
    contato: contatosMock[2],
    apelido: 'Cadelinho simp da Lily',
    notificacoesMutadas: false,
    notificacaoPersonalizada: {},
    visibilidadeMidia: true
  },

  {
    _id: '60ca0a0e5c80ba5dde5316cf',
    contato: contatosMock[3],
    apelido: 'Bezerro de ouro do Dumbledore',
    notificacoesMutadas: true,
    notificacaoPersonalizada: {},
    visibilidadeMidia: true
  }
];

const conversasMock = [
  {
    _id: '60cf383736c57a9093482a64',
    tipo: 'Conversa',
    contato: configuracoesContatosMock[0],
    mensagens: [
      { _id: '60cf3816405e8b7ebf38d205', remetente: configuracoesContatosMock[0], mensagem: `Bom dia, Aurelius!`, envio: '2021-06-20T12:44:06.939Z', recebido: '2021-06-20T12:44:06.939Z', visualizado: '2021-06-20T12:44:06.939Z' }, { _id: '60cf3816ec31fac134aea00b', remetente: configuracoesContatosMock[0], mensagem: `Já rezou o Santo Terço hoje?`, envio: '2021-06-20T12:44:06.940Z', recebido: '2021-06-20T12:44:06.940Z', visualizado: '2021-06-20T12:44:06.940Z' }, { _id: '60cf3816291c77900f506abc', remetente: usuarioMock, mensagem: `Ohayooou, A-Abner Ariel-saan >///<`, envio: '2021-06-20T12:44:06.941Z', recebido: '2021-06-20T12:44:06.941Z', visualizado: '2021-06-20T12:44:06.941Z' }, { _id: '60cf38163bf96987d0e6654f', remetente: usuarioMock, mensagem: `...🥺`, envio: '2021-06-20T12:44:06.941Z', recebido: '2021-06-20T12:44:06.941Z', visualizado: '2021-06-20T12:44:06.941Z' }, { _id: '60cf3816a57111b6dcf24423', remetente: usuarioMock, mensagem: `👉👈`, envio: '2021-06-20T12:44:06.942Z', recebido: '2021-06-20T12:44:06.942Z', visualizado: '2021-06-20T12:44:06.942Z' }, { _id: '60cf3816fc136c7312d5f5bc', remetente: usuarioMock, mensagem: `A-Ainda não, não terminei ler a ⭐ liturgia diária! ⭐ UwU`, envio: '2021-06-20T12:44:06.943Z', recebido: '2021-06-20T12:44:06.943Z', visualizado: '' },
    ],
    get mensagensNaoLidas() {
      return this.mensagens.filter(({ remetente, visualizado }) => remetente._id !== usuarioMock._id && !visualizado).length;
    }
  },
  {
    _id: '60ca2029d0e21603d2fa3f96',
    tipo: 'Conversa', // enum: ['Conversa', 'Grupo', 'Transmissão']
    contato: configuracoesContatosMock[3],
    mensagens: [
      { _id: '60ce195d3547039678102aa0', remetente: configuracoesContatosMock[3], mensagem: `Bom dia, professor Comparotto!`, envio: '2021-06-19T16:20:45.017Z', recebido: '2021-06-19T16:20:45.017Z', visualizado: '2021-06-19T16:20:45.017Z' }, { _id: '60ce195d85e144ad3b13756c', remetente: usuarioMock, mensagem: `Bom dia, senhor Potter!`, envio: '2021-06-19T16:20:45.017Z', recebido: '2021-06-19T16:20:45.017Z', visualizado: '2021-06-19T16:20:45.017Z' }, { _id: '60ce195d06116be7af26db33', remetente: usuarioMock, mensagem: `Já foi bajulado pelo professor Dumbledore hoje?`, envio: '2021-06-19T16:20:45.018Z', recebido: '2021-06-19T16:20:45.018Z', visualizado: '2021-06-19T16:20:45.018Z' }, { _id: '60ce195d21705172e6459ad5', remetente: configuracoesContatosMock[3], mensagem: `Não é da sua conta, cabeludo sangue ruim!`, envio: '2021-06-19T16:20:45.018Z', recebido: '2021-06-19T16:20:45.018Z', visualizado: '2021-06-19T16:20:45.018Z' }, { _id: '60ce195d571ac6fab007265e', remetente: usuarioMock, mensagem: `O que foi que acabei de ler, Harry?!`, envio: '2021-06-19T16:20:45.018Z', recebido: '2021-06-19T16:20:45.018Z', visualizado: '2021-06-19T16:20:45.018Z' }, { _id: '60ce195df0d9ddb8e6449d08', remetente: usuarioMock, mensagem: `Irei castigá-lo por isso!`, envio: '2021-06-19T16:20:45.018Z', recebido: '2021-06-19T16:20:45.018Z', visualizado: '2021-06-19T16:20:45.018Z' }, { _id: '60ce195ddb44f2afd9b5b44b', remetente: usuarioMock, mensagem: `(∩｀-´)⊃━☆ﾟ.*・｡ﾟ *Imperio*`, envio: '2021-06-19T16:20:45.019Z', recebido: '2021-06-19T16:20:45.019Z', visualizado: '2021-06-19T16:20:45.019Z' }, { _id: '60ce195de2e988de1d4e03e7', remetente: usuarioMock, mensagem: `Agora me sirva três xícaras de café pelando e sem muito açúcar como forma de punição pelo que me chamou.`, envio: '2021-06-19T16:20:45.019Z', recebido: '2021-06-19T16:20:45.019Z', visualizado: '2021-06-19T16:20:45.019Z' }, { _id: '60ce195da0c19eb90c23e1cc', remetente: configuracoesContatosMock[3], mensagem: `Mil perdões, professor Comparotto! O infeliz do Draco Malfoy havia roubado o meu celular...`, envio: '2021-06-19T16:20:45.019Z', recebido: '2021-06-19T16:20:45.019Z', visualizado: '2021-06-19T16:20:45.019Z' }, { _id: '60ce195d3855b58f6e2df90e', remetente: usuarioMock, mensagem: `Oh, céus! Por que não escreveu isso logo? Agora vá preparar o café pois preciso escrever muitas linhas de código hoje.`, envio: '2021-06-19T16:20:45.019Z', recebido: '2021-06-19T16:20:45.019Z', visualizado: '2021-06-19T16:20:45.019Z' },
    ],
    get mensagensNaoLidas() {
      return this.mensagens.filter(({ remetente, visualizado }) => remetente._id !== usuarioMock._id && !visualizado).length;
    },
    fixado: true
  },
  {
    _id: '60cad821c018fd06de0772cc',
    tipo: 'Conversa',
    contato: configuracoesContatosMock[2],
    mensagens: [
      {
        _id: '60cad7e1a3c79b2f574b84df',
        remetente: configuracoesContatosMock[2],
        mensagem: 'vo arregaça o corno do James ele vai ver só',
        envio: '2021-06-17T05:03:10.055Z',
        recebido: '2021-06-17T05:03:10.055Z',
        visualizado: ''
      }
    ],
    get mensagensNaoLidas() {
      return this.mensagens.filter(({ remetente, visualizado }) => remetente._id !== usuarioMock._id && !visualizado).length;
    }
  },
  /*
  {
    _id: '',
    tipo: 'Conversa',
    contato: configuracoesContatosMock[],
    mensagens: [
    
    ],
    get mensagensNaoLidas() {
      return this.mensagens.filter(({ remetente, visualizado }) => remetente._id !== usuarioMock._id && !visualizado).length;
    }
  }
  */
];

const bancoMock = { usuarioMock, contatosMock, configuracoesContatosMock, conversasMock };

export default bancoMock;