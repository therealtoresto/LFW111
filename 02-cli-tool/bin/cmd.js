#!/usr/bin/env node
import { add } from "../src/utils.js";
import { Command } from "commander";
// Create a new Command Program
const program = new Command();

const usage = (msg = 'Back office for My App') => {
  console.log(`\n${msg}\n`);
};

// Create a command for listing categories by IDs
program
  // Set the command name
  .command("add")
  // Set the command description
  .description("Add Product by ID to a Category")
  // Set the category to be required
  .argument("<CATEGORY>", "Product Category")
  // Set the argument ID to be required
  .argument("<ID>", "Product ID")
  // Set the argument NAME to be required
  .argument("<NAME>", "Product Name")
  // Set the argument AMOUNT to be required
  .argument("<AMOUNT>", "Product RRP")
  // Set the argument INFO to be optional
  .argument("[INFO...]", "Product Info")
  // Set the action to be executed when the command is run
  .action(
    async (category, id, name, amount, info) =>
      await add(category, id, name, amount, info)
  );

// Parse the arguments from process.argv
program.parse();
