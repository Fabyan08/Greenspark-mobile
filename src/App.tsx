import React, { useState, useEffect, useRef } from "react";
import {
  Home,
  PlusCircle,
  BarChart3,
  Trophy,
  Users,
  Sparkles,
  Leaf,
  Zap,
  Car,
  Trash2,
  ChevronRight,
  X,
  Bike,
  Bus,
  Footprints,
  Flame,
  ArrowDownRight,
  ArrowUpRight,
  MapPin,
  CheckCircle2,
} from "lucide-react";

// --- MAIN APPLICATION COMPONENT ---
export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  // Fungsi untuk memunculkan notifikasi interaktif (Toast)
  // const showToast = (msg: string) => {
  //   setToast(msg);
  //   setTimeout(() => setToast(null), 3000);
  // };

  const showToast = (msg: string) => {
    return; // toast dimatikan
  };
  
  const renderScreen = () => {
    switch (activeTab) {
      case "home":
        return (
          <HomeScreen
            onLogActivity={() => setActiveTab("activity")}
            showToast={showToast}
          />
        );
      case "activity":
        return (
          <ActivityScreen
            onSubmit={() => setActiveTab("home")}
            showToast={showToast}
          />
        );
      case "analytics":
        return <AnalyticsScreen showToast={showToast} />;
      case "challenge":
        return <ChallengeScreen showToast={showToast} />;
      case "community":
        return <CommunityScreen showToast={showToast} />;
      default:
        return (
          <HomeScreen
            onLogActivity={() => setActiveTab("activity")}
            showToast={showToast}
          />
        );
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0F172A] sm:p-4 font-sans">
      {/* Mobile Device Frame */}
      <div className="w-full max-w-md h-[100dvh] sm:h-[90vh] sm:rounded-[2.5rem] bg-[#F8FAFC] overflow-hidden relative shadow-2xl ring-1 ring-white/10 flex flex-col">
        {/* Interactive Toast Notification */}
        {toast && (
          <div className="absolute top-6 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-top-4 fade-in duration-300">
            <div className="bg-[#0F172A] text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-sm border border-slate-700">
              <CheckCircle2 size={16} className="text-[#10B981]" />
              {toast}
            </div>
          </div>
        )}

        {/* Main Scrollable Content */}
        <div className="flex-1 overflow-y-auto pb-24 hide-scrollbar">
          {renderScreen()}
        </div>

        {/* Floating AI Assistant Button */}
        <button
          onClick={() => setIsAIOpen(true)}
          className="absolute bottom-24 right-6 w-14 h-14 bg-gradient-to-tr from-[#064E3B] to-[#10B981] rounded-full shadow-lg shadow-[#10B981]/30 flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-transform z-40"
        >
          <Sparkles size={24} className="animate-pulse" />
        </button>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 w-full bg-white/80 backdrop-blur-xl border-t border-slate-200 px-6 py-4 flex justify-between items-center z-30 rounded-b-[2.5rem]">
          <NavItem
            icon={<Home size={24} />}
            label="Beranda"
            isActive={activeTab === "home"}
            onClick={() => setActiveTab("home")}
          />
          <NavItem
            icon={<PlusCircle size={24} />}
            label="Aktivitas"
            isActive={activeTab === "activity"}
            onClick={() => setActiveTab("activity")}
          />
          <NavItem
            icon={<BarChart3 size={24} />}
            label="Analisis"
            isActive={activeTab === "analytics"}
            onClick={() => setActiveTab("analytics")}
          />
          <NavItem
            icon={<Trophy size={24} />}
            label="Tantangan"
            isActive={activeTab === "challenge"}
            onClick={() => setActiveTab("challenge")}
          />
          <NavItem
            icon={<Users size={24} />}
            label="Komunitas"
            isActive={activeTab === "community"}
            onClick={() => setActiveTab("community")}
          />
        </div>

        {/* AI Assistant Modal */}
        {isAIOpen && (
          <AIAssistantModal
            onClose={() => setIsAIOpen(false)}
            showToast={showToast}
          />
        )}
      </div>
    </div>
  );
}

// --- SCREENS ---

