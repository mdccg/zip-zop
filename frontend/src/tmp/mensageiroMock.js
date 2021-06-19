/** Para ser executado no console do navegador Chrome */

const ObjectId = (m = Math, d = Date, h = 16, s = s => m.floor(s).toString(h)) =>
    s(d.now() / 1000) + ' '.repeat(h).replace(/./g, () => s(m.random() * h));

const mensagens = [
    { 'configuracoesContatosMock[3]': 'Bom dia, professor Comparotto!' },
    { 'usuarioMock': 'Bom dia, senhor Potter!' },
    { 'usuarioMock': 'Já foi bajulado pelo professor Dumbledore hoje?' },
    { 'configuracoesContatosMock[3]': 'Não é da sua conta, cabeludo sangue ruim!' },
    { 'usuarioMock': 'O que foi que acabei de ler, Harry?!' },
    { 'usuarioMock': 'Irei castigá-lo por isso!' },
    { 'usuarioMock': '(∩｀-´)⊃━☆ﾟ.*・｡ﾟ *Imperio*' },
    { 'usuarioMock': 'Agora me sirva três xícaras de café pelando e sem muito açúcar como forma de punição pelo que me chamou.' },
    { 'configuracoesContatosMock[3]': 'Mil perdões, professor Comparotto! O infeliz do Draco Malfoy havia roubado o meu celular...' },
    { 'usuarioMock': 'Oh, céus! Por que não escreveu isso logo? Agora vá preparar o café pois preciso escrever muitas linhas de código hoje.' }
];

for(const objeto of mensagens) {
  const [remetente, mensagem] = Object.entries(objeto).pop();

  document.writeln(
    `{
      _id: '${ObjectId()}',
      remetente: ${remetente},
      mensagem: \`${mensagem}\`,
      envio: '${new Date().toISOString()}',
      recebido: '${new Date().toISOString()}',
      visualizado: '${new Date().toISOString()}'
    },`
  );
}