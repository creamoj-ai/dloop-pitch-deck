# 💻 DLOOP - CTO ONE-PAGER (SABATINO)

**Data**: 2026-03-03 | **Audience**: Sabatino (Tech Co-founder) | **Duration**: 15 min read

---

## 🎯 THE PITCH (60 sec)

Saba, il rischio "rider" sparisce completamente.

Invece di costruire un marketplace (Glovo-style con 100+ rider in staff), diventiamo il **"cervello" di cooperative che JÀ hanno rider**.

**La tua visione tecnica**: Architettura cloud pulita, API-first, real-time, scalabile a infinite cooperativas.

**Il nostro guadagno**: €35K/mese @ 100 dealer, 75% margin. Breakeven M6, non M11.

**La tua entry**: CTO equity + part-time M1-M3, full-time dopo.

---

## 🔧 TECHNICAL ARCHITECTURE (What You'll Build)

### Core Stack (Current MVP)
- **Frontend**: Next.js 15 (React 19) + TypeScript
- **Backend**: Supabase (PostgreSQL + Real-time)
- **Mobile**: Flutter (iOS + Android)
- **Payments**: Stripe
- **Messaging**: WhatsApp Business API (Meta) + ChatGPT (OpenAI)
- **Deployment**: Vercel + Supabase Edge Functions
- **Infra Cost**: €500/mese (scales to €2K+ with 500 dealers)

### Phase 1 (M1-M3): Core Features Ready ✅
- [x] Merchant PWA (order management)
- [x] Rider app (real-time assignment)
- [x] WhatsApp bot (order intake)
- [x] Dashboard (analytics)
- [x] Payment processing (Stripe)

### Phase 2 (M3-M6): Scale Features

#### 🚀 Dashboard Rider "Entrepreneur Edition" (THE CRITICAL FEATURE)

**Concept**: Il rider diventa il tuo "agente commerciale". DLOOP smette di essere un costo per diventare un'opportunità di guadagno per tutti.

**Why this matters**: Se un rider ama la piattaforma, diventa il tuo miglior venditore. Porta 5-10 negozianti → zero CAC, rete virale, crescita organica.

**3 Funzioni Chiave**:

1. **Modulo "Onboarding Dealer" (Referral)**
   - Rider ha Codice QR personalizzato + link
   - Dealer si registra → sistema lega dealer al rider
   - Vantaggio rider: Prelazione ordini da quel dealer per X giorni
   - Vantaggio DLOOP: Zero CAC, rete auto-alimentata
   - **Impact**: 1 rider → 5-10 dealer in 3 mesi

2. **Calcolatore Tariffe Dinamiche**
   - Rider imposta propri listini (es. €4/km entro 2km, €6 oltre)
   - Software calcola fee rider automaticamente
   - DLOOP prende solo €0.50 tech fee (trasparente)
   - Rider guarda €1.50/ordine (non ritenuta nascosta)
   - **Impact**: Rider sente di essere "padrone", non impiegato

3. **Analytics per il Rider**
   - "Oggi hai fatto risparmiare a Ciro Amodio €120 di commissioni Glovo"
   - Tracking completo: quanto rider guadagna, clienti serviti, rating
   - Leaderboard gamification (chi porta più dealer = bonus)
   - **Impact**: Rider usa questo dato per convincere nuovi dealer
   - **Tactic**: "Guarda, con DLOOP risparmi il 30% vs Glovo, e io ti do priorità"

**Database Schema (Rider-centric)**:
```sql
-- Rider referrals (the growth engine)
rider_referrals: id, rider_id, merchant_id, referral_code, priority_days, created_at

-- Rider custom rates
rider_rates: id, rider_id, merchant_id, km_threshold, price_per_km, active

-- Rider earnings analytics
rider_earnings: id, rider_id, period, orders_count, total_earned, merchants_referred
```

---

- [ ] **API Integrations** (for cooperatives)
  - Existing inventory systems (connect their DB)
  - Accounting software (export orders)
  - Custom workflows (per cooperativa)

