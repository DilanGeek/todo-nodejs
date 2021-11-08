require("colors");

const showMenu = () => {
  return new Promise((resolve, reject) => {
    console.clear();
    console.log("=====================".green);
    console.log("Choose an option".green);
    console.log("=====================".green);

    console.log(`${"1.".green} Create a new task`);
    console.log(`${"2.".green} List all tasks`);
    console.log(`${"3.".green} List Completed Tasks`);
    console.log(`${"4.".green} List Pending Tasks`);
    console.log(`${"5.".green} Complete Task(s)`);
    console.log(`${"6.".green} Delete Task`);
    console.log(`${"0.".green} Exit \n`);

    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readLine.question("Option: ", (option) => {
      readLine.close();
      resolve(option);
    });
  });
};

const pause = () => {
  return new Promise((resolve, reject) => {
    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readLine.question(`\nPRESS ${"ENTER".green} TO CONTINUE \n`, (option) => {
      readLine.close();
      resolve();
    });
  });
};

module.exports = {
  showMenu,
  pause,
};
