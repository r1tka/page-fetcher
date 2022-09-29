const data = process.argv.slice(2)
const request = require ('request');
const fs = require('fs')

console.log(data)
request(data[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
fs.writeFile(data[1], 'TEXT', function (err) {
  if (err) throw err;
  const fileSize = fs.statSync(data[1]).size;
  console.log('fileSize::::::',fileSize)
  console.log(`Downloaded and saved ${fileSize} bytes to ${data[1]}`)
})