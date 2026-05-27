# Limassol Prime Real Estate — Ιστοσελίδα Ακινήτων Λεμεσού

Μοντέρνα, δίγλωσση (Ελληνικά / Αγγλικά) ιστοσελίδα για μεσιτικό γραφείο premium ακινήτων στη Λεμεσό, Κύπρος.

**Live Demo:** *(θα προστεθεί μετά το deployment στο Vercel)*

## ✨ Χαρακτηριστικά

- **Πλήρως δίγλωσση** (Ελληνικά ↔ Αγγλικά) με εναλλαγή σε όλη την εφαρμογή
- **Προηγμένα φίλτρα** αναζήτησης (τιμή, εμβαδόν, υπνοδωμάτια, περιοχή, τύπος)
- **Διαδραστικός χάρτης** με Leaflet (συγχρονισμένος με τα φίλτρα)
- **Λεπτομερείς κάρτες ακινήτων** με όλα τα επαγγελματικά στοιχεία
- **Επαγγελματική φόρμα προσθήκης ακινήτου** με κυπριακά πεδία:
  - Ενεργειακή κλάση (A+ έως G)
  - Title Deed / Κατάσταση τίτλου
  - ΦΠΑ (5% Πρώτη Κατοικία / 19%)
  - Έπιπλα, θέα, προσανατολισμός, απόσταση από θάλασσα
  - Στοιχεία μεσίτη
- **Persistent storage** — τα ακίνητα που προσθέτεις αποθηκεύονται τοπικά
- **Responsive** design (mobile-first)
- **Modern tech stack**: Next.js 14 (App Router), TypeScript, Tailwind, Framer Motion, Sonner toasts

## 🚀 Τεχνολογίες

- **Framework**: Next.js 14.2 + TypeScript
- **Styling**: Tailwind CSS + custom design system
- **Animations**: Framer Motion
- **Maps**: Leaflet + React-Leaflet
- **Notifications**: Sonner
- **Icons**: Lucide React

## 🛠️ Τοπική Ανάπτυξη

```bash
# Clone το repository
git clone <repository-url>
cd limassol-real-estate-next

# Εγκατάσταση dependencies
npm install

# Εκκίνηση development server
npm run dev
```

Άνοιξε το [http://localhost:3000](http://localhost:3000) στον browser.

### Build για production

```bash
npm run build
npm start
```

## 📁 Δομή Project

```
app/
├── layout.tsx          # Root layout + metadata
├── page.tsx            # Κύρια σελίδα με listings, φίλτρα, χάρτη
├── globals.css         # Global styles + design tokens
components/
├── Header.tsx          # Navigation + language toggle
├── Footer.tsx          # Footer με στοιχεία επικοινωνίας
└── PropertyMap.tsx     # Διαδραστικός χάρτης
lib/
├── data.ts             # Seed data (14 premium ακίνητα)
└── types.ts            # TypeScript interfaces
```

## 🏠 Προσθήκη Νέου Ακινήτου

Η ιστοσελίδα περιλαμβάνει πλήρη φόρμα για προσθήκη ακινήτων (για εσωτερική χρήση / demo). Τα ακίνητα αποθηκεύονται στο `localStorage` του browser.

**Σημείωση για production:** Σε πραγματικό deployment το κουμπί "Προσθήκη Ακινήτου" μπορεί να αφαιρεθεί ή να προστατευτεί με authentication.

## 🌍 Μελλοντικές Βελτιώσεις (Roadmap)

- [ ] Πραγματική αποστολή φορμών (Resend / Formspree / EmailJS)
- [ ] Δικές του σελίδες λεπτομέρειας ακινήτου (`/properties/[id]`)
- [ ] Ενότητα "Ενοικιάσεις"
- [ ] Testimonials & Team section
- [ ] Blog / Market Insights
- [ ] Admin panel ή integration με CMS (Sanity / Contentful)
- [ ] Multi-image gallery per property
- [ ] SEO optimizations + structured data (Schema.org RealEstateListing)
- [ ] Dark mode

## 📞 Επικοινωνία

*Συμπλήρωσε με τα πραγματικά στοιχεία του γραφείου σου*

---

**Built with ❤️ using Grok + Next.js** — Limassol, Cyprus