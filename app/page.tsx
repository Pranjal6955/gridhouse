"use client";

import { useState } from "react";
import {
  GRID_SIZE,
  GridType,
  LogEntry,
  checkLockState,
  applyRippleRules
} from "@/lib/grid-logic";
import Instructions from "@/components/Instructions";
import GridBoard from "@/components/GridBoard";
import SystemLog from "@/components/SystemLog";
import DotBackground from "@/components/DotBackground";

export default function Home() {
  const [grid, setGrid] = useState<GridType>(
    Array(GRID_SIZE).fill(null).map(() =>
      Array(GRID_SIZE).fill(null).map(() => ({ value: 0, locked: false }))
    )
  );

  const [logs, setLogs] = useState<LogEntry[]>([]);

  const addLog = (message: string, type: LogEntry["type"]) => {
    const newEntry: LogEntry = {
      id: Date.now() + Math.random(),
      message,
      type,
    };
    setLogs(prev => [newEntry, ...prev]);
  };

  const onCellClick = (rowIndex: number, colIndex: number) => {
    const targetCell = grid[rowIndex][colIndex];
    if (targetCell.locked) {
      addLog(`ACCESS DENIED: [${rowIndex}, ${colIndex}] is LOCKED`, "lock");
      return;
    }

    setGrid((prevGrid) => {
      // 1. Initial Increment
      let updatedGrid = prevGrid.map((row) => row.map((cell) => ({ ...cell })));
      updatedGrid[rowIndex][colIndex].value += 1;

      const wasLocked = updatedGrid[rowIndex][colIndex].locked;
      updatedGrid[rowIndex][colIndex] = checkLockState(updatedGrid[rowIndex][colIndex]);

      addLog(`Inc: [${rowIndex}, ${colIndex}] -> ${updatedGrid[rowIndex][colIndex].value}`, "info");

      if (!wasLocked && updatedGrid[rowIndex][colIndex].locked) {
        addLog(`LOCK: [${rowIndex}, ${colIndex}] SECURED`, "lock");
      }

      // 2. Ripple Detection for Logging
      const val = updatedGrid[rowIndex][colIndex].value;
      if (val !== 0) {
        if (val % 3 === 0 && colIndex < GRID_SIZE - 1) {
          if (!updatedGrid[rowIndex][colIndex + 1].locked) {
            addLog(`Ripple: [${rowIndex}, ${colIndex + 1}] decreased`, "ripple");
          }
        }
        if (val % 5 === 0 && rowIndex < GRID_SIZE - 1) {
          if (!updatedGrid[rowIndex + 1][colIndex].locked) {
            addLog(`Ripple: [${rowIndex + 1}, ${colIndex}] increased`, "ripple");
          }
        }
      }

      // 3. Final Update
      return applyRippleRules(updatedGrid, rowIndex, colIndex);
    });
  };

  const resetGame = () => {
    setGrid(
      Array(GRID_SIZE).fill(null).map(() =>
        Array(GRID_SIZE).fill(null).map(() => ({ value: 0, locked: false }))
      )
    );
    setLogs([]);
    addLog("SYSTEM RESET: Grid cleared", "info");
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center gap-12 p-8 lg:grid lg:grid-cols-3 lg:gap-0">
      <DotBackground />
      <Instructions />

      <GridBoard
        grid={grid}
        onCellClick={onCellClick}
        onReset={resetGame}
      />

      <SystemLog logs={logs} />
    </main>
  );
}
