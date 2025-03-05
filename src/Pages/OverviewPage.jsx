import { Header } from "../Components/Common/Header";
import { motion } from "framer-motion";
import { StatCard } from "../Components/Common/StatCard";
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import { SalesOverviewChart } from "../Components/Overview/SalesOverviewChart";
import { CategoryDistributionChart } from "../Components/Overview/CategoryDistributionChart";
import { SalesChannelChart } from "../Components/Overview/SalesChannelChart";
import { useTranslation } from "react-i18next";

export default function OverviewPage() {
  const { t } = useTranslation();

  return (
    <div className="flex-1 overflow-auto relative ">
      {/* Translated Header */}
      <Header title={t("overview")} />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name={t("totalSales")}
            icon={Zap}
            value={t("12345")}
            color="#6366F1"
          />
          <StatCard
            name={t("newUsers")}
            icon={Users}
            value={t("1234")}
            color="#8B5CF6"
          />
          <StatCard
            name={t("totalProducts")}
            icon={ShoppingBag}
            value={t("567")}
            color="#EC4899"
          />
          <StatCard
            name={t("conversionRate")}
            icon={BarChart2}
            value={t("12.5")}
            color="#10B981"
          />
        </motion.div>

        {/* Charts Section */}
        <SalesOverviewChart />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesChannelChart />
          <CategoryDistributionChart />
        </div>
      </main>
    </div>
  );
}
