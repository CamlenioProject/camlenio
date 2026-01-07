"use client";

import Image from "next/image";

const MLMServices = () => {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8 py-10">
        <Image
          src="/ServiceDropdown/mlmsoftware/mlm-second.png"
          alt="Most Trusted MLM Software Development Company"
          width={2000}
          height={3000}
          priority
          className="w-full h-auto rounded-2xl object-contain"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 85rem"
        />
      </div>
    </section>
  );
};

export default MLMServices;
