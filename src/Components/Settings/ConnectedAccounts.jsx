import { HelpCircle, Plus } from "lucide-react";
import SettingsSection from "./SettingsSection";
import { useState } from "react";
import { useTranslation } from "react-i18next";
export const ConnectedAccounts = () => {
  const { t, i18n } = useTranslation();
  const [connectedAccounts, setConnectedAccounts] = useState([
    {
      id: 1,
      name: "Google",
      connected: true,
      icon: "/google.png",
    },
    {
      id: 2,
      name: "Facebook",
      connected: false,
      icon: "/facebook.svg",
    },
    {
      id: 3,
      name: "Twitter",
      connected: true,
      icon: "/x.png",
    },
  ]);
  return (
    <SettingsSection icon={HelpCircle} title={t("ConnectedAccounts")}>
      {connectedAccounts.map((account) => (
        <div key={account.id}>
          <div className="flex justify-between items-center">
            <div className="flex gap-3">
              <img
                src={account.icon}
                className="size-6  object-cover rounded-full mr-2 "
                alt={account.name}
              />
              <p className="text-white"> {account.name}</p>
            </div>
            <button
              className={` p-2 my-2 rounded-sm border text-white transition-all duration-100 ${
                account.connected ? "bg-green-500" : "bg-gray-800"
              }`}
              onClick={() => {
                setConnectedAccounts(
                  connectedAccounts.map((acc) => {
                    if (acc.id === account.id) {
                      return {
                        ...acc,
                        connected: !acc.connected,
                      };
                    }
                    return acc;
                  })
                );
              }}
            >
              {account.connected ? "Connected" : " Connect"}
            </button>
          </div>
        </div>
      ))}
      <button className="mt-4 flex items-center text-indigo-400 hover:text-indigo-300 transition duration-200">
        <Plus size={18} className="mr-2" /> {t("AddAccount")}
      </button>
    </SettingsSection>
  );
};
