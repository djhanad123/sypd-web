"use client";

import React, { useState, useEffect, useRef, HTMLAttributes } from 'react';

// A simple utility for conditional class names
const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ');
};

// Define the type for a single gallery item
export interface GalleryItem {
  common: string;
  binomial?: string;
  photo: {
    url: string; 
    text?: string;
    pos?: string;
    by?: string;
  };
}

// Define the props for the CircularGallery component
export interface CircularGalleryProps extends HTMLAttributes<HTMLDivElement> {
  items: GalleryItem[];
  /** Controls how far the items are from the center. Auto-calculated if not provided. */
  radius?: number;
  /** Controls the speed of continuous auto-rotation. Pauses whenever mouse is hovered. */
  autoRotateSpeed?: number;
  /** Optional custom card width. Responsive default if omitted. */
  cardWidth?: number;
  /** Optional custom card height. Responsive default if omitted. */
  cardHeight?: number;
  /** Whether to show a minimal single-line caption at the bottom (default true) */
  showCaption?: boolean;
  /** Optional click callback for gallery items */
  onItemClick?: (item: GalleryItem, index: number) => void;
}

const CircularGallery = React.forwardRef<HTMLDivElement, CircularGalleryProps>(
  (
    {
      items,
      className,
      radius,
      autoRotateSpeed = 0.3,
      cardWidth,
      cardHeight,
      showCaption = true,
      onItemClick,
      ...props
    },
    forwardedRef
  ) => {
    const internalRef = useRef<HTMLDivElement | null>(null);
    const containerRef = (forwardedRef as React.RefObject<HTMLDivElement>) || internalRef;

    const [rotation, setRotation] = useState(0);
    const [containerWidth, setContainerWidth] = useState<number>(1000);
    const [isScrolling, setIsScrolling] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const hasMovedRef = useRef<boolean>(false);
    const startXRef = useRef<number>(0);
    const startRotationRef = useRef<number>(0);
    const isHoveredRef = useRef<boolean>(false);
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const animationFrameRef = useRef<number | null>(null);

    // Responsive container sizing
    useEffect(() => {
      const updateSize = () => {
        if (containerRef.current) {
          setContainerWidth(containerRef.current.clientWidth);
        }
      };
      updateSize();
      window.addEventListener('resize', updateSize);
      return () => window.removeEventListener('resize', updateSize);
    }, [containerRef]);

    // Responsive dimensions
    const isMobile = containerWidth < 640;
    const isTablet = containerWidth < 1024 && containerWidth >= 640;
    const scaleFactor = isMobile ? 0.78 : isTablet ? 0.9 : 1.0;

    const baseWidth = cardWidth ?? 230;
    const baseHeight = cardHeight ?? 310;
    const baseRadius = radius ?? 340;

    const effectiveCardWidth = Math.round(baseWidth * scaleFactor);
    const effectiveCardHeight = Math.round(baseHeight * scaleFactor);
    const effectiveRadius = Math.round(baseRadius * scaleFactor);

    // Effect to handle scroll-based rotation
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolling(true);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }

        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
        const scrollRotation = scrollProgress * 360;
        setRotation(scrollRotation);

        scrollTimeoutRef.current = setTimeout(() => {
          setIsScrolling(false);
        }, 150);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScroll);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
      };
    }, []);

    // Animation loop: continuous auto-scroll; PAUSES immediately whenever the mouse is hovered
    useEffect(() => {
      const animate = () => {
        if (!isHoveredRef.current && !isScrolling && !isDragging) {
          setRotation((prev) => prev + autoRotateSpeed);
        }
        animationFrameRef.current = requestAnimationFrame(animate);
      };

      animationFrameRef.current = requestAnimationFrame(animate);

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }, [isScrolling, isDragging, autoRotateSpeed]);

    // Mouse hover pause handlers
    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      setIsHovered(false);
    };

    // Touch & pointer drag support for manual nudging
    const handlePointerDown = (e: React.PointerEvent) => {
      setIsDragging(true);
      hasMovedRef.current = false;
      startXRef.current = e.clientX;
      startRotationRef.current = rotation;
    };

    const handlePointerMove = (e: React.PointerEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - startXRef.current;
      if (Math.abs(deltaX) > 4) {
        hasMovedRef.current = true;
      }
      setRotation(startRotationRef.current + deltaX * 0.35);
    };

    const handlePointerUp = () => {
      setIsDragging(false);
    };

    const anglePerItem = items.length > 0 ? 360 / items.length : 0;
    
    return (
      <div
        ref={containerRef}
        role="region"
        aria-label="Circular 3D Gallery"
        className={cn(
          "relative w-full h-full flex items-center justify-center select-none overflow-hidden cursor-grab active:cursor-grabbing",
          className
        )}
        style={{ perspective: '2200px' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        {...props}
      >
        {/* 3D Rotating Cylinder Stage */}
        <div
          className="relative w-full h-full"
          style={{
            transform: `rotateY(${rotation}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem;
            const totalRotation = rotation % 360;
            const relativeAngle = (itemAngle + totalRotation + 360) % 360;
            const normalizedAngle = Math.abs(relativeAngle > 180 ? 360 - relativeAngle : relativeAngle);
            const opacity = Math.max(0.3, 1 - (normalizedAngle / 170));

            return (
              <div
                key={`${item.photo.url}-${i}`} 
                role="group"
                aria-label={item.common || `Slide ${i + 1}`}
                className="absolute"
                style={{
                  width: `${effectiveCardWidth}px`,
                  height: `${effectiveCardHeight}px`,
                  transform: `rotateY(${itemAngle}deg) translateZ(${effectiveRadius}px)`,
                  left: '50%',
                  top: '50%',
                  marginLeft: `-${effectiveCardWidth / 2}px`,
                  marginTop: `-${effectiveCardHeight / 2}px`,
                  opacity: opacity,
                  transition: isDragging ? 'none' : 'opacity 0.25s linear',
                }}
                onClick={(e) => {
                  if (hasMovedRef.current) return;
                  if (onItemClick) {
                    e.stopPropagation();
                    onItemClick(item, i);
                  }
                }}
              >
                <div
                  className={cn(
                    "relative w-full h-full rounded-2xl shadow-2xl overflow-hidden group border border-white/20 bg-slate-900/60 backdrop-blur-md transition-all duration-300",
                    onItemClick && "cursor-pointer hover:border-white/70 hover:shadow-[0_20px_50px_rgba(0,163,224,0.35)] hover:scale-102"
                  )}
                >
                  {/* Clean, Full-Coverage Image */}
                  <img
                    src={item.photo.url}
                    alt={item.photo.text || item.common || "Field Photo"}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                    style={{ objectPosition: item.photo.pos || 'center' }}
                    loading="lazy"
                  />

                  {/* Minimal Single-Line Bottom Caption (Only if showCaption is true and text provided) */}
                  {showCaption && item.common && (
                    <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/85 via-black/35 to-transparent text-white pointer-events-none transition-opacity duration-300">
                      <p className="text-xs font-bold text-center truncate drop-shadow-md text-white/95 tracking-wide">
                        {item.common}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

CircularGallery.displayName = 'CircularGallery';

export { CircularGallery };
