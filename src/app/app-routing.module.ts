import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'select-s-site',
    pathMatch: 'full'
  },
  {
    path: 'select-s-site',
    loadChildren: () => import('./select-s-site/select-s-site.module').then( m => m.SelectSSitePageModule)
  },
  {
    path: 'site-b',
    loadChildren: () => import('./site-b/site-b.module').then( m => m.SiteBPageModule)
  },
  {
    path: 'site-c',
    loadChildren: () => import('./site-c/site-c.module').then( m => m.SiteCPageModule)
  },
  {
    path: 'site-d',
    loadChildren: () => import('./site-d/site-d.module').then( m => m.SiteDPageModule)
  },
  {
    path: 'scanner',
    loadChildren: () => import('./scanner/scanner.module').then( m => m.ScannerPageModule)
  },
  {
    path: 'viewdocs',
    loadChildren: () => import('./viewdocs/viewdocs.module').then( m => m.ViewdocsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
