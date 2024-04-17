import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      hello: 'Hello, Vue I18n',
      language: 'Languages',
    },
    ja: {
      hello: 'こんにちは、Vue I18n',
      language: '言語',
    },
  },
});

createApp(App).use(i18n).mount('#app');
