const glob = require( 'glob' );  
const fs = require('fs');

const type = 'jpg';

const pattern = `images/**/*.${type}`;
const renameTo  = 'fish';

glob( pattern, function( err, files ) {
  files.forEach(file => {

      let partsArray =  file.split('/');
      partsArray.pop();
      let replace = `${partsArray.join('/')}/${renameTo}.${type}`;

      fs.rename(file, replace, function (err) {
        if (err) throw err;
        console.log(`renamed ${file} to ${replace}`);
      });
  });
});