import { Server } from "Vanilla";
const App = new Server({ hotReload: true, openBrowser: false });
let id = 0;
App.Page("/", "App"); // Entry point
App.Post("/Intro", (request) => {
    return new Response("These are the cards");
});
App.Get("/Data", (request) => {
    id++;
    return new Response(JSON.stringify({ Name: "Test" + id, Description: "This is a test for " + id }), { headers: { 'Content-Type': 'application/json' } });
});

App.Start();
