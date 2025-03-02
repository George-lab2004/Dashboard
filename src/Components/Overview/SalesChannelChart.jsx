import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
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

const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

export const SalesChannelChart = () => {
  const { t, i18n } = useTranslation();

  const SALES_CHANNEL_DATA = [
    { name: t("website"), value: 45600 },
    { name: t("MobileApp"), value: 38200 },
    { name: t("Marketplace"), value: 29800 },
    { name: t("Socialmedia"), value: 18700 },
  ];
  const isRTL = i18n.language === "ar"; // Detect RTL language
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        {t("SalesbyChannel")}{" "}
      </h2>
      <div className="h-80">
        <ResponsiveContainer>
          <BarChart
            data={
              isRTL ? [...SALES_CHANNEL_DATA].reverse() : SALES_CHANNEL_DATA
            }
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />

            <Tooltip
              formatter={(value) => `${value} ${t("Value")}`} // Translates "Value"
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />

            <Legend formatter={(value) => t(value)} />

            <Bar dataKey={"value"} fill="#8884d8">
              {SALES_CHANNEL_DATA.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
