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
    children: [
      {
        label: 'A2RL',
        href: '/competitions/A2RL',
        children: [
          { label: 'Season 2 - 2026', href: '/competitions/A2RL#season2' },
          { label: 'Season 1 - 2025', href: '/competitions/A2RL#season1' },
        ],
      },
      {
        label: 'ICUAS',
        href: '/competitions/ICUAS',
        children: [
          { label: '2024', href: '/competitions/ICUAS#2024' },
          { label: '2023', href: '/competitions/ICUAS#2023' },
          { label: '2022', href: '/competitions/ICUAS#2022' },
        ],
      },
      {
        label: 'IMAV',
        href: '/competitions/IMAV',
        children: [
          { label: '2025', href: '/competitions/IMAV#2025' },
          { label: '2022', href: '/competitions/IMAV#2022' },
          { label: '2019', href: '/competitions/IMAV#2019' },
        ],
      },
      {
        label: 'MBZIRC',
        href: '/competitions/MBZIRC',
        children: [{ label: '2020', href: '/competitions/MBZIRC#2020' }],
      },
      {
        label: 'OpenCV',
        href: '/competitions/OpenCV',
        children: [{ label: '2021', href: '/competitions/OpenCV#2021' }],
      },
    ],
  },
  {
    label: 'Divisions',
    href: '/divisions',
    children: [
      { label: 'Open Source Aerial Robotics Framework', href: '/divisions#aerostack2' },
      { label: 'Planning & Navigation', href: '/divisions#navigation&planning' },
      { label: 'Control & Trajectory Generation', href: '/divisions#control&trajectory' },
      { label: 'Localization', href: '/divisions#localization' },
      { label: 'Perception', href: '/divisions#perception' },
      { label: 'Hardware & Firmware', href: '/divisions#hardware&firmware' },
      { label: 'Robotics Simulation', href: '/divisions#simulation' },
      { label: 'Swarming', href: '/divisions#swarming' },
    ],
  },
];

export const joinLink = { label: 'Join Us', href: '/contact' };
