import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page.component';
import { ProjectsPage } from './pages/projects-page/projects-page.component';
import { ServicesPage } from './pages/services-page/services-page.component';
import { ContactPage } from './pages/contact-page/contact-page.component';
import { OurTeamPage } from './pages/our-team/our-team-page.component';
export const routes: Routes = [
    { path: '', component: HomePage },
    { path: 'projects', component: ProjectsPage },
    { path: 'services', component: ServicesPage },
    { path: 'contact', component: ContactPage },
    { path: 'our-team', component: OurTeamPage },
  ];
  