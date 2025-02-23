import { FaUserCircle, FaTrophy } from 'react-icons/fa'
import { BsArrowRepeat } from 'react-icons/bs'
import { MdDashboard, MdSettings, MdBusinessCenter, MdLeaderboard, MdNotifications } from 'react-icons/md'
import { CgLogOut } from 'react-icons/cg'
import Partners from '../assets/svg/Partners.svg'
import Jobs from '../assets/svg/Jobs.svg'
import Relevant from '../assets/svg/Relevant-icon.svg'
import Profile from '../assets/svg/Profile-icon.svg'
import { People, Person } from '@mui/icons-material'

export const getSidebarMenuList = () => {
  return [
    {
      id: 1,
      text: 'Dashboard',
      icon: <MdDashboard />,
      path:
        localStorage.activeRole === 'SUPER_ADMIN'
          ? '/admin/dashboard'
          : localStorage.activeRole === 'CLIENT'
          ? '/client/dashboard'
          : localStorage.activeRole === 'CANDIDATE'
          ? '/candidate/dashboard'
          : '/*',

      rolePool: ['CANDIDATE', 'SUPER_ADMIN', 'CLIENT', 'PARTNER', 'PARTNER-ER', 'PARTNER-RC'],
    },
    { id: 2, text: 'Profile', icon: <FaUserCircle />, path: '/profile', rolePool: ['CANDIDATE'] },
    {
      id: 3,
      text: 'Company Profile',
      icon: <MdBusinessCenter />,
      // path: '/company-profile',
      path:
        localStorage.activeRole === 'CLIENT'
          ? '/client/company-profile'
          : localStorage.activeRole === 'PARTNER'
          ? '/partner/company-profile'
          : localStorage.activeRole === 'PARTNER-RC'
          ? '/partner-rc/company-profile'
          : '/company-profile',
      rolePool: ['CLIENT', 'PARTNER', 'PARTNER-RC'],
    },
    {
      id: 4,
      text: 'Partner Profile',
      icon: <MdBusinessCenter />,
      path: '/',
      rolePool: ['PARTNER-ER'],
    },
    {
      id: 5,
      text: 'Candidates',
      icon: <img src={Profile} alt="Profile-icon" />,
      rolePool: ['SUPER_ADMIN'],
      subNav: [
        {
          id: 1,
          text: 'Registered Candidates',
          path: '/admin/candidates/registered-candidates',
          rolePool: ['SUPER_ADMIN'],
        },
        {
          id: 2,
          text: 'Applicants List',
          path: '/admin/candidates/applicants-list',
          rolePool: ['SUPER_ADMIN'],
        },
        {
          id: 3,
          text: 'Referrals',
          rolePool: ['SUPER_ADMIN'],
          subNav: [
            {
              id: 1,
              text: 'Referred CandidatesList',
              path: '/admin/candidates/referrals/referred-candidates',
              rolePool: ['SUPER_ADMIN'],
              innerMenu: true,
            },
            {
              id: 2,
              text: 'Referred Clients',
              path: '/admin/candidates/referrals/referred-clients',
              rolePool: ['SUPER_ADMIN'],
              innerMenu: true,
            },
            { id: 2, text: 'Referred Clients', path: '/', rolePool: ['ADMIN'] },
          ],
        },
      ],
    },
    {
      id: 6,
      text: 'Clients',
      icon: <MdBusinessCenter />,
      path: '/admin/clients',
      rolePool: ['SUPER_ADMIN'],
    },
    {
      id: 7,
      text: 'Partners',
      icon: <img src={Partners} alt="partners-icon" />,
      path: '/admin/partners',
      rolePool: ['SUPER_ADMIN'],
    },
    {
      id: 8,
      text: 'Activity',
      icon: <MdLeaderboard />,
      // path: localStorage.activeRole === 'CLIENT' ? '/client/activity' : '/activity',

      rolePool: ['CANDIDATE', 'SUPER_ADMIN', 'CLIENT', 'PARTNER', 'PARTNER-ER', 'PARTNER-RC'],
      subNav: [
        {
          id: 1,
          text: 'Clients',
          rolePool: ['SUPER_ADMIN'],
          subNav: [
            {
              id: 1,
              text: 'Create a Client',
              path: '/admin/jobs/clients/create-a-client/contacts',
              rolePool: ['SUPER_ADMIN'],
              innerMenu: true,
            },
            {
              id: 2,
              text: 'Client List',
              path: '/admin/jobs/clients/create-list',
              rolePool: ['SUPER_ADMIN'],
              innerMenu: true,
            },
          ],
        },
        {
          id: 2,
          text: 'Jobs',
          rolePool: ['SUPER_ADMIN'],
          path:
            localStorage.activeRole === 'CLIENT'
              ? '/activity'
              : localStorage.activeRole === 'SUPER_ADMIN'
              ? '/admin/jobs/create-jobs/jobs'
              : '/*',

          subNav: [
            {
              id: 1,
              text: 'Create Jobs',
              path:
                localStorage.activeRole === 'CLIENT'
                  ? '/client/jobs/create-jobs/jobs'
                  : localStorage.activeRole === 'SUPER_ADMIN'
                  ? '/admin/jobs/create-jobs/jobs'
                  : '/*',
              rolePool: ['SUPER_ADMIN'],
              innerMenu: true,
            },
            {
              id: 2,
              text: 'Jobs List',
              path:
                localStorage.activeRole === 'CLIENT'
                  ? '/client/jobs/create-jobs/jobs-list'
                  : localStorage.activeRole === 'SUPER_ADMIN'
                  ? '/admin/jobs/create-jobs/jobs-list'
                  : '/*',
              rolePool: ['SUPER_ADMIN'],
              innerMenu: true,
            },
          ],
        },
        {
          id: 3,
          text: 'Candidate Process',
          path: '/admin/activity/candidate-process',
          rolePool: ['SUPER_ADMIN'],
        },
        {
          id: 4,
          text: 'Jobs',
          path: '/activity/jobs',
          rolePool: ['CANDIDATE'],
        },
        { id: 5, text: 'Saved Jobs', path: '/activity/savedjobs', rolePool: ['CANDIDATE'] },
        { id: 6, text: 'Applied Jobs', path: '/activity/appliedjobs', rolePool: ['CANDIDATE'] },
      ],
    },
    {
      id: 9,
      text: 'Relevant Positions',
      icon: <img src={Relevant} alt="Relevant-icon" />,
      path: '/clients',
      rolePool: ['PARTNER'],
    },
    {
      id: 10,
      text: 'Candidate Process',
      icon: <BsArrowRepeat />,
      path: localStorage.activeRole === 'CLIENT' ? '/client/candidateProcess' : '/ongoing',
      rolePool: ['CLIENT', 'PARTNER'],
    },
    {
      id: 11,
      text: 'Position Process',
      icon: <BsArrowRepeat />,
      path: '/ongoing',
      rolePool: ['PARTNER-ER', 'PARTNER-RC'],
    },
    {
      id: 12,
      text: 'Candidate',
      icon: <img src={Profile} alt="Profile-icon" />,
      path: '/ongoing',
      rolePool: ['PARTNER-ER', 'PARTNER-RC'],
    },
    {
      id: 13,
      text: 'Jobs',
      icon: <img src={Jobs} alt="Jobs-icon" />,
      path: '/client/jobs/create-jobs',
      rolePool: ['CLIENT'],
    },
    {
      id: 14,
      text: 'Shortlist',
      icon: <img src={Jobs} alt="Jobs-icon" />,
      path: '/ongoing',
      rolePool: ['PARTNER', 'PARTNER-ER', 'PARTNER-RC'],
    },
    {
      id: 15,
      text: 'Ongoing Process',
      icon: <BsArrowRepeat />,
      path: '/ongoing',
      rolePool: ['CANDIDATE'],
    },
    {
      id: 16,
      text: 'Referrals',
      icon: <FaTrophy />,
      rolePool: ['CANDIDATE'],
      subNav: [
        {
          id: 1,
          text: 'Refer Candidate',
          path: '/candidate/referrals/refercandidate',
          rolePool: ['CANDIDATE'],
        },
        { id: 3, text: 'My Referrals', path: '/referrals/', rolePool: ['CANDIDATE'] },
      ],
    },
    {
      id: 17,
      text: 'Notifications',
      icon: <MdNotifications />,
      path: '/admin/notifications',
      rolePool: ['SUPER_ADMIN'],
    },
    {
      id: 18,
      text: 'Settings',
      icon: <MdSettings />,
      path: '/settings',
      rolePool: ['SUPER_ADMIN'],
    },
    {
      id: 19,
      text: 'Log out',
      icon: <CgLogOut />,
      path: '/logout',
      rolePool: ['CANDIDATE', 'SUPER_ADMIN', 'CLIENT', 'PARTNER', 'PARTNER-ER', 'PARTNER-RC'],
    },
  ]
}

export const getDropdownMenuList = () => {
  return [
    {
      id: 1,
      text: 'Profile',
      icon: <Person color="white" />,
      path: '/profile',
      rolePool: ['CANDIDATE', 'SUPER_ADMIN', 'CLIENT', 'PARTNER', 'PARTNER-ER', 'PARTNER-RC'],
    },
    {
      id: 2,
      text: 'Contact Us',
      icon: <People />,
      path: '/contact',
      rolePool: [],
    },
    {
      id: 3,
      text: 'Look Up Files',
      icon: <BsArrowRepeat />,
      path: '/',
      rolePool: ['SUPER_ADMIN'],
    },
  ]
}
