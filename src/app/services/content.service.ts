import { Injectable } from '@angular/core';
import { TopHeaderContent } from '../components/top-header/top-header.component';
import {
  SliderContent,
  CTAContent,
  CTA2Content,
  CopyrightContent,
  ContactContent,
  SocialMediaLink,
  FooterContent,
  ServicesContent,
  PartnersContent,
  Testimonial,
  AboutContent,
  FeaturesContent,
  ProjectsContent,
  ProjectContent,
  HeaderContent,
  ContactFormData
} from '../interfaces/content.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  email: string = '';
  phone: string = '';
  socialMediaLinks: SocialMediaLink[] = [];
  projects: ProjectContent[] = [];

  constructor() { 
    this.email = 'rhconstructs@gmail.com';
    this.phone = '+380991234567';
    this.socialMediaLinks = [
      {
        icon: 'fa-brands fa-facebook-f',
        link: 'https://www.facebook.com'
      },
      {
        icon: 'fa-brands fa-x-twitter',
        link: 'https://www.twitter.com'
      },
      {
        icon: 'fa-brands fa-instagram',
        link: 'https://www.instagram.com'
      }
    ];

    this.projects = [
      {
        src: '/project_1.jpg',
        alt: 'Interior Design Project',
        title: 'Interior Design',
        description: 'Modern home renovation',
        visible: ["Home Page", "Projects Page"],
        category: 'Interior Design'
      },
      {
        src: '/project_2.jpg',
        alt: 'Outdoor Project',
        title: 'Exterior Design',
        description: 'Garden and pathway renovation',
        visible: ["Home Page", "Projects Page"],
        category: 'Exterior Design'
      },
      {
        src: '/project_3.jpg',
        alt: 'Kitchen Design Project',
        title: 'Kitchen Design Project',
        description: 'Modern Kitchen Renovation',
        visible: ["Home Page", "Projects Page"],
        category: 'Kitchen Design'
      },
      {
        src: '/project_4.jpg',
        alt: 'Luxury Bathroom Upgrade',
        title: 'Bathroom Upgrade',
        description: 'Professional plumbing services',
        visible: ["Home Page", "Projects Page"],
        category: 'Bathroom Upgrade'
      },
    ]
  }

  getTopHeaderContent(): TopHeaderContent {
    return {
      email: this.email,
      phone: this.phone,
      workHours: 'Mon - Fri: 9 AM - 5 PM',
      icons: this.socialMediaLinks,
    }
  }

  getHeaderContent(): HeaderContent {
    return {
      brand: {
        text: 'RH CONSTRUCTS',
        link: '/'
      },
      navItems: [
        { text: 'HOME', link: '/', exact: true },
        { text: 'SERVICES', link: '/services' },
        { text: 'PROJECTS', link: '/projects' },
        { text: 'OUR TEAM', link: '/our-team' },
        // { text: 'BLOG', link: '/blog' },
        { text: 'CONTACT', link: '/contact' }
      ]
    };
  }


  getSliderContent(): SliderContent[] {
    return [
      {
        image: 'slider_1.png',
        alt: 'Home improvement worker carrying materials'
      },
      {
        image: 'slider_2.jpg',
        alt: 'Home renovation process'
      },
      {
        image: 'slider_3.jpg',
        alt: 'Completed home improvement project'
      }
    ]
  }

  getCTAContent(): CTAContent {
    return {
      icon: {
        src: 'assets/images/wallet-icon.svg',
        alt: 'Cost estimation icon',
        width: 48,
        height: 48
      },
      title: 'COST OF RENOVATION',
      description: 'Use our form to estimate the initial cost of renovation or installation',
      buttonText: 'REQUEST A QUOTE'
    };
  }

  getCTA2Content(): CTA2Content {
    return {
      title: 'EXPLORE OUR PROJECTS',
      buttonText: 'VIEW ALL PROJECTS'
    };
  }

  getCopyrightContent(): CopyrightContent {
    const currentYear = new Date().getFullYear();
    return {
      text: `© Copyright ${currentYear} rhconstructs`
    };
  }

  getContactContentForRedTheme(): { bgColor: string, items: ContactContent[] } {
    return {
      bgColor: 'red',
      items: [
        {
          icon: 'faPhone',
          label: 'Phone',
          value: this.phone,
          whiteText: true,
          borderColor: 'red'
        },
        {
          icon: 'faEnvelope',
          label: 'Email',
          value: this.email,
          whiteText: true,
          borderColor: 'red'
        },
        {
          icon: 'faLocation',
          label: '',
          value: '272 Linden Avenue, Winter Park, FL 32789',
          whiteText: true,
          borderColor: 'red'
        }
      ]
    };
  }

  getContactContentForWhiteTheme(): { bgColor: string, items: ContactContent[] } {
    return {
      bgColor: 'white',
      items: [
        {
          icon: 'faLocation',
          label: '',
          value: '272 Linden Avenue, Winter Park, FL 32789',
          whiteText: false,
          borderColor: 'gray'
        },
        {
          icon: 'faPhone',
          label: 'Phone',
          value: this.phone,
          whiteText: false,
          borderColor: 'gray'
        },
        {
          icon: 'faClock',
          label: 'Work Hours',
          value: 'Mon - Fri: 9 AM - 5 PM',
          whiteText: false,
          borderColor: 'gray'
        }
      ]
    };
  }

  getFooterContent(): FooterContent {
    return {
      about: {
        description: 'Founded by Kevin Smith back in 2000. Renovate has established itself as one of the greatest and prestigious providers of construction focused interior renovation services and building.',
        socialLinks: this.socialMediaLinks
      },
      services: [
        { icon: 'fa-check', name: 'Interior Renovation' },
        { icon: 'fa-check', name: 'Design and Build' },
        { icon: 'fa-check', name: 'Tiling and Painting' },
        { icon: 'fa-check', name: 'Paver Walkways' },
        { icon: 'fa-check', name: 'Household Repairs' },
        { icon: 'fa-check', name: 'Solar Systems' }
      ],
      categories: [
        { name: 'BUILD', link: '#' },
        { name: 'DESIGN', link: '#' },
        { name: 'FLOORING', link: '#' },
        { name: 'PAINTING', link: '#' },
        { name: 'PAVERS', link: '#' },
        { name: 'PLUMBING', link: '#' },
        { name: 'RENOVATION', link: '#' },
        { name: 'REPAIRS', link: '#' },
        { name: 'SOLAR SYSTEMS', link: '#' },
        { name: 'TILING', link: '#' }
      ],
      latestPosts: [
        {
          image: 'post_01.jpg',
          title: 'What a Difference a Few Months Make',
          date: 'April 25, 2015'
        },
        {
          image: 'post_02.jpg',
          title: 'Kitchen and Living Room Renovation',
          date: 'April 17, 2015'
        }
      ]
    };
  }

  getServicesContent(): ServicesContent {
    return {
      sectionTitle: {
        title: 'OUR SERVICES',
        description: 'With over 10 years experience and real focus on customer satisfaction, you can rely on us for your next renovation, driveway sett or home repair. We provide a professional service for private and commercial customers.'
      },
      serviceItems: [
        {
          image: 'service_1.jpg',
          title: 'INTERIOR RENOVATION',
          description: 'We can help you bring new life to existing rooms and develop unused spaces.'
        },
        {
          image: 'service_2.jpg',
          title: 'DESIGN AND BUILD',
          description: 'From initial design and project specification to archieving a high end finish.'
        },
        {
          image: 'service_3.jpg',
          title: 'TILING AND PAINTING',
          description: 'We offer quality tiling and painting solutions for interior and exterior.'
        }
      ],
      buttonText: 'VIEW ALL SERVICES'
    };
  }

  getPartnersContent(): PartnersContent {
    return {
      sectionTitle: {
        title: 'WE WORK WITH',
        description: ''
      },
      partners: [
        { name: 'Artis & Craft', logo: '/logo_01.png' },
        { name: 'Freedom', logo: '/logo_02.png' },
        { name: 'Great Village', logo: '/logo_01.png' },
        { name: 'Navigator', logo: '/logo_02.png' },
        { name: 'Royal Inc', logo: '/logo_01.png' },
        { name: 'Titan', logo: '/logo_02.png' },
        { name: 'Innovation Hub', logo: '/logo_01.png' },
        { name: 'Tech Solutions', logo: '/logo_02.png' },
        { name: 'Global Systems', logo: '/logo_01.png' },
        { name: 'Smart Build', logo: '/logo_02.png' },
        { name: 'Future Homes', logo: '/logo_01.png' },
        { name: 'Elite Works', logo: '/logo_02.png' }
      ]
    };
  }

  getTestimonialsContent(): Testimonial[] {
    return [
      {
        text: "We would like to thank Renovate Company for an outstanding effort on this recently completed project located in the Moscow. The project involved a very aggressive schedule and it was completed on time. We would certainly like to use their professional services again.",
        authorName: "MITCHEL SMITH",
        authorPosition: "CEO OF NEW PORT COMPANY"
      },
      {
        text: "The attention to detail and professional service we received from Renovate Company was exceptional. Their team showed true craftsmanship in every aspect of our home renovation project. The results exceeded our expectations.",
        authorName: "SARAH JOHNSON",
        authorPosition: "DIRECTOR OF DESIGN STUDIOS"
      },
      {
        text: "Working with Renovate Company has been a game-changing experience for our commercial projects. Their innovative solutions and commitment to deadlines make them our go-to construction partner. Highly recommended for any scale project.",
        authorName: "DAVID ANDERSON",
        authorPosition: "HEAD OF DEVELOPMENT, URBAN BUILDERS"
      },
      {
        text: "The team at Renovate Company brings both expertise and creativity to every project. Their ability to transform our vision into reality while maintaining budget constraints was impressive. The end result was exactly what we wanted.",
        authorName: "EMMA THOMPSON",
        authorPosition: "OWNER, MODERN SPACES"
      }
    ];
  }

  getFeaturesContent(): FeaturesContent {
    return {
      sectionTitle: {
        title: 'WHY CHOOSE RHconstracts',
        description: 'Founded by Serge Krasnogorov back in 2015, RHconstruct has established itself as one of the greatest and prestigious providers of construction focused interior renovation services and building.'
      },
      featuresItems: [
        {
          title: 'Experienced Team',
          icon: 'home',
          description: 'Over 10 years in the renovation and construction industry.'
        },
        {
          title: 'High-Quality Materials',
          icon: 'tool',
          description: 'RWe use only the best materials to ensure long-lasting results.'
        },
        {
          title: 'Affordable Pricing',
          icon: 'briefcase',
          description: 'Transparent and competitive pricing for all projects.'
        }
      ]
    };
  }

  getAboutContent(): AboutContent {
    return {
      sectionTitle: {
        title: 'ABOUT US',
        description: 'We provide a professional renovation and installation services with a real focus on customer satisfaction. Our installations are carried out by fully trained staff to the highest professional standards.'
      },
      aboutItems: [
        {
          title: 'OVER 15 YEARS EXPERIENCE',
          icon: 'faHelmetSafety',
          description: 'We combine quality workmanship, superior knowledge and low prices to provide you with service unmatched by our competitors.'
        },
        {
          title: 'BEST MATERIALS',
          icon: 'faPaintRoller',
          description: 'We have the experience, personel and resources to make the project run smoothly. We can ensure a job is done on time.'
        },
        {
          title: 'PROFESSIONAL STANDARDS',
          icon: 'faScrewdriverWrench',
          description: 'Work with us involve a carefully planned series of steps, centered around a schedule we stick to and daily communication.'
        }
      ]
    };
  }

  getProjectsContentForHomePage(): ProjectsContent {
    return {
      sectionTitle: {
        title: 'RECENT PROJECTS',
        description: 'Here are a few of many projects we have completed for our customers. We provide a professional service which includes consultation, free estimate, design, supply of materials and installation.'
      },
      projects: this.projects.filter(project => project.visible?.includes('Home Page'))
    };
  }

  getProjectsContentForProjectsPage(): ProjectContent[] {
    return this.projects
      .filter(project => project.visible?.includes('Projects Page'))
      .map(project => ({
        src: project.src,
        title: project.title,
        category: project.category
      }));
  }

  getBreadcrumbsProjectsPageData(): { title: string } {
    return {
      title: 'OUR PROJECTS'
    };
  }

  getBreadcrumbsServicesPageData(): { title: string } {
    return {
      title: 'OUR SERVICES'
    };
  }

  getContactFormData(): ContactFormData {
    return {
      description: 'We will contact you within one business day.',
      buttonText: 'SEND MESSAGE'
    };
  }

}

