import { useState } from "react";
import {
  TrendingDown,
  TrendingUp,
  Target,
  Lightbulb,
  Zap,
  CheckCircle2,
  Car,
  Utensils,
  Trash2,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// --- MOCK DATA ANALISIS AKTIVITAS ---
const activitySummaryData = [
  {
    id: "transport",
    title: "Transportasi",
    total: "1.2M",
    unit: "kg CO₂",
    pct: 42,
    trend: "up",
    trendVal: "+5.2%",
    icon: Car,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    id: "energy",
    title: "Energi / Listrik",
    total: "850K",
    unit: "kg CO₂",
    pct: 28,
    trend: "down",
    trendVal: "-2.1%",
    icon: Zap,
    color: "text-amber-500",
    bg: "bg-amber-100",
  },
  {
    id: "food",
    title: "Konsumsi Makanan",
    total: "620K",
    unit: "kg CO₂",
    pct: 20,
    trend: "up",
    trendVal: "+1.5%",
    icon: Utensils,
    color: "text-emerald-600",
    bg: "bg-emerald-100",
  },
  {
    id: "waste",
    title: "Pengelolaan Sampah",
    total: "280K",
    unit: "kg CO₂",
    pct: 10,
    trend: "down",
    trendVal: "-8.4%",
    icon: Trash2,
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
];

const activityPieData = [
  { name: "Kendaraan Pribadi (Motor, Mobil)", value: 42, fill: "#3b82f6" },
  { name: "Energi (Listrik Gedung & Gadget)", value: 28, fill: "#f59e0b" },
  { name: "Konsumsi (Makanan & Kemasan)", value: 20, fill: "#10b981" },
  { name: "Sampah & Limbah", value: 10, fill: "#8b5cf6" },
];

const activityTrendData = [
  { month: "Jan", transport: 45, energy: 30, food: 25, waste: 15 },
  { month: "Feb", transport: 48, energy: 28, food: 26, waste: 14 },
  { month: "Mar", transport: 42, energy: 32, food: 24, waste: 12 },
  { month: "Apr", transport: 38, energy: 29, food: 25, waste: 11 },
  { month: "Mei", transport: 40, energy: 27, food: 22, waste: 10 },
  { month: "Jun", transport: 42, energy: 28, food: 20, waste: 10 },
];

const topActivitiesTable = [
  {
    id: 1,
    name: "Menggunakan Motor Pribadi (>10km)",
    emission: "450K",
    users: "185k",
    pct: 18,
    risk: "red",
  },
  {
    id: 2,
    name: "Penggunaan AC Non-stop",
    emission: "320K",
    users: "120k",
    pct: 14,
    risk: "red",
  },
  {
    id: 3,
    name: "Konsumsi Daging Merah Harian",
    emission: "210K",
    users: "95k",
    pct: 9,
    risk: "yellow",
  },
  {
    id: 4,
    name: "Penggunaan Plastik Sekali Pakai",
    emission: "180K",
    users: "210k",
    pct: 7,
    risk: "yellow",
  },
  {
    id: 5,
    name: "Mobil Pribadi (Sendirian)",
    emission: "150K",
    users: "45k",
    pct: 6,
    risk: "red",
  },
];
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-sans overflow-hidden">
      {/* --- SIDEBAR --- */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* HEADER */}
        <Header
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          title="Overview Nasional"
        />
        {/* SCROLLABLE DASHBOARD AREA */}
        <div className="flex-1 overflow-y-auto p-6 bg-slate-50">
          {/* HALAMAN ANALISIS AKTIVITAS */}

          {/* ROW 1: SUMMARY CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activitySummaryData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex flex-col relative overflow-hidden group"
              >
                <div
                  className={`absolute top-0 right-0 w-20 h-20 ${item.bg} rounded-bl-full -z-10 transition-transform group-hover:scale-110 opacity-50`}
                ></div>
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-xl ${item.bg} ${item.color}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
                    {item.pct}% Total
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-500 mb-1">
                    {item.title}
                  </h4>
                  <h3 className="text-2xl font-bold text-slate-800">
                    {item.total}{" "}
                    <span className="text-xs font-normal text-slate-400">
                      {item.unit}
                    </span>
                  </h3>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between text-xs">
                  <span className="text-slate-500">vs periode lalu</span>
                  <span
                    className={`font-semibold flex items-center gap-1 ${item.trend === "down" ? "text-emerald-500" : "text-rose-500"}`}
                  >
                    {item.trend === "down" ? (
                      <TrendingDown className="w-3 h-3" />
                    ) : (
                      <TrendingUp className="w-3 h-3" />
                    )}
                    {item.trendVal}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* ROW 2: DONUT CHART & AI INSIGHT */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Donut Chart: Proporsi Sumber Emisi */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="font-bold text-slate-800">
                    Proporsi Sumber Emisi
                  </h3>
                  <p className="text-xs text-slate-500">
                    Distribusi jejak karbon berdasarkan kategori aktivitas utama
                  </p>
                </div>
                <button className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors">
                  Unduh Analisis
                </button>
              </div>
              <div className="flex-1 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 h-64 relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={activityPieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={75}
                        outerRadius={105}
                        paddingAngle={2}
                        dataKey="value"
                        stroke="none"
                      >
                        {activityPieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Pie>
                      <RechartsTooltip
                        contentStyle={{
                          borderRadius: "12px",
                          border: "none",
                          boxShadow: "0 4px 10px -1px rgb(0 0 0 / 0.1)",
                        }}
                        formatter={(value) => [`${value}%`, "Kontribusi Emisi"]}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-3xl font-extrabold text-slate-800">
                      100%
                    </span>
                    <span className="text-xs font-medium text-slate-400">
                      Total Analisis
                    </span>
                  </div>
                </div>
                <div className="w-full md:w-1/2 space-y-4 mt-6 md:mt-0 px-4">
                  {activityPieData.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="w-3 h-3 rounded-full shrink-0 shadow-sm"
                          style={{ backgroundColor: item.fill }}
                        ></span>
                        <span className="text-sm text-slate-700 font-medium">
                          {item.name}
                        </span>
                      </div>
                      <span className="text-sm font-bold text-slate-800 bg-slate-100 px-2 py-1 rounded-md">
                        {item.value}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Insight Preskriptif */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden flex flex-col">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
              <div className="flex items-center gap-2 text-blue-400 text-xs font-bold tracking-wider mb-5 relative z-10">
                <Lightbulb className="w-4 h-4" /> AI BEHAVIORAL ANALYSIS
              </div>

              <div className="space-y-5 flex-1 relative z-10">
                <div>
                  <p className="text-sm font-medium leading-relaxed">
                    <span className="text-rose-400 font-bold">
                      Transportasi
                    </span>{" "}
                    menyumbang <span className="text-white font-bold">42%</span>{" "}
                    emisi karbon (tertinggi bulan ini).
                  </p>
                </div>
                <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                  <p className="text-xs text-emerald-400 font-bold mb-1 flex items-center gap-1">
                    <Target className="w-3 h-3" /> Potensi Pengurangan
                  </p>
                  <p className="text-sm font-medium text-slate-200">
                    Transisi ke transportasi umum dapat menekan lonjakan emisi
                    hingga{" "}
                    <span className="text-emerald-400 font-bold">18%</span> di
                    kuartal depan.
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">
                    Rekomendasi Alternatif
                  </p>
                  <ul className="text-xs text-slate-300 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3 h-3 text-blue-400 mt-0.5 shrink-0" />{" "}
                      Hadirkan misi "Zero Emission Commute" di menu Challenge.
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3 h-3 text-blue-400 mt-0.5 shrink-0" />{" "}
                      Batasi penggunaan parkir motor untuk jarak tempat tinggal
                      &lt;2km.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* ROW 3: TREND LINE CHART & RANKING TABLE */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Line Chart: Tren Emisi Berdasarkan Aktivitas */}
            <div className="lg:col-span-3 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-bold text-slate-800">
                    Tren Sumber Emisi (6 Bulan Terakhir)
                  </h3>
                  <p className="text-xs text-slate-500">
                    Pergerakan volume emisi spesifik berdasarkan 4 pilar
                    aktivitas
                  </p>
                </div>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={activityTrendData}
                    margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#f1f5f9"
                    />
                    <XAxis
                      dataKey="month"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 11, fill: "#64748b" }}
                      dy={10}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 11, fill: "#64748b" }}
                    />
                    <RechartsTooltip
                      contentStyle={{
                        borderRadius: "12px",
                        border: "none",
                        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                      }}
                    />
                    <Legend
                      iconType="circle"
                      wrapperStyle={{ fontSize: "12px", paddingTop: "10px" }}
                    />
                    <Line
                      type="monotone"
                      dataKey="transport"
                      name="Transportasi"
                      stroke="#3b82f6"
                      strokeWidth={3}
                      dot={false}
                      activeDot={{ r: 6 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="energy"
                      name="Energi"
                      stroke="#f59e0b"
                      strokeWidth={3}
                      dot={false}
                      activeDot={{ r: 6 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="food"
                      name="Konsumsi"
                      stroke="#10b981"
                      strokeWidth={3}
                      dot={false}
                      activeDot={{ r: 6 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="waste"
                      name="Sampah"
                      stroke="#8b5cf6"
                      strokeWidth={3}
                      dot={false}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Table: Top Activities Ranking */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="font-bold text-slate-800">
                    Penyumbang Emisi Terbesar
                  </h3>
                  <p className="text-xs text-slate-500">
                    Aktivitas spesifik yang perlu dihindari
                  </p>
                </div>
              </div>
              <div className="flex-1 overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-100 text-xs text-slate-400 font-medium uppercase tracking-wider">
                      <th className="pb-3 font-medium">Jenis Aktivitas</th>
                      <th className="pb-3 font-medium text-right">
                        Total (kg)
                      </th>
                      <th className="pb-3 font-medium text-right">User</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {topActivitiesTable.map((act) => (
                      <tr
                        key={act.id}
                        className="text-sm hover:bg-slate-50 transition-colors group"
                      >
                        <td className="py-3 pr-2">
                          <div className="flex items-center gap-2">
                            <span
                              className={`w-2 h-2 rounded-full shadow-sm ${act.risk === "red" ? "bg-rose-500" : "bg-amber-400"}`}
                            ></span>
                            <span className="font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                              {act.name}
                            </span>
                          </div>
                        </td>
                        <td className="py-3 text-right font-bold text-slate-800">
                          {act.emission}
                        </td>
                        <td className="py-3 text-right text-slate-500">
                          {act.users}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button className="w-full mt-3 py-2 text-xs font-semibold text-slate-500 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                Lihat Selengkapnya
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
