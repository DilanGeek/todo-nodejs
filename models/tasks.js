/**
 * _list:
 *     { 'uuid-123123-123123': { id: 1, desc: asda, completedIn: 123123123}}
 *
 */

// models
const Task = require("./task");

class Tasks {
  _list = {};

  get listArray() {
    const list = [];
    Object.keys(this._list).forEach((key) => list.push(this._list[key]));
    return list;
  }

  constructor() {
    this._list = {};
  }

  loadTaskFromArray = (tasks = []) => {
    tasks.forEach((task) => {
      this._list[task.id] = task;
    });
  };

  createTask = (desc = "") => {
    const task = new Task(desc);
    this._list[task.id] = task;
  };

  listTasks = () => {
    this.listArray.forEach((v, i) => {
      const idx = `${i + 1}`.green;
      const { desc, completedIn } = v;
      const state = completedIn ? "completed".green : "pending".red;
      console.log(`${idx} ${desc} :: ${state}`);
    });
  };

  listPendingCompleted = (completed = true) => {
    let count = 0;

    this.listArray.forEach((v) => {
      const { desc, completedIn } = v;
      const state = completedIn ? "completed".green : "pending".red;

      if (completed) {
        if (completedIn) {
          count += 1;
          console.log(`${(count + ".").green} ${desc} :: ${state}`);
        }
      } else {
        if (!completedIn) {
          count += 1;
          console.log(`${(count + ".").green} ${desc} :: ${state}`);
        }
      }
    });
  };

  deleteTask = (id = "") => {
    if (this._list[id]) {
      delete this._list[id];
      console.log("Task sss".green);
    }
  };
}

module.exports = Tasks;
