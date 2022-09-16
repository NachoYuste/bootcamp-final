import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { TutorialListComponent } from './pages/tutorial-list/tutorial-list.component';
import { AddModalComponent } from './pages/tutorial-list/add-modal/add-modal.component';
import { TutorialDescComponent } from './pages/tutorial-desc/tutorial-desc.component';
import { EditModalComponent } from './pages/tutorial-desc/edit-modal/edit-modal.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TutorialListComponent,
    AddModalComponent,
    TutorialDescComponent,
    EditModalComponent,
    FooterComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
