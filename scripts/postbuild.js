const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, '../src/components/User/user.swagger.json');
const destinationDir = path.join(__dirname, '../build/src/components/User');
const destination = path.join(destinationDir, 'user.swagger.json');

if (!fs.existsSync(destinationDir)) {
	fs.mkdirSync(destinationDir, { recursive: true });
}

fs.copyFileSync(source, destination);
console.log('user.swagger.json copied to build folder');
