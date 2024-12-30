import { app } from "./app";
import { env } from "./env";

// Porta e host
const PORT = env.PORT || 3000; // Porta do Render ou 3000 como fallback
const HOST = '0.0.0.0'; // Necessário para ambientes como Render

app.listen({
  port: PORT,
  host: HOST
}).then(() => {
  console.log(`Server listening at http://localhost:${env.PORT}`)
})