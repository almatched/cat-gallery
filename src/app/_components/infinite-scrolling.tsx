"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function InfiniteScrolling() {
  const { ref, inView } = useInView();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    if (inView) {
      const currentPage = Number(searchParams.get("page"));
      const nextPage = currentPage + 1;

      const params = new URLSearchParams(searchParams);
      params.set("page", nextPage.toString());
      replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
  }, [inView]);

  useEffect(() => {
    const currentPage = 1;

    const params = new URLSearchParams(searchParams);
    params.set("page", currentPage.toString());
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, []);

  return <div ref={ref}></div>;
}
