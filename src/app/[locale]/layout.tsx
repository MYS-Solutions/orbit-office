import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Navbar  from '@/components/Navbar';
import {Footer, Attribution} from '@/components/Footer';
import ThemeProvider from '@/theme/ThemeProvider';

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
            <Navbar sections={["about", "services", "offers", "contact"]}/>
            <main>{children}</main>
            <Footer>
              <Attribution description="Top of the page background" owner="Freepik" link="https://www.freepik.com/free-vector/realistic-travel-background-with-elements_20852675.htm" />
            </Footer>
            </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}