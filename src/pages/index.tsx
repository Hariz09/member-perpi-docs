import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          Pusat Dokumentasi & Informasi Sistem Manajemen Anggota
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/tutorial-autentikasi-perpi">
            Panduan Pengguna
          </Link>
          <Link
            className="button button--secondary button--lg"
            style={{ marginLeft: '1rem' }}
            to="/docs/test-section">
            Log Pembaruan
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Pusat Dokumentasi & Informasi Sistem Manajemen Anggota PERPI">
      <HomepageHeader />
      <main>
        <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
          <h3>Selamat Datang</h3>
          <p>Temukan cara penggunaan aplikasi dan informasi rilis fitur terbaru di sini.</p>
        </div>
      </main>
    </Layout>
  );
}