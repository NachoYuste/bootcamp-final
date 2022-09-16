import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialDescComponent } from './pages/tutorial-desc/tutorial-desc.component';
import { TutorialListComponent } from './pages/tutorial-list/tutorial-list.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'tutorials', component: TutorialListComponent},
  {path: 'tutorials/:id', component: TutorialDescComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
