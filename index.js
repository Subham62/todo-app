//  ----- METHOD-1---------
// NOTE ->  if app.listen is defined in "app.js" file then only import this to execute the app 
// require("./app"); 


//---------METHOD-2-----------
// const express = require("express") ;
// const app = express();

// require("./app");     //  only use for import the full file  , if " module.exports = app;" is not exported   

// const PORT = 8000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


//---------METHOD-3---------------------
const app1 = require("./app");     //  "module.exports = app;" is exported then no need to define app
// const PORT = process.env.PORT;
const PORT = process.env.PORT ||  8000;   //  if process.env executes then ok otherwise 8000 will be assigned
app1.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});