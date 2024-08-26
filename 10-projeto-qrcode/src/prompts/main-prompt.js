import chalk from "chalk";

const mainPrompt = [
  {
    name: "selection",
    description: chalk.green.bold(
      "Escolha qual ferramenta usar (1 - QRCODE ou 2- PASSWORD)"
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.bold("Escolha apenas entre 1 ou 2"),
    required: true,
  }
];

export default mainPrompt;