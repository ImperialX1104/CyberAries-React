import { useEffect, useState } from "react";

const useStickyHeader = (offset = 80) => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setSticky(window.scrollY > offset);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return isSticky;
};

export default useStickyHeader;
