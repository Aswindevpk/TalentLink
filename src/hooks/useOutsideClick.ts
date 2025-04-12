// hooks/useOutsideClick.ts
import { useEffect } from "react";

function useOutsideClick(
  callback: () => void,
  refs: React.RefObject<HTMLElement | null>[]
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const isClickInside = refs.some(
        (ref) => ref.current && ref.current.contains(event.target as Node)
      );

      if (!isClickInside) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refs, callback]);
}

export default useOutsideClick;