function HomeScreen({
  onLogActivity,
  showToast,
}: {
  onLogActivity: () => void;
  showToast: (msg: string) => void;
}) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-[#064E3B] to-[#0F172A] rounded-b-[2.5rem] p-6 pb-12 pt-12 text-white shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#10B981]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#10B981]/20 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4"></div>

        <div className="relative z-10 flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Halo, Alex 🌱</h1>
            <p className="text-emerald-300 text-sm mt-1 opacity-90">
              Siap menyelamatkan planet hari ini?
            </p>
          </div>
          <div
            onClick={() => showToast("Membuka profil Anda...")}
            className="w-12 h-12 rounded-full bg-white/10 border border-white/20 p-1 backdrop-blur-sm cursor-pointer hover:scale-105 active:scale-95 transition-transform"
          >
            <img
              src="https://i.pravatar.cc/150?u=alex"
              alt="User"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Carbon Score Card */}
        <div
          onClick={() => showToast("Melihat detail Skor Karbon")}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 flex items-center justify-between shadow-xl cursor-pointer hover:bg-white/20 transition-colors"
        >
          <div>
            <p className="text-sm text-slate-300 font-medium mb-1">
              Skor Karbon
            </p>
            <div className="flex items-end gap-2">
              <span className="text-5xl font-extrabold text-white">62</span>
              <span className="text-lg text-emerald-400 mb-1">/ 100</span>
            </div>
            <p className="text-xs text-emerald-300 mt-2 flex items-center gap-1">
              <ArrowDownRight size={14} /> 12% dari kemarin
            </p>
          </div>

          <div className="relative w-24 h-24">
            <svg
              viewBox="0 0 36 36"
              className="w-full h-full transform -rotate-90"
            >
              <path
                className="text-white/10"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              />
              <path
                className="text-[#10B981]"
                strokeDasharray="62, 100"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <Leaf className="text-[#10B981] w-8 h-8 opacity-80" />
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 -mt-6 relative z-20">
        {/* Climate Behavioral Index Gauge */}
        <div
          onClick={() => showToast("Detail Indeks Perilaku")}
          className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100 mb-6 flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow"
        >
          <div>
            <h3 className="text-[#0F172A] font-bold">Indeks Perilaku</h3>
            <p className="text-xs text-slate-500 mt-1">
              Performa keberlanjutan
            </p>
          </div>
          <div className="w-32 h-3 bg-slate-100 rounded-full overflow-hidden relative">
            <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-400 to-[#10B981] w-[75%] rounded-full"></div>
            <div className="absolute top-1/2 left-[75%] w-4 h-4 bg-white border-2 border-[#10B981] rounded-full -translate-y-1/2 -translate-x-1/2 shadow-sm"></div>
          </div>
        </div>

        <h3 className="text-lg font-bold text-[#0F172A] mb-4">
          Ringkasan Hari Ini
        </h3>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <SummaryCard
            icon={<Car size={20} />}
            title="Transportasi"
            value="4.2"
            unit="kg"
            color="text-red-500"
            bg="bg-red-50"
            onClick={() => showToast("Analisis Transportasi")}
          />
          <SummaryCard
            icon={<Zap size={20} />}
            title="Energi"
            value="2.1"
            unit="kWh"
            color="text-yellow-500"
            bg="bg-yellow-50"
            onClick={() => showToast("Analisis Energi")}
          />
          <SummaryCard
            icon={<Flame size={20} />}
            title="Makanan"
            value="1.8"
            unit="kg"
            color="text-[#10B981]"
            bg="bg-emerald-50"
            onClick={() => showToast("Analisis Makanan")}
          />
          <SummaryCard
            icon={<Trash2 size={20} />}
            title="Limbah"
            value="0.5"
            unit="kg"
            color="text-blue-500"
            bg="bg-blue-50"
            onClick={() => showToast("Analisis Limbah")}
          />
        </div>

        {/* AI Insight Card */}
        <div
          onClick={() => showToast("Membuka Asisten AI untuk saran detail...")}
          className="bg-gradient-to-r from-emerald-50 to-[#F8FAFC] border border-emerald-100 rounded-3xl p-5 shadow-sm mb-6 flex gap-4 items-start cursor-pointer hover:shadow-md transition-shadow"
        >
          <div className="bg-white p-2 rounded-2xl shadow-sm text-[#10B981]">
            <Sparkles size={24} />
          </div>
          <div>
            <h4 className="font-bold text-[#064E3B] text-sm mb-1">
              Wawasan AI
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Emisi transportasi Anda <strong>15% lebih tinggi</strong> hari
              ini. Coba gunakan transportasi umum besok untuk menguranginya!
            </p>
          </div>
        </div>

        <button
          onClick={onLogActivity}
          className="w-full bg-[#0F172A] text-white py-4 rounded-2xl font-semibold shadow-lg shadow-slate-900/20 hover:bg-[#064E3B] active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          <PlusCircle size={20} />
          Catat Aktivitas
        </button>
      </div>
    </div>
  );
}

