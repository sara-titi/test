import './globals.css';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import MainHeader from '@/components/main-header/main-header';


export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
      <NextIntlClientProvider messages={messages}>
        <MainHeader />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
