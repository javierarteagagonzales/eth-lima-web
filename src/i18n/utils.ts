import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, , lang] = url.pathname.split('/');
  // Note: Since base is /eth-lima-web/, the pathname starts with /eth-lima-web/
  // Path: /eth-lima-web/ -> [, eth-lima-web, ] -> lang is undefined
  // Path: /eth-lima-web/en/ -> [, eth-lima-web, en, ] -> lang is 'en'
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
