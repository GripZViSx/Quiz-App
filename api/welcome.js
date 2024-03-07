const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
   const filePath = path.join(__dirname, '../public/views/welcome.html');
   const fileContents = fs.readFileSync(filePath, 'utf8');
   res.status(200).send(fileContents);
};