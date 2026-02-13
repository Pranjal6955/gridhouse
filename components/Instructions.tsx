export default function Instructions() {
    return (
        <div className="flex w-full items-center justify-center lg:justify-end lg:pr-12">
            <div className="w-full max-w-md rounded-[4px] border-2 border-black bg-white p-8 shadow-[-8px_8px_0px_black] dark:bg-zinc-900 dark:text-white">
                <h1 className="mb-6 text-3xl font-black uppercase tracking-tighter">Instructions</h1>

                <div className="space-y-4 text-sm sm:text-base">
                    <section>
                        <h2 className="font-bold underline mb-1 uppercase">1. Interaction</h2>
                        <p className="text-zinc-600 dark:text-zinc-400">Click a box to increase its value by <span className="font-bold text-black dark:text-white">1</span>.</p>
                    </section>

                    <section>
                        <h2 className="font-bold underline mb-1 uppercase">2. Right Ripple (÷3)</h2>
                        <p className="text-zinc-600 dark:text-zinc-400">If a new value is divisible by 3, the neighbor to the <span className="font-bold text-black dark:text-white">right</span> loses 1 point.</p>
                    </section>

                    <section>
                        <h2 className="font-bold underline mb-1 uppercase">3. Down Ripple (÷5)</h2>
                        <p className="text-zinc-600 dark:text-zinc-400">If a new value is divisible by 5, the neighbor <span className="font-bold text-black dark:text-white">below</span> gains 2 points.</p>
                    </section>

                    <section>
                        <h2 className="font-bold underline mb-1 uppercase">4. Locking</h2>
                        <p className="text-zinc-600 dark:text-zinc-400">Values ≥ <span className="font-bold text-red-600">15</span> lock the box. It turns red and becomes immune to all rules.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
