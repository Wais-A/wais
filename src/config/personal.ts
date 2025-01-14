// src/config/personal.ts
export const personalConfig = {
  firstName: 'Wais',
  lastName: 'LastName',
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: 'Full-stack Developer',
  avatar: '/images/avatar.jpg',
  location: 'America/Los_Angeles',
  languages: ['English', 'Other'],
  
  social: [
    {
      name: 'GitHub',
      icon: 'github',
      link: 'https://github.com/yourusername',
    },
    {
      name: 'LinkedIn',
      icon: 'linkedin',
      link: 'https://linkedin.com/in/yourusername',
    },
    {
      name: 'Twitter',
      icon: 'twitter',
      link: 'https://twitter.com/yourusername',
    },
    {
      name: 'Email',
      icon: 'email',
      link: 'mailto:your@email.com',
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
        images: []
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