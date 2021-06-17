const usuario = {
  _id: '60ca20fe63ede769d8188774',
  fotoPerfil: 'https://i.imgur.com/jXVrdVT.jpg',
  nome: 'Avrelivs Dvmbledore',
  recado: 'CHRISTO NIHIL PRÆPONERE',
  contato: '+55 67 1111-1111'
};

const contatosMock = [
  {
    _id: '60c75914d1f224481aeb3d13',
    fotoPerfil: 'https://i.imgur.com/jXVrdVT.jpg',
    nome: 'A. Abner', // Como o próprio contato salvou seu nome, ex.: ~Fulano
    recado: 'CHRISTO NIHIL PRÆPONERE',
    contato: '+55 11 1111-1111'
  },

  {
    _id: '60ca01080df020d4e37494f1',
    fotoPerfil: 'https://i.imgur.com/RQY730L.jpg',
    nome: 'Albus Dumbledore',
    recado: 'Hogwarts sempre estará lá para aqueles que a ela recorrerem',
    contato: '+44 9¾ 1111-1111'
  },

  {
    _id: '60ca02b38ea9e7afc26b528f',
    fotoPerfil: 'https://i.imgur.com/BXT7dxd.jpg',
    nome: 'Severus Snape',
    contato: '+44 9¾ 2222-2222'
  },
  
  {
    _id: '60ca09ff5faec1adaa75061d',
    fotoPerfil: 'https://i.imgur.com/GRElp9O.png',
    nome: 'Harry Potter',
    recado: 'Eu juro solenemente não fazer nada de bom',
    contato: '+44 9¾ 3333-3333'
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

const mensagensMock = [
  {
    _id: '60ca9b2881f172d9237d65fb',
    remetente: usuario,
    mensagem: 'Bom dia, salve Maria!',
    dataEnvio: '2021-06-17T01:52:56.515Z',
    recebido: '2021-06-17T01:53:04.794Z', 
    visualizado: '2021-06-17T01:53:04.794Z'
  },
  {
    _id: '60ca9b383ed9f746d5c40010',
    remetente: configuracoesContatosMock[0],
    mensagem: 'Bom dia, Matheus!',
    dataEnvio: '2021-06-17T01:53:22.879Z',
    recebido: '2021-06-17T01:54:06.899Z',
    visualizado: ''
  },
  {
    _id: '60cad54f4a14ccea36a38f0e',
    remetente: configuracoesContatosMock[0],
    mensagem: 'Matheus, você está aí? 🤔',
    dataEnvio: '2021-06-17T04:52:45.894Z',
    recebido: '2021-06-17T04:52:45.894Z',
    visualizado: ''
  },
  {
    _id: '60cad7e1a3c79b2f574b84df',
    remetente: configuracoesContatosMock[2],
    mensagem: 'vo arregaça o corno do James ele v...',
    dataEnvio: '2021-06-17T05:03:10.055Z',
    recebido: '2021-06-17T05:03:10.055Z',
    visualizado: ''
  }
];

const conversasMock = [
  {
    _id: '60ca2029d0e21603d2fa3f96',
    tipo: 'Conversa', // enum: ['Conversa', 'Grupo', 'Transmissão']
    contato: configuracoesContatosMock[0],
    mensagens: {
      '16 de junho de 2021': [mensagensMock[0], mensagensMock[1]],
      '17 de junho de 2021': [mensagensMock[2]]
    },
    mensagensNaoLidas: [mensagensMock[0], mensagensMock[1], mensagensMock[2]].filter(({ visualizado }) => !visualizado).length,
    fixado: true
  },
  {
    _id: '60cad821c018fd06de0772cc',
    tipo: 'Conversa',
    contato: configuracoesContatosMock[2],
    mensagens: {
      '17 de junho de 2021': [mensagensMock[3]]
    },
    mensagensNaoLidas: [mensagensMock[3]].filter(({ visualizado }) => !visualizado).length,
  }
]; 

const bancoMock = { contatosMock, configuracoesContatosMock, conversasMock };

export default bancoMock;