import { Routes } from '@angular/router';
import { HomeComponent } from './components/public/home/home.component';
import { FormationsComponent as PublicFormationsComponent } from './components/public/formations/formations.component';
import { FormationDetailsComponent } from './components/public/formation-details/formation-details.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { CandidatesComponent } from './components/admin/candidates/candidates.component';
import { TrainersComponent } from './components/admin/trainers/trainers.component';
import { FormationsComponent as AdminFormationsComponent } from './components/admin/formations/formations.component';
import { SessionsComponent } from './components/admin/sessions/sessions.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'formations', component: PublicFormationsComponent },
    { path: 'details/:id', component: FormationDetailsComponent },
    {
        path: 'admin', component: AdminComponent, children: [
            { path: 'candidates', component: CandidatesComponent },
            { path: 'trainers', component: TrainersComponent },
            { path: 'formations', component: AdminFormationsComponent },
            { path: 'sessions', component: SessionsComponent }
        ]
    }
];