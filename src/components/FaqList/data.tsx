export interface I_FaqListItems {
  label: string
  description: string
  opened: boolean
}

export const faqListItems = [
  {
    label: 'Якими автомобілями здійснюється перевезення?',
    description:
      'Перевезення здійснюють комфортабельні мікроавтобуси, в яких встановлено 8 пасажирських місць, що дозволяє здійснити поїздку з максимальним комфортом.',
    opened: false,
  },
  {
    label: 'Скільки багажу можна брати із собою?',
    description: `Наші автомобілі обладнані містким багажним відділенням. Однак є обмеження щодо багажу, що провозиться. На одного пасажира допускається один чемодан та ручна поклажа. Якщо Ваш багаж перевищує допустимий розмір, необхідно повідомляти диспетчера. На митниці допустимо одному пасажиру проводити із собою багаж до 50 кг. Також не допустимо провозити через митницю заборонені предмети, такі як зброя, наркотики, заборонені речовини тощо. Зверніть увагу, що на митниці дуже негативно ставляться до перевезення таких продуктів харчування як сало, м'ясо, ковбаси, м'ясо птиці та молочні продукти.`,
    opened: false,
  },
  {
    label: 'Як забронювати місце?',
    description: `Бронювання місць відбувається в телефонному режимі, зателефонувавши на будь-який телефон, вказаний у контактах. Наші ввічливі диспетчери з радістю дадуть відповідь на всі Ваші запитання! Бронювати бажано за  7 дні до дати виїзду. Якщо дата випадає на святкові або вихідні дні, переконливе прохання бронювати місця за 14 днів. За день до виїзду ми з Вами зв'яжемося та повідомимо інформацію про Ваш трансфер.`,
    opened: false,
  },
  {
    label: 'Як відбувається оплата?',
    description: `Оплата по факту при посадці в автобус, розрахуватися можливо в долларах, євро, гривні.`,
    opened: false,
  },
  {
    label: 'Наскільки точний час прибуття?',
    description: `Час прибуття – орієнтовний. У більшості випадків час прибуття до того чи іншого пункту відповідає заявленому на сайті. Перевізник не відповідає за запізнення та несвоєчасне прибуття до місця призначення, якщо це стало наслідком погодних умов, тривалим проходженням блокпостів або державних кордонів, виникненням технічних несправностей, непередбачених зупинок правоохоронними органами для перевірки перевізника  чи пасажирів, дорожніх робіт, заторів на дорозі тощо.`,
    opened: false,
  },
  {
    label: 'Чи можливе перевезення тварин?',
    description: `Це питання вимагає узгодження з диспетчером. У деяких випадках ви можете розраховувати на перевезення тварини, а в деяких – ні.`,
    opened: false,
  },
  {
    label: 'Чи є зупинки на шляху прямування?',
    description: `В дорозі передбачені зупинки тривалістю 15-20 хв, переважно на АЗС, де є цивілізовані санвузли, кафе, магазини. Інтервал між зупинками 2-4 години.`,
    opened: false,
  },
  {
    label: 'Це остаточна ціна або можуть знадобитися додаткові витрати?',
    description: `Ціна за проїзд – остаточна. Додаткові витрати можуть виникнути при проходженні державних кордонів при сплаті ввізного мита, якщо такі застосовуються до предметів, які Ви ввозите. Також за порушення пасажиром адміністративного/митного кодексу, якщо до Вас застосовують штрафні санкції.`,
    opened: false,
  },
  {
    label: 'Чи повертаєте кошти, якщо людина не проїхали митницю і т.д.?',
    description: `Пасажир несе повну індивідуальну відповідальність за неналежне оформлення документів на право перетину кордонів держав за маршрутом. У разі недопущення пасажира до поїздки або зняття пасажира з автобуса під час контролю, вартість поїздки не повертається, і претензії з цього приводу не розглядаються.`,
    opened: false,
  },
]
