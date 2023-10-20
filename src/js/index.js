import { createFooter } from "./createFooter.js";
import { createSection } from "./createSection.js";

async function render() {
  const siteContainer = document.createElement('div');
  siteContainer.classList.add('site-container');
  const main = document.createElement('main');
  const section = await createSection();
  const footer = createFooter();
  main.append(section);
  siteContainer.append(main, footer)
  document.body.append(siteContainer);
}

render();