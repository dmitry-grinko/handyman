import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services-section/services.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CTA2Component } from './components/cta2/cta2.component';
import { AboutComponent } from './components/about/about.component';
import { OfferComponent } from './components/offer/offer.component';
import { FeaturesComponent } from './components/features/features.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { PartnersComponent } from './components/partners/partners.component';
import { ContactsComponent } from '../../components/contacts/contacts.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CopyrightComponent } from '../../components/copyright/copyright.component';
import { TopButtonComponent } from '../../components/top-button/top-button.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    ProjectsComponent,
    CTA2Component,
    AboutComponent,
    OfferComponent,
    FeaturesComponent,
    TestimonialsComponent,
    PartnersComponent,
    ContactsComponent,
    FooterComponent,
    CopyrightComponent,
    TopButtonComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePage {}
