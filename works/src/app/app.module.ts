import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { AboutComponent } from './routes/about/about.component';
import { PortfolioComponent } from './routes/portfolio/portfolio.component';
import { ContactComponent } from './routes/contact/contact.component';
import { NotfoundComponent } from './routes/notfound/notfound.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
import { TestrComponent } from './testr/testr.component';
import { AttrDirective } from './attr.directive';
import { GradePipe } from './grade.pipe';
import { StrdirDirective } from './strdir.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    NotfoundComponent,
    HeaderComponent,
    TestrComponent,
    AttrDirective,
    GradePipe,
    StrdirDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'forms', component: FormsComponent },
      { path: 'reactive', component: TestrComponent },
      { path: 'about:reactive', component: TestrComponent },

      { path: '**', component: NotfoundComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
