import { Bell } from "lucide-react";
import SettingsSection from "./SettingsSection";
import { ToggleSwitch } from "./ToggleSwitch";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const Notifications = () => {
  const { t } = useTranslation();
  const [notifications, setNotifications] = useState({
    push: true,
    email: false,
    sms: true,
  });
  return (
    <SettingsSection icon={Bell} title={t("Notifications")}>
      <ToggleSwitch
        label={t("PushNotifications")}
        isOn={notifications.push}
        onToggle={() =>
          setNotifications({ ...notifications, push: !notifications.push })
        }
      />
      <ToggleSwitch
        label={t("EmailNotifications")}
        isOn={notifications.email}
        onToggle={() =>
          setNotifications({ ...notifications, email: !notifications.email })
        }
      />
      <ToggleSwitch
        label={t("SmsNotifications")}
        isOn={notifications.sms}
        onToggle={() =>
          setNotifications({ ...notifications, sms: !notifications.sms })
        }
      />
    </SettingsSection>
  );
};
export default Notifications;
