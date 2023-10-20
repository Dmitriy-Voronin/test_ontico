import { getData } from "./api.js";
import { createListItem } from "./createListItem.js";

export async function createSection() {

  const data = await getData();
  console.log(data.result);
  const section = document.createElement('section');
  const container = document.createElement('div');
  const cardList = document.createElement('ul');

  section.classList.add('timetable');
  container.classList.add('container', 'timetable__container');
  cardList.classList.add('timetable__list', 'list');

  for (const item of data.result) {
    const listItem = createListItem(item);
    cardList.append(listItem);
  }

  container.append(cardList);
  section.append(container);

  return section;
}