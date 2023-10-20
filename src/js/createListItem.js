export function createListItem(item) {
  const listItem = document.createElement('li');
  const card = document.createElement('article');
  const cardDate = document.createElement('div');
  const cardDateInner = document.createElement('span');
  const cardLogo = document.createElement('img');
  const cardTitle = document.createElement('h2');
  const cardDescr = document.createElement('p');
  const location = document.createElement('div');
  const locationDescr = document.createElement('span');
  const locationImg = document.createElement('span');
  const cardLink = document.createElement('div');
  const cardLinkValue = document.createElement('a');
  const btnBlock = document.createElement('div');
  const buyBtn = document.createElement('button');
  const moreBtn = document.createElement('a');


  listItem.classList.add('list__item', 'item');
  card.classList.add('item__card', 'card');
  cardDate.classList.add('card__date');
  cardDateInner.classList.add('card__date-inner');
  cardLogo.classList.add('card__logo');
  cardTitle.classList.add('card__title');
  cardDescr.classList.add('card__descr');
  location.classList.add('card__location');
  locationDescr.classList.add('card__location-descr');
  locationImg.classList.add('card__location-img');
  cardLink.classList.add('card__link');
  cardLinkValue.classList.add('card__link-value');
  btnBlock.classList.add('card__btns-wrap');
  buyBtn.classList.add('card__buy-btn', 'btn-reset');
  moreBtn.classList.add('card__more-btn');


  cardDateInner.textContent = item.date_range.replace('&mdash;', '-');
  cardLogo.src = item.logo;
  cardTitle.textContent = item.name;
  cardDescr.textContent = item.brief;
  locationDescr.textContent = item.location;
  cardLinkValue.href = 'highload.ru';
  cardLinkValue.textContent = 'highload.ru';
  buyBtn.textContent = 'Купить билет';
  moreBtn.textContent = 'Подробнее';
  moreBtn.href = item.uri;

  btnBlock.append(buyBtn, moreBtn);
  location.append(locationDescr);
  cardLink.append(cardLinkValue);
  cardDate.append(cardDateInner);
  card.append(cardDate,
    cardLogo,
    cardTitle,
    cardDescr,
    location,
    cardLink,
    btnBlock
  );
  listItem.append(card);

  return listItem;
}