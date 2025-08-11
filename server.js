const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

// --- Server and Database Configuration ---
const PORT = process.env.PORT || 3001;
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'your_username',
  password: process.env.DB_PASSWORD || 'your_password',
  database: process.env.DB_NAME || 'your_database'
};

// --- Create Express App and Connect to Database ---
const app = express();
const connection = mysql.createConnection(dbConfig);

app.use(cors());

connection.connect(error => {
  if (error) {
    console.error('Error connecting to the database:', error);
    return;
  }
  console.log('Successfully connected to the database.');
});

// --- API Endpoints ---
app.get('/api/heroes', (req, res) => {
  const query = `
    SELECT
      h.id,
      h.version,
      h.hero_id,
      h.hero_key,
      h.name,
      h.title,
      h.blurb,
      h.image_full,
      h.partype,
      s.hp,
      s.hpperlevel,
      s.mp,
      s.mpperlevel,
      s.movespeed,
      s.armor,
      s.armorperlevel,
      s.spellblock,
      s.spellblockperlevel,
      s.attackrange,
      s.hpregen,
      s.hpregenperlevel,
      s.mpregen,
      s.mpregenperlevel,
      s.crit,
      s.critperlevel,
      s.attackdamage,
      s.attackdamageperlevel,
      s.attackspeedperlevel,
      s.attackspeed,
      GROUP_CONCAT(t.name) AS tags
    FROM heroes h
    LEFT JOIN hero_stats s ON h.id = s.hero_id
    LEFT JOIN hero_tags ht ON h.id = ht.hero_id
    LEFT JOIN tags t ON ht.tag_id = t.id
    GROUP BY h.id
  `;

  connection.query(query, (error, results) => {
    if (error) {
      return res.status(500).json({ error: 'Failed to fetch heroes' });
    }
    res.json(results);
  });
});

// --- Start the Server ---
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});