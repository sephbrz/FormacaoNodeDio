import prompt from 'prompt';
import mainPrompt from './prompts/main-prompt.js';
import createQRCode from './services/qrcode/create.js';
import generatePassword from './services/password/create.js';

async function main () {
    prompt.get(mainPrompt, async (err, choice) => {
        if (err) console.log(err);
        if (choice.selection === "1") await createQRCode();
        if (choice.selection === "2") await generatePassword();
    })
    prompt.start()
}

main();