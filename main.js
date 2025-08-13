import init, { parse_markdown } from './pkg/wasm_markdown_editor';

async function run() {
  // Initialize the WebAssembly module.
  await init();

  const markdownInput = document.getElementById('markdown-input');
  const htmlOutput = document.getElementById('html-output');

  // Set default text
  const defaultMarkdown = '$ Hello, WebAssembly!\n\nType your **Markdown** here.';
  markdownInput.value = defaultMarkdown;
  htmlOutput.innerHTML = parse_markdown(defaultMarkdown);

  // Add event listener for real-time updates.
  markdownInput.addEventListener('input', () => {
    const htmlText = parse_markdown(markdownInput.value);
    htmlOutput.innerHTML = htmlText;
  });
}

run();