import { useState } from "react";
import {
  Users,
  Award,
  Target,
  Search,
  Crown,
  Trophy,
  Star,
  ShieldCheck,
  Flame,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
} from "recharts";

// --- MOCK DATA LEADERBOARD KOMUNITAS ---
const communityStats = [
  {
    title: "Komunitas Aktif",
    value: "1,245",
    sub: "+12 bergabung minggu ini",
    icon: Users,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    title: "Total Aksi Tercatat",
    value: "2.5M",
    sub: "Misi hijau diselesaikan",
    icon: Target,
    color: "text-emerald-600",
    bg: "bg-emerald-100",
  },
  {
    title: "Total Emisi Dicegah",
    value: "180K",
    sub: "Ton CO₂e secara kolektif",
    icon: ShieldCheck,
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
  {
    title: "Most Improved",
    value: "UB Malang",
    sub: "+450 Poin (Naik 2 Peringkat)",
    icon: Flame,
    color: "text-rose-600",
    bg: "bg-rose-100",
  },
];

const top3Communities = [
  {
    rank: 2,
    name: "Univ. Udayana",
    points: "118.2K",
    cbi: 90,
    actions: "42.1K",
    color: "from-slate-200 to-slate-400",
    border: "border-slate-300",
    text: "text-slate-700",
    badge: "🥈",
    glow: "shadow-[0_0_30px_rgba(148,163,184,0.4)]",
  },
  {
    rank: 1,
    name: "Univ. Gadjah Mada",
    points: "125.4K",
    cbi: 92,
    actions: "45.2K",
    color: "from-amber-200 to-yellow-500",
    border: "border-yellow-400",
    text: "text-yellow-800",
    badge: "🥇",
    isTop: true,
    glow: "shadow-[0_0_40px_rgba(250,204,21,0.5)]",
  },
  {
    rank: 3,
    name: "Univ. Brawijaya",
    points: "105.8K",
    cbi: 88,
    actions: "38.5K",
    color: "from-orange-200 to-orange-500",
    border: "border-orange-400",
    text: "text-orange-900",
    badge: "🥉",
    glow: "shadow-[0_0_30px_rgba(249,115,22,0.4)]",
  },
];

const leaderboardTable = [
  {
    rank: 4,
    name: "Institut Pertanian Bogor (IPB)",
    members: "32k",
    points: "98,500",
    cbi: 85,
    reduction: "12.4 Ton",
    badges: ["🌱", "🌳"],
  },
  {
    rank: 5,
    name: "Universitas Jenderal Soedirman",
    members: "28k",
    points: "92,100",
    cbi: 82,
    reduction: "10.8 Ton",
    badges: ["🌱"],
  },
  {
    rank: 6,
    name: "Institut Teknologi Bandung (ITB)",
    members: "45k",
    points: "88,400",
    cbi: 65,
    reduction: "9.5 Ton",
    badges: ["🌳"],
  },
  {
    rank: 7,
    name: "Universitas Airlangga (Unair)",
    members: "30k",
    points: "85,200",
    cbi: 63,
    reduction: "8.2 Ton",
    badges: ["🌱"],
  },
  {
    rank: 8,
    name: "Universitas Indonesia (UI)",
    members: "80k",
    points: "82,000",
    cbi: 58,
    reduction: "7.9 Ton",
    badges: [],
  },
  {
    rank: 9,
    name: "Universitas Hasanuddin (Unhas)",
    members: "30k",
    points: "78,500",
    cbi: 68,
    reduction: "6.5 Ton",
    badges: ["🌱"],
  },
];

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const communityPerformanceData = [
  { name: "UGM", aksi: 45200, emisiDicegah: 18500 },
  { name: "UNUD", aksi: 42100, emisiDicegah: 16200 },
  { name: "UB", aksi: 38500, emisiDicegah: 15100 },
  { name: "IPB", aksi: 32000, emisiDicegah: 12400 },
  { name: "UNSOED", aksi: 28000, emisiDicegah: 10800 },
  { name: "ITB", aksi: 25000, emisiDicegah: 9500 },
];

export default function Leaderboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-sans overflow-hidden">
      <Sidebar isOpen={isSidebarOpen} />

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* HEADER */}
        <Header
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          title="Monitoring Challenge"
        />

        {/* SCROLLABLE DASHBOARD AREA */}
        <div className="flex-1 overflow-y-auto p-6 bg-slate-50">
          {/* FILTER PANEL */}
          <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-wrap gap-4 items-center justify-between">
            <div className="flex items-center gap-3">
              <Trophy className="w-6 h-6 text-amber-500" />
              <div>
                <h2 className="font-bold text-slate-800 leading-none">
                  Ranking Nasional
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Musim: Hijau Bersama 2026
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Cari kampus/komunitas..."
                  className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none w-48"
                />
              </div>
              <select className="bg-slate-50 border border-slate-200 text-sm rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500 text-slate-600">
                <option>Bulan Ini</option>
                <option>Tahun Ini</option>
                <option>Sepanjang Waktu</option>
              </select>
              <select className="bg-slate-50 border border-slate-200 text-sm rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500 text-slate-600">
                <option>Tipe: Kampus</option>
                <option>Tipe: Organisasi</option>
                <option>Tipe: Komunitas Lokal</option>
              </select>
            </div>
          </div>

          {/* STATISTIK RINGKAS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityStats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-center gap-4 hover:border-emerald-100 hover:shadow-md transition-all group"
              >
                <div
                  className={`p-3 rounded-xl ${stat.bg} ${stat.color} transition-transform group-hover:scale-110`}
                >
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500">
                    {stat.title}
                  </p>
                  <h3 className="text-xl font-bold text-slate-800">
                    {stat.value}
                  </h3>
                  <p className="text-[10px] font-medium text-slate-400 mt-0.5">
                    {stat.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* TOP 3 PODIUM (GAMIFIED HIGHLIGHT) */}
          <div className="bg-gradient-to-b from-slate-900 to-slate-800 rounded-3xl p-8 shadow-xl relative overflow-hidden border border-slate-700">
            {/* Background Decorations */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute top-4 left-4 text-slate-400/50 flex items-center gap-2 text-xs font-bold tracking-widest">
              <Star className="w-4 h-4" /> HALL OF FAME
            </div>

            <div className="flex flex-col md:flex-row items-end justify-center gap-4 md:gap-8 mt-10 min-h-[280px]">
              {top3Communities.map((community) => (
                <div
                  key={community.rank}
                  className={`relative flex flex-col items-center w-full md:w-64 ${community.isTop ? "order-first md:order-none z-10" : ""}`}
                >
                  {/* Podium Content */}
                  <div
                    className={`w-full bg-white rounded-2xl p-5 flex flex-col items-center text-center border-b-4 ${community.border} ${community.glow} transform transition-transform hover:-translate-y-2 relative z-10`}
                  >
                    {community.isTop && (
                      <Crown className="absolute -top-6 text-yellow-400 w-12 h-12 drop-shadow-md animate-bounce" />
                    )}

                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${community.color} flex items-center justify-center text-3xl mb-3 shadow-inner border-4 border-white`}
                    >
                      {community.badge}
                    </div>

                    <h3 className="font-bold text-slate-800 leading-tight mb-1">
                      {community.name}
                    </h3>
                    <div
                      className={`text-xs font-bold px-2 py-1 rounded bg-slate-100 ${community.text} mb-3 inline-block`}
                    >
                      Rank #{community.rank}
                    </div>

                    <div className="w-full space-y-2 mt-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-500">Green Points:</span>
                        <span className="font-bold text-emerald-600">
                          {community.points}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-500">Total Aksi:</span>
                        <span className="font-bold text-blue-600">
                          {community.actions}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-500">CBI Score:</span>
                        <span className="font-bold text-amber-500">
                          {community.cbi}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Podium Base (Visual) */}
                  <div
                    className={`w-11/12 bg-gradient-to-t ${community.color} opacity-80 rounded-t-lg mt-2 ${community.isTop ? "h-16" : "h-8"}`}
                  >
                    <div className="w-full h-full bg-black/10 rounded-t-lg border-t border-white/30 text-center pt-1 font-bold text-white/90 shadow-inner">
                      {community.rank}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TABEL RANKING & ACHIEVEMENT BADGES */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Leaderboard Table */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="font-bold text-slate-800">
                    Klasemen Komunitas
                  </h3>
                  <p className="text-xs text-slate-500">
                    Peringkat berdasarkan akumulasi Green Points
                  </p>
                </div>
                <button className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg hover:bg-slate-200 transition-colors">
                  Lihat Semua
                </button>
              </div>

              <div className="flex-1 overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-slate-50 text-xs text-slate-500 font-medium uppercase tracking-wider border-y border-slate-100">
                      <th className="py-3 px-4 font-medium text-center">
                        Rank
                      </th>
                      <th className="py-3 px-2 font-medium">
                        Komunitas / Kampus
                      </th>
                      <th className="py-3 px-2 font-medium text-center">
                        Anggota
                      </th>
                      <th className="py-3 px-2 font-medium text-center">
                        Badges
                      </th>
                      <th className="py-3 px-2 font-medium text-right">
                        Emisi Turun
                      </th>
                      <th className="py-3 px-4 font-medium text-right text-emerald-600">
                        Points
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {leaderboardTable.map((item) => (
                      <tr
                        key={item.rank}
                        className="text-sm hover:bg-slate-50 transition-colors"
                      >
                        <td className="py-3 px-4 text-center font-bold text-slate-400">
                          #{item.rank}
                        </td>
                        <td className="py-3 px-2 font-semibold text-slate-800">
                          {item.name}
                        </td>
                        <td className="py-3 px-2 text-center text-slate-500">
                          {item.members}
                        </td>
                        <td className="py-3 px-2 text-center text-lg">
                          {item.badges.join(" ")}
                        </td>
                        <td className="py-3 px-2 text-right text-slate-600 font-medium">
                          {item.reduction}
                        </td>
                        <td className="py-3 px-4 text-right font-bold text-emerald-600">
                          {item.points}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Achievement Badges Explainer & Chart */}
            <div className="flex flex-col gap-6">
              {/* Badges Guide */}
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-500" /> Sistem Badge
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 bg-slate-50 p-2 rounded-lg border border-slate-100">
                    <div className="text-2xl mt-0.5">🌱</div>
                    <div>
                      <p className="text-sm font-bold text-slate-700">
                        Eco Starter
                      </p>
                      <p className="text-xs text-slate-500">
                        Mencapai 100+ aksi lingkungan kolektif.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-slate-50 p-2 rounded-lg border border-slate-100">
                    <div className="text-2xl mt-0.5">🌳</div>
                    <div>
                      <p className="text-sm font-bold text-slate-700">
                        Green Guardian
                      </p>
                      <p className="text-xs text-slate-500">
                        Menurunkan rata-rata emisi &gt;10%.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-gradient-to-r from-amber-50 to-yellow-50 p-2 rounded-lg border border-yellow-200">
                    <div className="text-2xl mt-0.5">🌍</div>
                    <div>
                      <p className="text-sm font-bold text-amber-700">
                        Climate Champion
                      </p>
                      <p className="text-xs text-amber-600/80">
                        Khusus Top 3 klasemen nasional.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mini Performance Chart */}
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex-1 flex flex-col">
                <h3 className="font-bold text-slate-800 mb-1">
                  Perbandingan Performa
                </h3>
                <p className="text-[10px] text-slate-500 mb-4">
                  Aksi vs Emisi Dicegah (Top 6)
                </p>
                <div className="flex-1 min-h-[180px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={communityPerformanceData}
                      layout="vertical"
                      margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        horizontal={true}
                        vertical={false}
                        stroke="#f1f5f9"
                      />
                      <XAxis type="number" hide />
                      <YAxis
                        dataKey="name"
                        type="category"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 10, fill: "#64748b" }}
                      />
                      <RechartsTooltip
                        cursor={{ fill: "#f8fafc" }}
                        contentStyle={{
                          borderRadius: "8px",
                          border: "none",
                          boxShadow: "0 2px 4px -1px rgb(0 0 0 / 0.1)",
                          fontSize: "12px",
                        }}
                      />
                      <Bar
                        dataKey="aksi"
                        name="Total Aksi"
                        fill="#3b82f6"
                        radius={[0, 4, 4, 0]}
                        barSize={8}
                      />
                      <Bar
                        dataKey="emisiDicegah"
                        name="Emisi Dicegah"
                        fill="#10b981"
                        radius={[0, 4, 4, 0]}
                        barSize={8}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
