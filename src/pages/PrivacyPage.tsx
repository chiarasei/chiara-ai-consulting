import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";
import { ENQUIRY_RETENTION_MONTHS } from "@/lib/privacy";

const PrivacyPage = () => {
  const { language } = useLanguage();
  const sv = language === "sv";
  const sections = sv ? [
    ["Vilka vi är", "ChiaraAI Consulting i Göteborg ansvarar för dina personuppgifter. Vårt organisationsnummer är 9311015409. Du når oss på info@chiaraaiconsulting.se."],
    ["När du kontaktar oss", "Formuläret samlar in ditt namn, din mejladress, vad du behöver hjälp med och ditt meddelande. Du kan också ange företag och budget, men det är valfritt. Vi använder uppgifterna för att svara på din förfrågan och diskutera ditt projekt. Vår rättsliga grund är vårt berättigade intresse av att besvara förfrågningar och, när det gäller ett möjligt uppdrag, att vidta åtgärder innan vi ingår ett avtal. Att skicka formuläret innebär inte att du samtycker till marknadsföring."],
    ["Hur länge vi sparar uppgifterna", `Vi sparar kontaktförfrågningar i ${ENQUIRY_RETENTION_MONTHS} månader efter vår senaste kontakt och raderar dem därefter. Om du blir kund kan uppgifter som hör till avtal och bokföring behöva sparas längre enligt lag. Vi sparar inte mer än vi behöver.`],
    ["Hur vi skyddar uppgifterna", "Förfrågningar sparas i vår databas och kan skickas till vår mejladress som en avisering. Vi använder krypterade anslutningar och begränsar åtkomsten till personer som behöver uppgifterna för sitt arbete. Vi säljer aldrig dina personuppgifter."],
    ["Tjänster vi använder", "Lovable Cloud används för webbplatsens hosting och databas. Zoho används för vår mejl. Lovables inbyggda mejltjänst skickar aviseringar från kontaktformuläret till oss. Calendly används när du bokar ett samtal och behandlar de uppgifter du lämnar vid bokningen. Google Ads används för att mäta vilka annonser som leder till förfrågningar: skickade formulär, bokningar i Calendly och klick på mejl, telefon och WhatsApp. Google får då uppgifter om besöket och klicket från annonsen. Läs hur Google använder uppgifter på business.safety.google/privacy. Vi delar bara uppgifter som behövs för respektive tjänst. Vissa leverantörer kan behandla uppgifter utanför EU och EES. När det sker ska lämpliga skydd finnas, till exempel EU:s standardavtalsklausuler."],
    ["Cookies och dina val", "Webbplatsen använder nödvändig lagring för att fungera och cookies från Google Ads för att mäta annonser. Besökare i EU, EES, Storbritannien, Schweiz och Kanada får välja att acceptera eller avböja innan cookies för annonser används. Ditt val sparas i webbläsaren tillsammans med datum och vilken information som visades. Du kan ändra eller återkalla ditt val när du vill via Cookieinställningar längst ner på sidan. Du kan även hantera och radera cookies i din webbläsare. När du använder Calendly gäller också deras information om cookies och integritet."],
    ["Dina rättigheter", "Du kan be om en kopia av dina personuppgifter, få fel rättade eller be oss radera uppgifter. Du kan också invända mot behandling som bygger på berättigat intresse, begära begränsning och i vissa fall få uppgifter överförda. Om behandling bygger på samtycke kan du ta tillbaka det. Mejla info@chiaraaiconsulting.se så hjälper vi dig, normalt inom en månad. Vi kan behöva kontrollera din identitet. Du kan också lämna ett klagomål till Integritetsskyddsmyndigheten, IMY."],
  ] : [
    ["Who we are", "ChiaraAI Consulting in Gothenburg is responsible for your personal data. Our organisation number is 9311015409. You can contact us at info@chiaraaiconsulting.se."],
    ["When you contact us", "Our form collects your name, email address, what you need and your message. You can also include your company and budget, but these are optional. We use this information to answer your enquiry and discuss your project. Our legal basis is our legitimate interest in answering enquiries and, for a potential project, taking steps before entering into a contract. Sending the form does not mean agreeing to marketing."],
    ["How long we keep your information", `We keep contact enquiries for ${ENQUIRY_RETENTION_MONTHS} months after our last contact, then delete them. If you become a client, information relating to contracts and accounting may need to be kept longer where the law requires it. We do not keep more than we need.`],
    ["How we protect your information", "Enquiries are saved in our database and may be sent to our email address as a notification. We use encrypted connections and restrict access to people who need the information for their work. We never sell your personal data."],
    ["Services we use", "Lovable Cloud provides website hosting and our database. Zoho provides our email mailbox. Lovable’s built in email service sends contact form notifications to us. Calendly handles call bookings and the information you provide when booking. Google Ads measures which ads lead to enquiries: form sends, Calendly bookings and clicks on email, phone and WhatsApp. Google receives information about the visit and the ad click. See how Google uses data at business.safety.google/privacy. We only share information needed for each service. Some providers may process data outside the EU and EEA. Where this happens, appropriate safeguards must be in place, such as EU standard contractual clauses."],
    ["Cookies and your choices", "The website uses essential storage to function and Google Ads cookies to measure ads. Visitors in the EU, EEA, UK, Switzerland and Canada choose to accept or decline before advertising cookies are used. Your choice is stored in your browser together with the date and the notice shown. You can change or withdraw your choice anytime under Cookie settings at the bottom of the page. You can also manage and delete cookies in your browser. When you use Calendly, its own privacy and cookie information also applies."],
    ["Your rights", "You can ask for a copy of your personal data, ask us to correct mistakes or request deletion. You can also object to processing based on legitimate interests, request restricted processing and, in certain cases, ask for your data to be transferred. Where processing relies on consent, you can withdraw it. Email info@chiaraaiconsulting.se and we will help, normally within one month. We may need to check your identity. You can also complain to the Swedish Authority for Privacy Protection, IMY."],
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead canonicalPath="/privacy" title="Privacy policy | ChiaraAI Consulting" titleSv="Integritetspolicy | ChiaraAI Consulting" description="How ChiaraAI Consulting handles contact enquiries, personal data, cookies and your privacy rights." descriptionSv="Så hanterar ChiaraAI Consulting kontaktförfrågningar, personuppgifter, cookies och dina rättigheter." />
      <Navigation />
      <main className="mx-auto max-w-3xl px-5 pb-12 pt-32 md:pb-16 md:pt-36">
        <h1 className="text-4xl md:text-5xl">{sv ? "Integritetspolicy" : "Privacy policy"}</h1>
        <p className="mt-4 text-sm text-muted-foreground">{sv ? "Senast uppdaterad 27 oktober 2026" : "Last updated 27 October 2026"}</p>
        <p className="mt-6 text-muted-foreground">{sv ? "Din integritet är viktig för oss. Här förklarar vi enkelt hur vi använder och skyddar dina uppgifter." : "Your privacy matters to us. Here is a simple explanation of how we use and protect your information."}</p>
        <div className="mt-8 space-y-8">
          {sections.map(([heading, text]) => (
            <section key={heading}>
              <h2 className="mb-3 text-2xl md:text-3xl">{heading}</h2>
              <p className="leading-relaxed text-muted-foreground break-words">{text}</p>
            </section>
          ))}
        </div>
        <a className="mt-8 inline-flex min-h-11 items-center text-primary underline break-all" href="mailto:info@chiaraaiconsulting.se">info@chiaraaiconsulting.se</a>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPage;