import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LocationComponent } from './location/location.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import {HttpClientModule} from '@angular/common/http';
import {RegistrationService} from './registration.service'
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LocationComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
