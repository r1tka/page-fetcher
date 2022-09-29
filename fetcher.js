const request = require ('request');
const fs = require('fs')

const data = process.argv.slice(2)
console.log(data)
request(data[0], (error, response, body) => {
  fs.writeFile(data[1], body, function (err) {
    if (err) throw err;
    const fileSize = fs.statSync(data[1]).size;
    console.log('fileSize::::::',fileSize)
    console.log(`Downloaded and saved ${fileSize} bytes to ${data[1]}`)
  })
});
