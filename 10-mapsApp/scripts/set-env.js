
const {writeFileSync,mkdirSync} = require('fs');

require('dotenv').config();

const targetPath = './src/environments/environment.ts';

const envFileConten = `
    export const environment = {
        mapbox_key: "${process.env['MAPBOX_KEY']}",
        otra: "PROPIEDAD",
        production: false
    }
`;
mkdirSync('./src/environments',{recursive:true})
writeFileSync(targetPath,envFileConten);