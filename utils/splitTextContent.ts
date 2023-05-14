export const SplitTextContent = (selector: any, className : string, splitBy: 'words' | 'char' = 'words') => {

    const element = document.querySelector(selector);

  if (!element) {
    throw new Error(`Element with selector "${selector}" not found`);
  }

  const textContent = element.textContent?.trim() ?? '';
  let splitText: string[];

  if (splitBy === 'words') {
    splitText = textContent.split(/\s+/);
  } else {
    splitText = textContent.split('');
  }

  const html = splitText.map((word) => `<span class="${className}">${word}</span>`).join(' ');

  element.innerHTML = html;
}
