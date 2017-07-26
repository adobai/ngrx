import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { AppContainer } from './containers/app/app.container';
import { NotFoundPageComponent } from './containers/not-found-page';
import { LayoutComponent } from './containers/app/components/layout';
import { NavItemComponent } from './containers/app/components/nav-item';
import { SidenavComponent } from './containers/app/components/sidenav';
import { ToolbarComponent } from './containers/app/components/toolbar';

import { GoogleBooksService } from './services/google-books';

export const COMPONENTS = [
  AppContainer,
  NotFoundPageComponent,
  LayoutComponent,
  NavItemComponent,
  SidenavComponent,
  ToolbarComponent,
];

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [GoogleBooksService],
    };
  }
}