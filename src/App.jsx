import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductsPage from "./Pages/ProductsPage";
import OverviewPage from "./Pages/OverviewPage";
import Sidebar from "./Components/Sidebar";
import { UserPage } from "./Pages/UserPage";
import { SalesPage } from "./Pages/SalesPage";
import { OrdersPage } from "./Pages/OrdersPage";
import { AnalyticsPage } from "./Pages/AnalyticsPage";
import { SettingsPage } from "./Pages/SettingsPage";

function App() {
  const { i18n } = useTranslation();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLanguage).then(() => {
      document.documentElement.lang = savedLanguage;
      document.documentElement.dir = savedLanguage === "ar" ? "rtl" : "ltr";
      setIsReady(true);
    });
  }, [i18n]);

  if (!isReady) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* BG */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>
      <Sidebar />
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </div>
  );
}

export default App;
