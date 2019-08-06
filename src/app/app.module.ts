import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './home/banner/banner.component';
import { AboutComponent } from './home/about/about.component';
import { StackComponent } from './home/stack/stack.component';
import { ServicesComponent } from './home/services/services.component';
import { PortfolioComponent } from './home/portfolio/portfolio.component';
import { TestimoniesComponent } from './home/testimonies/testimonies.component';
import { ContactComponent } from './home/contact/contact.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    BannerComponent,
    AboutComponent,
    StackComponent,
    ServicesComponent,
    PortfolioComponent,
    TestimoniesComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
