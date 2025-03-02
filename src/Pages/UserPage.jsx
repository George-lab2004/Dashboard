import { useTranslation } from "react-i18next";
import { Header } from "../Components/Common/Header";
import { motion } from "framer-motion";
import { StatCard } from "../Components/Common/StatCard";
import { UserCheck, UserPlus, UsersIcon, UserX } from "lucide-react";
import { UsersTable } from "../Components/Common/Users/UsersTable";
import { UserGrowthChart } from "../Components/Common/Users/UserGrowthChart";
import { UserActivityHeatMap } from "../Components/Common/Users/UserActivityHeatMap";
import { UserDemograhicsChart } from "../Components/Common/Users/UserDemograhicsChart";
export const UserPage = () => {
  const { t } = useTranslation();
  const userStats = {
    totalUsers: t(152845),
    newUsersToday: t(243),
    activeUsers: t(98520),
    churnRate: t(2.4),
  };
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title={t("Users")} />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name={t("totalUsers")}
            icon={UsersIcon}
            value={userStats.totalUsers}
            color="#6366F1"
          />
          <StatCard
            name={t("newUsersToday")}
            icon={UserPlus}
            value={userStats.newUsersToday}
            color="#10B981"
          />
          <StatCard
            name={t("ActiveUsers")}
            icon={UserCheck}
            value={userStats.activeUsers}
            color="#F59E0B"
          />
          <StatCard
            name={t("ChurnRate")}
            icon={UserX}
            value={userStats.churnRate}
            color="#EF4444"
          />
        </motion.div>
        <UsersTable />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <UserGrowthChart />
          <UserActivityHeatMap />
          <UserDemograhicsChart />
        </div>
      </main>
    </div>
  );
};
