const esbuild = require("esbuild");
const sassPlugin = require("esbuild-plugin-sass");

esbuild
    .build({
        entryPoints: ["./sass/index.scss"],
        bundle: true,
        outfile: "./public/index.css",
        plugins: [sassPlugin()],
    })
    .catch((e) => console.error(e.message));

console.log("done creating css");

esbuild.build({
    entryPoints: ["src/app/main.tsx"],
    bundle: true,
    outfile: "public/app.js",
})

console.log("done creating js");