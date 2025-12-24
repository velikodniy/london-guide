import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Life in London',
  description: 'A survival guide to living in London',
  lang: 'en',
  locales: [
    {
      lang: 'en',
      label: 'English',
      title: 'Life in London',
      description: 'A survival guide to living in London',
    },
    {
      lang: 'ru',
      label: 'Русский',
      title: 'Жизнь в Лондоне',
      description: 'Руководство по выживанию в Лондоне',
    },
  ],
  logoText: 'Life in London',
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/velikodniy/london-guide',
      },
    ],
    lastUpdated: true,
    locales: [
      {
        lang: 'en',
        outlineTitle: 'On this page',
        searchPlaceholderText: 'Search',
        searchNoResultsText: 'No results found for',
        searchSuggestedQueryText: 'Try again',
        prevPageText: 'Previous',
        nextPageText: 'Next',
        lastUpdatedText: 'Last updated',
        sourceCodeText: 'Source',
      },
      {
        lang: 'ru',
        outlineTitle: 'Содержание',
        searchPlaceholderText: 'Поиск',
        searchNoResultsText: 'Ничего не найдено для',
        searchSuggestedQueryText: 'Повторите поиск',
        prevPageText: 'Назад',
        nextPageText: 'Вперёд',
        lastUpdatedText: 'Обновлено',
        sourceCodeText: 'Исходный текст',
      },
    ],
  },
});
