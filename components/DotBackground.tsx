export default function DotBackground() {
    return (
        <div className="fixed inset-0 -z-10 h-full w-full bg-zinc-50 dark:bg-zinc-950">
            <div
                className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:20px_20px]"
                style={{ maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, #000 70%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, #000 70%, transparent 100%)' }}
            />
        </div>
    );
}
