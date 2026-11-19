import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let products = [
  { id: 1, name: "orange", price: 35 },
  { id: 2, name: "banana", price: 20 },
  { id: 3, name: "mango", price: 45 },
];

let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "Morten" },
];

// GET routes
app.get("/user-count", (req, res) => {
  res.json({ count: users.length });
});

// Get routes from id
app.get("/products/:id", function (req, res) {
  const id = Number(req.params.id);
  const product = products.find(function (item) {
    return item.id === id;
  });

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  res.json(product);
});

// Fetch
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Users Dashboard</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f6f9;
          color: #222;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .card {
          background: white;
          padding: 32px;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          text-align: center;
        }
        .count {
          font-size: 48px;
          font-weight: bold;
          color: #2563eb;
          margin: 16px 0;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>Total Users</h1>
        <div id="user-count" class="count">Loading...</div>
        <p>Fetched live from /user-count</p>
      </div>

      <script>
        fetch("/user-count")
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            const countElement = document.getElementById("user-count");
            countElement.textContent = data.count;
          })
          .catch((error) => {
            console.log("Error loading user count:", error);
          });
      </script>
    </body>
    </html>
  `);
});

app.get("/products", (req, res) => {
  res.json(products);
});
// POST routes
app.post("/products", (req, res) => {
  const name = req.body.name;
  const price = req.body.price;

  if (!name || price === undefined) {
    return res.status(400).json({ error: "Name and price are required" });
  }
  const nextId = products.length > 0 ? products[products.length - 1].id + 1 : 1;
  const newProduct = {
    id: nextId,
    name: name,
    price: price,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// DELETE routes
app.delete("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const exists = products.some((item) => {
    return item.id === id;
  });
  if (!exists) {
    return res.status(404).json({ error: "Product not found" });
  }
  products = products.filter((item) => {
    return item.id !== id;
  });
  res.status(204).send();
});

app.listen(PORT, function () {
  console.log("Server running on port" + PORT);
});
