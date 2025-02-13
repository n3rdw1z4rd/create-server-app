# create-ts-server-app

🚀 **A simple CLI tool to generate a TypeScript + Express server**

This tool quickly sets up a fully configured **TypeScript + Express** project, saving you time and effort!

## ✨ Features
- TypeScript support
- Express pre-configured with routing
- `.env` support using `dotenv`
- Nodemon for development
- Pre-configured `tsconfig.json`
- Includes a `server.d.ts` file for global declarations

## 📦 Installation & Usage

You don't need to install anything globally! Just use **npx**:

```sh
npx create-ts-server-app my-app
```

Replace `my-app` with your desired project name.

## 📂 Project Structure

After running the command, your project will be structured like this:

```
my-app/
│── src/
│   ├── server.ts          # Main server file
│   ├── routes/
│   │   ├── index.ts       # Example route
│   ├── config/
│   ├── types/
│   │   ├── server.d.ts    # Global TypeScript declarations
│── .env                   # Environment variables
│── .gitignore             # Ignore unnecessary files
│── package.json           # Project metadata
│── tsconfig.json          # TypeScript configuration
│── nodemon.json           # Auto-restart server on changes
```

## 🏃 Running the Server

After generating your project, navigate to your new folder:

```sh
cd my-app
```

### **Start in development mode**
```sh
npm run dev
```
This will run the server with **nodemon**, automatically restarting on file changes.

### **Build and run in production mode**
```sh
npm run build
npm start
```

## 🔧 Customization
Want to modify the template? You can fork this repo, adjust the `template/` folder, and publish your own version!

## 📜 License
MIT License © 2025 Your Name

---

Happy coding! 🚀

