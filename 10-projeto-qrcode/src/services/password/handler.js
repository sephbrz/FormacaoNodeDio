async function allowedCharacters() {
    let allowed = [];
  
    if (process.env.uppercase_letters === "true")
        allowed.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  
    if (process.env.lowercase_letters === "true")
        allowed.push(..."abcdefghijklmnopqrstuvwxyz");
  
    if (process.env.numbers === "true") allowed.push(..."0123456789");
  
    if (process.env.special_chars === "true")
        allowed.push(..."!@#$%^&*()-_");
  
    return allowed;
  }

async function handler() {
    let characters = []
    let password = ""
  
    const passwordLength = process.env.PASSWORD_LENGTH;
    characters = await allowedCharacters();
  
    for (let i = 0; i < passwordLength; i++) {
      const index = Math.floor(Math.random() * characters.length);
      password += characters[index];
    }
  
    return password;
  }

export default handler;