require("dotenv").config();

const express = require("express");
const app = express();
const { getJobs, getCityInfo } = require("./util.js");

app.use(express.static("public"));
app.use(express.json());

app.get("/api/city/:city", async (req, res) => {
	try {
		let jobs = await getJobs(req);
		let cityInfo = await getCityInfo(req);
		if (!cityInfo && !jobs) return res.status(404).json({ error: "Data not found" });
		res.json({ jobs, cityInfo });
	} catch (err) {
		return res.status(404).json({
			error: "Data not found"
		});
	}
});

module.exports = app;
