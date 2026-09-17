import { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorState, setCursorState] = useState<'default' | 'hover' | 'view'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const posRef = useRef({ x: -100, y: -100, targetX: -100, targetY: -100 });

  useEffect(() => {
    // Only enable if pointer is fine and hover is supported
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFinePointer || prefersReducedMotion) {
      return;
    }

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      posRef.current.targetX = e.clientX;
      posRef.current.targetY = e.clientY;

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const viewTarget = target.closest('[data-cursor-view]');
      const hoverTarget = target.closest('a, button, [data-hoverable], input, textarea');

      if (viewTarget) {
        setCursorState('view');
      } else if (hoverTarget) {
        setCursorState('hover');
      } else {
        setCursorState('default');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    let animationFrameId: number;
    const render = () => {
      const { targetX, targetY } = posRef.current;
      posRef.current.x += (targetX - posRef.current.x) * 0.22;
      posRef.current.y += (targetY - posRef.current.y) * 0.22;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isVisible) return null;

  const isView = cursorState === 'view';
  const isHover = cursorState === 'hover';

  return (
    <div
      ref={cursorRef}
      id="custom-cursor"
      className={`fixed top-0 left-0 pointer-events-none z-[99999] rounded-full flex items-center justify-center transition-[width,height,background-color,border-color] duration-200 ease-out will-change-transform ${
        isView
          ? 'w-24 h-24 bg-[var(--accent-red)] text-white shadow-xl'
          : isHover
          ? 'w-14 h-14 bg-transparent border-2 border-[var(--text-primary)]'
          : 'w-3.5 h-3.5 bg-[var(--text-primary)]'
      }`}
    >
      {isView && (
        <span className="font-display text-xs tracking-widest font-bold text-white uppercase select-none animate-fadeIn">
          VIEW
        </span>
      )}
    </div>
  );
}
