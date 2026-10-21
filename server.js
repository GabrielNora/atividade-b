const express = require("express");
const app = express ();
const port = 3000;

app.get("/", (req,res) => {
	res.send("Hello World!");
});
app.get("/health", (req,res) => {
	res.send("OK");
});
app.get("/timestamp", (req,res) => {
	res.send(Date.now().toString());
});
app.listen(port, () => {
	console.log("Servidor rodando na porta" + port

);
}); 

















