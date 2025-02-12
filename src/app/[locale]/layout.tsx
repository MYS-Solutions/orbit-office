import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import ThemeProvider from '@/theme/ThemeProvider';
import { routing } from '@/i18n/routing';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = (await getMessages());

  const direction = locale === 'ar' ? 'rtl' : 'ltr';
  return (
    <html lang={locale} dir={direction}>
      <body style={{ margin: 0, padding: 0 }}> 
        <NextIntlClientProvider locale={locale} messages={messages}>
            <ThemeProvider dir={direction}>
            <main>{children}</main>
            </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}