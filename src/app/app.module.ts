import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationService} from './authentication.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/auth.effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/app.states';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //StoreModule.forRoot(reducers, {}),
    //EffectsModule.forRoot([AuthEffects]),
    FlexLayoutModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
