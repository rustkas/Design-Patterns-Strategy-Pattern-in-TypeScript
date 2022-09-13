# Design Patterns in TypeScript

- [Chain of Responsibility Pattern](chain-of-responsibility)
- [Strategy Pattern](strategy-pattern)
- [Template Method Pattern](template-method-pattern)

## How to start
- Creat new project directory. For instance, `mkdir template-method-pattern && cd template-method-pattern`
 - Creat new project. Setup Node.js package.json `npm init -y`
 - Add TypeScript as a dev dependency `npm install typescript --save-dev`
- Install ambient Node.js types for TypeScript `npm install @types/node --save-dev`
- Create a tsconfig.json `npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs true --noImplicitAny true`
- Create the src folder and create our first TypeScript file `mkdir src && touch src/index.ts`

- Write some code. For instance `console.log('Hello world!')`
- Compiling our TypeScript `npx tsc`
- Check out our compilled code `build/index.js`

## Useful configurations & scripts

### Build and run

- Add more packages `npm install --save-dev ts-node nodemon`.
- Add a `touch nodemon.json` config.
- Creating production builds. Install `rimraf`. `npm install --save-dev rimraf`.
- Add  "build" to your scripts commands `package.json`
- Production startup script. In order to start the app in production, all we need 
to do is run the `build` command first, and then execute the compiled JavaScript at `build/index.js`.
- The startup script looks like this `"start": "npm run build && node build/index.js"`

[Basic TypeScript starter](https://github.com/stemmlerjs/simple-typescript-starter)
