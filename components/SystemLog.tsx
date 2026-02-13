import { LogEntry } from "@/lib/grid-logic";

interface SystemLogProps {
    logs: LogEntry[];
}

export default function SystemLog({ logs }: SystemLogProps) {
    return (
        <div className="flex w-full items-center justify-center lg:justify-start lg:pl-12">
            <div className="w-full max-w-md rounded-[4px] border-2 border-black bg-white p-8 shadow-[6px_6px_0px_black] dark:bg-zinc-900 dark:text-white">
                <div className="flex items-center gap-2 mb-6">
                    <div className="h-3 w-3 animate-pulse rounded-full bg-green-500"></div>
                    <h2 className="text-2xl font-bold uppercase tracking-tight">System Log</h2>
                </div>

                <div className="h-[350px] overflow-y-auto pr-2 space-y-3 font-mono text-xs uppercase scrollbar-hide">
                    {logs.length === 0 ? (
                        <div className="text-zinc-400 italic text-sm">No activity detected... waiting for input</div>
                    ) : (
                        logs.map((log) => (
                            <div
                                key={log.id}
                                className={`flex flex-col border-b-2 border-zinc-100 dark:border-zinc-800 pb-2 last:border-0 ${log.type === 'lock' ? 'text-red-600 font-bold' :
                                        log.type === 'ripple' ? 'text-blue-600 dark:text-blue-400' :
                                            'text-zinc-600 dark:text-zinc-400'
                                    }`}
                            >
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-[10px] font-bold opacity-50 uppercase tracking-widest">{log.type}</span>
                                </div>
                                <p className="mt-1 leading-tight text-sm">{log.message}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
