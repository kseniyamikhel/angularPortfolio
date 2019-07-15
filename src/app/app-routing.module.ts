import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BioComponent } from './bio/bio.component';
import { ProjectsComponent } from './projects/projects.component';
import { AdminComponent } from './admin/admin.component';
import { AdminGuard } from './guards/admin.guard';

export const routes: Routes = [
  { path: 'bio', component: BioComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
  { path: '**', component: HomeComponent },
];