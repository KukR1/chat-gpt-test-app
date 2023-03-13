import Head from 'next/head';
import { Fredoka } from 'next/font/google';

const roboto = Fredoka({
  weight: '400',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Chat GPT TestApp</title>
        <meta name="description" content="Chat GPT TestApp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={'bg-white min-h-screen ' + roboto.className}>
        <div className="flex flex-col items-center justify-center px-4 py-2">
          <h1 className="text-4xl md:text-6xl font-bold">
            Chat GPT TestApp
            <span className="text-4xl md:text-6xl font-bold text-blue-600">
              .
            </span>
          </h1>
          <p className="mt-3 text-2xl">
            Create Beautiful
            <span className="text-2xl font-bold text-blue-600">
              {''} Job Descriptions {''}
            </span>
            in Seconds
          </p>
        </div>
      </main>
    </>
  );
}
