// Mock data for research team members
export interface Person {
  id: string;
  name: string;
  personalPageUrl: string;
  position: 'Faculty' | 'PhD Students' | 'MS/PhD Students' | 'MS Students' | 'Alumni' | 'Postdoctoral Research Associate';
  enrollYear: number;
  profileImage: string;
}

export const mockPeople: Person[] = [
  // Faculty
  {
    id: '1',
    name: 'Dr. Sarah Chen',
    personalPageUrl: 'https://cs.university.edu/~schen',
    position: 'Faculty',
    enrollYear: 2015,
    profileImage: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg'
  },
  {
    id: '2',
    name: 'Prof. Michael Rodriguez',
    personalPageUrl: 'https://cs.university.edu/~mrodriguez',
    position: 'Faculty',
    enrollYear: 2012,
    profileImage: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg'
  },
  {
    id: '3',
    name: 'Dr. Emily Watson',
    personalPageUrl: 'https://cs.university.edu/~ewatson',
    position: 'Faculty',
    enrollYear: 2018,
    profileImage: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg'
  },

  // Postdoctoral Research Associate
  {
    id: '4',
    name: 'Dr. Ahmed Hassan',
    personalPageUrl: 'https://cs.university.edu/~ahassan',
    position: 'Postdoctoral Research Associate',
    enrollYear: 2023,
    profileImage: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg'
  },
  {
    id: '5',
    name: 'Dr. Lisa Park',
    personalPageUrl: 'https://cs.university.edu/~lpark',
    position: 'Postdoctoral Research Associate',
    enrollYear: 2024,
    profileImage: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg'
  },

  // PhD Students
  {
    id: '6',
    name: 'James Thompson',
    personalPageUrl: 'https://cs.university.edu/~jthompson',
    position: 'PhD Students',
    enrollYear: 2021,
    profileImage: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg'
  },
  {
    id: '7',
    name: 'Maria Gonzalez',
    personalPageUrl: 'https://cs.university.edu/~mgonzalez',
    position: 'PhD Students',
    enrollYear: 2020,
    profileImage: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg'
  },
  {
    id: '8',
    name: 'Kevin Liu',
    personalPageUrl: 'https://cs.university.edu/~kliu',
    position: 'PhD Students',
    enrollYear: 2022,
    profileImage: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg'
  },
  {
    id: '9',
    name: 'Alexandra Smith',
    personalPageUrl: 'https://cs.university.edu/~asmith',
    position: 'PhD Students',
    enrollYear: 2019,
    profileImage: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg'
  },
  {
    id: '10',
    name: 'David Kim',
    personalPageUrl: 'https://cs.university.edu/~dkim',
    position: 'PhD Students',
    enrollYear: 2023,
    profileImage: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg'
  },

  // MS/PhD Students
  {
    id: '11',
    name: 'Rachel Green',
    personalPageUrl: 'https://cs.university.edu/~rgreen',
    position: 'MS/PhD Students',
    enrollYear: 2022,
    profileImage: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg'
  },
  {
    id: '12',
    name: 'Thomas Anderson',
    personalPageUrl: 'https://cs.university.edu/~tanderson',
    position: 'MS/PhD Students',
    enrollYear: 2023,
    profileImage: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg'
  },
  {
    id: '13',
    name: 'Sophia Williams',
    personalPageUrl: 'https://cs.university.edu/~swilliams',
    position: 'MS/PhD Students',
    enrollYear: 2021,
    profileImage: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg'
  },

  // MS Students
  {
    id: '14',
    name: 'Ryan Murphy',
    personalPageUrl: 'https://cs.university.edu/~rmurphy',
    position: 'MS Students',
    enrollYear: 2023,
    profileImage: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg'
  },
  {
    id: '15',
    name: 'Jessica Taylor',
    personalPageUrl: 'https://cs.university.edu/~jtaylor',
    position: 'MS Students',
    enrollYear: 2024,
    profileImage: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg'
  },
  {
    id: '16',
    name: 'Carlos Mendez',
    personalPageUrl: 'https://cs.university.edu/~cmendez',
    position: 'MS Students',
    enrollYear: 2024,
    profileImage: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg'
  },
  {
    id: '17',
    name: 'Amanda Johnson',
    personalPageUrl: 'https://cs.university.edu/~ajohnson',
    position: 'MS Students',
    enrollYear: 2023,
    profileImage: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg'
  },
  {
    id: '18',
    name: 'Daniel Chang',
    personalPageUrl: 'https://cs.university.edu/~dchang',
    position: 'MS Students',
    enrollYear: 2024,
    profileImage: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg'
  },

  // Alumni
  {
    id: '19',
    name: 'Dr. Jennifer Lee',
    personalPageUrl: 'https://linkedin.com/in/jenniferlee',
    position: 'Alumni',
    enrollYear: 2015,
    profileImage: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg'
  },
  {
    id: '20',
    name: 'Dr. Robert Wilson',
    personalPageUrl: 'https://linkedin.com/in/robertwilson',
    position: 'Alumni',
    enrollYear: 2016,
    profileImage: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg'
  },
  {
    id: '21',
    name: 'Dr. Nina Patel',
    personalPageUrl: 'https://linkedin.com/in/ninapatel',
    position: 'Alumni',
    enrollYear: 2017,
    profileImage: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg'
  },
  {
    id: '22',
    name: 'Mark Davis',
    personalPageUrl: 'https://linkedin.com/in/markdavis',
    position: 'Alumni',
    enrollYear: 2018,
    profileImage: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg'
  },
  {
    id: '23',
    name: 'Dr. Priya Sharma',
    personalPageUrl: 'https://linkedin.com/in/priyasharma',
    position: 'Alumni',
    enrollYear: 2019,
    profileImage: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg'
  },
  {
    id: '24',
    name: 'Alex Brown',
    personalPageUrl: 'https://linkedin.com/in/alexbrown',
    position: 'Alumni',
    enrollYear: 2020,
    profileImage: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg'
  }
];

// Helper function to group people by position
export const groupPeopleByPosition = (people: Person[]) => {
  const positionOrder: Person['position'][] = [
    'Faculty',
    'Postdoctoral Research Associate',
    'PhD Students',
    'MS/PhD Students',
    'MS Students',
    'Alumni'
  ];

  const grouped = people.reduce((acc, person) => {
    if (!acc[person.position]) {
      acc[person.position] = [];
    }
    acc[person.position].push(person);
    return acc;
  }, {} as Record<Person['position'], Person[]>);

  // Sort each group by enroll year (earliest first, except Alumni which should be latest first)
  Object.keys(grouped).forEach(position => {
    if (position === 'Alumni') {
      grouped[position as Person['position']].sort((a, b) => b.enrollYear - a.enrollYear);
    } else {
      grouped[position as Person['position']].sort((a, b) => a.enrollYear - b.enrollYear);
    }
  });

  return positionOrder.map(position => ({
    position,
    people: grouped[position] || []
  })).filter(group => group.people.length > 0);
};
