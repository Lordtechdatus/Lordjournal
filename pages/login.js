import Head from 'next/head';
import LoginPage from '../src/components/LoginPage';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login - Lord Journal</title>
        <meta name="description" content="Login to your Lord Journal account to access research tools and track your research progress." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Login - Lord Journal" />
        <meta property="og:description" content="Access your Lord Journal account" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://lordjournal.com/login" />
      </Head>
      
      <LoginPage />
    </>
  );
}
