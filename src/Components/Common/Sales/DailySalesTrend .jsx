import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell,
} from "recharts";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
export const DailySalesTrend = () => {
  const { t } = useTranslation();
  const dailySalesData = [
    { name: "Mon", sales: 1000 },
    { name: "Tue", sales: 1200 },
    { name: "Wed", sales: 900 },
    { name: "Thu", sales: 1100 },
    { name: "Fri", sales: 1300 },
    { name: "Sat", sales: 1600 },
    { name: "Sun", sales: 1400 },
  ];

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        {t("SalesTrend")}{" "}
      </h2>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={dailySalesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend formatter={(value) => t(value)} />

            <Bar dataKey="sales" fill="#10e981" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
export default DailySalesTrend;
