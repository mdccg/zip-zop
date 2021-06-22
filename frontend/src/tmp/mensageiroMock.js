/** Para ser executado no console do navegador Chrome */

const ObjectId = (m = Math, d = Date, h = 16, s = s => m.floor(s).toString(h)) =>
    s(d.now() / 1000) + ' '.repeat(h).replace(/./g, () => s(m.random() * h));

const mensagens = [
  { 'configuracoesContatosMock[0]': 'Bom dia, Aurelius!' },
  { 'configuracoesContatosMock[0]': 'Já rezou o Santo Terço hoje?' },
  { 'usuarioMock': 'Ohayooou, A-Abner Ariel-saan >///<' },
  { 'usuarioMock': '...🥺' },
  { 'usuarioMock': '👉👈' },
  { 'usuarioMock': 'A-Ainda não, não terminei ler a ⭐ liturgia diária! ⭐ UwU' }
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