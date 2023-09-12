const server = require("server");
const serverSass = require("@server/sass");

// TEMPORARY; this line will change
server.plugins.push(serverSass);

const { get } = server.router;
const { render } = server.reply;

// Render a single route for the homepage
server(get("/", () => render("index.html")));
