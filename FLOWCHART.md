# Flowchart Sistem Undangan Digital

## Alur Kerja Sistem

```mermaid
flowchart TD
    Start([Buka Website]) --> Loading[Loading 2 detik]
    Loading --> Home[Halaman Utama<br/>Hero, About, Pricing, Kontak]
    
    Home --> Choose{Pilih Paket?}
    Choose -->|Ya| Modal[Isi Form Pemesanan]
    Choose -->|Tidak| End([Selesai])
    
    Modal --> Send{Kirim via}
    Send -->|WhatsApp| WA[WhatsApp ke<br/>081353030694]
    Send -->|Email| Email[Email ke<br/>petra221106@gmail.com]
    
    WA --> Admin[Admin Proses<br/>Pesanan]
    Email --> Admin
    
    Admin --> Done([Undangan Jadi])
    
    style Start fill:#e1f5ff,stroke:#0288d1,stroke-width:2px
    style Loading fill:#fff9c4,stroke:#f57c00,stroke-width:2px
    style Modal fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px
    style WA fill:#e8f5e9,stroke:#388e3c,stroke-width:2px
    style Email fill:#e3f2fd,stroke:#1976d2,stroke-width:2px
    style Done fill:#c8e6c9,stroke:#388e3c,stroke-width:2px
```

---

## Alur Detail (Lengkap)

```mermaid
flowchart TD
    Start([User Membuka Website]) --> Loading{Loading Spinner<br/>2 detik}
    Loading --> MainPage[Tampil Halaman Utama]
    
    MainPage --> Hero[Hero Section<br/>Banner & CTA]
    Hero --> About[About Section<br/>Info Layanan]
    About --> Pricing[Pricing Section<br/>3 Paket Harga]
    Pricing --> Contact[Kontak Section<br/>WhatsApp & Email]
    
    Pricing --> UserChoose{User Memilih<br/>Paket?}
    UserChoose -->|Klik Tombol Paket| OpenModal[Buka Modal<br/>Order Form]
    UserChoose -->|Tidak| Browse[Browse Lebih Lanjut]
    
    OpenModal --> ShowForm[Tampil Form:<br/>- Nama Customer<br/>- Catatan Optional<br/>- Detail Paket]
    ShowForm --> UserFill{User Mengisi<br/>Form?}
    
    UserFill -->|Ya, Isi Form| ChooseContact{Pilih Metode<br/>Kontak}
    UserFill -->|Klik Cancel| CloseModal[Tutup Modal]
    
    ChooseContact -->|Klik WhatsApp| BuildWAMsg[Build Pesan WhatsApp<br/>Format: Nama, Paket,<br/>Harga, Catatan]
    ChooseContact -->|Klik Email| BuildEmailMsg[Build Email<br/>Subject & Body]
    
    BuildWAMsg --> RedirectWA[Redirect ke<br/>WhatsApp Web/App<br/>wa.me/081353030694]
    BuildEmailMsg --> OpenEmail[Buka Email Client<br/>rivaldy.adoe@gmail.com]
    
    RedirectWA --> SendMsg[User Kirim Pesan<br/>ke Admin]
    OpenEmail --> SendEmail[User Kirim Email]
    
    SendMsg --> AdminReply[Admin Terima &<br/>Membalas Pesanan]
    SendEmail --> AdminReply
    
    AdminReply --> Process[Proses Pembuatan<br/>Undangan Digital]
    Process --> Delivery[Kirim Undangan<br/>ke Customer]
    Delivery --> End([Selesai])
    
    CloseModal --> Browse
    Browse --> Contact
    
    Contact --> DirectContact{Kontak<br/>Langsung?}
    DirectContact -->|WhatsApp| RedirectWA
    DirectContact -->|Email| OpenEmail
    DirectContact -->|Tidak| End
    
    style Start fill:#e1f5ff,stroke:#0288d1,stroke-width:3px
    style Loading fill:#fff9c4,stroke:#f57c00,stroke-width:2px
    style OpenModal fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px
    style BuildWAMsg fill:#e8f5e9,stroke:#388e3c,stroke-width:2px
    style BuildEmailMsg fill:#e3f2fd,stroke:#1976d2,stroke-width:2px
    style AdminReply fill:#fff3e0,stroke:#f57c00,stroke-width:2px
    style Process fill:#fce4ec,stroke:#c2185b,stroke-width:2px
    style End fill:#c8e6c9,stroke:#388e3c,stroke-width:3px
```

---

## Penjelasan

### Alur Utama:
1. **User membuka website** → Loading spinner tampil selama 2 detik
2. **Halaman utama** ditampilkan dengan 4 section:
   - Hero Section (Banner & CTA)
   - About Section (Info Layanan)
   - Pricing Section (3 Paket Harga)
   - Kontak Section (WhatsApp & Email)

### Proses Pemesanan:
1. User memilih salah satu dari 3 paket di Pricing Section
2. Modal terbuka dengan form pemesanan:
   - Input Nama Customer
   - Input Catatan (Optional)
   - Tampil Detail Paket yang dipilih
3. User memilih metode kontak:
   - **WhatsApp**: Redirect ke wa.me/081353030694 dengan pesan otomatis
   - **Email**: Buka email client ke rivaldy.adoe@gmail.com

### Pengiriman & Proses:
1. Pesan/Email dikirim ke admin
2. Admin menerima dan membalas pesanan
3. Proses pembuatan undangan digital
4. Undangan dikirim ke customer

### Alternatif Flow:
- User bisa cancel modal dan browse lebih lanjut
- User bisa kontak langsung via section Kontak tanpa melalui Pricing

---

## Informasi Kontak

- **WhatsApp**: 081353030694
- **Email**: rivaldy.adoe@gmail.com

---

## Teknologi

- React + TypeScript
- Vite
- HeroUI
- Tailwind CSS
- Framer Motion (untuk animasi)
- React Router DOM
- i18next (multi-bahasa)
