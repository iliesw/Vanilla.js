import { Server } from "Vanilla";
const App = new Server({ hotReload: true });

App.Page("/", "Main");
App.Page("/test", "Test");

App.Start();
