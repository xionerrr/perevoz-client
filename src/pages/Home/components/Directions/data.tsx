interface I_DirectionItems {
  label: string
  image: string
  directions: string[]
}

export const directionItems: I_DirectionItems[] = [
  {
    label: 'Україна',
    image: 'https://yourtransfer.net/wp-content/uploads/hp-directions-ukraine.png',
    directions: ['Київ', 'Житомир', 'Рівне', 'Львів', 'Ковель', 'Луцьк', 'Сарни', 'Коростень'],
  },
  {
    label: 'Польща',
    image: 'https://yourtransfer.net/wp-content/uploads/hp-directions-hungary.png',
    directions: ['Варшава', 'Люблін', 'Білосток', 'Сувалки'],
  },
  {
    label: 'Литва',
    image: 'https://yourtransfer.net/wp-content/uploads/hp-directions-austria.png',
    directions: ['Вільнюс', 'Каунас', 'Шяуляй', 'Клайпеда'],
  },
  {
    label: 'Латвія',
    image: 'https://yourtransfer.net/wp-content/uploads/hp-directions-slovakia.png',
    directions: ['Рига', 'Юрмала', 'Єлгава'],
  },
  {
    label: 'Естонія',
    image: 'https://yourtransfer.net/wp-content/uploads/hp-directions-ukraine.png',
    directions: ['Таллін', 'Тарту', 'Пярну'],
  },
]
