const { get, set, unset } = require("./utils/cmds.js");

const [cmd, key, value] = process.argv.slice(2);
const [cmd, key, value] = userArgs;

const passwords = {
  wifi: 123,
  mac: "mac321"
};

switch (cmd) {
  case "get":
    const results = get(key);
    console.log(result);
    break;

  case "set":
    set(key, value);
    break;

  case "unset":
    unset(key);
    break;

  default:
    console.error("Unknown command");
}
