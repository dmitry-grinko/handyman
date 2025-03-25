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
  AboutContent,
  FeaturesContent,
  ProjectsContent,
  ProjectContent,
  HeaderContent,
  ContactFormData,
  TeamMemberData,
  TestimonialsData
} from '../interfaces/content.interfaces';
import { OfferSectionData } from '../pages/home-page/components/offer-section/offer-section.component';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  email: string = '';
  phone: string = '';
  address: string = '';
  ccb: string = '';
  socialMediaLinks: SocialMediaLink[] = [];
  projects: ProjectContent[] = [];
  companyName: string = '';

  constructor() { 
    this.email = 'info@redhillsconstructs.org'; // TODO: change to the correct email
    this.phone = '(503) 709-7901';
    this.address = 'Oregon City, OR';
    this.ccb = 'CCB 242765';
    this.companyName = 'RedHills Constructs';

    // CCB 242765

    this.socialMediaLinks = [
      {
        icon: 'fa-brands fa-facebook-f',
        link: 'https://www.facebook.com' // TODO: change to the correct facebook link
      },
      {
        icon: 'fa-brands fa-x-twitter',
        link: 'https://www.twitter.com' // TODO: change to the correct twitter link
      },
      {
        icon: 'fa-brands fa-instagram',
        link: 'https://www.instagram.com' // TODO: change to the correct instagram link
      }
    ];

    this.projects = [
      {
        src: '/project_1.jpg',
        alt: 'Interior Design Project',
        title: 'Interior Design',
        description: 'Modern home renovation',
        visible: ["Home Page", "Projects Page", "Footer"],
        category: 'Interior Design'
      },
      {
        src: '/project_2.jpg',
        alt: 'Outdoor Project',
        title: 'Exterior Design',
        description: 'Garden and pathway renovation',
        visible: ["Home Page", "Projects Page", "Footer"],
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
      {
        src: '/project_3.jpg',
        alt: 'Luxury Bathroom Upgrade',
        title: 'Bathroom Upgrade',
        description: 'Professional plumbing services',
        visible: ["Projects Page"],
        category: 'Bathroom Upgrade'
      },
    ]
  }

  getTopHeaderContent(): TopHeaderContent {
    return {
      leftItems: [
        {
          icon: '/svg/phone_gray.svg',
          alt: 'Phone Icon',
          name: this.phone,
        },
        {
          icon: '/svg/email_gray.svg',
          alt: 'Email Icon',
          name: this.email,
        },
        {
          icon: '/svg/ccb_gray.svg',
          alt: 'CCB Icon',
          name: this.ccb,
        }
      ],
      rightItems: this.socialMediaLinks
    }
  }

  getHeaderContent(): HeaderContent {
    return {
      brand: {
        text: this.companyName.toUpperCase(),
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
        mobileImage: 'slider_1_mobile.png',
        alt: 'Home improvement worker carrying materials'
      },
      {
        image: 'slider_1.png',
        mobileImage: 'slider_2_mobile.jpg',
        alt: 'Home renovation process'
      },
      {
        image: 'slider_1.png',
        mobileImage: 'slider_3_mobile.jpg',
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
          icon: '/svg/phone_red.svg',
          label: 'Phone',
          value: this.phone,
          whiteText: true,
          borderColor: 'red'
        },
        {
          icon: '/svg/email_red.svg',
          label: 'Email',
          value: this.email,
          whiteText: true,
          borderColor: 'red'
        },
        {
          icon: '/svg/map_red.svg',
          label: '',
          value: this.address,
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
          icon: '/svg/map_red.svg',
          label: '',
          value: this.address,
          whiteText: false,
          borderColor: 'gray'
        },
        {
          icon: '/svg/phone_red.svg',
          label: 'Phone',
          value: this.phone,
          whiteText: false,
          borderColor: 'gray'
        },
        {
          icon: '/svg/ccb_red.svg',
          label: 'Oregon Construction Contractors Board',
          value: this.ccb,
          whiteText: false,
          borderColor: 'gray'
        }
      ]
    };
  }

  getFooterContent(): FooterContent {
    return {
      about: {
        title: 'About Us',
        description: 'Founded by Serge Krasnogorov back in 1998. RHC has established itself as one of the greatest and prestigious providers of construction focused interior renovation services and building.',
        socialLinks: this.socialMediaLinks
      },
      services: {
        title: 'Our Services',
        items: [
          { icon: 'fa-check', name: 'Interior Renovation' },
          { icon: 'fa-check', name: 'Design and Build' },
          { icon: 'fa-check', name: 'Tiling and Painting' },
          { icon: 'fa-check', name: 'Paver Walkways' },
          { icon: 'fa-check', name: 'Household Repairs' },
        ]
      },
      categories: {
        title: 'Categories',
        items: [
          { name: 'BUILD', link: '#' },
          { name: 'DESIGN', link: '#' },
          { name: 'FLOORING', link: '#' },
          { name: 'PAINTING', link: '#' },
          { name: 'PAVERS', link: '#' },
          { name: 'PLUMBING', link: '#' },
          { name: 'RENOVATION', link: '#' },
          { name: 'REPAIRS', link: '#' },
          { name: 'TILING', link: '#' }
        ]
      },
      latestProjects: {
        title: 'Latest Projects',
        items: this.projects
          .filter(project => project.visible?.includes('Footer'))
          .map(project => ({
            image: project.src,
            title: project.title,
            date: project.description || 'No description available'
          }))
      }
    };
  }

  getServicesContent(): ServicesContent {
    return {
      sectionTitle: {
        title: 'REDHILLS CONSTRUCTS',
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

  getTestimonialsContent(): TestimonialsData {
    return {
      icon: '/svg/feedback.svg',
      items: [
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
      ]
    };
  }

  getFeaturesContent(): FeaturesContent {
    return {
      sectionTitle: {
        title: `WHY CHOOSE ${this.companyName}`,
        description: `Founded by Serge Krasnogorov back in 1997, ${this.companyName} has established itself as one of the greatest and prestigious providers of construction focused interior renovation services and building.`
      },
      featuresItems: [
        {
          title: 'OVER 15 YEARS EXPERIENCE',
          icon: '/svg/villa.svg',
          description: 'Over 10 years in the renovation and construction industry.'
        },
        {
          title: 'BEST MATERIALS',
          icon: '/svg/material.svg',
          description: 'RWe use only the best materials to ensure long-lasting results.'
        },
        {
          title: 'PROFESSIONAL STANDARDS',
          icon: '/svg/prof_red.svg',
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
          icon: '/svg/exp_red.svg',
          description: 'We combine quality workmanship, superior knowledge and low prices to provide you with service unmatched by our competitors.'
        },
        {
          title: 'BEST MATERIALS',
          icon: '/svg/roller_red.svg',
          description: 'We have the experience, personel and resources to make the project run smoothly. We can ensure a job is done on time.'
        },
        {
          title: 'PROFESSIONAL STANDARDS',
          icon: '/svg/build_red.svg',
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

  getBreadcrumbsOurTeamPageData(): { title: string } {
    return {
      title: 'OUR TEAM'
    };
  }

  getBreadcrumbsContactPageData(): { title: string } {
    return {
      title: 'CONTACT US'
    };
  }

  getContactFormData(): ContactFormData {
    return {
      description: 'We will contact you within one business day.',
      buttonText: 'SEND MESSAGE'
    };
  }

  getTeamMembersData(): TeamMemberData[] {
    return [
      {
        name: 'MARK WHILBERG',
        position: 'CO-FOUNDER',
        description: 'Primus elite lectus tical at node. Porta commodo terminal forks sande. Nulla novum at novelle.',
        image: 'team_01.png'
      },
      {
        name: 'PHILIP BROWER',
        position: 'CO-FOUNDER',
        description: 'Primus elite lectus tical at node. Porta commodo terminal forks sande. Nulla novum at novelle.',
        image: 'team_01.png'
      },
      {
        name: 'CURTIS GREENE',
        position: 'CT-OFFICER',
        description: 'Primus elite lectus tical at node. Porta commodo terminal forks sande. Nulla novum at novelle.',
        image: 'team_01.png'
      }
    ];
  }


  getOfferSectionData(): OfferSectionData[] {
    return [
      {
        icon: '/svg/offer_red.svg',
        activeIcon: '/svg/offer_white.svg',
        buttonText: 'We Offer',
        title: 'Our Offer',
        description: 'Paetos dignissim at cursus elefeind norma arcu. Pellentesque accumsan est in tempus etos ullamcorper, sem quam suscipit lacus maecenas tortor. Erates vitae node metus.'
      },
      {
        icon: '/svg/shield_red.svg',
        activeIcon: '/svg/shield_white.svg',
        buttonText: 'We Guarantee',
        title: 'OUR WARRANTY COVERS',
        description: 'Quality service and customer satisfaction guaranteed. Our team of professionals ensures that every project meets the highest standards of excellence and craftsmanship.'
      },
      {
        icon: '/svg/truck_red.svg',
        activeIcon: '/svg/truck_white.svg',
        buttonText: 'We Provide',
        title: 'Our services',
        description: 'Comprehensive rhconstructs services for all your needs. From small repairs to major renovations, our experienced team delivers reliable solutions on time and within budget.'
      }
    ];
  }
}
