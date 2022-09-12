import { defineShikiSetup } from '@slidev/types';

export default defineShikiSetup(async ({ loadTheme }) => {
  return {
    theme: {
      dark: await loadTheme(
        await (
          await import('theme-vitesse/themes/vitesse-dark.json')
        ).default,
      ),
      light: await loadTheme(
        await (
          await import('theme-vitesse/themes/vitesse-light.json')
        ).default,
      ),
    },
  };
});
