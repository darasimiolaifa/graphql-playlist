const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 4000;

// allow cross site request
app.use(cors());
mongoose.connect(process.env.MONGODB_URI,
  {
    useNewUrlParser: true
  }
);
mongoose.connection.once("open", () => {
  console.log("Now connected to database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(port, () => {
  console.log(`Now listening for requests on port ${port}`);
});