function ActivityScreen({
  onSubmit,
  showToast,
}: {
  onSubmit: () => void;
  showToast: (msg: string) => void;
}) {
  const [co2, setCo2] = useState(2.3);
  const [transport, setTransport] = useState("Bicycle");
  const [distance, setDistance] = useState(12);
  const [energy, setEnergy] = useState("Grid");
  const [energyVal, setEnergyVal] = useState(4.5);
  const [food, setFood] = useState("Plant");
  const [waste, setWaste] = useState("Recycled");

  const handleSave = () => {
    showToast("Aktivitas berhasil dicatat! (+15 Poin Hijau)");
    onSubmit();
  };

  return (
    <div className="p-6 pt-12 animate-in fade-in duration-500">
      <h2 className="text-2xl font-bold text-[#0F172A] mb-2">
        Catat Aktivitas
      </h2>
      <p className="text-slate-500 text-sm mb-6">
        Lacak tindakan harian Anda dan lihat dampaknya.
      </p>

      {/* Real-time Feedback Banner */}
      <div className="bg-[#064E3B] rounded-3xl p-5 shadow-lg mb-8 text-white flex items-center justify-between sticky top-4 z-20">
        <div>
          <p className="text-emerald-200 text-xs font-medium uppercase tracking-wider mb-1">
            Dampak Hari Ini
          </p>
          <h3 className="text-2xl font-bold">
            {co2.toFixed(1)}{" "}
            <span className="text-sm font-normal text-emerald-100">kg CO₂</span>
          </h3>
        </div>
        <div
          onClick={() => showToast("Formula karbon sedang aktif")}
          className="bg-white/10 p-3 rounded-2xl backdrop-blur-sm cursor-pointer hover:scale-110 transition-transform"
        >
          <Leaf className="text-[#10B981]" size={28} />
        </div>
      </div>

      <div className="space-y-6 pb-6">
        {/* Transportation */}
        <ActivitySection title="Transportasi" icon={<Car size={18} />}>
          <div className="flex gap-2 py-4 px-2 overflow-x-auto hide-scrollbar pb-2">
            <ChoiceButton
              icon={<Car />}
              label="Mobil"
              active={transport === "Car"}
              onClick={() => {
                setTransport("Car");
                setCo2(co2 + 1.2);
              }}
            />
            <ChoiceButton
              icon={<Bike />}
              label="Sepeda"
              active={transport === "Bicycle"}
              onClick={() => {
                setTransport("Bicycle");
                setCo2(co2 - 0.5);
              }}
            />
            <ChoiceButton
              icon={<Bus />}
              label="Transit"
              active={transport === "Transit"}
              onClick={() => {
                setTransport("Transit");
                setCo2(co2 + 0.3);
              }}
            />
            <ChoiceButton
              icon={<Footprints />}
              label="Jalan"
              active={transport === "Walk"}
              onClick={() => {
                setTransport("Walk");
                setCo2(co2 - 0.2);
              }}
            />
          </div>
          <div className="mt-4">
            <p className="text-xs text-slate-500 mb-2 font-medium flex justify-between">
              <span>Jarak Tempuh</span> <span>{distance} km</span>
            </p>
            <input
              type="range"
              className="w-full accent-[#10B981] cursor-pointer"
              min="0"
              max="50"
              value={distance}
              onChange={(e) => {
                setDistance(Number(e.target.value));
                setCo2(
                  2.3 +
                    Number(e.target.value) * (transport === "Car" ? 0.2 : 0.05),
                );
              }}
            />
          </div>
        </ActivitySection>

        {/* Energy Usage */}
        <ActivitySection title="Penggunaan Energi" icon={<Zap size={18} />}>
          <div className="flex gap-2 mb-4">
            <div
              onClick={() => {
                setEnergy("Grid");
                setCo2(co2 + 0.8);
              }}
              className={`flex-1 border rounded-xl p-3 text-center cursor-pointer active:scale-95 transition-all ${energy === "Grid" ? "bg-slate-100 border-slate-300" : "bg-white border-slate-200 hover:bg-slate-50"}`}
            >
              <span className="block text-xl mb-1">⚡</span>
              <span className="text-xs font-medium text-slate-700">
                Listrik PLN
              </span>
            </div>
            <div
              onClick={() => {
                setEnergy("Solar");
                setCo2(co2 - 0.4);
              }}
              className={`flex-1 border rounded-xl p-3 text-center cursor-pointer active:scale-95 transition-all ${energy === "Solar" ? "bg-emerald-100 border-[#10B981]" : "bg-emerald-50 border-emerald-200 hover:bg-emerald-100"}`}
            >
              <span className="block text-xl mb-1">☀️</span>
              <span className="text-xs font-medium text-[#064E3B]">
                Tenaga Surya
              </span>
            </div>
          </div>
          <p className="text-xs text-slate-500 mb-2 font-medium flex justify-between">
            <span>Listrik Digunakan</span> <span>{energyVal} kWh</span>
          </p>
          <input
            type="range"
            className="w-full accent-[#10B981] cursor-pointer"
            min="0"
            max="20"
            value={energyVal}
            onChange={(e) => setEnergyVal(Number(e.target.value))}
          />
        </ActivitySection>

        {/* Food */}
        <ActivitySection title="Konsumsi Makanan" icon={<Flame size={18} />}>
          <div className="grid grid-cols-3 gap-2">
            <ChoiceButton
              icon={<Leaf size={16} />}
              label="Nabati"
              active={food === "Plant"}
              onClick={() => setFood("Plant")}
            />
            <ChoiceButton
              icon={<Flame size={16} />}
              label="Campur"
              active={food === "Mixed"}
              onClick={() => setFood("Mixed")}
            />
            <ChoiceButton
              icon={<span className="text-lg">🥩</span>}
              label="Daging"
              active={food === "Meat"}
              onClick={() => setFood("Meat")}
            />
          </div>
        </ActivitySection>

        {/* Waste */}
        <ActivitySection title="Manajemen Limbah" icon={<Trash2 size={18} />}>
          <div className="flex gap-2">
            <ChoiceButton
              icon={<span className="text-lg">♻️</span>}
              label="Daur Ulang"
              active={waste === "Recycled"}
              onClick={() => setWaste("Recycled")}
            />
            <ChoiceButton
              icon={<span className="text-lg">🗑️</span>}
              label="Umum"
              active={waste === "General"}
              onClick={() => setWaste("General")}
            />
          </div>
        </ActivitySection>

        <button
          onClick={handleSave}
          className="w-full mt-2 bg-[#10B981] text-white py-4 rounded-2xl font-semibold shadow-lg shadow-[#10B981]/20 hover:bg-emerald-600 active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          Simpan Aktivitas
        </button>
      </div>
    </div>
  );
}

