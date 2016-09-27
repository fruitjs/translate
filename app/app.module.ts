import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import{TranslatePipe, TranslateService, TRANSLATION_PROVIDERS} from './translate';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, TranslatePipe],
  bootstrap: [ AppComponent ],
  providers:[TranslateService, TRANSLATION_PROVIDERS]
})
export class AppModule { }
