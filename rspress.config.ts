import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Жизнь в Лондоне',
  description: 'Руководство по выживанию в Лондоне',
  //icon: '/icon.png',
  logoText: 'Жизнь в Лондоне',
  // logo: {
  //   light: '/light-logo.png',
  //   dark: '/dark-logo.png',
  // },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/velikodniy/london-guide',
      },
    ],
    lastUpdated: true,
    outlineTitle: 'Содержание',
    searchPlaceholderText: 'Поиск',
    searchNoResultsText: 'Ничего не найдено для',
    searchSuggestedQueryText: 'Повторите поиск',
    prevPageText: 'Назад',
    nextPageText: 'Вперёд',
    lastUpdatedText: 'Обновлено',
    sourceCodeText: 'Исходный текст',
  },
});