function AnalyticsScreen({ showToast }: { showToast: (msg: string) => void }) {
  return (
    <div className="p-6 pt-12 animate-in fade-in duration-500">
      <h2 className="text-2xl font-bold text-[#0F172A] mb-6">
        Analisis Dampak
      </h2>

      {/* Comparison Banner */}
      <div
        onClick={() => showToast("Anda berada di top 20% nasional!")}
        className="bg-gradient-to-r from-[#10B981] to-[#064E3B] rounded-3xl p-5 text-white shadow-lg mb-8 relative overflow-hidden cursor-pointer hover:scale-[1.02] active:scale-95 transition-all"
      >
        <Leaf className="absolute -right-4 -top-4 w-24 h-24 text-white/10 rotate-12" />
        <h3 className="text-sm font-medium text-emerald-100 mb-1">
          Kerja Bagus, Alex!
        </h3>
        <p className="text-lg font-bold leading-tight w-4/5">
          Anda menghasilkan{" "}
          <span className="text-yellow-300">18% lebih sedikit karbon</span> dari
          rata-rata nasional.
        </p>
      </div>

      {/* Weekly Graph */}
      <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-[#0F172A]">Emisi Mingguan</h3>
          <span
            onClick={() => showToast("Ubah Satuan Emisi")}
            className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-lg font-medium cursor-pointer hover:bg-slate-200"
          >
            kg CO₂
          </span>
        </div>
        <div className="flex items-end justify-between h-40 gap-2">
          {[12, 15, 8, 18, 10, 22, 14].map((val, i) => (
            <div
              key={i}
              onClick={() =>
                showToast(
                  `Emisi hari ${["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"][i]}: ${val} kg CO₂`,
                )
              }
              className="flex flex-col items-center flex-1 gap-2 group cursor-pointer"
            >
              <div className="w-full relative bg-slate-100 rounded-t-md flex items-end justify-center rounded-b-sm overflow-hidden h-32">
                <div
                  className={`w-full rounded-t-md transition-all duration-700 ${val > 15 ? "bg-red-400 group-hover:bg-red-500" : val < 10 ? "bg-[#10B981] group-hover:bg-emerald-600" : "bg-[#064E3B] group-hover:bg-slate-800"}`}
                  style={{ height: `${(val / 25) * 100}%` }}
                ></div>
              </div>
              <span className="text-[10px] text-slate-400 font-medium uppercase group-hover:text-[#0F172A] transition-colors">
                {["S", "S", "R", "K", "J", "S", "M"][i]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Breakdown */}
      <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100 mb-6">
        <h3 className="font-bold text-[#0F172A] mb-4">Rincian Kategori</h3>
        <div className="flex items-center gap-6">
          <div
            onClick={() => showToast("Total Emisi Anda: 24 kg CO₂")}
            className="relative w-28 h-28 flex-shrink-0 cursor-pointer hover:scale-105 transition-transform"
          >
            <svg
              viewBox="0 0 36 36"
              className="w-full h-full transform -rotate-90"
            >
              <path
                strokeDasharray="40, 100"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#EF4444"
                strokeWidth="4"
              />
              <path
                strokeDasharray="30, 100"
                strokeDashoffset="-40"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#EAB308"
                strokeWidth="4"
              />
              <path
                strokeDasharray="20, 100"
                strokeDashoffset="-70"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#10B981"
                strokeWidth="4"
              />
              <path
                strokeDasharray="10, 100"
                strokeDashoffset="-90"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="4"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span className="text-xl font-bold text-[#0F172A]">24</span>
              <span className="text-[10px] text-slate-500">kg CO₂</span>
            </div>
          </div>

          <div className="flex-1 space-y-3">
            <LegendItem color="bg-red-500" label="Transportasi" val="40%" />
            <LegendItem color="bg-yellow-500" label="Energi" val="30%" />
            <LegendItem color="bg-[#10B981]" label="Makanan" val="20%" />
            <LegendItem color="bg-blue-500" label="Limbah" val="10%" />
          </div>
        </div>
      </div>

      {/* Trend */}
      <div
        onClick={() => showToast("Melihat riwayat tren perilaku Anda...")}
        className="bg-[#0F172A] rounded-3xl p-5 shadow-lg h-60 text-white cursor-pointer hover:bg-slate-800 active:scale-95 transition-all"
      >
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold">Tren Perilaku</h3>
          <ArrowUpRight className="text-[#10B981]" size={20} />
        </div>
        <p className="text-sm text-slate-400 mb-4">
          Kebiasaan ramah lingkungan Anda membaik 5% bulan ini.
        </p>

        <div className="h-16 w-full  flex items-end">
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 100 40"
          >
            <path
              d="M0 40 Q 20 20, 40 30 T 80 10 T 100 5 L 100 40 Z"
              fill="url(#gradient)"
              opacity="0.2"
            />
            <path
              d="M0 40 Q 20 20, 40 30 T 80 10 T 100 5"
              fill="none"
              stroke="#10B981"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function ChallengeScreen({ showToast }: { showToast: (msg: string) => void }) {
  return (
    <div className="p-6 pt-12 animate-in fade-in duration-500">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-2xl font-bold text-[#0F172A]">Tantangan Hijau</h2>
          <p className="text-slate-500 text-sm mt-1">
            Bangun kebiasaan, raih poin.
          </p>
        </div>
        <div
          onClick={() => showToast("Riwayat Poin Anda")}
          className="bg-[#10B981]/10 text-[#064E3B] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 cursor-pointer hover:bg-emerald-200 transition-colors"
        >
          <Trophy size={14} /> 450 pts
        </div>
      </div>

      <div className="space-y-4">
        {/* Challenge 1 */}
        <div
          onClick={() => showToast("Melanjutkan Tantangan: Sepeda ke Kampus")}
          className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100 relative overflow-hidden group cursor-pointer hover:border-[#10B981] active:scale-[0.98] transition-all"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
          <div className="flex justify-between items-start mb-3">
            <div className="flex gap-3">
              <div className="bg-emerald-100 text-[#064E3B] p-3 rounded-2xl group-hover:bg-[#10B981] group-hover:text-white transition-colors">
                <Bike size={24} />
              </div>
              <div>
                <h3 className="font-bold text-[#0F172A]">Sepeda ke Kampus</h3>
                <p className="text-xs text-slate-500">Selesai 3 / 5 hari</p>
              </div>
            </div>
            <span className="text-xs font-bold text-[#10B981] bg-emerald-50 px-2 py-1 rounded-lg">
              -4 kg CO₂
            </span>
          </div>

          <div className="mt-4">
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-[#10B981] w-[60%] rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Challenge 2 */}
        <div
          onClick={() => showToast("Melanjutkan Tantangan: Bebas Plastik")}
          className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100 relative overflow-hidden group cursor-pointer hover:border-blue-400 active:scale-[0.98] transition-all"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
          <div className="flex justify-between items-start mb-3">
            <div className="flex gap-3">
              <div className="bg-blue-100 text-blue-700 p-3 rounded-2xl group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <Trash2 size={24} />
              </div>
              <div>
                <h3 className="font-bold text-[#0F172A]">
                  Minggu Bebas Plastik
                </h3>
                <p className="text-xs text-slate-500">Selesai 1 / 7 hari</p>
              </div>
            </div>
            <span className="text-xs font-bold text-blue-500 bg-blue-50 px-2 py-1 rounded-lg">
              -2 kg CO₂
            </span>
          </div>

          <div className="mt-4">
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 w-[14%] rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Challenge 3 */}
        <div
          onClick={() => showToast("Mulai Tantangan: Hemat Energi")}
          className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100 relative overflow-hidden group cursor-pointer hover:border-yellow-400 active:scale-[0.98] transition-all"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
          <div className="flex justify-between items-start mb-3">
            <div className="flex gap-3">
              <div className="bg-yellow-100 text-yellow-700 p-3 rounded-2xl group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                <Zap size={24} />
              </div>
              <div>
                <h3 className="font-bold text-[#0F172A]">Hemat Energi</h3>
                <p className="text-xs text-slate-500">Selesai 0 / 3 hari</p>
              </div>
            </div>
            <span className="text-xs font-bold text-yellow-600 bg-yellow-50 px-2 py-1 rounded-lg">
              -5 kg CO₂
            </span>
          </div>

          <div className="mt-4">
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-yellow-500 w-[0%] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-[#0F172A] rounded-3xl p-5 text-white shadow-xl">
        <div className="flex items-center gap-2 mb-4">
          <Users size={18} className="text-[#10B981]" />
          <h3 className="font-bold">Peringkat Kampus</h3>
        </div>
        <div className="space-y-3">
          <LeaderboardRow
            rank={1}
            name="Sarah Jenkins"
            points={1240}
            isUser={false}
          />
          <LeaderboardRow
            rank={2}
            name="Alex (Anda)"
            points={450}
            isUser={true}
          />
          <LeaderboardRow
            rank={3}
            name="David Chen"
            points={410}
            isUser={false}
          />
        </div>
        <button
          onClick={() => showToast("Memuat peringkat lengkap...")}
          className="w-full mt-4 py-2 text-sm text-emerald-400 font-medium hover:text-emerald-300 transition-colors"
        >
          Lihat Peringkat Penuh
        </button>
      </div>
    </div>
  );
}

function CommunityScreen({ showToast }: { showToast: (msg: string) => void }) {
  return (
    <div className="animate-in fade-in duration-500 flex flex-col min-h-full">
      {/* Interactive Map Area (Peta Indonesia) */}
      <div className="h-64 bg-slate-800 relative w-full overflow-hidden rounded-b-[2.5rem] shadow-lg">
        {/* Background Grid */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(#10B981 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        ></div>

        {/* Stylized Indonesia Map SVG */}
        <svg
          viewBox="0 0 400 200"
          className="absolute inset-0 w-full h-full text-[#10B981] opacity-30"
        >
          {/* Sumatra */}
          <path
            d="M 40,60 L 70,30 L 110,70 L 140,120 L 110,130 L 70,100 Z"
            fill="currentColor"
          />
          {/* Java */}
          <path
            d="M 120,150 L 170,145 L 220,150 L 230,160 L 130,165 Z"
            fill="currentColor"
          />
          {/* Kalimantan */}
          <path
            d="M 140,70 L 180,50 L 220,70 L 210,110 L 160,110 Z"
            fill="currentColor"
          />
          {/* Sulawesi */}
          <path
            d="M 230,70 L 250,60 L 260,85 L 250,115 L 230,110 L 240,85 Z"
            fill="currentColor"
          />
          {/* Papua */}
          <path
            d="M 290,95 L 360,80 L 390,110 L 310,125 Z"
            fill="currentColor"
          />
          {/* Nusa Tenggara / Bali */}
          <path
            d="M 240,160 L 280,155 L 290,160 L 240,165 Z"
            fill="currentColor"
          />
        </svg>

        {/* Glowing Nodes for Indonesian Cities */}
        <div
          onClick={() => showToast("Jakarta/Bandung: 4.200 kg CO₂ dikurangi")}
          className="absolute top-[72%] left-[32%] w-4 h-4 bg-emerald-400 rounded-full shadow-[0_0_20px_#10B981] animate-pulse cursor-pointer hover:scale-150 transition-transform"
        ></div>
        <div
          onClick={() => showToast("Surabaya: 3.850 kg CO₂ dikurangi")}
          className="absolute top-[75%] left-[45%] w-3 h-3 bg-[#10B981] rounded-full shadow-[0_0_15px_#10B981] animate-pulse delay-150 cursor-pointer hover:scale-150 transition-transform"
        ></div>
        <div
          onClick={() => showToast("Medan: 2.100 kg CO₂ dikurangi")}
          className="absolute top-[30%] left-[15%] w-3 h-3 bg-[#10B981] rounded-full shadow-[0_0_15px_#10B981] animate-pulse delay-75 cursor-pointer hover:scale-150 transition-transform"
        ></div>
        <div
          onClick={() => showToast("Balikpapan: Peringatan Emisi Tinggi")}
          className="absolute top-[45%] left-[45%] w-2 h-2 bg-red-400 rounded-full shadow-[0_0_10px_red] cursor-pointer hover:scale-150 transition-transform"
        ></div>
        <div
          onClick={() => showToast("Makassar: 1.500 kg CO₂ dikurangi")}
          className="absolute top-[55%] left-[58%] w-3 h-3 bg-[#10B981] rounded-full shadow-[0_0_15px_#10B981] animate-pulse delay-200 cursor-pointer hover:scale-150 transition-transform"
        ></div>
        <div
          onClick={() => showToast("Jayapura: 900 kg CO₂ dikurangi")}
          className="absolute top-[52%] left-[85%] w-2 h-2 bg-[#10B981] rounded-full shadow-[0_0_10px_#10B981] animate-pulse delay-300 cursor-pointer hover:scale-150 transition-transform"
        ></div>

        <div className="absolute bottom-4 left-0 w-full px-6 flex justify-between items-end">
          <div
            onClick={() => showToast("Menganalisis dampak nasional...")}
            className="bg-slate-900/80 backdrop-blur-md p-3 rounded-2xl border border-white/10 text-white cursor-pointer hover:bg-slate-800 transition-colors"
          >
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">
              Dampak Langsung
            </p>
            <h3 className="text-xl font-bold flex items-center gap-2">
              12.450{" "}
              <span className="text-sm font-normal text-[#10B981]">kg CO₂</span>
            </h3>
            <p className="text-xs text-slate-300">
              Dikurangi secara nasional bulan ini
            </p>
          </div>
          <button
            onClick={() => showToast("Mencari komunitas terdekat...")}
            className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 text-white hover:bg-white/20 active:scale-95 transition-all"
          >
            <MapPin size={20} />
          </button>
        </div>
      </div>

      <div className="p-6 -mt-4 relative z-10">
        <h2 className="text-2xl font-bold text-[#0F172A] mb-2">
          Dampak Komunitas
        </h2>
        <p className="text-slate-500 text-sm mb-6">
          Lihat bagaimana universitas terkemuka memimpin perubahan.
        </p>

        <div className="space-y-4">
          {/* Rank 1 */}
          <div
            onClick={() => showToast("Melihat profil Komunitas UGM")}
            className="bg-white rounded-3xl p-4 shadow-sm border border-emerald-100 flex items-center gap-4 relative overflow-hidden cursor-pointer hover:shadow-md transition-all active:scale-[0.98]"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#10B981]"></div>
            <div className="font-black text-2xl text-slate-200 w-6 text-center">
              1
            </div>
            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-[#064E3B] font-bold text-lg">
              UGM
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-[#0F172A] text-sm">
                Komunitas Eco
              </h4>
              <p className="text-xs text-slate-500">4.200 kg CO₂ dikurangi</p>
            </div>
            <Trophy className="text-yellow-400" size={20} />
          </div>

          {/* Rank 2 */}
          <div
            onClick={() => showToast("Melihat profil Kampus Hijau ITB")}
            className="bg-white rounded-3xl p-4 shadow-sm border border-slate-100 flex items-center gap-4 cursor-pointer hover:border-slate-300 transition-all active:scale-[0.98]"
          >
            <div className="font-bold text-xl text-slate-300 w-6 text-center">
              2
            </div>
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-800 font-bold text-lg">
              ITB
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-[#0F172A] text-sm">Kampus Hijau</h4>
              <p className="text-xs text-slate-500">3.850 kg CO₂ dikurangi</p>
            </div>
          </div>

          {/* Rank 3 */}
          <div
            onClick={() => showToast("Melihat profil Klub Keberlanjutan UB")}
            className="bg-white rounded-3xl p-4 shadow-sm border border-slate-100 flex items-center gap-4 cursor-pointer hover:border-slate-300 transition-all active:scale-[0.98]"
          >
            <div className="font-bold text-xl text-slate-300 w-6 text-center">
              3
            </div>
            <div className="w-12 h-12 bg-yellow-50 rounded-2xl flex items-center justify-center text-yellow-800 font-bold text-lg">
              UB
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-[#0F172A] text-sm">
                Klub Keberlanjutan
              </h4>
              <p className="text-xs text-slate-500">2.900 kg CO₂ dikurangi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- SUB COMPONENTS ---

function NavItem({
  icon,
  label,
  isActive,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-16 transition-all duration-300 ${isActive ? "text-[#064E3B] -translate-y-1" : "text-slate-400 hover:text-slate-600"}`}
    >
      <div
        className={`relative p-2 rounded-xl transition-colors ${isActive ? "bg-emerald-50" : "bg-transparent"}`}
      >
        {icon}
        {isActive && (
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#10B981] rounded-full"></div>
        )}
      </div>
      <span
        className={`text-[10px] mt-1 font-medium ${isActive ? "opacity-100" : "opacity-0 h-0 overflow-hidden"}`}
      >
        {label}
      </span>
    </button>
  );
}

function SummaryCard({
  icon,
  title,
  value,
  unit,
  color,
  bg,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  value: number | string;
  unit: string;
  color: string;
  bg: string;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 cursor-pointer hover:shadow-md transition-shadow active:scale-95"
    >
      <div
        className={`${bg} ${color} w-8 h-8 rounded-full flex items-center justify-center mb-3`}
      >
        {icon}
      </div>
      <p className="text-xs text-slate-500 font-medium">{title}</p>
      <p className="text-lg font-bold text-[#0F172A] mt-1">
        {value}{" "}
        <span className="text-xs font-normal text-slate-400">{unit}</span>
      </p>
    </div>
  );
}

function ActivitySection({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
      <div className="flex items-center gap-2 mb-4 text-[#0F172A]">
        <div className="bg-slate-100 p-2 rounded-lg text-[#064E3B]">{icon}</div>
        <h3 className="font-bold">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function ChoiceButton({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex-shrink-0 flex flex-col items-center justify-center p-3 rounded-2xl border transition-all ${active ? "border-[#10B981] bg-emerald-50 text-[#064E3B] shadow-sm scale-105" : "border-slate-100 bg-white text-slate-500 hover:bg-slate-50 active:scale-95"}`}
    >
      <span className="mb-2 text-lg">{icon}</span>
      <span className="text-[10px] font-bold">{label}</span>
    </button>
  );
}

function LegendItem({
  color,
  label,
  val,
}: {
  color: string;
  label: string;
  val: string;
}) {
  return (
    <div className="flex items-center justify-between text-sm">
      <div className="flex items-center gap-2">
        <div className={`w-3 h-3 rounded-full ${color}`}></div>
        <span className="text-slate-600">{label}</span>
      </div>
      <span className="font-bold text-[#0F172A]">{val}</span>
    </div>
  );
}

function LeaderboardRow({
  rank,
  name,
  points,
  isUser,
}: {
  rank: number;
  name: string;
  points: number;
  isUser: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between p-3 rounded-2xl ${isUser ? "bg-[#10B981]/20 border border-[#10B981]/30" : "bg-white/5 border border-white/5"}`}
    >
      <div className="flex items-center gap-3">
        <span
          className={`font-bold w-4 text-center ${rank === 1 ? "text-yellow-400" : "text-slate-400"}`}
        >
          {rank}
        </span>
        <div className="w-8 h-8 bg-slate-700 rounded-full overflow-hidden">
          <img
            src={`https://i.pravatar.cc/150?u=${name}`}
            alt={name}
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        <span
          className={`text-sm ${isUser ? "font-bold text-white" : "text-slate-200"}`}
        >
          {name}
        </span>
      </div>
      <span className="text-sm font-bold text-[#10B981]">
        {points}{" "}
        <span className="text-[10px] font-normal text-slate-400">pts</span>
      </span>
    </div>
  );
}

// --- AI ASSISTANT MODAL ---
function AIAssistantModal({
  onClose,
  showToast,
}: {
  onClose: () => void;
  showToast: (msg: string) => void;
}) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "ai",
      text: "Halo Alex! Saya perhatikan konsumsi energi Anda turun 5% minggu ini. Kerja bagus! 🌍",
    },
    {
      id: 2,
      type: "user",
      text: "Terima kasih! Saya sudah mulai mematikan AC di malam hari.",
    },
    {
      id: 3,
      type: "ai",
      text: "Itu kebiasaan yang luar biasa. Tahukah Anda beralih ke makanan nabati dua kali seminggu dapat mengurangi emisi hingga 20%? Mau rekomendasi resep ramah lingkungan?",
      action: "Lihat Resep Eco",
    },
  ]);
  const [input, setInput] = useState("");
  const endOfMessagesRef = useRef<HTMLDivElement | null>(null);

  const handleSend = () => {
    if (!input.trim()) return;
    const newMsg = { id: Date.now(), type: "user", text: input };
    setMessages([...messages, newMsg]);
    setInput("");

    // Simulasi respons balasan AI
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          type: "ai",
          text: "Luar biasa! Setiap langkah kecil sangat berarti untuk bumi kita 🌱.",
        },
      ]);
    }, 1200);
  };

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="absolute inset-0 z-50 flex items-end justify-center sm:items-center sm:p-4 animate-in fade-in duration-300">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white w-full h-[80%] sm:h-auto sm:max-h-[80%] sm:rounded-[2rem] rounded-t-[2.5rem] shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-full duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#064E3B] to-[#10B981] p-6 text-white flex justify-between items-center shadow-md z-10">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-xl backdrop-blur-md">
              <Sparkles size={24} className="text-yellow-200" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">GreenSpark AI</h3>
              <p className="text-xs text-emerald-100">Kecerdasan Iklim</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-black/10 rounded-full hover:bg-black/20 active:scale-95 transition-all"
          >
            <X size={20} />
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#F8FAFC]">
          <div className="text-center text-xs text-slate-400 mb-6">
            Hari ini, 09:41
          </div>

          {messages.map((msg) =>
            msg.type === "ai" ? (
              <AIChatBubble
                key={msg.id}
                text={msg.text}
                action={msg.action}
                onActionClick={() => showToast(`Membuka: ${msg.action}`)}
              />
            ) : (
              <UserChatBubble key={msg.id} text={msg.text} />
            ),
          )}
          <div ref={endOfMessagesRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-slate-100">
          <div className="flex items-center gap-2 bg-slate-100 p-2 pl-4 rounded-full focus-within:ring-2 ring-emerald-200 transition-all">
            <input
              type="text"
              placeholder="Tanya tentang jejak karbonmu..."
              className="flex-1 bg-transparent text-sm outline-none text-slate-700"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-[#10B981] text-white p-2 rounded-full shadow-md hover:scale-105 active:scale-95 transition-transform"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AIChatBubble({
  text,
  action,
  onActionClick,
}: {
  text: string;
  action?: string;
  onActionClick: () => void;
}) {
  return (
    <div className="flex items-start gap-3 w-[90%] animate-in fade-in slide-in-from-left-4 duration-300">
      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#064E3B] to-[#10B981] flex-shrink-0 flex items-center justify-center text-white shadow-sm mt-1">
        <Sparkles size={14} />
      </div>
      <div>
        <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-tl-none shadow-sm text-sm text-slate-700 leading-relaxed">
          {text}
        </div>
        {action && (
          <button
            onClick={onActionClick}
            className="mt-2 text-xs font-bold text-[#10B981] bg-emerald-50 px-3 py-2 rounded-xl border border-emerald-100 hover:bg-emerald-100 active:scale-95 transition-all"
          >
            {action}
          </button>
        )}
      </div>
    </div>
  );
}

function UserChatBubble({ text }: { text: string }) {
  return (
    <div className="flex justify-end w-full animate-in fade-in slide-in-from-right-4 duration-300">
      <div className="bg-[#0F172A] text-white p-4 rounded-2xl rounded-tr-none shadow-sm text-sm w-[85%] leading-relaxed">
        {text}
      </div>
    </div>
  );
}
