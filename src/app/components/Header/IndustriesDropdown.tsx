"use client";

import React from "react";
import { IndustryGroup } from "./IndustryGroup";

export const IndustriesDropdown = ({ item, baseHref }: { item: any, baseHref: string }) => {
  const groups = (item.items || []).filter(Boolean);

  return (
    <div className="flex w-[95vw] max-w-[1240px] bg-orange-50/95 backdrop-blur-2xl rounded-b-3xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(249,115,22,0.15),0_0_0_1px_rgba(249,115,22,0.1)] p-8 mx-auto border border-orange-100/50 ring-1 ring-orange-100/50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 w-full">
        {groups.map((group: any, idx: number) => (
          <IndustryGroup key={idx} group={group} hideHeader={item.title === "Hire Talent"} baseHref={baseHref} />
        ))}
      </div>
    </div>
  );
};
