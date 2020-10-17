const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
  
require("./routes/api/apiRoutes")(app);
require("./routes/api/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
});