- [ ] **Real-time Optimization**
  - Rider geolocation (live tracking)
  - Demand prediction (ML-light)
  - Dynamic routing (minimize time)

### Phase 3 (M6-M12): Enterprise Features
- [ ] White-label dashboard (per cooperativa branding)
- [ ] Advanced analytics (earnings reports, KPIs)
- [ ] Multi-language support (scale to EU)
- [ ] Mobile app for merchants (iOS/Android native)

---

## 💰 TECHNICAL BUDGET (M1-M6)

| Category | Cost | Notes |
|----------|------|-------|
| **Hosting** | €500/mese | Supabase, Vercel, Edge Functions |
| **APIs** | €800/mese | WhatsApp (€0.06-0.10/msg), Maps, Stripe |
| **Development** | €15K (one-time) | Dashboard Rider, API integrations |
| **Tools** | €500 | GitHub, monitoring, analytics |
| **Total M1-M6** | ~€18-20K | Includes your part-time CTO salary |

---

## 🏗️ SCALABILITY ANALYSIS

### Database Design (Supabase PostgreSQL)

**Core Tables**:
```sql
-- Merchants (Dealers)
merchants: id, name, category, tier, status, created_at

-- Orders
orders: id, merchant_id, rider_id, items, total, status, created_at

-- Riders
riders: id, name, cooperativa_id, rating, availability, location

-- Cooperativas
cooperativas: id, name, merchants_served, riders_available, revenue_mese

-- Transactions
transactions: id, order_id, merchant_id, dloop_fee, stripe_fee, net
```

**Scaling**:
- 100 dealers × 150 ordini/mese = 15K ordini/mese → ~500 rows/day (tiny)
- 500 dealers → 75K ordini/mese → 2.5K rows/day (still tiny)
- At 5K dealers (€100K+ revenue) → 750K ordini/mese (still manageable with indices)

**Conclusion**: Supabase scales to €10M+ revenue without rearchitecture. PostgreSQL can handle 100K+ qps.

---

## 🚀 TECHNICAL ROADMAP (6 Months)

### Week 1-4 (M1): MVP Completion
- [ ] Finish Dashboard Rider referral module
- [ ] Deploy Amodio integration (custom API)
- [ ] Setup monitoring + error tracking
- **Deliverable**: Amodio live, case study validated

### Month 2 (M2): Rider Viral Loop
- [ ] Activate 20 riders from Amodio
- [ ] Launch 5% commission system
- [ ] Build leaderboard gamification
- **Deliverable**: Riders start selling DLOOP

### Month 3 (M3): Cooperative Scaling
- [ ] Replicate Amodio integration for 2-3 more cooperativas
- [ ] Build white-label API (generic cooperativa SDK)
- [ ] Optimize real-time assignment algorithm
- **Deliverable**: 100+ dealers, multi-cooperativa support

### Month 4-6 (M4-M6): Enterprise Features
- [ ] Advanced analytics module
- [ ] Mobile merchant app (React Native or native)
- [ ] Custom integrations (per request)
- **Deliverable**: Ready for Series A (tech-solid)

---

## 🔐 TECHNICAL RISKS & MITIGATION

| Risk | Impact | Mitigation |
|------|--------|-----------|
| **Real-time scalability** | Supabase slow with 1000s orders/min | Test at load → migrate to managed PostgreSQL if needed |
| **WhatsApp API rate limits** | Messages throttled | Use Twilio as backup (already integrated) |
| **Cooperativa API chaos** | Each has different systems | Build generic SDK (wrapper layer) |
| **Rider app crashes** | Service quality issues | Robust error handling + fallback to SMS |
| **Data security** | GDPR/PCI compliance | Supabase RLS + Stripe PCI certified |

---

## 👨‍💻 YOUR ROLE (CTO)

