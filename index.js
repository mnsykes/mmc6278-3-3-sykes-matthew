const app = require("./app");
const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log("App started:");
	console.log("http://localhost:" + PORT);
});