enum E_HeaderLinks {
  home = '/',
  services = '/services',
  faq = '/faq',
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
]

interface I_Numbers {
  first: string
  second: string
}

export const numbers: I_Numbers = {
  first: '+38-096-145-23-14',
  second: '+38-096-145-23-14',
}
