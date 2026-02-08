import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import YoutubeIcon from '../components/Icon/YoutubeIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/test.png';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Stanley Chueh.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm currently a first-year master's student studying Electrical Engineering at <strong className="text-stone-100"><a href="https://www-en.ntut.edu.tw/" target="_blank" rel="noopener noreferrer">Taipei Tech</a></strong>,
        working as a research assistant in <strong className="text-stone-100"><a href="https://www.csltaipeitech.com/" target="_blank" rel="noopener noreferrer">City Science Lab@Taipei Tech</a></strong>. My advisor is
        <strong className="text-stone-100"><a href="https://sites.google.com/mail.ntut.edu.tw/vpilab/advisor?authuser=0" target="_blank" rel="noopener noreferrer"> Cheng-Ming Huang</a></strong>.
      </p> 
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `My study interests include Visual Language Action Models (VLA) for robotic arms,vision-based and LiDAR-based robot navigation.`,
  aboutItems: [
    {label: 'Location', text: 'Taipei, Taiwan', Icon: MapIcon},
    {label: 'Age', text: '22', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Taiwan(R.O.C)', Icon: FlagIcon},
    {label: 'Interests', text: 'Music, Bodybuilding', Icon: SparklesIcon},
    {label: 'Study', text: 'Taipei Tech', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Research Assistant @ City Science Lab', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Mandarin Chinese',
        level: 10,
      },
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'French',
        level: 2,
      },
    ],
  },
  {
    name: 'Robotic development',
    skills: [
      {
        name: 'ROS/ROS2',
        level: 8,
      },
      {
        name: 'Robotic Arms(VLAs)',
        level: 7,
      },
      {
        name: 'Navigation Algorithms',
        level: 6,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Sep 2025 - Present',
    location: 'Taipei Tech',
    title: 'Masters in Electrical Engineering',
    content: <p>Study interests include Robotic Arms, Image Processing, and Vision-based and LiDAR-based Robot Navigation(Overall GPA: 4.0)</p>,
  },
  {
    date: 'Sep 2021 - June 2025',
    location: 'Taipei Tech',
    title: 'Bachelor in Electrical Engineering',
    content: <p>Study interests include Image Processing, data augmentation in computer vision, and robot navigation(Overall GPA: 3.72)</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Sep 2023 - Present',
    location: 'City Science Lab@Taipei Tech',
    title: 'Research assistant',
    content: (
      <p>
        Assisting in developing an autonomous map-switching system for robot navigation,
        vision-based robot navigation systems for indoor environments, and co-leading the VLA project for robotic arms.
      </p>
    ),
  },
  {
    date: 'Aug 2023 - Nov 2024',
    location: 'InstAI, remote',
    title: 'Research assistant',
    content: (
      <p>
        Assisted in developing an autonomous image recognition system for edge devices, which is an end-to-end system allowing users to capture a small amount
        of data and, through data augmentation and model training, deploy a custom image recognition model on edge devices.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'StanleyChueh',
      href: 'https://github.com/StanleyChueh',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/StanleyChueh'},
  {label: 'Youtube', Icon: YoutubeIcon, href: 'https://www.youtube.com/@Stanley_Chueh'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/stanley-chueh-239421303'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/stanley_chueh/'},
];
