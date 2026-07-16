# Panduan PERPI

Dokumentasi lengkap untuk Platform PERPI: [member.perpi.id](https://member.perpi.id/)

## 📚 Dokumentasi

Akses dokumentasi lengkap di: [docs.member.perpi.id](https://docs.member.perpi.id/)

## 🚀 Quick Start

### Prerequisites

- Node.js >= 20.0
- npm atau yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm start
```

Server akan berjalan di `http://localhost:3000`

### Build

```bash
# Build untuk production
npm run build
```

### Deployment

```bash
# Deploy ke production
npm run deploy
```

## 📖 Available Scripts

| Command | Deskripsi |
|---------|-----------|
| `npm start` | Jalankan development server |
| `npm run build` | Build untuk production |
| `npm run serve` | Serve build hasil production |
| `npm run clear` | Clear cache |
| `npm run swizzle` | Customize Docusaurus components |
| `npm run write-translations` | Generate translation files |
| `npm run write-heading-ids` | Generate heading IDs |
| `npm run typecheck` | Check TypeScript types |

## 📁 Project Structure

```
panduan-perpi/
├── docs/                    # Dokumentasi
│   ├── tutorial-autentikasi-perpi.md
│   ├── new-member-guide/   # Panduan anggota baru
│   ├── event/              # Panduan event
│   ├── email/              # Panduan email & notifikasi
│   └── log-pembaruan/      # Changelog
├── blog/                    # Blog posts
├── src/                     # Source code
│   ├── components/         # React components
│   ├── css/                # Styling
│   └── pages/              # Custom pages
├── static/                  # Static assets
├── docusaurus.config.ts    # Konfigurasi Docusaurus
├── sidebars.ts             # Sidebar configuration
└── package.json            # Dependencies
```

## 🛠️ Tech Stack

- **Framework**: [Docusaurus 3.9.2](https://docusaurus.io/)
- **React**: 19.0.0
- **TypeScript**: 5.6.2
- **Styling**: CSS Modules

## 📝 Contributing

Untuk berkontribusi pada dokumentasi ini:

1. Fork repository
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buka Pull Request

---

**Website**: [member.perpi.id](https://member.perpi.id/)
**Dokumentasi**: [docs.member.perpi.id](https://docs.member.perpi.id/)