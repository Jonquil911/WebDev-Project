import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/routes';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});

@NgModule({
  imports: [
    MatSidenavModule, 
  ],
})
export class AppModule {}
