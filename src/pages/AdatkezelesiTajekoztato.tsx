import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

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

export default function AdatkezelesiTajekoztato() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'Adatkezelési tájékoztató | Dr. Hips Frigyes Zsolt';
    setMeta(
      'description',
      'A Dr. Hips Frigyes Zsolt weboldalának GDPR-konform adatkezelési tájékoztatója. A személyes adatok kezelésének szabályai.'
    );
    setMeta('robots', 'index, follow');
    setCanonical('https://subscribepage.io/Dr-Hips-Frigyes-Zsolt/adatkezelesi-tajekoztato');
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
          Adatkezelési tájékoztató
        </h1>

        <p className="font-body text-[13px] text-[#64748B] mt-3 mb-0">
          Hatályos: 2026. június 15-től
        </p>

        <p className="font-body text-[15px] text-[#475569] mt-5 leading-[1.7]">
          Dr. Hips Frigyes Zsolt által nyújtott biológika konzulens, hipnoterápiás,
          oktatási és kapcsolódó szolgáltatások adatkezelési szabályai.
        </p>

        <Section title="I. Bevezető">
          <P>
            A jelen Adatkezelési tájékoztató (a továbbiakban: Tájékoztató) célja, hogy az érintettek
            számára közérthető, átlátható és pontos tájékoztatást nyújtson személyes adataik
            kezelésének szabályairól, az Európai Parlament és a Tanács (EU) 2016/679 rendelete (GDPR)
            12-22. cikkei, valamint a 2011. évi CXII. törvény (Infotv.) rendelkezéseinek megfelelően.
          </P>
          <P>
            <strong>A Tájékoztató hatálya</strong> kiterjed az Adatkezelő által üzemeltetett
            weboldalra és kapcsolódó szolgáltatásokra. <strong>Az érintettek köre:</strong>{' '}
            a weboldal-látogatók; az Öngyógyító Napok és webinárok jelentkezői; a kapcsolatfelvételi
            űrlapot vagy e-mailt küldők; a hírlevélre feliratkozók; a konzultációs ügyfelek.
          </P>
        </Section>

        <Section title="II. Az Adatkezelő adatai">
          <DataList
            rows={[
              ['Név', 'Dr. Hips Frigyes Zsolt'],
              ['Szakmai megnevezés', 'TSP oktató, hipnoterapeuta'],
              ['Székhely', '5145 Csökmő, Széchenyi István utca 10.'],
              ['Adószám', '55211884-1-29'],
              ['Telefon', '+36 20 316 24 42'],
              ['Hivatalos e-mail', 'hips.hu@gmail.com'],
              ['Weboldal', 'https://subscribepage.io/Dr-Hips-Frigyes-Zsolt'],
            ]}
          />
          <P>
            <strong>Adatvédelmi tisztviselő (DPO):</strong> az Adatkezelő tevékenysége nem teszi
            kötelezővé adatvédelmi tisztviselő kijelölését a GDPR 37. cikke alapján
            (a tevékenység nem irányul nagy léptékű, rendszeres és szisztematikus megfigyelésre,
            illetve nagy léptékű különleges adatok kezelésére). Adatvédelemmel kapcsolatos
            megkeresések a hivatalos e-mail címen tehetők.
          </P>
        </Section>

        <Section title="III. Fogalommagyarázat">
          <P>A GDPR 4. cikke szerinti legfontosabb fogalmak közérthető megfogalmazásban:</P>
          <DefList
            items={[
              ['Személyes adat', 'Bármely információ, amely azonosított vagy azonosítható természetes személyre (Önre) vonatkozik (pl. név, e-mail, telefonszám, IP-cím).'],
              ['Érintett', 'Az a természetes személy, akire a kezelt személyes adatok vonatkoznak.'],
              ['Adatkezelés', 'A személyes adatokon végzett bármely művelet (gyűjtés, rögzítés, tárolás, felhasználás, továbbítás, törlés stb.).'],
              ['Adatkezelő', 'Az a természetes vagy jogi személy, aki az adatkezelés céljait és eszközeit meghatározza — jelen esetben Dr. Hips Frigyes Zsolt.'],
              ['Adatfeldolgozó', 'Aki az Adatkezelő nevében és utasítására kezel személyes adatokat (pl. tárhelyszolgáltató, számlázóprogram).'],
              ['Harmadik fél', 'Az érintetten, az adatkezelőn és az adatfeldolgozón kívüli személy vagy szervezet.'],
              ['Címzett', 'Az a fél, akivel a személyes adatot közlik.'],
              ['Hozzájárulás', 'Az érintett önkéntes, konkrét, megfelelő tájékoztatáson alapuló és egyértelmű akaratnyilvánítása.'],
              ['Profilalkotás', 'Személyes adatok automatizált kezelése az érintetthez kapcsolódó jellemzők értékelésére.'],
              ['Adatvédelmi incidens', 'A biztonság olyan sérülése, amely a továbbított, tárolt vagy más módon kezelt személyes adatok jogosulatlan közléséhez, megváltoztatásához, megsemmisüléséhez vagy elvesztéséhez vezet.'],
              ['Harmadik ország', 'Az Európai Gazdasági Térségen kívüli ország.'],
            ]}
          />
        </Section>

        <Section title="IV. Adatkezelési tevékenységek">
          <P>
            Az alábbi táblázat tartalmazza az egyes adatkezelési tevékenységeket, az azokhoz
            kapcsolódó adatokat, célokat, jogalapokat, megőrzési időket és címzetteket.
          </P>

          <ActivityTable
            rows={[
              {
                name: '1) Workshop / Öngyógyító Napok jelentkezés',
                data: 'név, e-mail, telefonszám, választott esemény, számlázási adatok',
                purpose: 'jelentkezés feldolgozása, részvétel biztosítása, kapcsolattartás',
                legal: 'GDPR 6. cikk (1) b) — szerződés teljesítése',
                duration: 'a részvételt követő 5 év (Ptk. szerinti általános elévülés)',
              },
              {
                name: '2) Online webinár / videós tartalom hozzáférés',
                data: 'név, e-mail, hozzáférési adatok',
                purpose: 'az online tartalomhoz való hozzáférés biztosítása',
                legal: 'GDPR 6. cikk (1) b) — szerződés teljesítése',
                duration: 'a hozzáférés megszűnését követő 5 év',
              },
              {
                name: '3) Fizetés feldolgozása (Stripe)',
                data: 'tranzakciós azonosító, fizetett összeg (a kártyaadatokat kizárólag a Stripe kezeli a saját PCI-DSS megfelelőségében)',
                purpose: 'a részvételi/szolgáltatási díj beszedése',
                legal: 'GDPR 6. cikk (1) b) — szerződés teljesítése',
                duration: '8 év (Sztv. 169. §, Áfa tv. 169. §)',
              },
              {
                name: '4) Számlázás',
                data: 'számlázási név, számlázási cím, adószám (cég esetén)',
                purpose: 'számla kiállítása, NAV Online Számla adatszolgáltatás',
                legal: 'GDPR 6. cikk (1) c) — jogi kötelezettség (Áfa tv. 159. §, Sztv. 165–169. §, 23/2014. (VI. 30.) NGM rendelet)',
                duration: '8 év (Sztv. 169. §)',
              },
              {
                name: '5) Kapcsolatfelvételi űrlap / e-mail kommunikáció',
                data: 'név, e-mail, telefon (opcionális), üzenet tartalma',
                purpose: 'ügyfélkérdések, érdeklődések megválaszolása',
                legal: 'GDPR 6. cikk (1) f) — jogos érdek (kommunikáció), vagy a) — hozzájárulás, ha az érintett kifejezetten azt adja',
                duration: 'a megkeresés lezárását követő 1 év',
              },
              {
                name: '6) Hírlevél küldés ({{HA_VAN_HÍRLEVÉL}})',
                data: 'név, e-mail',
                purpose: 'tájékoztatás új eseményekről, tartalmakról, akciókról',
                legal: 'GDPR 6. cikk (1) a) — hozzájárulás + Grtv. 6. § (1)',
                duration: 'a hozzájárulás visszavonásáig (leiratkozási link minden levélben kötelező)',
              },
              {
                name: '7) Weboldal-statisztika / cookie-alapú analytics ({{HA_HASZNÁL}})',
                data: 'anonimizált IP, böngészési viselkedés, eszközadatok',
                purpose: 'weboldal-optimalizálás, használati minták elemzése',
                legal: 'GDPR 6. cikk (1) a) — hozzájárulás (cookie-bannerrel)',
                duration: '{{ANALYTICS_MEGŐRZÉS — pl. GA4 alapért. 14 hónap}}',
              },
            ]}
          />
        </Section>

        <Section title="V. Címzettek, adatfeldolgozók">
          <P>
            Az Adatkezelő az alábbi adatfeldolgozókat veszi igénybe. Az adatfeldolgozók kizárólag
            az Adatkezelő utasítása szerint, írásbeli megállapodás alapján járnak el.
          </P>

          <ProcessorBlock
            name="Tárhelyszolgáltató"
            details={[
              ['Név', '{{TÁRHELYSZOLGÁLTATÓ_NEVE}}'],
              ['Székhely', '{{TÁRHELYSZOLGÁLTATÓ_CÍM}}'],
              ['Elérhetőség', '{{TÁRHELYSZOLGÁLTATÓ_ELÉRHETŐSÉG}}'],
              ['Átadott adatok', 'a weboldalon megadott összes adat (tárolás)'],
              ['Adatfeldolgozás célja', 'a weboldal és az adatok elérhetőségének biztosítása'],
            ]}
          />

          <ProcessorBlock
            name="Stripe Payments Europe, Ltd."
            details={[
              ['Székhely', '1 Grand Canal Street Lower, Grand Canal Dock, Dublin, D02 H210, Írország'],
              ['Átadott adatok', 'tranzakciós azonosító, fizetett összeg, név, e-mail (a kártyaadatokat közvetlenül a Stripe kezeli, az Adatkezelő ezeket nem látja)'],
              ['Adatfeldolgozás célja', 'fizetés feldolgozása'],
              ['Adatvédelmi tájékoztató', 'https://stripe.com/privacy'],
            ]}
          />

          <ProcessorBlock
            name="Számlázóprogram-szolgáltató"
            details={[
              ['Név és adatok', '{{SZÁMLÁZÓ_RENDSZER_TELJES_ADATAI — pl. KBOSS.hu Kft. (Számlázz.hu) vagy Billingo Technologies Zrt.}}'],
              ['Átadott adatok', 'számlázási név, cím, adószám (cég esetén), tételek, összegek'],
              ['Adatfeldolgozás célja', 'számla kiállítása, megőrzése, NAV adatszolgáltatás'],
            ]}
          />

          <ProcessorBlock
            name="E-mail szolgáltatás"
            details={[
              ['Név és adatok', '{{EMAIL_SZOLGÁLTATÓ_ADATAI — pl. Google Workspace, Google Ireland Ltd.}}'],
              ['Átadott adatok', 'e-mailek tartalma, címzettek, küldési metaadatok'],
              ['Adatfeldolgozás célja', 'üzleti levelezés bonyolítása'],
            ]}
          />

          <ProcessorBlock
            name="Hírlevélkezelő (ha van)"
            details={[
              ['Név és adatok', '{{HÍRLEVÉL_SZOLGÁLTATÓ_ADATAI}}'],
              ['Átadott adatok', 'név, e-mail, megnyitási és kattintási statisztikák'],
              ['Adatfeldolgozás célja', 'hírlevél kézbesítése, kampánystatisztika'],
            ]}
          />
        </Section>

        <Section title="VI. Harmadik országba történő adattovábbítás">
          <P>
            A Stripe és — amennyiben az Adatkezelő használja — egyes Google-szolgáltatások révén
            személyes adatok továbbítódhatnak az Amerikai Egyesült Államokba. Az adattovábbítás
            jogszerűségét az alábbi garanciák biztosítják:
          </P>
          <Bullets
            items={[
              'EU–US Data Privacy Framework (a Bizottság 2023. július 10-i megfelelőségi határozata) — a tanúsított vállalkozások felé történő adattovábbítás esetén.',
              'Általános Szerződési Feltételek (Standard Contractual Clauses, SCC) — a Bizottság 2021/914/EU végrehajtási határozata szerint.',
              'Az érintettek számára biztosítva van jogaik érvényesíthetősége, beleértve a hatékony jogorvoslatot.',
            ]}
          />
          <P>
            Részletes információ a Bizottság weboldalán:{' '}
            <a
              href="https://commission.europa.eu/law/law-topic/data-protection_en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cobalt hover:underline"
            >
              commission.europa.eu/law/law-topic/data-protection_en
            </a>
            .
          </P>
        </Section>

        <Section title="VII. Adatbiztonsági intézkedések">
          <P>
            Az Adatkezelő a GDPR 32. cikke alapján a kockázat mértékéhez igazodó technikai és
            szervezési intézkedéseket alkalmaz a személyes adatok védelmére:
          </P>
          <Bullets
            items={[
              'SSL/TLS titkosított adattovábbítás (HTTPS) a teljes weboldalon.',
              'Erős jelszókezelés és — ahol elérhető — kétfaktoros hitelesítés.',
              'Hozzáférési jogosultságok a „need-to-know" elv szerint.',
              'Rendszeres biztonsági mentések.',
              'Naprakész szoftverek és biztonsági frissítések, kártevővédelem.',
              'Adatvédelmi incidens kezelési protokoll: tudomásszerzéstől számított 72 órán belüli NAIH-értesítés (GDPR 33. cikk), magas kockázat esetén az érintettek tájékoztatása (GDPR 34. cikk).',
            ]}
          />
        </Section>

        <Section title="VIII. Az érintett jogai">
          <P>A GDPR 15–22. és 7. cikke alapján Önt az alábbi jogok illetik meg:</P>

          <RightItem
            title="1. Hozzáférés joga (15. cikk)"
            body="Tájékoztatást kérhet arról, hogy az Adatkezelő milyen személyes adatait, milyen célból, mennyi ideig kezeli, és kiknek továbbítja. Másolatot kérhet a kezelt adatokról."
          />
          <RightItem
            title="2. Helyesbítéshez való jog (16. cikk)"
            body="Kérheti a pontatlan adat helyesbítését vagy a hiányos adat kiegészítését."
          />
          <RightItem
            title={'3. Törléshez való jog – „elfeledtetéshez való jog" (17. cikk)'}
            body="Kérheti adatainak törlését, amennyiben azok kezelése a céljához már nem szükséges, hozzájárulását visszavonta, vagy az adatkezelés jogellenes. A törlés nem teljesíthető, ha az adatkezelés jogi kötelezettség teljesítéséhez vagy igények érvényesítéséhez szükséges (pl. számlamegőrzés)."
          />
          <RightItem
            title="4. Korlátozáshoz való jog (18. cikk)"
            body="Bizonyos esetekben (pl. pontosság vitatása, jogellenes adatkezelés, tiltakozás elbírálása alatt) kérheti az adatkezelés korlátozását — ilyenkor az adatokat csak tárolni szabad."
          />
          <RightItem
            title="5. Adathordozhatósághoz való jog (20. cikk)"
            body="Az Ön által szolgáltatott, hozzájáruláson vagy szerződésen alapuló, automatizált módon kezelt adatait tagolt, géppel olvasható formátumban megkaphatja vagy más adatkezelőhöz továbbíttathatja."
          />
          <RightItem
            title="6. Tiltakozáshoz való jog (21. cikk)"
            body="Tiltakozhat a jogos érdeken alapuló adatkezelés ellen; közvetlen üzletszerzési célú adatkezelés (pl. hírlevél) ellen pedig korlátozás nélkül."
          />
          <RightItem
            title="7. Automatizált döntéshozatallal kapcsolatos jog (22. cikk)"
            body="Joga van ahhoz, hogy ne terjedjen ki Önre olyan, kizárólag automatizált adatkezelésen alapuló döntés hatálya, amely Önre nézve joghatással járna vagy hasonlóan jelentős mértékben érintené. Az Adatkezelő ilyen döntéshozatalt nem végez."
          />
          <RightItem
            title="8. Hozzájárulás visszavonásának joga (7. cikk (3))"
            body="Hozzájárulását bármikor, indokolás nélkül visszavonhatja. Ez nem érinti a visszavonás előtti adatkezelés jogszerűségét."
          />

          <P>
            <strong>Joggyakorlás módja:</strong> kérelmét írásban,{' '}
            <a href="mailto:hips.hu@gmail.com" className="text-cobalt hover:underline">hips.hu@gmail.com</a>{' '}
            címre küldheti. Az Adatkezelő a kérelem beérkezésétől számított{' '}
            <strong>1 hónapon belül</strong> tájékoztatja Önt a megtett intézkedésekről;
            indokolt esetben e határidő +2 hónappal meghosszabbítható (GDPR 12. cikk (3)).
            A válasz főszabály szerint <strong>ingyenes</strong>; nyilvánvalóan megalapozatlan
            vagy túlzó (pl. ismétlődő) kérelem esetén észszerű díj számítható fel, vagy a kérelem
            elutasítható (GDPR 12. cikk (5)).
          </P>
        </Section>

        <Section title="IX. Jogorvoslati lehetőségek">
          <P><strong>1) Adatkezelőhöz intézett kérelem</strong> — lásd a VIII. pontot.</P>
          <P><strong>2) Felügyeleti hatósághoz fordulás:</strong></P>
          <DataList
            rows={[
              ['Hatóság', 'Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH)'],
              ['Cím', '1055 Budapest, Falk Miksa utca 9-11.'],
              ['Postacím', '1374 Budapest, Pf. 603.'],
              ['Telefon', '+36 (1) 391-1400'],
              ['E-mail', 'ugyfelszolgalat@naih.hu'],
              ['Web', 'www.naih.hu'],
            ]}
          />
          <P>
            <strong>3) Bírósági út:</strong> a per — az érintett választása szerint — a lakóhelye
            vagy tartózkodási helye szerinti törvényszék előtt is megindítható (Infotv. 23. §).
          </P>
        </Section>

        <Section title="X. Cookie-szabályzat">
          <P>
            A cookie (süti) a böngészője által tárolt kis adatfájl, amely a weboldal működéséhez,
            illetve használati statisztikák gyűjtéséhez szükséges. A cookie-k használatát az Eht.
            155. §-a, valamint a GDPR szabályozza.
          </P>

          <h3 className="font-display font-bold text-cobalt text-[1.25rem] mt-8 mb-3">
            Cookie-kategóriák
          </h3>
          <Bullets
            items={[
              'a) Feltétlenül szükséges cookie-k — a weboldal működéséhez elengedhetetlenek; hozzájárulás nem szükséges (Eht. 155. § (4)).',
              'b) Funkcionális cookie-k — kényelmi funkciók (pl. nyelv, beállítások); hozzájárulás szükséges.',
              'c) Statisztikai / analitikai cookie-k — anonim használati statisztikák; hozzájárulás szükséges.',
              'd) Marketing / nyomkövető cookie-k — célzott hirdetések, retargeting; hozzájárulás szükséges.',
            ]}
          />

          <h3 className="font-display font-bold text-cobalt text-[1.25rem] mt-8 mb-3">
            Használt cookie-k listája
          </h3>
          <CookieTable
            rows={[
              ['{{COOKIE_NÉV_1}}', '{{COOKIE_CÉL_1}}', '{{SZOLGÁLTATÓ_1}}', '{{ÉLETTARTAM_1}}', 'Feltétlenül szükséges'],
              ['{{COOKIE_NÉV_2}}', '{{COOKIE_CÉL_2}}', '{{SZOLGÁLTATÓ_2}}', '{{ÉLETTARTAM_2}}', 'Statisztikai'],
              ['{{COOKIE_NÉV_3}}', '{{COOKIE_CÉL_3}}', '{{SZOLGÁLTATÓ_3}}', '{{ÉLETTARTAM_3}}', 'Marketing'],
            ]}
          />

          <h3 className="font-display font-bold text-cobalt text-[1.25rem] mt-8 mb-3">
            Cookie-beállítások módosítása
          </h3>
          <P>
            A weboldalon a cookie-banner újbóli megnyitásával bármikor módosíthatja korábbi
            hozzájárulását. A böngészőjében is beállíthatja a cookie-k kezelését:
          </P>
          <Bullets
            items={[
              <>Google Chrome: <a className="text-cobalt hover:underline" href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">support.google.com/chrome/answer/95647</a></>,
              <>Mozilla Firefox: <a className="text-cobalt hover:underline" href="https://support.mozilla.org/hu/kb/sutik-engedelyezese-es-tiltasa" target="_blank" rel="noopener noreferrer">support.mozilla.org — sütik kezelése</a></>,
              <>Safari: <a className="text-cobalt hover:underline" href="https://support.apple.com/hu-hu/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">support.apple.com — Safari sütik</a></>,
              <>Microsoft Edge: <a className="text-cobalt hover:underline" href="https://support.microsoft.com/hu-hu/microsoft-edge" target="_blank" rel="noopener noreferrer">support.microsoft.com — Edge cookie-k</a></>,
            ]}
          />
        </Section>

        <Section title="XI. Automatizált döntéshozatal, profilalkotás">
          <P>
            Az Adatkezelő <strong>nem alkalmaz</strong> olyan, kizárólag automatizált adatkezelésen
            alapuló döntéshozatalt vagy profilalkotást, amely Önre nézve joghatással járna vagy
            hasonlóan jelentős mértékben érintené (GDPR 22. cikk).
          </P>
        </Section>

        <Section title="XII. A tájékoztató módosítása">
          <P>
            Az Adatkezelő fenntartja a jogot a jelen Tájékoztató egyoldalú módosítására. Lényeges
            módosítás esetén az érintetteket — amennyiben elérhetőséget adtak meg — előzetesen
            e-mailben értesíti. A módosított Tájékoztató a weboldalon való közzétételtől hatályos.
            A Tájékoztató korábbi verzióit az Adatkezelő archiválja.
          </P>
        </Section>

        <Section title="XIII. Záró nyilatkozat">
          <P>
            A jelen Adatkezelési tájékoztatóval kapcsolatos kérdéseit a{' '}
            <a href="mailto:hips.hu@gmail.com" className="text-cobalt hover:underline">hips.hu@gmail.com</a>{' '}
            címre küldheti. Hatályos: <strong>2026. június 15.</strong>-től.
          </P>
        </Section>

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

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2
        className="font-display font-extrabold text-navy tracking-tight"
        style={{ fontSize: 'clamp(1.5rem, 3vw, 1.875rem)', lineHeight: 1.2 }}
      >
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-body text-[16px] text-[#1E293B] leading-[1.7] mt-3">{children}</p>
  );
}

