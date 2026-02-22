import { useState } from "react";
import {
  Leaf,
  TrendingUp,
  Activity,
  Zap,
  AlertTriangle,
  CheckCircle2,
  Crown,
  ArrowUpRight,
} from "lucide-react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

// --- MOCK DATA CBI ---
const cbiTrendData = [
  { month: "Jan", cbi: 62 },
  { month: "Feb", cbi: 64 },
  { month: "Mar", cbi: 63 },
  { month: "Apr", cbi: 67 },
  { month: "Mei", cbi: 70 },
  { month: "Jun", cbi: 72 },
];
const cbiBreakdownData = [
  { name: "Transportasi", value: 35, fill: "#3b82f6" },
  { name: "Energi (Listrik)", value: 25, fill: "#f59e0b" },
  { name: "Konsumsi Makanan", value: 25, fill: "#10b981" },
  { name: "Pengelolaan Sampah", value: 15, fill: "#8b5cf6" },
];
const cbiRankingData = [
  { name: "YGY", cbi: 92, users: 60000 },
  { name: "BALI", cbi: 90, users: 25000 },
  { name: "MLG", cbi: 88, users: 35000 },
  { name: "BDG", cbi: 65, users: 45000 },
  { name: "SBY", cbi: 62, users: 50000 },
  { name: "PKU", cbi: 50, users: 20000 },
  { name: "MDN", cbi: 48, users: 40000 },
  { name: "JKT", cbi: 42, users: 120000 },
];
const cbiUserSegments = [
  {
    id: "leader",
    name: "Eco Leader",
    range: "> 80",
    count: "350k",
    pct: 28,
    color: "bg-emerald-500",
    colorLight: "bg-emerald-100",
    text: "text-emerald-700",
    icon: Crown,
  },
  {
    id: "active",
    name: "Eco Active",
    range: "60-79",
    count: "550k",
    pct: 45,
    color: "bg-teal-500",
    colorLight: "bg-teal-100",
    text: "text-teal-700",
    icon: Zap,
  },
  {
    id: "beginner",
    name: "Eco Beginner",
    range: "40-59",
    count: "200k",
    pct: 16,
    color: "bg-amber-400",
    colorLight: "bg-amber-100",
    text: "text-amber-700",
    icon: Leaf,
  },
  {
    id: "risk",
    name: "Eco At Risk",
    range: "< 40",
    count: "100k",
    pct: 11,
    color: "bg-rose-500",
    colorLight: "bg-rose-100",
    text: "text-rose-700",
    icon: AlertTriangle,
  },
];

