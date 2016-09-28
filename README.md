# Angular Translate

## Introduction
This is a demo app showing how you can translate your content with Angular 2. 

There are three different languages we are maintaining and more languages can be included:

1. English - translate\app\translate\lang-en.ts
2. Espanish - translate\app\translate\lang-es.ts
3. Hindi - translate\app\translate\lang-hi.ts

In the given above typescript files we can maintain our dictionary. 

1. Package driven approach
2. We can use this translation either by pipe notation or by using identifiers in our service file. The Demo app covers both ways.
3. Custom pipe is used to translate - [TranslatePipe](https://github.com/fruitjs/translate/blob/master/app/translate/translate.pipe.ts)
4. Custom [service](https://github.com/fruitjs/translate/blob/master/app/translate/translate.service.ts) to share the dictionary with appcomponent
5. Demo APP that integrates the [Basic App we used](https://embed.plnkr.co/BnCRsCfB1ZIMoQ4QT6Lg/)