function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="font-body text-[16px] text-[#1E293B] leading-[1.7] mt-3 space-y-2 list-disc pl-6">
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

interface ActivityRow {
  name: string;
  data: string;
  purpose: string;
  legal: string;
  duration: string;
}

function ActivityTable({ rows }: { rows: ActivityRow[] }) {
  return (
    <div className="overflow-x-auto mt-4 border border-[#E2E8F0] rounded-md">
      <table className="w-full border-collapse min-w-[640px]">
        <thead>
          <tr className="bg-[#F1F5F9]">
            <th className="text-left font-body text-[13px] font-bold uppercase tracking-[0.05em] text-navy px-3 py-3 border-b border-[#E2E8F0]">Tevékenység</th>
            <th className="text-left font-body text-[13px] font-bold uppercase tracking-[0.05em] text-navy px-3 py-3 border-b border-[#E2E8F0]">Kezelt adatok</th>
            <th className="text-left font-body text-[13px] font-bold uppercase tracking-[0.05em] text-navy px-3 py-3 border-b border-[#E2E8F0]">Cél</th>
            <th className="text-left font-body text-[13px] font-bold uppercase tracking-[0.05em] text-navy px-3 py-3 border-b border-[#E2E8F0]">Jogalap</th>
            <th className="text-left font-body text-[13px] font-bold uppercase tracking-[0.05em] text-navy px-3 py-3 border-b border-[#E2E8F0]">Időtartam</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'}>
              <td className="align-top font-body text-[14px] text-navy font-semibold px-3 py-3 border-b border-[#E2E8F0]">{r.name}</td>
              <td className="align-top font-body text-[14px] text-[#1E293B] px-3 py-3 border-b border-[#E2E8F0]">{r.data}</td>
              <td className="align-top font-body text-[14px] text-[#1E293B] px-3 py-3 border-b border-[#E2E8F0]">{r.purpose}</td>
              <td className="align-top font-body text-[14px] text-[#1E293B] px-3 py-3 border-b border-[#E2E8F0]">{r.legal}</td>
              <td className="align-top font-body text-[14px] text-[#1E293B] px-3 py-3 border-b border-[#E2E8F0]">{r.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ProcessorBlock({ name, details }: { name: string; details: [string, string][] }) {
  return (
    <div className="mt-5">
      <h3 className="font-display font-bold text-cobalt text-[1.25rem]">{name}</h3>
      <DataList rows={details} />
    </div>
  );
}

function RightItem({ title, body }: { title: string; body: string }) {
  return (
    <div className="mt-5">
      <h3 className="font-display font-bold text-cobalt text-[1.25rem]">{title}</h3>
      <p className="font-body text-[16px] text-[#1E293B] leading-[1.7] mt-2">{body}</p>
    </div>
  );
}

function CookieTable({ rows }: { rows: [string, string, string, string, string][] }) {
  return (
    <div className="overflow-x-auto mt-4 border border-[#E2E8F0] rounded-md">
      <table className="w-full border-collapse min-w-[560px]">
        <thead>
          <tr className="bg-[#F1F5F9]">
            <th className="text-left font-body text-[13px] font-bold uppercase tracking-[0.05em] text-navy px-3 py-3 border-b border-[#E2E8F0]">Név</th>
            <th className="text-left font-body text-[13px] font-bold uppercase tracking-[0.05em] text-navy px-3 py-3 border-b border-[#E2E8F0]">Cél</th>
            <th className="text-left font-body text-[13px] font-bold uppercase tracking-[0.05em] text-navy px-3 py-3 border-b border-[#E2E8F0]">Szolgáltató</th>
            <th className="text-left font-body text-[13px] font-bold uppercase tracking-[0.05em] text-navy px-3 py-3 border-b border-[#E2E8F0]">Élettartam</th>
            <th className="text-left font-body text-[13px] font-bold uppercase tracking-[0.05em] text-navy px-3 py-3 border-b border-[#E2E8F0]">Típus</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'}>
              {r.map((cell, j) => (
                <td key={j} className="align-top font-body text-[14px] text-[#1E293B] px-3 py-3 border-b border-[#E2E8F0]">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
