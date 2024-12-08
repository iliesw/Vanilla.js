# 🍦 Vanilla Framework

A lightweight, fast, and intuitive web framework for Bun runtime that makes
building web applications a breeze.

<br>

# ✨ Features

- 🚀 **Fast Performance**: Built specifically for Bun runtime
- 🔥 **Hot Reload**: Real-time development updates
- 🧩 **Component System**: Reusable HTML components
- 📄 **View System**: Dynamic view loading
- 🛣️ **Intuitive Routing**: Simple and flexible routing system
- 🎨 **Auto Font Loading**: Automatic CSS generation for fonts
- 🔌 **Zero Dependencies**: Lightweight and self-contained

<br>

# 🚀 Quick Start

```javascript
import { Server } from "Vanilla";
const App = new Server({ hotReload: true });

App.Page("/", "Main"); // Server a Page
App.Page("/test", "Test"); // 404

App.Start();
```

<br>

# 📁 Project Structure ( Configurable )

```
YourProject/
├── Frontend/
│   ├── Assets/
│   │   ├── Css/
│   │   ├── Fonts/
│   │   └── ...
│   ├── Components/
│   ├── Pages/
│   └── Views/
└── server.js
```

<br>

# 🛠️ Components

### Create reusable components in your Components directory:

📂 Frontend/Components/Card.html

```html
<Card style="--Color: {Color}">
    <h1>This is a Card Component</h1>
    <p>this is a {Color} Card</p>
    <style>
        card {
            background-color: var(--Color);
            border-radius: 10px;
            width: 300px;
            height: 200px;
            border: 2px solid #ffffff62;
            box-shadow: 0 0 500px 0 var(--Color);
        }
    </style>
</Card>
```

### Use components in your pages:

📂 Frontend/Pages/Home.html

```html
<Card Color="red"></Card>
```

<br>

# 🖼️ Views

Views are reusable template fragments that can be dynamically loaded into your
pages. They support both static content and dynamic data binding.

## Creating Views

Create view templates in your Views directory:

📂 Frontend/Views/UserCard.html

```html
<UserCard>
    <h2>{username}</h2>
    <p>{bio}</p>
    <Stats>
        <span>Followers: {followers}</span>
        <span>Following: {following}</span>
    </Stats>
    <style>
        usercard {
            padding: 1rem;
            border: 1px solid #ddd;
            border-radius: 8px;
        }
    </style>
</UserCard>
```

## Using Views

Views can be included in pages using the `<View>` component with optional data
binding:

```html
<View src="UserCard"></View>
```

### View Features

- 🔄 **Hot Reload Support**: Views update automatically during development
- 📦 **Scoped Styling (TODO)**: CSS defined within views only affects that view
- 🎯 **Lazy Loading (TODO)**: Views are loaded only when needed

## 🛣️ Routing

```javascript
// Basic route
server.Get("/hello", async (request) => {
    return new Response("Hello!");
});

// Route with parameters
server.Get("/users/:id", async (request, id) => {
    return new Response(`User ID: ${id}`);
});

// Serve a page
server.Page("/about", "About");
```

# ⚙️ Configuration

```javascript
const config = {
    port: 3000, // Server port
    hotReload: true, // Enable hot reload
    static: "./public", // Static files directory
    views: "./views", // Views directory
    components: "./components", // Components directory
    pages: "./pages", // Pages directory
};

const server = new Server(config);
```

# 🔥 Hot Reload

Hot reload is automatically enabled when `hotReload: true` is set in the
configuration. Changes to components, views, or pages will automatically refresh
the browser.

# 🎨 Font Loading

Place your font files in the Assets/Fonts directory, and Vanilla will
automatically generate a CSS file with @font-face declarations.

# 📝 HTTP Methods

```javascript
server.Get("/api/users", callback);
server.Post("/api/users", callback);
server.Put("/api/users/:id", callback);
server.Delete("/api/users/:id", callback);
```

# 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

# 📄 License

MIT License - feel free to use this in your own projects!

# 🙏 Support

If you find this framework helpful, please give it a star ⭐️
