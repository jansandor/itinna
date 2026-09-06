# Itinna

## Inspirace a přímá i nepřímá konkurence

- [Rexby](https://www.rexby.com/)
- [Wanderlog](https://wanderlog.com/)
- [Maps.me](https://maps.me/)
- [Polarsteps](https://www.polarsteps.com/)
- [Get Your Guide](https://www.getyourguide.com/)
- [Airbnb](https://www.airbnb.cz/)

## Barvy a design

- Jednoduše bílý text na černém pozadí a skleněný efekt pro premium feeling ala Apple product page.
- Decentní interaktivní prvky a animace. Záměrně se animace spouští pouze jednou ve vhodnou chvíli (nebo fungují na hover) pro vtahující efekt a chytnutí pozornosti návštěvníka.
- Chtěl jsem se vyhnout animacím a přechodům kompletně závislým/krokovaným přes scroll, protože mi to přijde iritující, pokud potřebuju rychle vyhledat informace na stránce a "proletět ji" - takové animace závislé na scrollu používá např. [Polarsteps](https://www.polarsteps.com/) a moc to nefeeluju.

# Sekce

Hlavní myšlenka stránky je oslovit cestovatele i tvůrce. Cestovatele beru jako hlavní skupinu - přinášejí peníze a tak se na ně snažím působit jako na primary cílovku. Tvůrců je pravděpodobně méně a můžeme je oslovit proaktivně my, proto je na stránce beru jako sekundární cílovku a věnuju jím později méně pozornosti.

## Hero a Navigace

Odpovídá na otázku "Co je Itinna + catch".

Měla by zaujmout obě skupiny a to primárně designem.

### **Hook - immersive, cinematic experience**

Má zaujmout pozornost a vystoupit z řady basic landing pages. Videa s výhledy měst, přírody, hor, lesů, stezek a lidí (travel influencerů) užívajících si cestování - to, co Itinna definuje.

### **Hlavní karta**

Co je Itinna v pár větách na decentní skleněné kartě, která příliš nevyčnívá a neruší video, ale současně podporuje čitelnost textu.

**Explore guides CTA** uživatele rovnou přenese na stránku (pro demo účely neexistuje). Stránka **Explore Guides** by vlastně už byla takový marketplace s Guides (grid s guides / Rexby Triptok timeline style). Rozklik itemu by podobně jako Rexby vedl na detail itemu/guide -> směrování návštěvníka ke koupi a registraci.

### **Navigace**

Obsahuje odkazy:

- **Logo (zatím neexistuje) + label "itinna"** - na klik smooth scroll to top / na hero, "domů" - standard
- **Explore** - na klik smooth scroll na sekci Explore pod Hero, **zejména pro Cestovatele**
- **How It Works** - na klik smooth scroll na sekci How It Works pod Explore, **pro Cestovatele i Tvůrce**
- **For Creators** - na klik smooth scroll na sekci For Creators pod How It Works, **zejména pro Tvůrce**
- **Log in** - důležité a standardní pro každou aplikaci. Vede na stranku přihlášení (a registrace), která by (jako je běžné) obsahovala i možnost registrovat se. Button má glass efekt pozadí pro menší rušivost (sekundární akce) a pro zapadnutí do černá + bílá + glass efekt designu.
- **Explore guides** - primarní akce - navigace na **Explore Guides** (`/explore-guides`) stránku - marketplace (grid s guides / Rexby Triptok-like timeline)

Zbytečně nenarušuje video a je pod ní pouze lehký black to transparent gradient shora dolů pro lepší čitelnost, pokud video obsahuje nahoře hodně bílé nebo světlou barvu, ve které by se navigace ztrácela.

Při scrollování dolů se navigace decentně přitlačí na horní okraj obrazovky, zúží se a původní gradient plynule přejde do glass pozadí ve stylu hlavní Hero karty.

Dole v Hero sekci jsou animované šipky (from top to bottom light sweep efekt) s titulkem **Explore**, které mají decentně motivovat k prozkoumání stránky a indikovat, že se toho na stránce nachází více. Titulek **Explore** s šipkami je zároveň odkaz, který po kliknutí zascrolluje na sekci následující pod Hero -> Explore.

## Explore

Odpovídá na otázku "Co dostanu?".

Zacíleno na cestovatele.

3 karty + "features list", co se plynule objeví na scéně.

Animace objevení a obrázky mají zaujmout pozornost a udělat to živější. Obrázek má na hover lehký zoom-in pro interaktivitu, aby to nepůsobilo tak suše. Skrommný features list vysvětluje, co uživatel dostane v bodech - stručně, to nejdůležitější.

1. Karta - Pozadí je fotka z cest + mobil s appkou v ruce. V appce je otevřená offline mapa v Itinna.
2. Karta - Guide detail - screen z aplikace, kde je otevřený detail guide. Ukazuje základní info jako "Jak dlouhý trip je", "Kolik to stojí", "Zastávky tripu" atd.
3. Karta - Itinerář tripu.

## How It Works

Odpovídá na otázku "Jak to funguje?".

## For Creators

Odpovídá na otázku "Proč bych tam měl publikovat/používat to jako tvůrce - travel influencer?".

## Reviews

Odpovídá na otázku "Můžu tomu věřit?".

## KPIs

## Get The App

Odpovídá na otázku "Jak to můžu získat?".

## Final CTA

Odpovídá na otázku "Co dál? Kam pojedu?".

Call to action otevřít marketplace.

## Footer

# Getting Started

First, run the development server:

```bash
pnpm install
pnpm build
pnpm dev
```

```bash
pnpm lint
pnpm lint:fix
pnpm format:check
pnpm format
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
