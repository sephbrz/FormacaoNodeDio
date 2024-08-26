import chalk from "chalk";
import handler from "./handler.js";

async function generatePassword () {
    console.log(chalk.green("Seu password gerado é:\n"));
    const password = await handler();
    console.log(`${password}\n`)
}

export default generatePassword