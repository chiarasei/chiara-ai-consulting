import { createContext, useContext, useState } from "react";

type PsychLang = "en" | "sv";

type PsychLangContextType = {
  lang: PsychLang;
  setLang: (l: PsychLang) => void;
  t: (en: string, sv: string) => string;
};

const PsychLangContext = createContext<PsychLangContextType>({
  lang: "en",
  setLang: () => {},
  t: (en) => en,
});

// eslint-disable-next-line react-refresh/only-export-components
export const usePsychLang = () => useContext(PsychLangContext);

export const PsychLangProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<PsychLang>("en");
  const t = (en: string, sv: string) => (lang === "sv" ? sv : en);
  return (
    <PsychLangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </PsychLangContext.Provider>
  );
};
