const testimonials = [
  { quote: "Ordering between classes is finally effortless. The food arrives right at the department steps.", who: "Hostel Resident · 3rd Year" },
  { quote: "No more waiting in long queues at the canteen. Zappit saves 25 minutes every lunch break.", who: "CS Undergrad" },
  { quote: "Super clean UI and instant UPI payments. Exactly what a campus food delivery app should feel like.", who: "Campus Ambassador" },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl mx-auto text-center mb-10 md:mb-14">
          <span className="text-xs font-bold text-orange uppercase tracking-wider">Student Reviews</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mt-2 text-white">
            Loved by students<br />
            <span className="text-gradient-amber">across the campus.</span>
          </h2>
        </div>

        {/* Horizontal scroll on mobile, 3-col grid on md+ */}
        <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-5 overflow-x-auto no-scrollbar pb-4 pt-1 md:overflow-visible">
          {testimonials.map((t) => (
            <div
              key={t.who}
              className="flex-none w-[300px] md:w-auto bg-gradient-to-br from-bg3 to-bg2 border border-line rounded-2xl p-6 hover:border-orange/40 hover:shadow-card transition-all"
            >
              <div className="flex items-center gap-0.5 text-orange text-sm mb-3">
                {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
              </div>
              <p className="text-[15px] text-ink-1 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-4 text-xs font-semibold text-ink-2">— {t.who}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
