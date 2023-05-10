let isGenerating = false;
let timerId = null;
let codes = '';

function generateCode() {
  let code = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 16; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return `https://discord.gift/${code}`;
}

function startGeneration() {
  if (!isGenerating) {
    isGenerating = true;
    document.getElementById('generate-btn').disabled = true;
    document.getElementById('stop-btn').disabled = false;
    timerId = setInterval(generateAndAppendCode, 100);
  }
}

function stopGeneration() {
  if (isGenerating) {
    isGenerating = false;
    clearInterval(timerId);
    document.getElementById('generate-btn').disabled = false;
    document.getElementById('stop-btn').disabled = true;
  }
}

function clearTextArea() {
  codes = '';
  document.getElementById('code-area').value = '';
}

function downloadCodes() {
  if (codes) {
    let filename = `discord-nitro-codes-${Date.now()}.txt`;
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(codes));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
}

function generateAndAppendCode() {
  let code = generateCode();
  codes += code + '\n';
  document.getElementById('code-area').value += code + '\n';
}
