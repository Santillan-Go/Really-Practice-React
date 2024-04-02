
import { HeaderContext } from "./HeaderContext";

import { FooterContext } from "./FooterContext";
import { Main2Context } from "./Main2Context";
import { ThemeProvider } from "../Context/ThemeContext";
import { LanguageProvider } from "../Context/LanguageContext";
import { LogProvider } from "../Context/LogContext";

export const MypageContext = () => {
  return (
    <div className="my-page">
      <ThemeProvider>
        <LanguageProvider>
          <LogProvider>
            <HeaderContext />

            <Main2Context />
            
     
          </LogProvider>
     <FooterContext />
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
};
