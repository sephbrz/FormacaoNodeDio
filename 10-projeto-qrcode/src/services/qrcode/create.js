import prompt from 'prompt';
import qrcodePrompt from '../../prompts/qrcode-prompt.js';
import handler from './handler.js';

async function createQRCode() {
    prompt.get(qrcodePrompt, handler)
}

export default createQRCode