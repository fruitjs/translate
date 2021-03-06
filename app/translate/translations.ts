import {OpaqueToken} from '@angular/core';

import {LANG_EN_NAME, LANG_EN_TRANS} from './lang-en';
import {LANG_ES_NAME, LANG_ES_TRANS} from './lang-es';
import {LANG_HI_NAME, LANG_HI_TRANS} from './lang-hi';

export const TRANSLATIONS = new OpaqueToken('translations');

const dictionary={
    [LANG_EN_NAME]:LANG_EN_TRANS,
    [LANG_ES_NAME]:LANG_ES_TRANS,
    [LANG_HI_NAME]:LANG_HI_TRANS
};
export const TRANSLATION_PROVIDERS=[{
    provide:TRANSLATIONS, useValue:dictionary
}];
