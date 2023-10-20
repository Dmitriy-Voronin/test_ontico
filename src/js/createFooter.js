const months = [
  'январь',
  'февраль',
  'март',
  'апрель',
  'май',
  'июнь',
  'июль',
  'август',
  'сентябрь',
  'октябрь',
  'ноябрь',
  'декабрь',
]

export function createFooter() {
    const footer = document.createElement('footer');
    const container = document.createElement('div');
    const contacts = document.createElement('div');
    const contactsTitle = document.createElement('h2');
    const contactsFinance = document.createElement('p');
    const contactsFinanceTitle = document.createElement('span');
    const contactsFinanceDescr = document.createElement('span');
    const contactsProgram = document.createElement('p');
    const contactsProgramTitle = document.createElement('span');
    const contactsProgramDescr = document.createElement('span');
    const contactsAddress = document.createElement('p');
    const tabsbarWrap = document.createElement('div');
    const tabsYear = document.createElement('span');
    const tabsList = document.createElement('ul');

    footer.classList.add('footer');
    container.classList.add('container', 'footer__container');
    contacts.classList.add('footer__contacts', 'contacts');
    contactsTitle.classList.add('contacts__title');
    contactsFinance.classList.add('contacts__item');
    contactsFinanceTitle.classList.add('contacts__item-title');
    contactsFinanceTitle.style.fontWeight = '400';
    contactsFinanceDescr.classList.add('contacts__item-descr');
    contactsProgram.classList.add('contacts__item');
    contactsProgramTitle.classList.add('contacts__item-title');
    contactsProgramDescr.classList.add('contacts__item-descr');
    contactsAddress.classList.add('contacts__item');
    tabsbarWrap.classList.add('footer__tabsbar-wrap');
    tabsYear.classList.add('footer__tabsbar-year');
    tabsList.classList.add('footer__tabsbar-list');

    contactsTitle.textContent = 'По любым вопросам обращайтесь:';
    contactsFinanceTitle.textContent = 'Бухгалтерия и вопросы оплаты: ';
    contactsFinanceDescr.textContent = 'support@ontico.ru +7(495) 646-07-68, @ontico_support';
    contactsProgramTitle.textContent = 'Программный комитет: ';
    contactsProgramDescr.textContent = 'speakers@ontico.ru';
    contactsAddress.textContent = '125040, Москва, Нижняя ул., д. 14, стр. 7, подъезд 1, оф. 16 ООО «Конференции Олега Бунина»';
    tabsYear.textContent = '2022 год:';

    for (const month of months) {
      const listItem = document.createElement('li');
      listItem.classList.add('footer__tabsbar-item');
      listItem.textContent = month;
      tabsList.append(listItem);
    }

    const tabs = tabsList.querySelectorAll('.footer__tabsbar-item');
   
    tabs.forEach(item => {
      item.addEventListener('click', () => {
        tabs.forEach(el => {
          el.classList.remove('footer__tabsbar-item-active')
        });
        item.classList.add('footer__tabsbar-item-active');
      })
    });

    contactsFinance.append(contactsFinanceTitle, contactsFinanceDescr);
    contactsProgram.append(contactsProgramTitle, contactsProgramDescr);
    contacts.append(contactsTitle, contactsFinance, contactsProgram, contactsAddress);
    tabsbarWrap.append(tabsYear, tabsList);
    container.append(contacts, tabsbarWrap);

    footer.append(container);

    return footer;
}