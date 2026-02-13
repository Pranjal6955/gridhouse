import { Cell as CellType, GridType } from "@/lib/grid-logic";

interface GridBoardProps {
    grid: GridType;
    onCellClick: (row: number, col: number) => void;
    onReset: () => void;
}

export default function GridBoard({ grid, onCellClick, onReset }: GridBoardProps) {
    return (
        <div className="flex flex-col items-center justify-center gap-12">
            <div className="flex flex-col items-center gap-2">
                <img src="/gridhouse.png" alt="Gridhouse Logo" className="w-20 h-20 sm:w-24 sm:h-24 object-contain" />
                <h1 className="text-5xl font-black uppercase tracking-widest italic text-black dark:text-white">Gridhouse</h1>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {grid.map((row, rowIndex) =>
                    row.map((cell, colIndex) => (
                        <Cell
                            key={`${rowIndex}-${colIndex}`}
                            cell={cell}
                            onClick={() => onCellClick(rowIndex, colIndex)}
                        />
                    ))
                )}
            </div>

            <button
                onClick={onReset}
                className="group relative flex items-center gap-2 overflow-hidden rounded-[4px] border-2 border-gray-400 bg-white px-8 py-3 font-black uppercase tracking-tighter text-black shadow-[4px_4px_0px_#9ca3af] transition-all hover:bg-gray-100 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
                Reset Grid
            </button>
        </div>
    );
}

function Cell({ cell, onClick }: { cell: CellType; onClick: () => void }) {
    return (
        <div
            onClick={onClick}
            className={`flex aspect-square w-24 sm:w-32 items-center justify-center rounded-[4px] border-2 border-black text-2xl sm:text-3xl font-bold transition-all shadow-[4px_4px_0px_black] ${cell.locked || cell.value >= 15
                ? "cursor-not-allowed bg-red-600 text-white"
                : `cursor-pointer active:translate-x-[1px] active:translate-y-[1px] active:shadow-none ${cell.value % 2 === 0
                    ? "bg-[#e0e0e0] text-black"
                    : "bg-[#1a237e] text-white"
                }`
                }`}
        >
            {cell.value}
        </div>
    );
}
