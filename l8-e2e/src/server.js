// Import Modules
const express = require("express");
const app = express();

// Parse request bodies in middleware before handlers
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// Allow CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Create HTTP Server and Listen for Requests
app.listen(3001, async (req, res) => {
  console.log(`[OK] = HTTP Web Server Running On Port ${3001}`);

  app.post("/users/login", async (req, res) => {

    return res.status(201).json({
      message: "Login success",
    });
  });

  app.get("/users/products", async (req, res) => {
    return res.status(200).json("view success");
  });
  app.put("/users/products/:id", async (req, res) => {
    const { id } = req.params;
    const  {price:newPrice  }  = req.body;
    let updateProduct= {
      1: {
        id: 1,
        name: "coca cola can",
        price: 5
      },
      2: {
        id: 2,
        name: "sprite can",
        price: 6
      },
      3: {
        id: 3,
        name: "chipsy",
        price: 5
      },
      4: {
        id: 4,
        name: "molto",
        price: 5
      },
    }[id];
    updateProduct.price=newPrice;
    return res.status(200).json(
      updateProduct
    );
  });
  app.delete("/users/products/:id", async (req, res) => {
    const { id } = req.params;
    return res.status(200).json({
     "message": "deleted success"
    });
  });
  app.get("/users/products/:id", async (req, res) => {
    const { id } = req.params;
    return res.status(200).json(
      {
        1: {
          id: 1,
          name: "coca cola can",
          price: 5
        },
        2: {
          id: 2,
          name: "sprite can",
          price: 6
        },
        3: {
          id: 3,
          name: "chipsy",
          price: 5
        },
        4: {
          id: 4,
          name: "molto",
          price: 5
        },
      }[id]);
  });
});
