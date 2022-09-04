enum E_SidebarLinks {
  home = '/',
  services = '/services',
  faq = '/faq',
  partner = '/partner',
  package = '/package',
  autopark = '/autopark',
}

interface I_SidebarItems {
  label: string
  to: E_SidebarLinks
}

export const sidebarItems: I_SidebarItems[] = [
  {
    label: 'Головна',
    to: E_SidebarLinks.home,
  },
  {
    label: 'Послуги',
    to: E_SidebarLinks.services,
  },
  {
    label: 'Інформація',
    to: E_SidebarLinks.faq,
  },
  {
    label: 'Партнерам',
    to: E_SidebarLinks.partner,
  },
  {
    label: 'Посилки',
    to: E_SidebarLinks.package,
  },
  {
    label: 'Автопарк',
    to: E_SidebarLinks.autopark,
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
