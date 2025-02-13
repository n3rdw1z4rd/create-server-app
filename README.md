# create-ts-server-app

🚀 **A simple CLI tool to generate a TypeScript + Express server**

This tool quickly sets up a fully configured **TypeScript + Express** project, saving you time and effort!

## ✨ Features
- TypeScript support
- Express pre-configured with routing
- `.env` support using `dotenv`
- Nodemon for development
- Pre-configured `tsconfig.json`
- Includes a `types.d.ts` file for global declarations

## 📦 Installation & Usage

You don't need to install anything globally! Just use **npx**:

```sh
npx n3rdw1z4rd/create-ts-server-app my-app
```

Replace `my-app` with your desired project name.

## 📂 Project Structure

After running the command, your project will be structured like this:

```
my-app/
│── src/
│   ├── routes/
│   │   ├── index.ts       # Entry point for all routes
│   │   ├── test-page.ts   # And example test page - this is not a good example how to create your pages.
│   ├── types/
│   │   ├── types.d.ts     # Global TypeScript declarations
|   ├── main.ts            # Loads .env file and starts the server
│   ├── server.ts          # Main server file
│── .env                   # Dev environemnt variables
│── .gitignore             # Ignore unnecessary files
│── default.env            # Default environment variables
│── nodemon.json           # Auto-restart server on changes
│── package-lock.json      
│── package.json           # Project metadata
│── tsconfig.json          # TypeScript configuration
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
MIT License © 2025 John Wakley

---

Happy coding! 🚀

