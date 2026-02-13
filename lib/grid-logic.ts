export interface Cell {
    value: number;
    locked: boolean;
}

export type GridType = Cell[][];

export interface LogEntry {
    id: number;
    message: string;
    type: "info" | "ripple" | "lock";
}

export const GRID_SIZE = 3;
export const LOCK_THRESHOLD = 15;

export const checkLockState = (cell: Cell): Cell => {
    if (cell.value >= LOCK_THRESHOLD) {
        return { ...cell, locked: true };
    }
    return cell;
};

export const applyRippleRules = (grid: GridType, rowIndex: number, colIndex: number): GridType => {
    const newGrid = grid.map((row) => row.map((cell) => ({ ...cell })));
    const cell = newGrid[rowIndex][colIndex];
    const value = cell.value;

    if (value === 0) return newGrid;

    // Rule 1: Divisible by 3 -> Right neighbor -1
    if (value % 3 === 0) {
        const rightCol = colIndex + 1;
        if (rightCol < GRID_SIZE) {
            const rightCell = newGrid[rowIndex][rightCol];
            if (!rightCell.locked) {
                rightCell.value -= 1;
                newGrid[rowIndex][rightCol] = checkLockState(rightCell);
            }
        }
    }

    // Rule 2: Divisible by 5 -> Bottom neighbor +2
    if (value % 5 === 0) {
        const bottomRow = rowIndex + 1;
        if (bottomRow < GRID_SIZE) {
            const bottomCell = newGrid[bottomRow][colIndex];
            if (!bottomCell.locked) {
                bottomCell.value += 2;
                newGrid[bottomRow][colIndex] = checkLockState(bottomCell);
            }
        }
    }

    return newGrid;
};
