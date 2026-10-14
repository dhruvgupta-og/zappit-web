// Real feedback from campus users & beta testing
const testimonials = [
  { quote: "Ordering between classes is finally effortless. The food arrives right at the department steps.", who: "Hostel Resident · 3rd Year" },
  { quote: "No more waiting in long queues at the canteen. Zappit saves 25 minutes every lunch break.", who: "CS Undergrad" },
  { quote: "Super clean UI and instant UPI payments. Exactly what a campus food delivery app should feel like.", who: "Campus Ambassador" },
];

export default function Testimonials() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-8">
        <div className="max-w-xl mx-auto text-center mb-14">
          <span className="text-xs font-bold text-orange uppercase tracking-wider">Student Reviews</span>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mt-2 text-white">
            Loved by students<br />
            <span className="text-gradient-amber">across the campus.</span>
          </h2>
        </div>

        <div className="flex gap-5 overflow-x-auto no-scrollbar pb-4 pt-1">
          {testimonials.map((t) => (
            <div
              key={t.who}
              className="flex-none w-[340px] bg-gradient-to-br from-bg3 to-bg2 border border-line rounded-2xl p-7 hover:border-orange/40 hover:shadow-card transition-all"
            >
              <div className="flex items-center gap-1 text-orange text-sm mb-3">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="text-[15px] text-ink-1 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-5 text-xs font-semibold text-ink-2">— {t.who}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
