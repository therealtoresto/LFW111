#!/usr/bin/env node
import { update } from "../src/utils.js";
import { Command } from "commander";
// Create a new Command Program
const program = new Command();

const usage = (msg = 'Back office for My App') => {
  console.log(`\n${msg}\n`);
};

// Create a command for adding a new order
program
  // Set the command name
  .command("update")
  // Set the argument ID to be required
  .argument("<ID>", "Order ID")
  // Set the argument AMOUNT to be required
  .argument("<AMOUNT>", "Order Amount")
  // Set the action to be executed when the command is run
  .action(async (id, amount) => await updateItem(id, amount));

// Parse the arguments from process.argv
program.parse();
