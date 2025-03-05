import { CheckCircle, Clock, DollarSign, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

import { Header } from "../components/common/Header.jsx";
import { StatCard } from "../Components/Common/StatCard";
import { DailyOrders } from "../Components/Common/Orders/DailyOrders";
import OrderDistribution from "../Components/Common/Orders/OrderDistribution";
import { OrdersTable } from "../Components/Common/Orders/OrdersTable";
import { useTranslation } from "react-i18next";

export const OrdersPage = () => {
  const { t } = useTranslation();
  const orderStats = {
    totalOrders: t("1234"),
    pendingOrders: t("56"),
    completedOrders: t("1178"),
    totalRevenue: t("98765"),
  };
  return (
    <div className="flex-1 relative  overflow-auto">
      <Header title={t("Orders")} />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name={t("TotalOrders")}
            icon={ShoppingBag}
            value={orderStats.totalOrders}
            color="#6366F1"
          />
          <StatCard
            name={t("PendingOrders")}
            icon={Clock}
            value={orderStats.pendingOrders}
            color="#F59E0B"
          />
          <StatCard
            name={t("CompletedOrders")}
            icon={CheckCircle}
            value={orderStats.completedOrders}
            color="#10B981"
          />
          <StatCard
            name={t("TotalRevenue")}
            icon={DollarSign}
            value={orderStats.totalRevenue}
            color="#EF4444"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <DailyOrders />
          <OrderDistribution />
        </div>

        <OrdersTable />
      </main>
    </div>
  );
};
export default OrdersPage;
