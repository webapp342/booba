import { useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';

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
    // Safe area değişkenini sıfırlayın
    const root = document.documentElement;
    root.style.setProperty('--tgui--safe_area_inset_bottom', '0px');

    // İlgili sınıfları hedefleyin ve padding'i sıfırlayın
    const elements = document.querySelectorAll(
      '.tgui-5dc6ad1ca3ac3ed4, .tgui-01790b7e59088ea5'
    );
    elements.forEach((el) => {
      (el as HTMLElement).style.paddingBottom = '0px';
    });
  }, []);

  return (
    <html lang={locale}>
      <body>
        <I18nProvider>
          <Root>{children}</Root>
        </I18nProvider>
      </body>
    </html>
  );
}
