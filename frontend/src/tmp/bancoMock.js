function filtrar(array = [], valor, atributo = '_id') {
  return array.filter(tupla => tupla[atributo] === valor).pop();
}

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
    contato: filtrar(contatosMock, '60c75914d1f224481aeb3d13'),
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
    contato: filtrar(contatosMock, '60ca01080df020d4e37494f1'),
    apelido: 'Dumbledore-sensei <3 🧙‍♂️',
    notificacoesMutadas: false,
    notificacaoPersonalizada: {},
    visibilidadeMidia: true
  },

  {
    _id: '60ca0326f35fcca512cf51eb',
    contato: filtrar(contatosMock, '60ca02b38ea9e7afc26b528f'),
    apelido: 'Cadelinho simp da Lily',
    notificacoesMutadas: false,
    notificacaoPersonalizada: {},
    visibilidadeMidia: true
  },

  {
    _id: '60ca0a0e5c80ba5dde5316cf',
    contato: filtrar(contatosMock, '60ca09ff5faec1adaa75061d'),
    apelido: 'Bezerro de ouro do Dumbledore',
    notificacoesMutadas: true,
    notificacaoPersonalizada: {},
    visibilidadeMidia: true
  }
];

const bancoMock = { contatosMock, configuracoesContatosMock };

export default bancoMock;