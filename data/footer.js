import { Behance, Facebook, Github, LinkedIn } from './svgImages'
export const FooterData = {
  logo: '/images/logo.svg',
  logoDark: '/images/logo-light.svg',
  footerText: 'Turpis tortor nunc sed amet et faucibus vitae morbi congue sed id mauris.',
  copyright: `${new Date().getFullYear()} Aplio. All Rights Reserved`,
  email: 'info@example.com',
  phone: '+3 230 705 5448',
  expolre: [
    {
      id: 1,
      name: 'About',
      link: '/about',
    },
    {
      id: 2,
      name: 'Services',
      link: '/services',
    },
    {
      id: 3,
      name: 'Career',
      link: '/career',
    },
    {
      id: 4,
      name: 'Payment',
      link: '/home-2',
    },
    {
      id: 5,
      name: 'Pricing',
      link: '/price',
    },
    {
      id: 6,
      name: "Faq's",
      link: '/faq',
    },
    {
      id: 7,
      name: 'Testimonials',
      link: '/testimonial',
    },
  ],
  resources: [
    {
      id: 1,
      name: 'Banking',
      link: '/home-3',
    },
    {
      id: 2,
      name: 'Team',
      link: '/teams',
    },
    {
      id: 3,
      name: 'Integration',
      link: '/integration',
    },
    {
      id: 4,
      name: 'Blog',
      link: '/blog',
    },
    {
      id: 5,
      name: 'Log In',
      link: '/login',
    },
    {
      id: 6,
      name: 'Sign Up',
      link: '/signup',
    },
    {
      id: 7,
      name: '404',
      link: '/not-found',
    },
  ],

  socialLinks: [
    {
      id: 1,
      name: <Facebook />,
      link: '#',
    },
    {
      id: 2,
      name: <Github />,
      link: '#',
    },
    {
      id: 3,
      name: <LinkedIn />,
      link: '#',
    },
    {
      id: 4,
      name: <Behance />,
      link: '#',
    },
  ],
}
