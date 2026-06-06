"use client";

import { IndustryGroup } from "./IndustryGroup";

export const FintechDropdown = ({ item, baseHref }: { item: any; baseHref: string }) => {
  const row1 = [item.items[0], item.items[1], item.items[3]].filter(Boolean);
  const row2 = [item.items[2], item.items[4], item.items[5]].filter(Boolean);
  return (
    <div className="flex w-[95vw] max-w-[1240px] bg-orange-50/95 backdrop-blur-2xl rounded-b-3xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(249,115,22,0.15),0_0_0_1px_rgba(249,115,22,0.1)] p-8 mx-auto border border-orange-100/50 ring-1 ring-orange-100/50">
      <div className="flex flex-col gap-8 w-full">
        <div className="grid grid-cols-3 gap-x-8">
          {row1.map((group: any, idx: number) => (
            <IndustryGroup key={idx} group={group} baseHref={baseHref} />
          ))}
        </div>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-orange-200/60 to-transparent" />
        <div className="grid grid-cols-3 gap-x-8">
          {row2.map((group: any, idx: number) => (
            <IndustryGroup key={idx} group={group} baseHref={baseHref} />
          ))}
        </div>
      </div>
    </div>
  );
};
