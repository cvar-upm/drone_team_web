export interface Edition {
  /** Anchor id on the competition page */
  id: string;
  label: string;
  result?: string;
}

export interface Competition {
  slug: string;
  name: string;
  fullName: string;
  logo: string;
  image: string;
  editions: Edition[];
}

export const competitions: Competition[] = [
  {
    slug: 'A2RL',
    name: 'A2RL',
    fullName: 'Abu Dhabi Autonomous Racing League',
    logo: '/a2rl.png',
    image: '/a2rl_dron.png',
    editions: [
      { id: 'season2', label: 'Season 2 · 2026', result: '2nd place, Silver Multi-Drone Race' },
      { id: 'season1', label: 'Season 1 · 2025', result: 'Top 8 finalist' },
    ],
  },
  {
    slug: 'ICUAS',
    name: 'ICUAS',
    fullName: 'International Conference on Unmanned Aircraft Systems',
    logo: '/icuas.png',
    image: '/icuas23/icuas23_4.png',
    editions: [
      { id: '2024', label: '2024', result: '9th place' },
      { id: '2023', label: '2023', result: '1st place' },
      { id: '2022', label: '2022', result: '1st place' },
    ],
  },
  {
    slug: 'IMAV',
    name: 'IMAV',
    fullName: 'International Micro Air Vehicle Competition',
    logo: '/imav.png',
    image: '/imav_dron.jpeg',
    editions: [
      { id: '2025', label: '2025', result: 'Best Technical Description Award' },
      { id: '2022', label: '2022', result: 'Best Gates Passing Award' },
      { id: '2019', label: '2019' },
    ],
  },
  {
    slug: 'MBZIRC',
    name: 'MBZIRC',
    fullName: 'Mohamed Bin Zayed International Robotics Challenge',
    logo: '/MBZIRC.png',
    image: '/MBZIRC_dron.jpg',
    editions: [{ id: '2020', label: '2020', result: '3rd place, Grand Challenge' }],
  },
  {
    slug: 'OpenCV',
    name: 'OpenCV',
    fullName: 'OpenCV AI Competition',
    logo: '/opencv_logo.png',
    image: '/opencv.png',
    editions: [{ id: '2021', label: '2021', result: '3rd Regional Prize' }],
  },
];

export function getCompetition(slug: string): Competition {
  const competition = competitions.find((c) => c.slug === slug);
  if (!competition) throw new Error(`Unknown competition "${slug}"`);
  return competition;
}
