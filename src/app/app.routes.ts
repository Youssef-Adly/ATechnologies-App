import { Routes } from '@angular/router';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
// import { NotFoundComponent } from './Components/not-found/not-found.component';
// import { ContactUsComponent } from './Components/contact-us/contact-us.component';
// import { AboutUsComponent } from './Components/about-us/about-us.component';
// import { LoginComponent } from './Components/login/login.component';
// import { authGuard } from './Services/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'home', component: LandingPageComponent },
  // { path: 'contactUs', component: ContactUsComponent },
  // { path: 'aboutUs', component: AboutUsComponent },
  // { path: 'login', component: LoginComponent, canActivate: [authGuard] },
  // { path: '**', component: NotFoundComponent },
  // { path: 'lazy', loadChildren: () => import('./feature-module/feature.module').then(m => m.FeatureModule) },
];

