import { useTranslation } from "react-i18next";

export const ToggleSwitch = ({ label, isOn, onToggle }) => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  return (
    <div className="flex items-center justify-between py-3">
      <span className="text-gray-300">{label}</span>
      <button
        className={`
        relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none
        ${isOn ? "bg-indigo-600" : "bg-gray-600"}
        `}
        onClick={onToggle}
      >
        <span
          className={`inline-block size-4 ${
            isOn && isRTL
              ? "-translate-x-6"
              : isOn
              ? "translate-x-6"
              : "translate-x-1"
          }
           transform transition-transform bg-white rounded-full 
            `}
        />
      </button>
    </div>
  );
};
export default ToggleSwitch;
