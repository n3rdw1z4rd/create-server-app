#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const projectName = process.argv[2] || "server";
const projectPath = path.join(process.cwd(), projectName);

if (fs.existsSync(projectPath)) {
    console.error(`Error: Directory ${projectName} already exists.`);
    process.exit(1);
}

console.log(`\n🚀 Creating TypeScript server project: ${projectName}\n`);
fs.cpSync(path.resolve(__dirname, '../template'), projectPath, { recursive: true });

console.log("📦 Copying project template folder...");
execSync("npm init -y", { cwd: projectPath, stdio: "inherit" });

console.log("📥 Installing dependencies...");
execSync("npm install express dotenv", { cwd: projectPath, stdio: "inherit" });

console.log("📥 Installing dev dependencies...");
execSync(
    "npm install -D typescript ts-node @types/node @types/express nodemon",
    { cwd: projectPath, stdio: "inherit" }
);

fs.writeFileSync(
    path.join(projectPath, "default.env"),
    `DEBUG=false\nAPP_NAME=${projectName}\nHOST=0.0.0.0\nPORT=3000\n`,
);

fs.writeFileSync(
    path.join(projectPath, ".env"),
    `DEBUG=true\nAPP_NAME=${projectName}\nHOST=0.0.0.0\nPORT=3000\n`,
);

const nodemonConfig = {
    "watch": ["src"],
    "ext": "ts",
    "exec": "ts-node src/main.ts"
};

fs.writeFileSync(
    path.join(projectPath, "nodemon.json"),
    JSON.stringify(nodemonConfig, null, 2)
);

console.log("\n✅ Setup complete! To start your server:\n");
console.log(`cd ${projectName}`); ``
console.log("npm run dev\n");

const packageJsonPath = path.join(projectPath, "package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

packageJson.version = '0.1.0';
packageJson.scripts = {
    "dev": "nodemon",
    "build": "tsc",
    "start": "node dist/main.js"
};

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