### M1-M3 (Part-time €2K/mese)
- **Responsibility**: Code review, tech decisions, architecture
- **Time commitment**: 10-15 hours/week
- **Ownership**: Dashboard Rider, API integrations, deployment
- **Equity**: (Details in private Term Sheet)

### M3+ (Full-time €3K+/mese, if growth validates)
- **Responsibility**: Lead engineer, hiring, tech strategy
- **Team building**: Hire 1-2 junior engineers
- **Focus**: Scale infrastructure, reliability, new features

---

## 📊 TECHNICAL METRICS (To Measure Success)

| KPI | Target M3 | Target M6 |
|-----|-----------|-----------|
| **API latency** | <200ms p95 | <150ms p95 |
| **Bot accuracy** | 95% correct orders | 98%+ |
| **Uptime** | 99.5% | 99.9% |
| **Real-time lag** | <5 sec | <2 sec |
| **Data sync errors** | <1% | <0.1% |
| **Mobile crash rate** | <0.5% | <0.1% |

---

## 🎯 WHY THIS INTERESTS YOU (CTO Perspective)

### ✅ What You Get
1. **Clean technical challenge**: Real-time infra, scalability, API design
2. **Ownership**: Not "just engineering", but co-founder equity
3. **Impact**: Your code → €35K/mese revenue → €20-50M exit
4. **Autonomy**: Tech decisions yours, business handling by Crescenzo
5. **Growth**: Start part-time, scale to full team by M6

### ❌ What You Avoid
1. **Rider employment chaos** (Glovo's nightmare)
2. **Customer acquisition cost** (SaaS model, organic growth)
3. **Regulation risk** (Cooperatives handle employment, not you)
4. **Saturated market** (You compete on tech, not commission cutting)

---

## 🛡️ NOTA PRIVATA PER SABATINO (Come Renderla Virale)

**Saba, il segreto è qua:**

Se facciamo un software che i rider AMANO perché li rende liberi e imprenditori, non dovremo mai più spendere un euro in marketing per rider acquisition. La rete si auto-alimenta.

**Ma la Dashboard deve essere PERFETTA:**
- Se un rider sente che gli stiamo "rubando" i dati dei suoi clienti → scappa
- Se non vede quanto guadagna in trasparenza (quanto prende, quando, da chi) → non fidarsi
- Se il referral system non funziona (altro rider ruba il suo cliente) → danno reputazionale

**Tu sei il garante della sua indipendenza. La tua architettura deve far sentire ogni rider come PADRONE della sua rete, non come un "dipendente" con un'app.**

**Dashboard Rider "Entrepreneur Edition" = growth engine di DLOOP**
- Non è un "elenco di consegne" (che è commodità)
- È un **mini-CRM gestionale** che trasforma il rider in agente commerciale

**Come questo ti "paga" lo stipendio:**
- SaaS Dealer Fee (€149/mese) → Spese fisse + Sabatino/Dev
- Technology Fee (€0.50/ordine) → Tuo stipendio operativo
- Con 100 dealer × 15 ordini/giorno = 37.500 ordini/mese
- 37.500 × €0.50 = **€18.750/mese puro**
- I tuoi €2-3K spariscono dentro, diventano una frazione minima

**Significa**: Più ordini i rider generano (perché lo amano), più tu guadagni.

---

## 💬 Next Steps

1. **This week**: Call with Crescenzo + view architecture (GitHub private)
2. **Week 2**: Review financial model + customer validation (Amodio call)
3. **Week 3**: Decide equity & role (formal Term Sheet)
4. **Week 4**: Onboard, access Supabase, start coding

---

## 🔗 Resources

- **GitHub (private)**: https://github.com/creamoj-ai/ (share access)
- **Supabase project**: aqpwfurradxbnqvycvkm
- **Live products**: dloop-pwa.vercel.app, dloop-landing.vercel.app
- **WhatsApp bot logs**: Real conversations in production

---

**Contact**: Crescenzo | WhatsApp: +39 328 185 4639

**Status**: 🚀 Ready to start M1 | Waiting for your decision

