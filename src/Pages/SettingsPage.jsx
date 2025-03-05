import { useTranslation } from "react-i18next";
import { Header } from "../Components/Common/Header";
import { ConnectedAccounts } from "../Components/Settings/ConnectedAccounts";
import { Notifications } from "../Components/Settings/Notifications";
import { Profile } from "../Components/Settings/Profile";
import { Security } from "../Components/Settings/Security";
import DangerZone from "./DangerZone";

export const SettingsPage = () => {
  const { t } = useTranslation();
  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
      <Header title={t("Settings")} />
      <main className="max-w-4xl mx-auto py-6 px-4 lg:px-8">
        <Profile />
        <Notifications />
        <Security />
        <ConnectedAccounts />
        <DangerZone />
      </main>
    </div>
  );
};
