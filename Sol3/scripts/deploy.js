// imports

const {
  TASK_FLATTEN_GET_FLATTENED_SOURCE,
} = require("hardhat/builtin-tasks/task-names");

// async main
async function main() {}

// main
TASK_FLATTEN_GET_FLATTENED_SOURCE;
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
