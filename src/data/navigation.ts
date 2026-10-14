import { competitions } from './competitions';
import { divisions } from './divisions';

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export const navigation: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Members', href: '/members' },
  {
    label: 'Competitions',
    href: '/competitions',
    children: competitions.map((c) => ({
      label: c.name,
      href: `/competitions/${c.slug}`,
      children: c.editions.map((e) => ({ label: e.label, href: `/competitions/${c.slug}#${e.id}` })),
    })),
  },
  {
    label: 'Divisions',
    href: '/divisions',
    children: divisions.map((d) => ({ label: d.title, href: `/divisions#${d.id}` })),
  },
];

export const joinLink = { label: 'Join Us', href: '/contact' };
