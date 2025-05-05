const http = require('http');

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return '☀️ ¡Buenos días!';
  if (hour < 18) return '🌤️ ¡Buenas tardes!';
  return '🌙 ¡Buenas noches!';
};

const server = http.createServer((req, res) => {
  const greeting = getGreeting();

  const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Servidor Node.js Neon</title>
      <style>
        body {
          background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
          color: #00ffe7;
          font-family: 'Courier New', Courier, monospace;
          text-align: center;
          padding: 50px;
          margin: 0;
        }

        .glow {
          font-size: 2.5em;
          color: #0ff;
          text-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #00f,
                       0 0 40px #00f, 0 0 50px #00f;
          animation: pulse 2s infinite;
        }

        .container {
          background-color: rgba(0,0,0,0.5);
          border: 2px solid #00ffe7;
          border-radius: 15px;
          padding: 40px;
          display: inline-block;
          box-shadow: 0 0 30px #00ffe7;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        p {
          font-size: 1.2em;
          color: #b0ffff;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1 class="glow">${greeting} 🚀</h1>
        <p>Servidor personalizado de Node.js corriendo en <strong>http://localhost:3000</strong></p>
      </div>
    </body>
    </html>
  `;

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
});

server.listen(3000, () => {
  console.log('✨ Servidor futurista activo en http://localhost:3000');
});
