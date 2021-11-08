require("colors");
console.clear();

// helpers
const {
  inquirerMenu,
  puase,
  readInput,
  listTasksAfterDelete,
  confirmDelete,
} = require("./helpers/inquirer");
const { saveDB, readDB } = require("./helpers/saveFile");

// models
const Task = require("./models/task");
const Tasks = require("./models/tasks");

const main = async () => {
  console.log("Starting app...".green);

  let opt = "";
  const tasks = new Tasks();
  const taskDB = readDB();

  if (taskDB) {
    tasks.loadTaskFromArray(taskDB);
  }
  await puase();

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        // create task
        const desc = await readInput("Describe your task: ");
        tasks.createTask(desc);
        break;

      case "2":
        // list tasks
        tasks.listTasks();
        break;

      case "3":
        tasks.listPendingCompleted(true);
        break;

      case "4":
        tasks.listPendingCompleted(false);
        break;

      case "5":
        const id = await listTasksAfterDelete(tasks.listArray);
        if (id !== "0") {
          const confirm = await confirmDelete("Are You Sure ?");
          if (confirm) {
            tasks.deleteTask(id);
            console.log("Task Deleted".green);
          } else {
            console.log("Canceled".red);
          }
        }
        break;
    }

    saveDB(tasks.listArray);

    await puase();
  } while (opt !== "0");
};

main();
