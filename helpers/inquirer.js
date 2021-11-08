const inquirer = require("inquirer");
require("colors");

const menuOpts = [
  {
    type: "list",
    name: "option",
    message: "What do you want to do?",
    choices: [
      {
        value: "1",
        name: `${"1.".green} Add a new task`,
      },
      {
        value: "2",
        name: `${"2.".green} View all tasks`,
      },
      {
        value: "3",
        name: `${"3.".green} View all completed tasks`,
      },
      {
        value: "4",
        name: `${"4.".green} View all uncompleted tasks`,
      },
      {
        value: "5",
        name: `${"5.".green} Delete task`,
      },
      {
        value: "0",
        name: `${"0.".green} Exit`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("==================".green);
  console.log("Choose an option".white);
  console.log("==================".green);

  const { option } = await inquirer.prompt(menuOpts);
  return option;
};

const puase = async () => {
  const questions = [
    {
      type: "input",
      name: "enter",
      message: `Press ${"Enter".green} to continue...`,
    },
  ];
  console.log(`\n`);
  await inquirer.prompt(questions);
};

const readInput = async (message) => {
  const questions = [
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Please type a value!!";
        }
        return true;
      },
    },
  ];

  const { desc } = await inquirer.prompt(questions);
  return desc;
};

const listTasksAfterDelete = async (tasks = []) => {
  const choices = tasks.map((task, index) => {
    const idx = `${index + 1}`.green;

    return {
      value: task.id,
      name: `${idx}. ${task.desc}`,
    };
  });

  const questions = [
    {
      type: "list",
      name: "task",
      message: "Choose a task to delete",
      choices,
    },
  ];

  const { id } = await inquirer.prompt(questions);
  return id;
};

const confirmDelete = async (message) => {
  const questions = [
    {
      type: "confirm",
      name: "ok",
      message,
    },
  ];

  const { ok } = await inquirer.prompt(questions);
  return ok;
};

module.exports = {
  inquirerMenu,
  puase,
  readInput,
  listTasksAfterDelete,
  confirmDelete
};
