import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Eye } from "lucide-react";
import { useTranslation } from "react-i18next";

export const OrdersTable = () => {
  const { t, i18n } = useTranslation();
  const orderData = [
    {
      id: t("ORD001"), // Use translation key for order ID
      customer: t("JohnDoe"), // Use translation key for customer name
      total: 235.4,
      status: t("Delivered"), // Use translation key for status
      date: "2023-07-01",
    },
    {
      id: t("ORD002"),
      customer: t("JaneSmith"),
      total: 412.0,
      status: t("Processing"),
      date: "2023-07-02",
    },
    {
      id: t("ORD003"),
      customer: t("BobJohnson"),
      total: 162.5,
      status: t("Shipped"),
      date: "2023-07-03",
    },
    {
      id: t("ORD004"),
      customer: t("AliceBrown"),
      total: 750.2,
      status: t("Pending"),
      date: "2023-07-04",
    },
    {
      id: t("ORD005"),
      customer: t("CharlieWilson"),
      total: 95.8,
      status: t("Delivered"),
      date: "2023-07-05",
    },
    {
      id: t("ORD006"),
      customer: t("EvaMartinez"),
      total: 310.75,
      status: t("Processing"),
      date: "2023-07-06",
    },
    {
      id: t("ORD007"),
      customer: t("DavidLee"),
      total: 528.9,
      status: t("Shipped"),
      date: "2023-07-07",
    },
    {
      id: t("ORD008"),
      customer: t("GraceTaylor"),
      total: 189.6,
      status: t("Delivered"),
      date: "2023-07-08",
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOrders, setFilteredOrders] = useState(orderData);
  const RTL = i18n.language === "ar";

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = orderData.filter(
      (order) =>
        order.id.toLowerCase().includes(term) ||
        order.customer.toLowerCase().includes(term)
    );
    setFilteredOrders(filtered);
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Order List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder={t("SearchOrders")}
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-80 md:w-96 lg:w-[400px] max-w-full"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th
                className={`px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider ${
                  RTL ? "text-right" : ""
                }`}
              >
                {t("OrderID")}
              </th>
              <th
                className={`px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider ${
                  RTL ? "text-right" : ""
                }`}
              >
                {t("Customer")}
              </th>
              <th
                className={`px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider ${
                  RTL ? "text-right" : ""
                }`}
              >
                {t("Total")}
              </th>
              <th
                className={`px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider ${
                  RTL ? "text-right" : ""
                }`}
              >
                {t("Status")}
              </th>
              <th
                className={`px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider ${
                  RTL ? "text-right" : ""
                }`}
              >
                {t("Date")}
              </th>
              <th
                className={`px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider ${
                  RTL ? "text-right" : ""
                }`}
              >
                {t("Actions")}
              </th>
            </tr>
          </thead>

          <tbody className="divide divide-gray-700">
            {filteredOrders.map((order) => (
              <motion.tr
                key={order.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {order.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {order.customer}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  ${order.total.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      order.status === t("Delivered")
                        ? "bg-green-100 text-green-800"
                        : order.status === t("Processing")
                        ? "bg-yellow-100 text-yellow-800"
                        : order.status === t("Shipped")
                        ? "bg-blue-100 text-blue-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {order.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <button className="text-indigo-400 hover:text-indigo-300 mr-2">
                    <Eye size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};
export default OrdersTable;
