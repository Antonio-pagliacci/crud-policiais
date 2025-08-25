const app = require("./src/app");



const PORT = process.env.PORT || 3016;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`); 
});
