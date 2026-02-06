import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

// =============================================================================
// CONFIGURATION & CONTENT
// =============================================================================

const HOMEPAGE_CONTENT = {
  hero: {
    subtitle: 'Pusat Dokumentasi & Informasi Sistem Manajemen Anggota',
    actions: [
      {
        label: 'Panduan Pengguna',
        to: '/docs/tutorial-autentikasi-perpi',
        style: styles.buttonPrimary,
      },
      {
        label: 'Log Pembaruan',
        to: '/docs/log-pembaruan',
        style: styles.buttonSecondary,
      },
    ],
  },
  welcome: {
    title: 'Selamat Datang',
    description: 'Temukan cara penggunaan aplikasi dan informasi rilis fitur terbaru di sini.',
  },
};

// =============================================================================
// COMPONENTS
// =============================================================================

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { subtitle, actions } = HOMEPAGE_CONTENT.hero;

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        
        <p className={styles.heroSubtitle}>{subtitle}</p>

        <div className={styles.buttons}>
          {actions.map((action, idx) => (
            <Link
              key={idx}
              className={clsx('button button--lg', action.style)}
              to={action.to}>
              {action.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

function WelcomeSection() {
  const { title, description } = HOMEPAGE_CONTENT.welcome;

  return (
    <section className={styles.welcomeSection}>
      <div className="container">
        <div className={styles.welcomeContent}>
          <Heading as="h2" className={styles.welcomeTitle}>
            {title}
          </Heading>
          <p className={styles.welcomeDescription}>{description}</p>
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// MAIN PAGE
// =============================================================================

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <Layout
      title={siteConfig.title}
      description={HOMEPAGE_CONTENT.hero.subtitle}>
      <HomepageHeader />
      <main>
        <WelcomeSection />
      </main>
    </Layout>
  );
}