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
    eyebrow: 'Dokumentasi Resmi',
    subtitle:
      'Panduan lengkap untuk menggunakan Platform PERPI — mulai dari autentikasi, pendaftaran, event, hingga email dan pembaruan fitur terbaru.',
    actions: [
      {
        label: 'Mulai Baca Panduan',
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
  section: {
    title: 'Jelajahi Panduan',
    description: 'Pilih topik di bawah ini untuk langsung menuju panduan yang Anda butuhkan.',
  },
  features: [
    {
      icon: '🔐',
      title: 'Autentikasi & Akses',
      description: 'Login, registrasi, reset password, dan kontrol akses berdasarkan peran pengguna.',
      to: '/docs/tutorial-autentikasi-perpi',
    },
    {
      icon: '🏢',
      title: 'Pendaftaran Anggota Baru',
      description: 'Lengkapi profil perusahaan, unggah dokumen, dan selesaikan proses pendaftaran.',
      to: '/docs/new-member-guide',
    },
    {
      icon: '🎟️',
      title: 'Event PERPI',
      description: 'Registrasi, tiket, dan konfirmasi pembayaran untuk setiap event yang diselenggarakan.',
      to: '/docs/event',
    },
    {
      icon: '📧',
      title: 'Email & Notifikasi',
      description: 'Pahami sistem email blast dan notifikasi otomatis dari platform.',
      to: '/docs/email',
    },
    {
      icon: '🔄',
      title: 'Log Pembaruan',
      description: 'Ikuti riwayat perubahan, fitur baru, dan perbaikan pada sistem.',
      to: '/docs/log-pembaruan',
    },
  ],
};

// =============================================================================
// COMPONENTS
// =============================================================================

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { eyebrow, subtitle, actions } = HOMEPAGE_CONTENT.hero;

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.heroGlow} aria-hidden="true" />
      <div className="container">
        <span className={styles.heroEyebrow}>{eyebrow}</span>

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

function FeaturesSection() {
  const { title, description } = HOMEPAGE_CONTENT.section;
  const { features } = HOMEPAGE_CONTENT;

  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            {title}
          </Heading>
          <p className={styles.sectionDescription}>{description}</p>
        </div>

        <div className={styles.featuresGrid}>
          {features.map((feature, idx) => (
            <Link key={idx} to={feature.to} className={styles.featureCard}>
              <span className={styles.featureIcon} aria-hidden="true">
                {feature.icon}
              </span>
              <Heading as="h3" className={styles.featureTitle}>
                {feature.title}
              </Heading>
              <p className={styles.featureDescription}>{feature.description}</p>
              <span className={styles.featureLink}>Lihat panduan →</span>
            </Link>
          ))}
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
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <FeaturesSection />
      </main>
    </Layout>
  );
}
