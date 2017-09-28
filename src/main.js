
/**
 * This is a demo...
 * 
 * @class Website
 */
class Website {
  constructor(title, url, description = '') {
    this.title = title;
    this.url = url;
    this.description = description;
  }

  goto() {
    const p = document.createElement('p');
    p.innerText = `goto xxx: ${this.title}, ${this.url}, ${this.description}`;
    document.body.appendChild(p);
  }
}

function main() {
  for (let i = 0; i < 7; i++) {
    const wb = new Website(`Title ${i}`, `http://www.${i}.com`);
    wb.goto();
  }
}

main();
