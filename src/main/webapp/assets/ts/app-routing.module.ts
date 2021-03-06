import {CreateUserComponent} from './create-user.component';
import {UserComponent} from './user.component';
import {SearchUserComponent} from './search-user.component';

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'user', pathMatch: 'full'},
    {path: 'user', component: UserComponent},
    {path: 'add', component: CreateUserComponent},
    {path: 'findbylastname', component: SearchUserComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}