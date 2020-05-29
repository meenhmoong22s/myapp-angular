import { CallapiComponent } from './callapi/callapi.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PostApiComponent } from './post-api/post-api.component';
import { WeatherComponent } from './weather/weather.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'todologin', component: LoginComponent },
  { path: 'todogetapi', component: CallapiComponent },
  { path: 'todoweather', component: WeatherComponent },
  { path: 'todopostapi', component: PostApiComponent },
  { path: '', redirectTo: '/#', pathMatch: 'full' }
  // { path: '**', component: NotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
