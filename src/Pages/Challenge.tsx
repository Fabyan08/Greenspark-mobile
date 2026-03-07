import { useState } from "react";
import {
  Users,
  TrendingDown,
  TrendingUp,
  Target,
  Download,
  Zap,
  Car,
  Trash2,
  Flag,
  CheckSquare,
  Wind,
  TreePine,
  BatteryCharging,
  Droplets,
  Calendar,
  ChevronRight,
} from "lucide-react";
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  Legend,
  ComposedChart,
} from "recharts";

// --- MOCK DATA ---

// --- MOCK DATA MONITORING CHALLENGE ---
const challengeStats = [
  {
    title: "Challenge Aktif",
    value: "12",
    sub: "Program sedang berjalan",
    icon: Flag,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    title: "Total Peserta",
    value: "3,200",
    sub: "Pemuda terdaftar",
    icon: Users,
    color: "text-emerald-600",
    bg: "bg-emerald-100",
  },
  {
    title: "Aksi Selesai",
    value: "8,540",
    sub: "Misi telah diverifikasi",
    icon: CheckSquare,
    color: "text-amber-600",
    bg: "bg-amber-100",
  },
  {
    title: "Reduksi Emisi",
    value: "4.2",
    unit: "Ton CO₂",
    sub: "Berhasil dicegah",
    icon: Wind,
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
];

const activeChallenges = [
  {
    id: 1,
    name: "Bike to Campus",
    desc: "Gunakan sepeda ke kampus selama 5 hari berturut-turut.",
    duration: "1 - 14 Mar 2026",
    participants: "1,250",
    progress: 68,
    target: "5.000 perjalanan",
    current: "3.400",
    icon: Car,
    color: "bg-blue-500",
    colorLight: "bg-blue-50",
  },
  {
    id: 2,
    name: "Reduce Plastic Week",
    desc: "Tolak kantong plastik & bawa botol minum sendiri.",
    duration: "5 - 12 Mar 2026",
    participants: "840",
    progress: 45,
    target: "2.500 aksi",
    current: "1.125",
    icon: Trash2,
    color: "bg-emerald-500",
    colorLight: "bg-emerald-50",
  },
  {
    id: 3,
    name: "Energy Saving Night",
    desc: "Matikan lampu & AC tidak terpakai dari jam 20:00 - 06:00.",
    duration: "Setiap Malam",
    participants: "650",
    progress: 82,
    target: "10.000 jam hemat",
    current: "8.200",
    icon: Zap,
    color: "bg-amber-500",
    colorLight: "bg-amber-50",
  },
  {
    id: 4,
    name: "Tree Planting",
    desc: "Tanam & rawat 1 pohon di area kos/rumah/kampus.",
    duration: "1 Mar - 30 Apr",
    participants: "460",
    progress: 30,
    target: "1.000 pohon",
    current: "300",
    icon: TreePine,
    color: "bg-teal-500",
    colorLight: "bg-teal-50",
  },
];

const environmentalImpact = [
  {
    label: "Emisi Karbon Dicegah",
    value: "4,250",
    unit: "kg CO₂",
    icon: Wind,
    color: "text-slate-700",
  },
  {
    label: "Sampah Plastik Berkurang",
    value: "1,820",
    unit: "kg",
    icon: Droplets,
    color: "text-blue-600",
  },
  {
    label: "Pohon Baru Ditanam",
    value: "350",
    unit: "Bibit",
    icon: TreePine,
    color: "text-emerald-600",
  },
  {
    label: "Penghematan Energi",
    value: "12,400",
    unit: "kWh",
    icon: BatteryCharging,
    color: "text-amber-500",
  },
];

const challengeChartData = [
  { name: "Bike to Campus", peserta: 1250, penyelesaian: 850 },
  { name: "Reduce Plastic", peserta: 840, penyelesaian: 380 },
  { name: "Energy Saving", peserta: 650, penyelesaian: 530 },
  { name: "Tree Planting", peserta: 460, penyelesaian: 140 },
  { name: "Zero Food Waste", peserta: 320, penyelesaian: 290 },
];

const challengeRanking = [
  {
    rank: 1,
    name: "Bike to Campus",
    participants: "1,250",
    actions: "3,400",
    emission: "1.8 Ton",
    successRate: 85,
    trend: "up",
  },
  {
    rank: 2,
    name: "Energy Saving Night",
    participants: "650",
    actions: "8,200",
    emission: "1.2 Ton",
    successRate: 92,
    trend: "up",
  },
  {
    rank: 3,
    name: "Reduce Plastic Week",
    participants: "840",
    actions: "1,125",
    emission: "0.5 Ton",
    successRate: 45,
    trend: "down",
  },
  {
    rank: 4,
    name: "Tree Planting",
    participants: "460",
    actions: "300",
    emission: "0.4 Ton",
    successRate: 30,
    trend: "up",
  },
  {
    rank: 5,
    name: "Zero Food Waste",
    participants: "320",
    actions: "1,200",
    emission: "0.3 Ton",
    successRate: 88,
    trend: "down",
  },
];

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Challenge() {
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
          title="Leaderboard Komunitas"
        />

        {/* SCROLLABLE DASHBOARD AREA */}
        <div className="flex-1 overflow-y-auto p-6 bg-slate-50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challengeStats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-start gap-4 hover:border-emerald-100 hover:shadow-md transition-all group"
              >
                <div
                  className={`p-3 rounded-xl ${stat.bg} ${stat.color} transition-transform group-hover:scale-110`}
                >
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 mb-1">
                    {stat.title}
                  </p>
                  <h3 className="text-2xl font-bold text-slate-800 leading-none">
                    {stat.value}{" "}
                    {stat.unit && (
                      <span className="text-sm font-normal text-slate-500">
                        {stat.unit}
                      </span>
                    )}
                  </h3>
                  <p className="text-[10px] font-medium text-slate-400 mt-1">
                    {stat.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ROW 2: DAFTAR CHALLENGE AKTIF & DAMPAK LINGKUNGAN */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Daftar Challenge Aktif */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <div className="flex justify-between items-end mb-2">
                <div>
                  <h3 className="font-bold text-slate-800">
                    Daftar Challenge Aktif
                  </h3>
                  <p className="text-xs text-slate-500">
                    Pantau progres penyelesaian target misi kampanye hijau.
                  </p>
                </div>
                <button className="text-xs font-semibold text-emerald-600 flex items-center hover:text-emerald-700">
                  Lihat Semua <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeChallenges.map((challenge) => (
                  <div
                    key={challenge.id}
                    className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col hover:border-emerald-200 transition-colors group cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-lg ${challenge.colorLight} text-slate-700`}
                        >
                          <challenge.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800 text-sm group-hover:text-emerald-600 transition-colors">
                            {challenge.name}
                          </h4>
                          <div className="flex items-center text-[10px] text-slate-500 mt-0.5 gap-1">
                            <Calendar className="w-3 h-3" />{" "}
                            {challenge.duration}
                          </div>
                        </div>
                      </div>
                      <div className="bg-slate-50 px-2 py-1 rounded text-[10px] font-semibold text-slate-600 border border-slate-100 flex items-center gap-1">
                        <Users className="w-3 h-3" /> {challenge.participants}
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 mb-4 line-clamp-2">
                      {challenge.desc}
                    </p>

                    {/* Progress Bar Area */}
                    <div className="mt-auto">
                      <div className="flex justify-between items-end mb-1.5">
                        <span className="text-[10px] font-medium text-slate-500">
                          Progress:{" "}
                          <span className="text-slate-700 font-bold">
                            {challenge.progress}%
                          </span>
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium">
                          {challenge.current} / {challenge.target}
                        </span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full ${challenge.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${challenge.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Panel Dampak Lingkungan */}
            <div className="bg-gradient-to-br from-emerald-900 to-teal-900 rounded-2xl p-6 shadow-xl text-white relative overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-bl-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-500/20 rounded-tr-full blur-2xl"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold tracking-wider mb-6">
                  <Target className="w-4 h-4" /> DAMPAK LINGKUNGAN NYATA
                </div>

                <div className="space-y-4">
                  {environmentalImpact.map((impact, idx) => (
                    <div
                      key={idx}
                      className="bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-xl flex items-center gap-4 hover:bg-white/15 transition-colors"
                    >
                      <div className="p-3 bg-white rounded-lg shadow-sm">
                        <impact.icon className={`w-5 h-5 ${impact.color}`} />
                      </div>
                      <div>
                        <p className="text-xs text-emerald-100/70 font-medium mb-0.5">
                          {impact.label}
                        </p>
                        <h4 className="text-xl font-bold text-white tracking-wide">
                          {impact.value}{" "}
                          <span className="text-xs font-normal text-emerald-200/80 ml-0.5">
                            {impact.unit}
                          </span>
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ROW 3: GRAFIK PARTISIPASI & RANKING CHALLENGE */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Grafik Partisipasi Challenge */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-bold text-slate-800">
                    Tingkat Partisipasi & Penyelesaian
                  </h3>
                  <p className="text-xs text-slate-500">
                    Menganalisis efektivitas dan antusiasme tiap program
                    challenge.
                  </p>
                </div>
              </div>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart
                    data={challengeChartData}
                    margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
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
                      tick={{ fontSize: 10, fill: "#64748b" }}
                      dy={10}
                    />
                    <YAxis
                      yAxisId="left"
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
                      cursor={{ fill: "#f8fafc" }}
                    />
                    <Legend
                      iconType="circle"
                      wrapperStyle={{ fontSize: "12px", paddingTop: "10px" }}
                    />
                    <Bar
                      yAxisId="left"
                      dataKey="peserta"
                      name="Total Peserta Mendaftar"
                      fill="#cbd5e1"
                      radius={[4, 4, 0, 0]}
                      maxBarSize={40}
                    />
                    <Bar
                      yAxisId="left"
                      dataKey="penyelesaian"
                      name="Berhasil Menyelesaikan"
                      fill="#10b981"
                      radius={[4, 4, 0, 0]}
                      maxBarSize={40}
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Tabel Ranking Performa Challenge */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="font-bold text-slate-800">
                    Challenge Performance Ranking
                  </h3>
                  <p className="text-xs text-slate-500">
                    Peringkat program berdasarkan keberhasilan & dampak emisi.
                  </p>
                </div>
                <button className="text-slate-400 hover:text-emerald-600 transition-colors p-2 rounded-lg hover:bg-slate-50">
                  <Download className="w-4 h-4" />
                </button>
              </div>

              <div className="flex-1 overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-100 text-xs text-slate-400 font-medium tracking-wider">
                      <th className="pb-3 font-medium">Nama Program</th>
                      <th className="pb-3 font-medium text-center">Peserta</th>
                      <th className="pb-3 font-medium text-right">
                        Reduksi Emisi
                      </th>
                      <th className="pb-3 font-medium text-right">
                        Success Rate
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {challengeRanking.map((item) => (
                      <tr
                        key={item.rank}
                        className="text-sm hover:bg-slate-50 transition-colors"
                      >
                        <td className="py-3 pr-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-slate-400 w-4">
                              {item.rank}.
                            </span>
                            <span className="font-semibold text-slate-700">
                              {item.name}
                            </span>
                          </div>
                        </td>
                        <td className="py-3 text-center text-slate-600">
                          {item.participants}
                        </td>
                        <td className="py-3 text-right font-medium text-emerald-600 bg-emerald-50/50">
                          {item.emission}
                        </td>
                        <td className="py-3 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <span className="font-bold text-slate-800">
                              {item.successRate}%
                            </span>
                            {item.trend === "up" ? (
                              <TrendingUp className="w-3 h-3 text-emerald-500" />
                            ) : (
                              <TrendingDown className="w-3 h-3 text-rose-500" />
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
