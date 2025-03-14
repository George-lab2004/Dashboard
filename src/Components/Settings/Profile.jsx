import { User } from "lucide-react";
import { SettingsSection } from "./SettingsSection";
import { useTranslation } from "react-i18next";

export const Profile = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  return (
    <SettingsSection icon={User} title={t("Profile")}>
      <div
        className={`flex ${
          isRTL ? "gap-5" : ""
        } flex-col sm:flex-row items-center mb-6`}
      >
        <img
          src="https://randomuser.me/api/portraits/men/3.jpg"
          alt="Profile"
          className="rounded-full w-20 h-20 object-cover mr-4"
        />

        <div>
          <h3 className="text-lg font-semibold text-gray-100">John Doe</h3>
          <p className="text-gray-400">john.doe@example.com</p>
        </div>
      </div>

      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto">
        {t("EditProfile")}
      </button>
    </SettingsSection>
  );
};
export default Profile;
