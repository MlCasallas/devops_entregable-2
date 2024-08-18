const express = require('express'); // Corregido 'required' a 'require'
const app = express();

app.get('/', (req, res) => {
    res.send('hola Milton y Nestor');
});

const PORT = process.env.PORT || 3000; // Corregido 'cont' a 'const'
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Corregido las comillas simples por backticks para usar interpolación
});
