const express = require('express');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('Backend is working..');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const mysql = require('mysql2');
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.post('/api/signup', async (req, res) => {
    try {
      const { name, email, password, dob, gender } = req.body;
      if (!name || !email || !password || !dob || !gender) {
        return res.status(400).json({ error: 'All fields are required' });
      }
  
      const type_of_user = "student";
  
      // Check if user exists
      const [existingUsers] = await db.promise().query('SELECT * FROM users WHERE email = ?', [email]);
  
      if (existingUsers.length > 0) {
        return res.status(400).json({ error: 'User already exists' });
      }
  
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Insert user
      await db.promise().query(
        'INSERT INTO users (name, email, password, dob, gender, type_of_user) VALUES (?, ?, ?, ?, ?, ?)',
        [name, email, hashedPassword, dob, gender, type_of_user]
      );
  
      res.json({ message: 'Signup successful!' });
  
    } catch (err) {
      console.error('Signup Error:', err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// Login Route
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    // Check if user exists
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) {
            return res.status(400).json({ error: 'User does not exist' });
        }

        const user = results[0];

        // Compare the passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        // Update last login time
        db.query('UPDATE users SET last_login = NOW() WHERE id = ?', [user.id]);

        res.json({ message: 'Login successful', user });
    });
});

