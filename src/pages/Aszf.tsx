import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, ShieldAlert } from 'lucide-react';

function setMeta(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.name = name;
    document.head.appendChild(el);
  }
  el.content = content;
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.rel = 'canonical';
    document.head.appendChild(el);
  }
  el.href = href;
}

export default function Aszf() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'ÁSZF - Általános Szerződési Feltételek | Dr. Hips Frigyes Zsolt';
    setMeta(
      'description',
      'Általános Szerződési Feltételek a Dr. Hips Frigyes Zsolt által szervezett Öngyógyító Napokra, webinárokra és konzultációkra.'
    );
    setMeta('robots', 'index, follow');
    setCanonical('https://subscribepage.io/Dr-Hips-Frigyes-Zsolt/aszf');
    window.scrollTo(0, 0);
    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 pt-20 sm:pt-28 pb-32">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-body text-[14px] text-cobalt hover:underline mb-10"
        >
          <ArrowLeft size={16} />
          Vissza a kezdőlapra
        </Link>

        <h1
          className="font-display font-extrabold text-navy tracking-tight"
          style={{ fontSize: 'clamp(2.25rem, 5vw, 3rem)', lineHeight: 1.15 }}
        >
          Általános Szerződési Feltételek
        </h1>

        <p className="font-body text-[13px] text-[#64748B] mt-3 mb-0">
          Hatályos: 2026. június 15-től
        </p>

        <p className="font-body text-[15px] text-[#475569] mt-5 leading-[1.7]">
          A Dr. Hips Frigyes Zsolt által szervezett Öngyógyító Napok workshopokra,
          online webinárokra, biológika konzultációkra és a weboldalon elérhető további
          szolgáltatásokra vonatkozó szerződéses feltételek.
        </p>

        <Section number="1" title="Preambulum és hatály">
          <Sub n="1.1." title="Az ÁSZF célja és tárgya">
            A jelen Általános Szerződési Feltételek (a továbbiakban: ÁSZF) a Szolgáltató és a
            weboldalán a szolgáltatásait megrendelő természetes vagy jogi személy (a továbbiakban:
            Megrendelő) közötti szerződéses viszony általános feltételeit határozzák meg.
          </Sub>
          <Sub n="1.2." title="Tárgyi hatály">
            Az ÁSZF a Szolgáltató által a weboldalon meghirdetett valamennyi szolgáltatásra
            kiterjed, így különösen az Öngyógyító Napok workshopokra, az online webinárokra,
            az egyéni konzultációkra, valamint az oktatási anyagokra.
          </Sub>
          <Sub n="1.3." title="Időbeli hatály">
            Az ÁSZF 2026. június 15. napjától hatályos, és visszavonásig, illetve
            a soron következő módosításig marad érvényben.
          </Sub>
          <Sub n="1.4." title="Személyi hatály">
            Az ÁSZF személyi hatálya kiterjed a Szolgáltatóra, valamint a Megrendelőre /
            Résztvevőre.
          </Sub>
          <Sub n="1.5." title="Az ÁSZF elfogadása">
            A jelentkezés / megrendelés véglegesítésével — a kötelező ÁSZF-elfogadó checkbox
            bejelölésével — a Megrendelő kifejezetten kijelenti, hogy az ÁSZF tartalmát
            megismerte, és azt magára nézve kötelezőnek elfogadja (Ptk. 6:78. §).
          </Sub>
        </Section>

        <Section number="2" title="Szolgáltató adatai (Ektv. 4. §)">
          <DataList
            rows={[
              ['Név', 'Dr. Hips Frigyes Zsolt'],
              ['Szakmai megnevezés', 'TSP oktató, hipnoterapeuta'],
              ['Székhely', '5145 Csökmő, Széchenyi István utca 10.'],
              ['Adószám', '55211884-1-29'],
              ['Bankszámlaszám', '10103513-52695400-01006000'],
              ['Telefon', '+36 20 316 24 42'],
              ['E-mail', 'hips.hu@gmail.com'],
              ['Weboldal', 'https://subscribepage.io/Dr-Hips-Frigyes-Zsolt'],
            ]}
          />
          <Sub n="2.15." title="Tárhelyszolgáltató adatai">
            <DataList
              rows={[
                ['Név', '{{TÁRHELYSZOLGÁLTATÓ_NEVE}}'],
                ['Cím', '{{TÁRHELYSZOLGÁLTATÓ_CÍME}}'],
                ['Elérhetőség', '{{TÁRHELYSZOLGÁLTATÓ_ELÉRHETŐSÉG}}'],
              ]}
            />
          </Sub>
        </Section>

        <Section number="3" title="Fogalommeghatározások">
          <DefList
            items={[
              ['Szolgáltató', 'Dr. Hips Frigyes Zsolt, a weboldalon meghirdetett szolgáltatásokat nyújtó személy.'],
              ['Megrendelő', 'A Szolgáltatás megrendelését leadó természetes vagy jogi személy.'],
              ['Fogyasztó', 'A Ptk. 8:1. § (1) bekezdés 3. pontja szerinti, a szakmája, önálló foglalkozása vagy üzleti tevékenysége körén kívül eljáró természetes személy.'],
              ['Résztvevő', 'A Megrendelő által megnevezett, az eseményen ténylegesen részt vevő természetes személy.'],
              ['Szolgáltatás', 'A Szolgáltató által a weboldalon meghirdetett valamennyi tevékenység (workshop, webinár, konzultáció, oktatási anyag).'],
              ['Esemény', 'Egy konkrét időpontra meghirdetett workshop vagy webinár.'],
              ['Workshop', 'Személyes részvétellel megtartott, egész napos szemléletformáló oktatási program (Öngyógyító Napok).'],
              ['Webinár', 'Online formátumban, élőben vagy felvételről közvetített oktatási program.'],
              ['Konzultáció', 'A Szolgáltató és a Résztvevő közötti egyéni, szemléletformáló beszélgetés.'],
              ['ÁSZF', 'A jelen Általános Szerződési Feltételek.'],
              ['Egyedi szerződés', 'A jelentkezés és visszaigazolás eredményeként a Felek között létrejött szerződéses jogviszony.'],
              ['Stripe', 'Stripe Payments Europe, Ltd. — a fizetési szolgáltató.'],
              ['Részvételi díj', 'A weboldalon az adott Eseménynél feltüntetett, a Megrendelő által fizetendő összeg.'],
              ['Távollévők közötti szerződés', 'Az Ektv. 2. § a) pontja szerinti, távollévő felek között elektronikus úton létrejött szerződés.'],
            ]}
          />
        </Section>

        <Section number="4" title="A szolgáltatás tárgya, jogi minősítése">
          <Sub n="4.1." title="A szolgáltatások típusai">
            <Bullets
              items={[
                'a) Öngyógyító Napok — egész napos személyes workshop',
                'b) Online webinár',
                'c) Egyéni konzultáció ({{HA_KÍNÁLT}})',
                'd) Oktatási anyagok ({{HA_KÍNÁLT}})',
              ]}
            />
          </Sub>

          <Sub n="4.2." title="A szolgáltatás jogi minősítése">
            <HighlightBox icon={<ShieldAlert size={18} />} label="Fontos egészségügyi tájékoztatás">
              <p className="font-body text-[15px] leading-[1.7] text-navy">
                <strong>A Szolgáltató által nyújtott szolgáltatás oktatási, önismereti és
                szemléletformáló jellegű tevékenység.</strong> A szolgáltatás kifejezetten
                <strong> nem minősül</strong> az egészségügyről szóló 1997. évi CLIV. törvény
                szerinti egészségügyi szolgáltatásnak, és <strong>nem helyettesíti</strong>{' '}
                az orvosi diagnózist, vizsgálatot, kezelést vagy gyógyszeres terápiát.
              </p>
              <p className="font-body text-[15px] leading-[1.7] text-navy mt-3">
                A Résztvevő tudomásul veszi, hogy egészségi panasz, betegség, fennálló orvosi
                kezelés vagy gyógyszerszedés esetén kezelőorvosát köteles felkeresni, és a
                programban hallottak alapján saját kezelését nem hagyhatja abba, nem módosíthatja
                kezelőorvosa előzetes konzultációja nélkül.
              </p>
            </HighlightBox>
          </Sub>

          <Sub n="4.3." title="A Szolgáltató szakmai háttere">
            A Szolgáltató szakgyógyszerész, biológika konzulens, hipnoterapeuta és öngyógyítás-oktató (TSP oktató).
          </Sub>
        </Section>

        <Section number="5" title="A szerződéskötés menete (Ektv. 5. §)">
          <Sub n="5.1." title="A jelentkezés technikai lépései">
            <Bullets
              items={[
                'a) az Esemény kiválasztása a weboldalon;',
                'b) a jelentkezési űrlap kitöltése (név, e-mail, telefonszám, számlázási adatok);',
                'c) az ÁSZF és az Adatkezelési tájékoztató elfogadása a kötelező checkboxokkal;',
                'd) átirányítás a Stripe biztonságos fizetési oldalára és a fizetés teljesítése;',
                'e) automatikus visszaigazoló e-mail kiküldése a Megrendelő részére.',
              ]}
            />
          </Sub>
          <Sub n="5.2." title="A szerződés létrejötte">
            A szerződés akkor jön létre, amikor a Szolgáltató a jelentkezést elektronikus úton
            visszaigazolja, és a fizetés a Stripe rendszerében sikeresen feldolgozásra került.
          </Sub>
          <Sub n="5.3." title="A szerződés nyelve">Magyar.</Sub>
          <Sub n="5.4." title="A szerződés iktatása">
            Az elektronikus szerződést a Szolgáltató iktatja, megőrzésének időtartama:{' '}
            {'{{IKTATÁSI_IDŐ — pl. 8 év}}'}.
          </Sub>
          <Sub n="5.5." title="Adatbeviteli hibák javítása">
            A jelentkezési folyamat során a „Vissza" gombbal léphet vissza, illetve a kitöltött
            mezőket szerkesztheti. A jelentkezést követően észlelt hibát a Szolgáltató felé
            e-mailben kell jelezni.
          </Sub>
        </Section>

        <Section number="6" title="Részvételi díj, fizetési feltételek">
          <Sub n="6.1." title="A részvételi díj">
            A részvételi díj a weboldalon, az adott Eseménynél feltüntetett összeg. A díj{' '}
            {'{{BRUTTÓ / ÁFA-MENTES}}'} értéken, magyar forintban (HUF) értendő.
          </Sub>
          <Sub n="6.2." title="Fizetési mód">
            A fizetés a Stripe Payments Europe, Ltd. (1 Grand Canal Street Lower, Grand Canal Dock,
            Dublin, D02 H210, Írország) által biztosított bankkártyás online fizetéssel történik.
            A Szolgáltató kártyaadatokat nem lát és nem tárol — ezeket kizárólag a Stripe kezeli,
            a PCI-DSS megfelelőségi keretrendszerében.
          </Sub>
          <Sub n="6.3." title="Teljesítés időpontja">
            A fizetés teljesítettnek minősül, amikor a Stripe a tranzakciót sikeresként
            visszaigazolja.
          </Sub>
          <Sub n="6.4." title="Részletfizetés / előleg">
            {'{{NEM_ÁLL_FENN / VAGY: részletezés}}'}.
          </Sub>
        </Section>

        <Section number="7" title="Számlázás">
          <Sub n="7.1." title="Elektronikus számla">
            A Szolgáltató a sikeres fizetést követő 8 munkanapon belül elektronikus számlát
            állít ki (Áfa tv. 163. §).
          </Sub>
          <Sub n="7.2." title="Számlázóprogram">
            {'{{SZÁMLÁZÓ_RENDSZER — pl. KBOSS.hu Kft. (Számlázz.hu), Billingo Technologies Zrt., vagy NAV Online Számlázó}}'}.
          </Sub>
          <Sub n="7.3." title="A számla kézbesítése">
            A számlát a Szolgáltató a Megrendelő által megadott e-mail címre küldi.
          </Sub>
          <Sub n="7.4." title="NAV Online Számla">
            Az adatszolgáltatás a 23/2014. (VI. 30.) NGM rendelet alapján automatikusan teljesül.
          </Sub>
          <Sub n="7.5." title="Számlamódosítás">
            Számla módosítása a kiállítást követő {'{{HATÁRIDŐ — pl. 8 nap}}'} napon belül
            kérhető a hips.hu@gmail.com címen.
          </Sub>
        </Section>

        <Section number="8" title="A szolgáltatás teljesítése">
          <Sub n="8.1." title="Visszaigazolás és tematika">
            A Szolgáltató a jelentkezést követően e-mailben visszaigazolja a részvételt, és
            elküldi a részletes tematikát, valamint a helyszínt (személyes Eseménynél), illetve
            a hozzáférési adatokat (webinárnál).
          </Sub>
          <Sub n="8.2." title="Megjelenés, késedelem">
            A Résztvevő az Eseményen a meghirdetett időpontban köteles megjelenni. A késedelmes
            érkezésért, távolmaradásért a Szolgáltató felelősséget nem vállal, díjvisszatérítés
            nem jár.
          </Sub>
          <Sub n="8.3." title="Felvételkészítés tilalma">
            A workshopokon és webinárokon hangfelvétel és/vagy videofelvétel készítése kizárólag
            a Szolgáltató előzetes írásbeli engedélyével lehetséges (1999. évi LXXVI. tv. szerinti
            szerzői jogvédelem és a személyiségi jogok tiszteletben tartása).
          </Sub>
        </Section>

        <Section number="9" title="Elállási jog és a kivétel kiemelt jelzése">
          <HighlightBox icon={<AlertTriangle size={18} />} label="Kiemelt figyelemfelhívás — elállási jog korlátozása">
            <p className="font-body text-[15px] leading-[1.7] text-navy">
              A 45/2014. (II. 26.) Korm. rendelet 29. § (1) bekezdés <strong>l) pontja</strong>{' '}
              alapján a Megrendelőt — mint Fogyasztót — <strong>nem illeti meg</strong> a 14
              napos indokolás nélküli elállási jog, mivel a Szolgáltató szolgáltatása konkrét
              időpontra meghirdetett szabadidős / oktatási tevékenység (workshop, webinár).
            </p>
          </HighlightBox>

          <Sub n="9.1." title="A Szolgáltató méltányossági lemondási feltételei">
            <p className="font-body text-[16px] text-[#1E293B] leading-[1.7]">
              A Szolgáltató a Fogyasztó javára kedvezőbb, méltányossági lemondási feltételeket
              biztosít (Ptk. 6:77. §):
            </p>
            <Bullets
              items={[
                <><strong>a) Több mint 7 nappal az Esemény előtt:</strong> a teljes részvételi díj visszatérítésre kerül.</>,
                <><strong>b) 6 vagy kevesebb nappal az Esemény előtt:</strong> a lemondás már nem lehetséges, a Szolgáltató méltányosságból a részvételi díj 50%-át visszautalja.</>,
                <><strong>c) Átruházhatóság:</strong> a részvételi jog másra átruházható a Szolgáltató előzetes, e-mailben történő tájékoztatása mellett.</>,
                <><strong>d) A lemondás módja:</strong> e-mail a hips.hu@gmail.com címre, az érintett Esemény megnevezésével és a Résztvevő nevével.</>,
                <><strong>e) Visszatérítés:</strong> a fizetéssel azonos módon (Stripe-on keresztüli visszautalás), a lemondás elfogadását követő 14 munkanapon belül.</>,
              ]}
            />
          </Sub>
        </Section>

        <Section number="10" title="A Szolgáltató általi lemondás, vis maior">
          <Sub n="10.1." title="A Szolgáltató általi lemondás">
            Ha a Szolgáltató az Eseményt saját okból lemondja, a teljes részvételi díj 14
            munkanapon belül visszajár, vagy — a Résztvevő választása szerint — pótidőpontot
            biztosít.
          </Sub>
          <Sub n="10.2." title="Vis maior">
            Vis maior (járvány, természeti katasztrófa, hatósági korlátozás, a Szolgáltató előre
            nem látható, érdekkörén kívüli akadályoztatása) esetén a Szolgáltató jogosult az
            Eseményt elhalasztani, vagy online formátumban megtartani. A Résztvevő ilyenkor
            három lehetőség közül választhat: pótidőpont, online részvétel, vagy a részvételi
            díj 100%-os visszatérítése.
          </Sub>
        </Section>

        <Section number="11" title="Felelősségi rendelkezések">
          <Sub n="11.1." title="A Résztvevő saját felelőssége">
            A Résztvevő a saját felelősségére vesz részt az Eseményen. A jelentkezéssel
            kijelenti, hogy fennálló egészségi állapota nem teszi kontraindikálttá a részvételt.
            Súlyos egészségügyi problémák (különösen szív- és érrendszeri betegség, terhesség,
            súlyos mentális betegség, epilepszia) esetén a Résztvevő köteles előzetesen
            egyeztetni kezelőorvosával, és erről a Szolgáltatót a jelentkezéskor tájékoztatni.
          </Sub>
          <Sub n="11.2." title="A Szolgáltató felelősségének korlátozása">
            A Szolgáltató felelőssége — a Ptk. 6:152. § értelmében — kizárólag a szándékosan
            vagy súlyos gondatlanságból okozott, az emberi életet, testi épséget vagy egészséget
            megkárosító szerződésszegésért áll fenn. Egyéb esetekben a felelősség a megfizetett
            részvételi díj összegéig korlátozott (a fogyasztói szerződésekre vonatkozó eltérő
            jogszabályi rendelkezések figyelembevételével).
          </Sub>
          <Sub n="11.3." title="Kizárt felelősség">
            A Szolgáltató nem vállal felelősséget olyan eseményekért, károkért, amelyek a
            Résztvevő egészségi állapotából, általa elhallgatott körülményeiből, vagy a
            programon hallottak Résztvevő általi félreértelmezéséből, helytelen alkalmazásából
            erednek.
          </Sub>

          <HighlightBox icon={<ShieldAlert size={18} />} label="Egészségügyi tájékoztatás megerősítése">
            <p className="font-body text-[15px] leading-[1.7] text-navy">
              Ismételten felhívjuk a figyelmet: a Szolgáltató tevékenysége nem egészségügyi
              szolgáltatás. A Résztvevő semmilyen, a programban elhangzottakat nem tekintheti
              orvosi tanácsnak vagy diagnózisnak, és kezelőorvosa előzetes konzultációja nélkül
              folyamatban lévő gyógyszeres terápiáját nem módosíthatja, nem hagyhatja abba.
            </p>
          </HighlightBox>
        </Section>

        <Section number="12" title="Szellemi tulajdonjogok (Szjt.)">
          <Sub n="12.1." title="A védett tartalmak">
            A weboldal tartalma, a workshop-anyagok, prezentációk, oktatási anyagok, írásos és
            audiovizuális tartalmak a Szolgáltató kizárólagos szellemi tulajdonát képezik
            (1999. évi LXXVI. törvény — Szjt.).
          </Sub>
          <Sub n="12.2." title="Tilalmak">
            Tilos a tartalmak engedély nélküli másolása, terjesztése, átdolgozása, harmadik fél
            részére történő továbbítása, illetve nyilvánosság számára történő hozzáférhetővé
            tétele.
          </Sub>
          <Sub n="12.3." title="Jogkövetkezmények">
            A jogsértés kártérítési és — szándékos esetben — büntetőjogi következményeket vonhat
            maga után.
          </Sub>
        </Section>

        <Section number="13" title="Adatkezelés">
          <p className="font-body text-[16px] text-[#1E293B] leading-[1.7]">
            A Szolgáltató adatkezelési gyakorlatát a{' '}
            <Link to="/adatkezelesi-tajekoztato" className="text-cobalt hover:underline">
              Adatkezelési tájékoztató
            </Link>{' '}
            oldalon közzétett Adatkezelési tájékoztató részletezi. A jelentkezéssel a Megrendelő
            ezt a tájékoztatót is elfogadja.
          </p>
        </Section>

        <Section number="14" title="Panaszkezelés, jogérvényesítés (Fgytv.)">
          <Sub n="14.1." title="Közvetlen panasz">
            A Szolgáltató a Megrendelő által megadott e-mail címre, vagy a hips.hu@gmail.com
            címre jelentheti be. A Szolgáltató a panaszra annak beérkezésétől számított
            30 napon belül érdemi választ ad (Fgytv. 17/A. §).
          </Sub>

          <Sub n="14.2." title="Békéltető Testület">
            <p className="font-body text-[16px] text-[#1E293B] leading-[1.7]">
              A Szolgáltató székhelye szerint illetékes Békéltető Testület:
            </p>
            <DataList
              rows={[
                ['Megnevezés', '{{ILLETÉKES_BÉKÉLTETŐ_TESTÜLET_NEVE}}'],
                ['Cím', '{{BÉKÉLTETŐ_TESTÜLET_CÍME}}'],
                ['Telefon', '{{BÉKÉLTETŐ_TESTÜLET_TELEFON}}'],
                ['E-mail', '{{BÉKÉLTETŐ_TESTÜLET_EMAIL}}'],
              ]}
            />
            <p className="font-body text-[15px] text-[#475569] leading-[1.7] mt-3">
              A Szolgáltatót együttműködési kötelezettség terheli a Békéltető Testület előtti
              eljárásban (Fgytv. 29. § (11) bekezdés).
            </p>
          </Sub>

          <Sub n="14.3." title="Fogyasztóvédelmi hatóság">
            Vármegyei / Fővárosi Kormányhivatalok Fogyasztóvédelmi Főosztálya — a Fogyasztó
            lakóhelye, illetve a Szolgáltató székhelye szerint illetékes szerv. Központi
            elérhetőség:{' '}
            <a className="text-cobalt hover:underline" href="https://www.kormanyhivatal.hu" target="_blank" rel="noopener noreferrer">
              www.kormanyhivatal.hu
            </a>
            .
          </Sub>

          <Sub n="14.4." title="Online vitarendezés (EU ODR)">
            <a className="text-cobalt hover:underline" href="https://ec.europa.eu/odr" target="_blank" rel="noopener noreferrer">
              https://ec.europa.eu/odr
            </a>
          </Sub>

          <Sub n="14.5." title="Bírósági út">
            A hatáskörrel és illetékességgel rendelkező magyar bíróság, Fogyasztó esetében a
            Polgári perrendtartásról szóló 2016. évi CXXX. törvény illetékességi szabályai
            szerint.
          </Sub>
        </Section>

        <Section number="15" title="Egyéb rendelkezések">
          <Sub n="15.1." title="Részleges érvénytelenség">
            Az ÁSZF egyes rendelkezéseinek érvénytelensége nem érinti a többi rendelkezés
            érvényességét (Ptk. 6:114. §).
          </Sub>
          <Sub n="15.2." title="Nem szabályozott kérdések">
            Az ÁSZF-ben nem szabályozott kérdésekben a hivatkozott jogszabályok az irányadók.
          </Sub>
          <Sub n="15.3." title="Alkalmazandó jog">Magyarország joga.</Sub>
          <Sub n="15.4." title="Joghatóság">Kizárólag magyar bíróságok.</Sub>
          <Sub n="15.5." title="Megismerhetőség">
            Az ÁSZF a Ptk. 6:78. §-a szerint a Megrendelő szerződéskötés előtti megismerhetőségét
            a weboldalon biztosított közzététellel teljesíti. A Megrendelő az ÁSZF-et a
            jelentkezéssel kifejezetten elfogadja.
          </Sub>
        </Section>

        <Section number="16" title="Az ÁSZF módosítása">
          <Sub n="16.1." title="Egyoldalú módosítás">
            A Szolgáltató jogosult az ÁSZF-et egyoldalúan módosítani.
          </Sub>
          <Sub n="16.2." title="Közzététel">
            A módosítást a Szolgáltató a weboldalon közzéteszi. A módosítás a közzétételtől
            hatályos a jövőre nézve.
          </Sub>
          <Sub n="16.3." title="Folyamatban lévő szerződések">
            A módosítás előtt már létrejött szerződésekre (jelentkezésekre) a szerződéskötés
            időpontjában hatályos ÁSZF az irányadó.
          </Sub>
        </Section>

        <Section number="17" title="Záró rendelkezések">
          <Sub n="17.1." title="Hatályba lépés">2026. június 15.</Sub>
          <Sub n="17.2." title="Verziószám">1.0</Sub>
          <Sub n="17.3." title="PDF letöltés">Hamarosan elérhető.</Sub>
        </Section>

        <section className="mt-16">
          <h2
            className="font-display font-extrabold text-navy tracking-tight"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 1.875rem)', lineHeight: 1.2 }}
          >
            Melléklet — Lemondási nyilatkozat-minta
          </h2>
          <p className="font-body text-[15px] text-[#475569] leading-[1.7] mt-3">
            A 14 napos elállási jog a 45/2014. (II. 26.) Korm. rendelet 29. § (1) l) pontja
            alapján a Szolgáltató szolgáltatásai esetében kizárt. Az alábbi minta a Szolgáltató
            méltányossági lemondási feltételei szerinti egyszerű e-mail bejelentéshez használható.
          </p>
          <pre className="font-body text-[14px] text-[#1E293B] leading-[1.7] mt-4 p-5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-md whitespace-pre-wrap">
{`Tárgy: Lemondás — Öngyógyító Napok — [esemény dátuma]

Tisztelt Dr. Hips Frigyes Zsolt!

Alulírott [Név], a [esemény megnevezése, dátuma] eseményre szóló
jelentkezésemet ezúton lemondom. Kérem a részvételi díj
visszatérítésére vonatkozó méltányossági szabályok alkalmazását
az ÁSZF 9.1. pontja szerint.

Kelt: [hely], [dátum]
Aláírás: [Név]`}
          </pre>
        </section>

        <div className="mt-16 border-t border-[#E2E8F0] pt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-body text-[14px] text-cobalt hover:underline"
          >
            <ArrowLeft size={16} />
            Vissza a kezdőlapra
          </Link>
        </div>
      </div>
    </main>
  );
}

