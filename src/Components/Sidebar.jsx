import {
  BarChart2,
  DollarSign,
  Menu,
  Settings,
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./Common/Language-switcher";
import { useTranslation } from "react-i18next";

const useScreenSize = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isSmallScreen;
};

const Sidebar = () => {
  const { t } = useTranslation();
  const isSmallScreen = useScreenSize();
  const [isSidebarOpen, setIsSidebarOpen] = useState(!isSmallScreen);

  useEffect(() => {
    if (isSmallScreen) {
      setIsSidebarOpen(false);
    }
  }, [isSmallScreen]);

  const SIDEBAR_ITEMS = [
    {
      name: t("Overview"),
      icon: BarChart2,
      color: "#6366f1",
      href: "/",
      ariaLabel: "Overview",
    },
    {
      name: t("Products"),
      icon: ShoppingBag,
      color: "#8B5CF6",
      href: "/products",
      ariaLabel: "Products",
    },
    {
      name: t("Users"),
      icon: Users,
      color: "#EC4899",
      href: "/users",
      ariaLabel: "Users",
    },
    {
      name: t("Sales"),
      icon: DollarSign,
      color: "#10B981",
      href: "/sales",
      ariaLabel: "Sales",
    },
    {
      name: t("Orders"),
      icon: ShoppingCart,
      color: "#F59E0B",
      href: "/orders",
      ariaLabel: "Orders",
    },
    {
      name: t("Analytics"),
      icon: TrendingUp,
      color: "#3B82F6",
      href: "/analytics",
      ariaLabel: "Analytics",
    },
    {
      name: t("Settings"),
      icon: Settings,
      color: "#6EE7B7",
      href: "/settings",
      ariaLabel: "Settings",
    },
  ];

  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-full hover:bg-gray-700 transition-colors cursor-pointer max-w-fit text-white"
          aria-label={t("Toggle Sidebar")}
        >
          <Menu size={24} />
        </motion.button>
        <nav className="mt-8 flex-grow">
          {isSidebarOpen && <LanguageSwitcher />}
          {SIDEBAR_ITEMS.map((item, index) => (
            <Link key={index} to={item.href} aria-label={item.ariaLabel}>
              <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
                <item.icon size={20} color={item.color} />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="ml-4 text-white whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;
