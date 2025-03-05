import { Header } from "../Components/Common/Header";

import OverviewCards from "../Components/Common/Analytics/OverviewCards";
import RevenueChart from "../Components/Common/Analytics/RevenueChart";
import ChannelPerformance from "../Components/Common/Analytics/ChannelPerformance";
import ProductPerformance from "../Components/Common/Analytics/ProductPerformance";
import UserRetention from "../Components/Common/Analytics/UserRetention";
import CustomerSegmentation from "../Components/Common/Analytics/CustomerSegmentation";
import AIPoweredInsights from "../Components/Common/Analytics/AIPoweredInsights";
import { useTranslation } from "react-i18next";
export const AnalyticsPage = () => {
  const { t } = useTranslation();
  return (
    <div className="flex-1 overflow-auto relative  bg-gray-900">
      <Header title={t("AnalyticsDashboard")} />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <OverviewCards />
        <RevenueChart />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <ChannelPerformance />
          <ProductPerformance />
          <UserRetention />
          <CustomerSegmentation />
        </div>

        <AIPoweredInsights />
      </main>
    </div>
  );
};
export default AnalyticsPage;