function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2
        className="font-display font-extrabold text-navy tracking-tight"
        style={{ fontSize: 'clamp(1.5rem, 3vw, 1.875rem)', lineHeight: 1.2 }}
      >
        <span className="text-cobalt mr-3">{number}.</span>
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function Sub({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <h3 className="font-display font-bold text-cobalt text-[1.1rem]">
        <span className="mr-2">{n}</span>
        {title}
      </h3>
      <div className="mt-2 font-body text-[16px] text-[#1E293B] leading-[1.7]">{children}</div>
    </div>
  );
}

function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="font-body text-[16px] text-[#1E293B] leading-[1.7] mt-2 space-y-2 list-disc pl-6">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

function DataList({ rows }: { rows: [string, string][] }) {
  return (
    <div className="border border-[#E2E8F0] rounded-md overflow-hidden mt-3">
      <table className="w-full border-collapse">
        <tbody>
          {rows.map(([k, v], i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'}>
              <th className="text-left font-body text-[14px] font-semibold text-navy align-top px-3 py-3 w-[40%] border-b border-[#E2E8F0]">{k}</th>
              <td className="font-body text-[15px] text-[#1E293B] align-top px-3 py-3 border-b border-[#E2E8F0]">{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DefList({ items }: { items: [string, string][] }) {
  return (
    <dl className="mt-3 space-y-3">
      {items.map(([term, def], i) => (
        <div key={i} className="font-body text-[15px] text-[#1E293B] leading-[1.7]">
          <dt className="inline font-semibold text-navy">{term}: </dt>
          <dd className="inline">{def}</dd>
        </div>
      ))}
    </dl>
  );
}

function HighlightBox({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="my-6 rounded-[4px]"
      style={{
        border: '1px solid #4DC5E8',
        background: 'rgba(77, 197, 232, 0.05)',
        padding: '24px 28px',
      }}
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="text-cyan flex-shrink-0">{icon}</span>
        <span
          className="font-body font-semibold text-navy uppercase"
          style={{ fontSize: '12px', letterSpacing: '0.08em' }}
        >
          {label}
        </span>
      </div>
      {children}
    </div>
  );
}
