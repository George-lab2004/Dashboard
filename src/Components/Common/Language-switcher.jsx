import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import english from "../../assets/us.png";
import arabic from "../../assets/arabic.png";

function LanguageSwitcher({ isSidebarOpen }) {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || i18n.language
  );
  const [isOpen, setIsOpen] = useState(false); // Dropdown state

  useEffect(() => {
    i18n.changeLanguage(language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    localStorage.setItem("language", language);
  }, [language, i18n]);
  const RTL = i18n.language === "ar";

  const changeLanguage = (lng) => {
    setLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div className="relative z-50">
      {/* Flag + Language (Always Visible) */}
      <div
        className="flex items-center gap-2 p-2  cursor-pointer text-white hover:bg-gray-700 rounded-lg transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={language === "en" ? english : arabic}
          alt={language}
          className="w-6 h-6"
        />
        {isSidebarOpen && (
          <span className="whitespace-nowrap">
            {language === "en" ? "English" : "العربية"}
          </span>
        )}
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={`absolute left-0 z-50 mt-2 bg-gray-800 text-white rounded-lg shadow-lg w-36  border border-gray-600 ${
            RTL ? "right-0" : "left-0"
          }`}
        >
          <button
            className="flex items-center gap-2 p-2 w-full text-left hover:bg-gray-700 transition-colors"
            onClick={() => changeLanguage("en")}
          >
            <img src={english} alt="English" className="w-5 h-5" />
            <span>English</span>
          </button>
          <button
            className="flex items-center gap-2 p-2 w-full text-left hover:bg-gray-700 transition-colors"
            onClick={() => changeLanguage("ar")}
          >
            <img src={arabic} alt="العربية" className="w-5 h-5" />
            <span>العربية</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
