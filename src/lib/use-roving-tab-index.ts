import { useRef, type KeyboardEvent } from "react";

export function useRovingTabIndex<T extends string>(
  ids: readonly T[],
  activeId: T,
  onActivate: (id: T) => void,
  orientation: "horizontal" | "vertical" = "vertical"
) {
  const refs = useRef<Partial<Record<T, HTMLButtonElement | null>>>({});

  function registerRef(id: T) {
    return (el: HTMLButtonElement | null) => {
      refs.current[id] = el;
    };
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    const currentIndex = ids.indexOf(activeId);
    const nextKey = orientation === "vertical" ? "ArrowDown" : "ArrowRight";
    const prevKey = orientation === "vertical" ? "ArrowUp" : "ArrowLeft";

    let nextIndex: number | null = null;

    if (event.key === nextKey) {
      nextIndex = (currentIndex + 1) % ids.length;
    } else if (event.key === prevKey) {
      nextIndex = (currentIndex - 1 + ids.length) % ids.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = ids.length - 1;
    }

    if (nextIndex !== null) {
      event.preventDefault();
      const nextId = ids[nextIndex];
      onActivate(nextId);
      refs.current[nextId]?.focus();
    }
  }

  return { registerRef, handleKeyDown };
}
