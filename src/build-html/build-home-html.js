const path = require('path');
const fs = require('fs');
const pug = require('pug');
const homeContent = require(__dirname+'/templates/home-content.json')

fs.writeFile(
  path.resolve(__dirname+'/../../dist/index.html'), 
  pug.renderFile(__dirname+'/templates/home-markup.pug', homeContent),
  (err)=>{
    if(err){
      console.log('rendering error')
    } else {
      console.log('created dist/index.html')
    }
  }
)