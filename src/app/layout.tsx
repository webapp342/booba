
import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import { useEffect } from 'react';

import { Root } from '@/components/Root/Root';
import { I18nProvider } from '@/core/i18n/provider';

import '@telegram-apps/telegram-ui/dist/styles.css';
import 'normalize.css/normalize.css';
import './_assets/globals.css';

export const metadata: Metadata = {
  title: 'Your Application Title Goes Here',
  description: 'Your application description goes here',
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const locale = await getLocale();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";
    script.type = "module";
    document.body.appendChild(script);

    const scriptNoModule = document.createElement('script');
    scriptNoModule.src = "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js";
    scriptNoModule.noModule = true; // Change here
    document.body.appendChild(scriptNoModule);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(scriptNoModule);
    };
  }, []);

  return (
    <html lang={locale}>
      <body>
        <I18nProvider>
          <Root>
            {children}
          </Root>
        </I18nProvider>
      </body>
    </html>
  );
}