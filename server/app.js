const express = require('express');
// const cors = require('cors');

const app = express();
const PORT = 5000;

// app.use(cors());

app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Alice Smith', email: 'alice@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Bob Johnson', email: 'bob@example.com', phone: '987-654-3210' },
    { id: 2, name: 'Bob Johnson', email: 'bob@example.com', phone: '987-654-3210' },
    { id: 2, name: 'Bob Johnson', email: 'bob@example.com', phone: '987-654-3210' },
    { id: 2, name: 'Bob Johnson', email: 'bob@example.com', phone: '987-654-3210' },
    { id: 2, name: 'Bob Johnson', email: 'bob@example.com', phone: '987-654-3210' },
    { id: 2, name: 'Bob Johnson', email: 'bob@example.com', phone: '987-654-3210' },
    { id: 2, name: 'Bob Johnson', email: 'bob@example.com', phone: '987-654-3210' },
    { id: 2, name: 'Bob Johnson', email: 'bob@example.com', phone: '987-654-3210' },
    { id: 2, name: 'Bob Johnson', email: 'bob@example.com', phone: '987-654-3210' }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
