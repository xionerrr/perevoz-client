enum E_HeaderLinks {
  home = '/',
  services = '/services',
  faq = '/faq',
  partner = '/partner',
}

interface I_HeaderItems {
  label: string
  to: E_HeaderLinks
}

export const headerItems: I_HeaderItems[] = [
  {
    label: 'Головна',
    to: E_HeaderLinks.home,
  },
  {
    label: 'Послуги',
    to: E_HeaderLinks.services,
  },
  {
    label: 'Інформація',
    to: E_HeaderLinks.faq,
  },
  {
    label: 'Партнерам',
    to: E_HeaderLinks.partner,
  },
]

interface I_Numbers {
  first: string
  second: string
}

export const numbers: I_Numbers = {
  first: '+38-066-658-49-38',
  second: '+38-097-826-35-33',
}
