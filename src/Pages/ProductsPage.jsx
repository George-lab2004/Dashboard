import { Header } from "../Components/Common/Header";
import { motion } from "framer-motion";
import { StatCard } from "../Components/Common/StatCard";
import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";
import { ProductsTable } from "../Components/Products/ProductsTable";
import { CategoryDistributionChart } from "../Components/Overview/CategoryDistributionChart";
import { SalesTrendChart } from "../Components/Products/SalesTrendChart";
import { useTranslation } from "react-i18next";
export default function ProductsPage() {
  const { t } = useTranslation();

  return (
    <div className="flex-1 overflow-auto relative ">
      <Header title={t("Products")} />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name={t("TotalProducts")}
            icon={Package}
            value={t("1234")}
            color="#6366F1"
          />
          <StatCard
            name={t("TopSelling")}
            icon={TrendingUp}
            value={t("89")}
            color="#10B981"
          />
          <StatCard
            name={t("LowStoke")}
            icon={AlertTriangle}
            value={t("23")}
            color="#F59E0B"
          />
          <StatCard
            name={t("TotalRevenue")}
            icon={DollarSign}
            value={t("543210")}
            color="#E44444"
          />
        </motion.div>
        <ProductsTable />
        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesTrendChart />
          <CategoryDistributionChart />
        </div>
      </main>
    </div>
  );
}
