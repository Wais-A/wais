// Personal configuration including name, role, and social links

export const personalConfig = {
  firstName: 'Wais',
  lastName: 'LastName',
  get name() {
    return `${this.firstName} ${this.lastName}`; // Full name getter
  },
  role: 'Full-stack Developer', // Professional role
  avatar: '/images/avatar.jpg', // Path to avatar image
  location: 'America/New_York', // Timezone location
  languages: ['English', 'Other'], // Languages spoken
  
  social: [
    {
      name: 'GitHub',
      icon: 'github',
      link: 'https://github.com/yourusername', // GitHub profile link
    },
    {
      name: 'LinkedIn',
      icon: 'linkedin',
      link: 'https://linkedin.com/in/yourusername', // LinkedIn profile link
    },
    {
      name: 'Twitter',
      icon: 'twitter',
      link: 'https://twitter.com/yourusername', // Twitter profile link
    },
    {
      name: 'Email',
      icon: 'email',
      link: 'mailto:your@email.com', // Email contact link
    }
  ],

  experience: {
    work: [
      {
        company: 'Company Name',
        timeframe: '2022 - Present',
        role: 'Full-stack Developer',
        achievements: [
          'Achievement 1',
          'Achievement 2'
        ],
        images: [] // Related images or logos
      }
    ],
    education: [
      {
        institution: 'University Name',
        description: 'Computer Science Degree',
        timeframe: '2018-2022'
      }
    ]
  }
};