import { Lock } from "lucide-react";
import ToggleSwitch from "./ToggleSwitch";
import { useState } from "react";
import SettingsSection from "./SettingsSection";
import { useTranslation } from "react-i18next";

export const Security = () => {
  const [twoFactor, setTwoFactor] = useState(false);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  return (
    <SettingsSection icon={Lock} title={t("Security")}>
      <ToggleSwitch
        label={
          isRTL
            ? " المصادقة الثنائية (Two-Factor Authentication)"
            : "Two-Factor Authentication"
        }
        isOn={twoFactor}
        onToggle={() => setTwoFactor(!twoFactor)}
      />
      <div className="mt-4">
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded 
        transition duration-200
        "
        >
          {t("ChangePassword")}
        </button>
      </div>
    </SettingsSection>
  );
};
export default Security;
