import { Contact, FolderOpenDot, Home, TrendingUp, UserRound } from 'lucide-react'

export const NAVIGATION_ITEMS = [
  {
    label: 'Home',
    href: '/',
    icon: Home,
  },
  {
    label: 'About',
    href: '/about',
    icon: UserRound,
  },
  {
    label: 'Experience',
    href: '/experience',
    icon: TrendingUp,
  },
  {
    label: 'Projects',
    href: '/projects',
    icon: FolderOpenDot,
  },
  {
    label: 'Contact',
    href: '#contact',
    icon: Contact,
  },
]
