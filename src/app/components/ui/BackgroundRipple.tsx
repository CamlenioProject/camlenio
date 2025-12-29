"use client";

import React, { useMemo, useRef, useState } from "react";
import { cn } from "../../../../lib/utils";

interface BackgroundRippleEffectProps {
  rows?: number;
  cols?: number;
  cellSize?: number;
  className?: string;
  children?: React.ReactNode;
  containerClassName?: string;
}

const BackgroundRipple = ({
  rows = 8,
  cols = 24,
  cellSize = 56,
  className,
  children,
  containerClassName,
}: BackgroundRippleEffectProps): React.JSX.Element => {
  const [clickedCell, setClickedCell] = useState<{
    row: number;
    col: number;
  } | null>(null);

  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <div className={cn("relative", containerClassName)}>
      <div
        ref={ref}
        className={cn(
          "absolute inset-0 z-0 pointer-events-none overflow-hidden",
          className
        )}
      >
        <DivGrid
          rows={rows}
          cols={cols}
          cellSize={cellSize}
          borderColor="rgba(203,213,225,0.25)"
          fillColor="rgba(249,115,22,0.06)"
          clickedCell={clickedCell}
          interactive={false}
          onCellClick={(row, col) => setClickedCell({ row, col })}
        />
      </div>
      {children}
    </div>
  );
};

interface DivGridProps {
  rows: number;
  cols: number;
  cellSize: number;
  borderColor: string;
  fillColor: string;
  clickedCell: { row: number; col: number } | null;
  onCellClick?: (row: number, col: number) => void;
  interactive?: boolean;
}

type CellStyle = React.CSSProperties & {
  ["--delay"]?: string;
  ["--duration"]?: string;
};

const DivGrid = ({
  rows,
  cols,
  cellSize,
  borderColor,
  fillColor,
  clickedCell,
  onCellClick,
  interactive = false,
}: DivGridProps): React.JSX.Element => {
  const cells = useMemo(
    () => Array.from({ length: rows * cols }, (_, idx) => idx),
    [rows, cols]
  );

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
    gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
    justifyContent: "center",
  };

  return (
    <div className="relative h-full w-full flex items-center justify-center">
      <div className="relative opacity-30" style={gridStyle}>
        {cells.map((idx) => {
          const rowIdx = Math.floor(idx / cols);
          const colIdx = idx % cols;

          const distance = clickedCell
            ? Math.hypot(clickedCell.row - rowIdx, clickedCell.col - colIdx)
            : 0;

          const style: CellStyle = clickedCell
            ? {
                "--delay": `${distance * 55}ms`,
                "--duration": `${200 + distance * 80}ms`,
              }
            : {};

          return (
            <div
              key={idx}
              className={cn(
                "border-[0.5px] transition-opacity duration-200",
                interactive && "cursor-pointer"
              )}
              style={{
                backgroundColor: fillColor,
                borderColor,
                ...style,
              }}
              onClick={
                interactive && onCellClick
                  ? () => onCellClick(rowIdx, colIdx)
                  : undefined
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default BackgroundRipple;
