/** Para ser executado no console do navegador Chrome */

const ObjectId = (m = Math, d = Date, h = 16, s = s => m.floor(s).toString(h)) =>
    s(d.now() / 1000) + ' '.repeat(h).replace(/./g, () => s(m.random() * h));

const mensagens = [
  { 'usuarioMock': 'Bom dia, sr. Potter!' },
  { 'configuracoesContatosMock[3]': 'Oh, bom dia, professor Comparotto!' }
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
    }`
  );
  document.body.appendChild(document.createElement('br'));
}