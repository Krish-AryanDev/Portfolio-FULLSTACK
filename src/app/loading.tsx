export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0d0d0d]">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-2 border-[#222]" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#e6a817] animate-spin" />
        </div>
        <div className="flex items-center gap-1">
          <span className="text-xl font-bold text-white">Krish</span>
          <span className="text-xl font-bold text-[#e6a817]">.</span>
        </div>
      </div>
    </div>
  );
}
