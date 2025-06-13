const express = require('express');
const bodyParser = require('body-parser');
const memberRoutes = require('./routes/memberRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Member Routes
app.use('/member', memberRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('📚 Welcome to Library Membership System');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
