# Itinna

## Inspirace a přímá i nepřímá konkurence

- [Rexby](https://www.rexby.com/)
- [Wanderlog](https://wanderlog.com/)
- [Maps.me](https://maps.me/)
- [Polarsteps](https://www.polarsteps.com/)
- [Get Your Guide](https://www.getyourguide.com/)
- [Airbnb](https://www.airbnb.cz/)

## Barvy a design

- Čistý, vzdušný, lehký product page styl.
- Jednoduše bílý text na černém pozadí a skleněný efekt pro premium feeling ala Apple product page.
- Decentní interaktivní prvky a animace. Záměrně se animace spouští pouze jednou ve vhodnou chvíli (nebo fungují na hover) pro vtahující efekt a chytnutí pozornosti návštěvníka.
- Chtěl jsem se vyhnout animacím a přechodům kompletně závislým/krokovaným přes scroll, protože mi to přijde iritující, pokud potřebuju rychle vyhledat informace na stránce a "proletět ji" - takové animace závislé na scrollu používá např. [Polarsteps](https://www.polarsteps.com/) a moc to nefeeluju.
- From left to right light sweep efekt na podtitulcích sekcí. Spouští se jednou po zascrollování a "odkrytí" dostatečně velké části sekce (např. na textu "Everything you need for a better trip, in one place.")

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

> Původně uvažováno jako carousel s 3+ guides a vpravo dole s decentním CTA linkem "See more/Explore guides/Explore more", ale aktuální verze mi přijde čistší a nebude odvádět pozornost od hlavního obsahu stránky. Link by vedl na Explore guides marketplace page.

3 karty + "features list", co se plynule objeví na scéně.

Animace objevení a obrázky mají zaujmout pozornost a udělat to živější. Obrázek má na hover lehký zoom-in pro interaktivitu, aby to nepůsobilo tak suše. Skrommný features list vysvětluje, co uživatel dostane v bodech - stručně, to nejdůležitější.

1. Karta - Pozadí je fotka z cest + mobil s appkou v ruce. V appce je otevřená offline mapa v Itinna.
2. Karta - Guide detail - screen z aplikace, kde je otevřený detail guide. Ukazuje základní info jako "Jak dlouhý trip je", "Kolik to stojí", "Zastávky tripu" atd.
3. Karta - Screen aplikace - Itinerář tripu.

## Meet The Creators

**Neimplementovaná, ale uvažovaná sekce** (součást sekce Explore - neměla by link v navigaci), která by Cestovatele lákala "z druhé strany".

"Z druhé strany" znamená, že jeden pohled cestovatele může být "Hledám kam vyrazit" a druhý pohled může být "Hledám své známé a oblíbené tvůrce" - a přesně tohle měla tahle část řešit.

První část Explore by ukazovala příklady (nebo existující) guides jako 3-4+ karty, možná v carouselu s decentním CTA linkem "See more/Explore guides/Explore more" vpravo dole.

Druhá část by zase ukazovala tvůrce, taky jako 3-4+ karty, možná v carouselu s decentním CTA linkem "See more/Explore creators/Explore more" vpravo dole. Odkaz by vedl na stránku **Explore creators** (`/explore-creators`), kde by byl grid s kartami profilů tvůrců - podobně jako pro marketplace Explore Guides by klik na kartu motivoval/vedl k registraci.

## How It Works

Odpovídá na otázku "Jak to funguje?".

Zacíleno na Cestovatele i Tvůrce.

Nastiňuje oběma cílovým skupinám jak Itinna pro každou z nich funguje.

Sekce obsahuje dva sloupce For Travelers a For Creators asymetricky vertikálně posunuté, aby flow stránky zleva doprava a shora dolů nejprve nabídla info cestovatelům a behěm chvíle i tvůrcům, ale ne vedle sebe, aby to celkově působilo vzdušně a elementz si vzájemně nekradli pozornost návštěvníka. Sloupce a položky seznamů se objevují postupně podobně jako obsah sekce Explore.

Hover přes kartičky spouští decentní light sweep efekt přes drobný, světlejší text, aby i tato sekce poskytla nějakou vtahující interaktivitu, jelikož neobsahuje žádný výraznější grafický element / obrázek.

## For Creators

Odpovídá na otázku "Proč bych tam měl publikovat/používat to jako tvůrce - travel influencer?".

Zacíleno na Tvůrce.

Vysvětluje stručně přidanou hodnotu Itinna pro tvůrce.

Možnost přidat CTA "Create guide" -> registrace nebo dokonce nechat návštěvníka projít si flow pro přidání guide a na konci, abz proces mohl dokončit vynutit registraci - návštěvník si tak už zkusí na vlastní kůži, jak to funguje a protože už do tvorby guide vloží úsilí, bude mít daleko větší motivaci se na konci flow registrovat, aby neztratil investici.

## Reviews

Odpovídá na otázku "Můžu tomu věřit?".

Zacíleno na Cestovatele i Tvůrce.

## KPIs

## Get The App

Odpovídá na otázku "Jak to můžu získat?".

Zacíleno na Cestovatele i Tvůrce.

## Final CTA

Odpovídá na otázku "Co dál? Kam pojedu?".

Zacíleno na Cestovatele i Tvůrce.

Call to action otevřít marketplace.

## Footer

# How to run project

Copy content of [CONTENT LINK G-DRIVE](<>) to the project root folder to add videos and images.

Run the development server:

```bash
nvm use
pnpm install
pnpm build
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
pnpm lint
pnpm lint:fix
pnpm format:check
pnpm format
```