export default function Cbi() {
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
          {/* HALAMAN CLIMATE BEHAVIORAL INDEX */}
          <div>
            {/* ROW 1: SCORE CARD & SEGMENTASI */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Score Card (Gauge Chart Style) */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full -z-10"></div>
                <h3 className="text-sm font-bold text-slate-500 mb-4 self-start w-full text-center">
                  CBI Nasional
                </h3>

                {/* Custom Half-Doughnut as Gauge */}
                <div className="relative w-full h-32 flex justify-center">
                  <ResponsiveContainer width="100%" height={160}>
                    <PieChart>
                      <Pie
                        data={[
                          { value: 72, fill: "#10b981" },
                          { value: 28, fill: "#f1f5f9" },
                        ]}
                        cx="50%"
                        cy="100%"
                        startAngle={180}
                        endAngle={0}
                        innerRadius={80}
                        outerRadius={110}
                        dataKey="value"
                        stroke="none"
                        cornerRadius={5}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute bottom-0 flex flex-col items-center">
                    <span className="text-5xl font-extrabold text-slate-800 tracking-tight">
                      72
                      <span className="text-lg text-slate-400 font-medium">
                        /100
                      </span>
                    </span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full mt-2 flex items-center gap-1 shadow-sm border border-emerald-200">
                      TINGGI <CheckCircle2 className="w-3 h-3" />
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between w-full px-4 border-t border-slate-100 pt-4">
                  <span className="text-xs text-slate-500">
                    Perubahan bulan ini
                  </span>
                  <span className="text-xs font-bold text-emerald-600 flex items-center bg-emerald-50 px-2 py-0.5 rounded-md">
                    <ArrowUpRight className="w-3 h-3 mr-0.5" /> 4.5 Poin
                  </span>
                </div>
              </div>

              {/* User Segments Cards */}
              <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                {cbiUserSegments.map((seg) => (
                  <div
                    key={seg.id}
                    className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div
                        className={`p-2 rounded-xl ${seg.colorLight} ${seg.text} transition-transform group-hover:scale-110`}
                      >
                        <seg.icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-semibold text-slate-400 bg-slate-100 px-2 py-1 rounded-lg">
                        Skor {seg.range}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">
                        {seg.name}
                      </h4>
                      <div className="flex items-end justify-between mt-1">
                        <span className="text-2xl font-extrabold text-slate-800">
                          {seg.pct}%
                        </span>
                        <span className="text-xs font-medium text-slate-500 mb-1">
                          {seg.count} user
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-100 rounded-full mt-3 overflow-hidden">
                        <div
                          className={`h-full ${seg.color} rounded-full`}
                          style={{ width: `${seg.pct}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* AI Insight Panel */}
              <div className="bg-slate-900 rounded-2xl p-5 text-white shadow-xl relative overflow-hidden flex flex-col">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl"></div>
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold tracking-wider mb-4 relative z-10">
                  <Zap className="w-4 h-4" /> AI INSIGHT: NASIONAL
                </div>

                <div className="space-y-4 flex-1 relative z-10">
                  <div>
                    <p className="text-xs text-slate-400 mb-1">
                      Faktor Utama Penghambat
                    </p>
                    <p className="text-sm font-medium leading-relaxed">
                      Tingginya penggunaan transportasi pribadi berbasis BBM
                      (65%) di area metropolitan.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 mb-1">
                      Prediksi 3 Bulan
                    </p>
                    <p className="text-sm font-medium text-emerald-300 leading-relaxed flex items-start gap-1">
                      <TrendingUp className="w-4 h-4 shrink-0 mt-0.5" /> Skor
                      berpotensi naik ke angka 75 jika tren "Green Challenge"
                      stabil.
                    </p>
                  </div>
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10 mt-auto">
                    <p className="text-xs text-emerald-400 font-bold mb-1">
                      Rekomendasi Prioritas
                    </p>
                    <p className="text-xs leading-relaxed text-slate-200">
                      Gencarkan kampanye{" "}
                      <span className="font-semibold text-white">
                        #BikeToCampus
                      </span>{" "}
                      dan berikan *Reward Points* ganda untuk *carpooling*
                      komunitas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ROW 2: TREN & KOMPONEN PEMBENTUK */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Tren Perilaku Line Chart */}
              <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="font-bold text-slate-800">
                      Tren Indeks Perilaku Iklim
                    </h3>
                    <p className="text-xs text-slate-500">
                      Pergerakan CBI dalam 6 bulan terakhir
                    </p>
                  </div>
                  <select className="bg-slate-50 border border-slate-200 text-sm rounded-lg px-3 py-1.5 outline-none focus:ring-2 focus:ring-emerald-500 text-slate-600">
                    <option>Skala Nasional</option>
                    <option>DI Yogyakarta</option>
                    <option>DKI Jakarta</option>
                  </select>
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={cbiTrendData}
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
                        domain={[40, 100]}
                      />
                      <RechartsTooltip
                        contentStyle={{
                          borderRadius: "12px",
                          border: "none",
                          boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                        }}
                        formatter={(value) => [`${value} Poin`, "Skor CBI"]}
                      />
                      <Line
                        type="monotone"
                        dataKey="cbi"
                        name="Skor CBI"
                        stroke="#0ea5e9"
                        strokeWidth={4}
                        dot={{
                          r: 5,
                          fill: "#0ea5e9",
                          strokeWidth: 2,
                          stroke: "#fff",
                        }}
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Komponen CBI Pie Chart */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col">
                <div>
                  <h3 className="font-bold text-slate-800">
                    Pembentuk Skor CBI
                  </h3>
                  <p className="text-xs text-slate-500 mb-2">
                    Bobot sektor pembentuk kebiasaan
                  </p>
                </div>
                <div className="flex-1 relative h-48 mt-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={cbiBreakdownData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={85}
                        paddingAngle={4}
                        dataKey="value"
                        stroke="none"
                      >
                        {cbiBreakdownData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Pie>
                      <RechartsTooltip
                        contentStyle={{
                          borderRadius: "12px",
                          border: "none",
                          boxShadow: "0 4px 10px -1px rgb(0 0 0 / 0.1)",
                        }}
                        formatter={(value) => [`${value}%`, "Bobot Kontribusi"]}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  {/* Center Icon */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <Activity className="w-8 h-8 text-slate-300" />
                  </div>
                </div>

                {/* Custom Legend */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {cbiBreakdownData.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span
                        className="w-3 h-3 rounded-full shrink-0"
                        style={{ backgroundColor: item.fill }}
                      ></span>
                      <span className="text-xs text-slate-600 font-medium truncate">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ROW 3: RANKING WILAYAH */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-bold text-slate-800">
                    Ranking Perilaku Hijau (CBI) per Wilayah
                  </h3>
                  <p className="text-xs text-slate-500">
                    Perbandingan skor iklim antar kampus/kota berdasarkan data
                    terkini
                  </p>
                </div>
                <button className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg hover:bg-emerald-100 transition-colors">
                  Unduh Laporan CSV
                </button>
              </div>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={cbiRankingData}
                    margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#f1f5f9"
                    />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 11, fill: "#64748b" }}
                      dy={10}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 11, fill: "#64748b" }}
                      domain={[0, 100]}
                    />
                    <RechartsTooltip
                      cursor={{ fill: "#f8fafc" }}
                      contentStyle={{
                        borderRadius: "12px",
                        border: "none",
                        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                      }}
                      formatter={(value, name) => [
                        value,
                        name === "cbi" ? "Skor CBI" : name,
                      ]}
                    />
                    <Bar
                      dataKey="cbi"
                      name="Skor CBI"
                      radius={[4, 4, 0, 0]}
                      maxBarSize={45}
                    >
                      {cbiRankingData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={
                            entry.cbi > 70
                              ? "#10b981"
                              : entry.cbi >= 40
                                ? "#f59e0b"
                                : "#ef4444"
                          }
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          {/* AKHIR HALAMAN CBI */}
        </div>
      </main>
    </div>
  );
}
