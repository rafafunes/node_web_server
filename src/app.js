//console.log("Hola mundo");

const { envs } = require("./config/env");
const { startServer } = require("./server/server");

const main = () => {
  //console.log(envs);
  startServer({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH
  });
};

// función agnostica autoconvocada
// agnóstica porque no tiene nombre
// autoconvocada porque la ejecutamos con los paréntesis
(async () => {
  main();
})();
