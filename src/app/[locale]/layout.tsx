import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/Navbar';

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

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body style={{ margin: 0, padding: 0 }}> 
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar sections={["about", "offers", "contact"]}/>
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}