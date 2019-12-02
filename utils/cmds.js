const fs = require("fs");

function get(key) {
  try {
    const passwords = read();
    return passwords[key];
  } catch (error) {
    return undefined;
  }
}

function set(key, value) {
  const passwords = read();
  passwords[key] = value;
  write(passwords);
}

function write(passwords) {
  fs.writeFileSync("./passwords.json", JSON.stringify(passwords, null, 2));
}

function read() {
  const passwordJSON = fs.readFileSync("./passwords.json", "utf-8");
  const passwords = JSON.parse(passwordJSON);
  return passwords;
}

function unset(key) {
  const passwords = read();
  delete passwords[key];
  write(passwords);
}

exports.get = get;
exports.set = set;
exports.unset = unset;
