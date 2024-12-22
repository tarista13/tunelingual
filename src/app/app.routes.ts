
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { ListenComponent } from './pages/listen/listen.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { ArtistPageComponent } from './pages/artist-page/artist-page.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { CategoryComponent } from './pages/category/category.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    
    {path: '', component: HomeComponent, canActivate: [authGuard]},
    {path: 'browse', component: BrowseComponent, canActivate: [authGuard]},
    {path: 'listen', component: ListenComponent, canActivate: [authGuard]},
    {path: 'listen/:trackID/:isrc', component: ListenComponent, canActivate: [authGuard]},
    {path: 'artists/:artistID', component: ArtistPageComponent, canActivate: [authGuard]},
    {path: 'profile', component: ProfileComponent, canActivate: [authGuard]},
    {path: 'search', component: SearchComponent, canActivate: [authGuard]},
    {path: 'category/:playlistID', component: CategoryComponent, canActivate: [authGuard]},

    {path: '**', redirectTo:'login'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
