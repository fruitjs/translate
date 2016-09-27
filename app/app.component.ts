import { Component, OnInit } from '@angular/core';
import { TranslateService } from './translate';
@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'

})
export class AppComponent implements OnInit {
    public translatedText: string;
    public supportedLanguages: any[];
    private supportedLangs:any[];
    public myCurrency:string;
    constructor(private _translate:TranslateService) {
    }
    ngOnInit() {       
        this.supportedLangs = [{
            display: 'English', value: 'en'
        }, {
            display: 'Espanish', value: 'es'
        }, {
            display: 'हिंदी', value: 'hi'
        }];
this.selectLang('es');
    }
    isCurrentLang(lang:string){
        return lang==this._translate.currentLang;
    }
    selectLang(lang:string){
        this._translate.use(lang);
        this.refreshText();
    }
    refreshText(){
        this.translatedText=this._translate.instant('hello world');
        this.myCurrency=this._translate.instant('localCurrency');

    }
}
