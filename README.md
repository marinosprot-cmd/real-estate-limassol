# 🏠 Λεμεσός Ακίνητα • Limassol Properties

> Μικρό, όμορφο και πλήρως λειτουργικό demo project για Real Estate στη Λεμεσό (Κύπρος).  
> A small, beautiful and fully interactive Real Estate web demo for Limassol, Cyprus.

**Τεχνολογίες / Tech:** Single-file HTML + Tailwind CSS (CDN) + Leaflet Maps (CDN) + Vanilla JavaScript  
**Μέγεθος:** ~1 αρχείο (index.html) — τρέχει αμέσως σε browser χωρίς εγκατάσταση

---

## ✨ Χαρακτηριστικά / Features

- **Bilingual (Ελληνικά + English)** — Εναλλαγή γλώσσας με ένα κλικ (EL / EN)
- **Προχωρημένα φίλτρα**:
  - Αναζήτηση (τίτλος + περιγραφή)
  - Τύπος ακινήτου (Βίλα / Διαμέρισμα / Μεζονέτα)
  - Εύρος τιμής & εμβαδού (τ.μ.)
  - Ελάχιστα υπνοδωμάτια
  - Περιοχές (7 δημοφιλείς συνοικίες Λεμεσού)
- **Διαδραστικός χάρτης** με Leaflet (OpenStreetMap) — markers με τιμές, popups με γρήγορη προβολή
- **14 ρεαλιστικά mock ακίνητα** με τιμές, συντεταγμένες και περιγραφές βασισμένες στην πραγματική αγορά Λεμεσού (2025-2026)
- **Modal λεπτομερειών** με πλήρη specs, χαρακτηριστικά και actions
- **Προσθήκη νέου ακινήτου** (live προσθήκη στη λίστα — μόνο για τη συνεδρία)
- **Responsive** — mobile, tablet, desktop
- **Ωραίο design** με μεσογειακό στυλ (premium αίσθηση)

### Περιοχές που καλύπτονται
- Γερμασόγεια (Germasogeia)
- Άγιος Αθανάσιος (Agios Athanasios)
- Μαρίνα Λεμεσού (Limassol Marina)
- Άγιος Τύχωνας (Agios Tychonas)
- Ζακάκι (Zakaki)
- Μέσα Γειτονιά (Mesa Geitonia)
- Κέντρο Λεμεσού (City Centre)

---

## 🚀 Πώς να το τρέξετε / How to Run

1. Κατεβάστε ή κλωνοποιήστε τον φάκελο
2. Ανοίξτε το αρχείο **`index.html`** απευθείας σε browser (double-click)
3. Δεν χρειάζεται Node.js, npm, ή server!

**Γρήγορη εντολή (Windows PowerShell):**
```powershell
cd "C:\Users\User\Documents\GrokProjects\limassol-real-estate"
start index.html
```

---

## 🛠️ Προσαρμογή / Customization

### Αλλαγή / Προσθήκη Ακινήτων
Ανοίξτε το `index.html` και βρείτε τον πίνακα `let properties = [...]` (γραμμή ~180).

Κάθε ακίνητο έχει:
```js
{
  id: 15,
  title: { el: "Τίτλος", en: "Title" },
  area: { el: "Γερμασόγεια", en: "Germasogeia" },
  type: { el: "Βίλα", en: "Villa" },
  price: 980000,
  size: 210,
  bedrooms: 3,
  bathrooms: 3,
  year: 2023,
  lat: 34.72, lng: 33.08,        // Συντεταγμένες για τον χάρτη
  image: "https://picsum.photos/id/1015/800/600",
  description: { el: "...", en: "..." },
  features: ["Πισίνα", "Sea View"]
}
```

### Αλλαγή Εικόνων
- Χρησιμοποιεί `picsum.photos` (σταθερές εικόνες για demo)
- Αντικαταστήστε το `image` με δικές σας URL ή local paths (`./images/villa1.jpg`)

### Χρώματα & Branding
Αλλάξτε τις κλάσεις Tailwind στο header/hero για να ταιριάξουν με το brand σας.

---

## 📍 Ρεαλιστικά Δεδομένα (Πηγές)

Οι τιμές και οι περιοχές βασίζονται σε πραγματικά στοιχεία αγοράς Λεμεσού 2025-2026:
- Μέση τιμή διαμερίσματος ~ €250k–€600k
- Βίλες σε premium περιοχές €800k–€2.5M+
- €/m²: €3,200 – €9,000+ (ανάλογα την περιοχή)

**Προσοχή:** Όλα τα ακίνητα είναι **εικονικά** για εκπαιδευτικούς/επιδεικτικούς σκοπούς.

---

## 🔜 Επόμενα Βήματα / Next Steps (Προτάσεις)

1. **Μετατροπή σε Next.js 14** (TypeScript + Tailwind + shadcn/ui)
2. **Προσθήκη backend** (Supabase / Firebase / PocketBase) για αποθήκευση ακινήτων
3. **Πραγματικά δεδομένα** — σύνδεση με API ή Google Sheets
4. **Φόρμα επικοινωνίας** που στέλνει email (EmailJS ή Resend)
5. **Φωτογραφίες υψηλής ποιότητας** — χρησιμοποιήστε το image_gen ή stock
6. **Deploy** στο Vercel (στατικός hosting είναι άμεσος)

Θέλετε να το μετατρέψω σε **πλήρες Next.js project** ή να προσθέσω κάποια από τα παραπάνω;

---

## 📄 Άδεια / License

Ελεύθερο για προσωπική και εκπαιδευτική χρήση.  
Δημιουργήθηκε με ❤️ για demo σκοπούς από Grok.

---

**Enjoy exploring Limassol real estate!** 🇨🇾

Αν έχετε ερωτήσεις ή θέλετε επεκτάσεις — πείτε μου! Updated for Vercel deployment
