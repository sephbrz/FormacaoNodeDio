import chalk from "chalk";

const qrcodePrompt = [
  {
    name: "link",
    description: chalk.green.bold("Digite o link para gerar o QR Code")
  },
  {
    name: "type",
    description: chalk.green.bold(
      "Escolha o tipo de QR Code (1 - Normal ou 2 - Terminal)"
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.bold("Escolha apenas entre 1 ou 2"),
    required: true,
  }
];

export default qrcodePrompt;