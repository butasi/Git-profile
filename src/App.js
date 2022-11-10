import React from 'react';
import GitProfile from '@arifszn/gitprofile';
import '@arifszn/gitprofile/dist/style.css';

function App() {
  return (
    <GitProfile
      config={{
        github: {
          username: 'butasi', // Your GitHub org/user name. (Required)
          sortBy: 'stars', // stars | updated
          limit: 10, // How many projects to display.
          exclude: {
            forks: false, // Forked projects will not be displayed if set to true.
            projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
          },
        },
        social: {
          linkedin: 'rodgers-butasi-a8b15b11b',
          twitter: 'butasi_',
          facebook: '',
          instagram: 'butasi_',
          dribbble: '',
          behance: '',
          medium: '',
          dev: '',
          stackoverflow: '', // format: userid/username
          website: 'https://arifszn.github.io',
          phone: '',
          email: 'butasi.rodgers@gmail.com',
        },
        resume: {
          fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
        },
        skills: [
          'PHP',
          'Laravel',
          'JavaScript',
          'React.js',
          'Node.js',
          'Nest.js',
          'MySQL',
          'PostgreSQL',
          'Git',
          'Docker',
          'PHPUnit',
          'CSS',
          'Antd',
          'Tailwind',
        ],
        experiences: [
          {
            company: 'Kenya Forestry Research Institute',
            position: 'ICT Assisant',
            from: 'July 2018',
            to: 'October 2018',
            companyLink: 'https://www.kefri.org',
          },
          {
            company: 'Department for Shipping and Maritime',
            position: 'ICT Technician',
            from: 'November 2021',
            to: 'February 2022',
            companyLink: 'https://knowledgehub.devolution.go.ke/kh/infrastructure/state-department-for-shipping-and-maritime/',
          },
        ],
        education: [
          {
            institution: 'The Cooperative University of Kenya',
            degree: 'Information Technology',
            from: '2017',
            to: '2018',
          },
          {
            institution: 'The Cooperative University of Kenya',
            degree: 'Business Information Technology',
            from: '2019',
            to: '2022',
          },
        ],
        // Display blog posts from your medium or dev account. (Optional)
        blog: {
          source: 'dev', // medium | dev
          username: '', // to hide blog section, keep it empty
          limit: 3, // How many posts to display. Max is 10.
        },
        googleAnalytics: {
          id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
        },
        // Track visitor interaction and behavior. https://www.hotjar.com
        hotjar: {
          id: '',
          snippetVersion: 6,
        },
        themeConfig: {
          defaultTheme: 'dark',

          // Hides the switch in the navbar
          // Useful if you want to support a single color mode
          disableSwitch: false,

          // Should use the prefers-color-scheme media-query,
          // using user system preferences, instead of the hardcoded defaultTheme
          respectPrefersColorScheme: false,

          // Hide the ring in Profile picture
          hideAvatarRing: false,

          // Available themes. To remove any theme, exclude from here.
          themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula',
            'cmyk',
            'autumn',
            'business',
            'acid',
            'lemonade',
            'night',
            'coffee',
            'winter',
            'procyon',
          ],

          // Custom theme
          customTheme: {
            primary: '#fc055b',
            secondary: '#219aaf',
            accent: '#e8d03a',
            neutral: '#2A2730',
            'base-100': '#E3E3ED',
            '--rounded-box': '3rem',
            '--rounded-btn': '3rem',
          },
        },
      }}
    />
  );
}

export default App;
