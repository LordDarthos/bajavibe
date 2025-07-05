import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (_, res) => {
  res.send('API funcionando 🚀');
});

app.listen(PORT, () => {
  console.log(`Servidor backend en http://localhost:${PORT}`);
});
