const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
	res.setHeader("Content-Type", "application/json");
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=300");

	try {
		const filePath = path.join(process.cwd(), "data", "usernames.json");
		const raw = fs.readFileSync(filePath, "utf8");
		res.status(200).send(raw);
	} catch (err) {
		res.status(500).json({ error: "Failed to load usernames" });
	}
};
