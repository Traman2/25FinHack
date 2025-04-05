// Controller for handling requests

// GET Home Route
export function getHome(req, res) {
  res.send("Hello, World!");
}

// GET /api/data Route
export function getData(req, res) {
  res.json({
    message: "Here is your data!",
    data: [1, 2, 3, 4, 5],
  });
}

// POST /api/submit Route
export function submitData(req, res) {
  const { name, age } = req.body; // Expecting 'name' and 'age' in the request body
  res.json({ message: `Hello, ${name}. You are ${age} years old.` });
}
