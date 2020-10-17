const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));
  
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
});