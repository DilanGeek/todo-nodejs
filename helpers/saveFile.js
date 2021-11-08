const fs = require("fs");

const path = "./db/db.json";

const saveDB = (data) => {
  const parsedData = JSON.stringify(data);
  fs.writeFileSync(path, parsedData);
};

const readDB = () => {
  if (!fs.existsSync(path)) {
    return null;
  }

  const info = fs.readFileSync(path, "utf8");
  const data = JSON.parse(info);

  return data;
};

module.exports = {
  saveDB,
  readDB,
};
