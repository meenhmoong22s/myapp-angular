import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { NewwordComponent } from './newword/newword.component';
import { LoginComponent } from './login/login.component';
import { WeatherComponent } from './weather/weather.component';
import { PostApiComponent } from './post-api/post-api.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CallapiComponent } from './callapi/callapi.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddbootstrapComponent } from './addbootstrap/addbootstrap.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    NewwordComponent,
    LoginComponent,
    WeatherComponent,
    PostApiComponent,
    NotfoundComponent,
    CallapiComponent,
    PageNotFoundComponent,
    AddbootstrapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
