import { Header } from "../components/common/Header.jsx";
import { StatCard } from "../Components/Common/StatCard";
import { motion } from "framer-motion";
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";
import { SalesOverviewChart } from "../Components/Overview/SalesOverviewChart";
import { SalesByCategoryChart } from "../Components/Common/Sales/SalesByCategoryChart";
import { DailySalesTrend } from "../Components/Common/Sales/DailySalesTrend ";
import { t } from "i18next";

export const SalesPage = () => {
  const salesStats = {
    totalRevenue: t("1234567"),
    averageOrderValue: t("78.9"),
    conversionRate: t("3.45"),
    salesGrowth: t("12.3"),
  };
  return (
    <div className="flex-1 overflow-auto relative  ">
      <Header title={t("SalesDashboard")} />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name={t("TotalRevenue")}
            icon={DollarSign}
            value={salesStats.totalRevenue}
            color="#6366F1"
          />
          <StatCard
            name={t("AvgOrderValue")}
            icon={ShoppingCart}
            value={salesStats.averageOrderValue}
            color="#10B981"
          />
          <StatCard
            name={t("ConversionRate")}
            icon={TrendingUp}
            value={salesStats.conversionRate}
            color="#F59E0B"
          />
          <StatCard
            name={t("SalesGrowth")}
            icon={CreditCard}
            value={salesStats.salesGrowth}
            color="#EF4444"
          />
        </motion.div>
        <SalesOverviewChart />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <SalesByCategoryChart />
          <DailySalesTrend />
        </div>
      </main>
    </div>
  );
};
export default SalesPage;
