import { motion } from 'framer-motion';

const barHeights = [45, 68, 52, 85, 62, 78, 92];

export default function DashboardMockup() {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      className="w-full max-w-md sm:max-w-lg mx-auto"
    >
      {/* Glow wrapper */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-cyan-500/30 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

        {/* Main card */}
        <div className="relative bg-[#0d1b35] border border-[#263449] rounded-2xl shadow-2xl shadow-blue-950/60 overflow-hidden backdrop-blur-sm">
          {/* Header bar */}
          <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-[#111827] border-b border-[#263449]">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400/80" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400/80" />
            </div>
            <span className="text-[10px] sm:text-xs text-[#94A3B8] font-mono tracking-widest truncate px-2">
              kriyova.cloud/metrics
            </span>
            <div className="flex items-center gap-1 shrink-0">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[10px] sm:text-xs text-cyan-400 font-mono font-semibold">ACTIVE</span>
            </div>
          </div>

          <div className="p-3.5 sm:p-5 space-y-3.5 sm:space-y-4">
            {/* Stat boxes */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { label: 'Uptime', value: '99.9%', color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
                { label: 'Response', value: '<32ms', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
                { label: 'Test Suite', value: '100%', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
              ].map((stat) => (
                <div key={stat.label} className={`${stat.bg} border ${stat.border} rounded-lg p-2 sm:p-3 text-center`}>
                  <div className={`text-base sm:text-xl font-bold font-mono ${stat.color}`}>{stat.value}</div>
                  <div className="text-[9px] sm:text-[10px] text-[#94A3B8] uppercase tracking-wider mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Bar chart */}
            <div className="bg-[#111827] border border-[#263449] rounded-xl p-3">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[10px] sm:text-xs font-semibold text-[#94A3B8] uppercase tracking-wider">
                  Throughput & Delivery
                </span>
                <span className="text-[10px] sm:text-xs text-cyan-400 font-mono font-medium">99.8% Healthy</span>
              </div>
              <div className="flex items-end gap-1.5 sm:gap-2.5 h-14 sm:h-16 pt-2">
                {barHeights.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: i * 0.08, duration: 0.6, ease: 'easeOut' }}
                    className="flex-1 rounded-t"
                    style={{
                      background: i === 6 ? 'linear-gradient(to top, #2563EB, #06B6D4)' : '#1e3a5f',
                    }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-1.5">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                  <span key={i} className="flex-1 text-center text-[9px] text-[#64748B] font-mono">{d}</span>
                ))}
              </div>
            </div>

            {/* Code snippet */}
            <div className="bg-[#0B1220] border border-[#263449] rounded-xl p-3 font-mono text-[11px] sm:text-xs overflow-x-auto">
              <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-[#1e293b]">
                <span className="text-[#94A3B8] text-[10px]">server.config.js</span>
                <span className="text-[9px] text-cyan-400/80 bg-cyan-950/40 px-1.5 py-0.5 rounded border border-cyan-800/40 ml-auto">
                  ESM
                </span>
              </div>
              <div className="space-y-1 leading-relaxed whitespace-nowrap">
                <div><span className="text-purple-400">const</span> <span className="text-cyan-300">kriyova</span> <span className="text-white">=</span> <span className="text-yellow-300">initEngine</span><span className="text-white">({'{'}</span></div>
                <div className="pl-3 sm:pl-4"><span className="text-blue-300">mode</span><span className="text-white">:</span> <span className="text-emerald-400">'production'</span><span className="text-white">,</span></div>
                <div className="pl-3 sm:pl-4"><span className="text-blue-300">security</span><span className="text-white">:</span> <span className="text-cyan-300">['helmet', 'rateLimit']</span></div>
                <div><span className="text-white">{'}'});</span></div>
              </div>
            </div>

            {/* Status row */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] sm:text-xs text-emerald-400 font-medium">All APIs Operational</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-mono">
                <span>Cluster #01</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
