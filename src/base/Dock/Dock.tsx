import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
  type SpringOptions,
  AnimatePresence,
} from "framer-motion";
import React, {
  // Children,
  // cloneElement,
  useEffect,
  // useRef,
  useState,
  createContext,
  useContext,
} from "react";

export type DockItemData = {
  icon: React.ReactNode;
  label: React.ReactNode;
  onClick: () => void;
  className?: string;
  isActive?: boolean; // Add isActive property to indicate current section
};

export type DockProps = {
  items: DockItemData[];

  className?: string;
  panelHeight?: number;
  itemSize?: number;
  dockHeight?: number;
  spring?: SpringOptions;
};

type DockItemProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  itemSize: number;
  isActive?: boolean; // Add isActive property for the component
};

const DockItemContext = createContext<{ isHovered: MotionValue<number> }>({
  isHovered: {} as MotionValue<number>,
});

function DockItem({
  children,
  className = "",
  onClick,
  // itemSize,
  isActive = false, // Default to false if not provided
}: DockItemProps) {

  const isHovered = useMotionValue(0);

  return (
    <DockItemContext.Provider value={{ isHovered }}>
      <motion.div
        // style={{
        //   width: itemSize,
        //   height: itemSize,
        // }}
        onHoverStart={() => isHovered.set(1)}
        onHoverEnd={() => isHovered.set(0)}
        onFocus={() => isHovered.set(1)}
        onBlur={() => isHovered.set(0)}
        onClick={onClick}
        className={`relative inline-flex items-center justify-between rounded-full ${isActive ? 'bg-[#474749] border-[1px]' : 'dark:bg-[#060010] border-neutral-700'} border p-4 shadow-md ${className}`}
        tabIndex={0}
        role="button"
        aria-haspopup="true"
      >
        {children}
      </motion.div>
    </DockItemContext.Provider>
  );
}

type DockLabelProps = {
  className?: string;
  children: React.ReactNode;
};

function DockLabel({ children, className = "" }: DockLabelProps) {
  const { isHovered } = useContext(DockItemContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = isHovered.on("change", (latest) => {
      setIsVisible(latest === 1);
    });
    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className={`${className} absolute -top-6 left-1/2 w-fit whitespace-pre rounded-md border border-neutral-700 bg-[#060010] px-2 py-0.5 text-xs text-white`}
          role="tooltip"
          style={{ x: "-50%" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

type DockIconProps = {
  className?: string;
  children: React.ReactNode;
};

function DockIcon({ children, className = "" }: DockIconProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {children}
    </div>
  );
}

export default function Dock({
  items,
  className = "",

  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  panelHeight = 64,
  dockHeight = 256,
  itemSize = 50,
}: DockProps) {
  const isHovered = useMotionValue(0);
  const heightRow = useTransform(isHovered, [0, 1], [panelHeight, dockHeight]);
  const height = useSpring(heightRow, spring);

  return (
    <motion.div
      style={{ height, scrollbarWidth: "none" }}
      className="mx-2 flex max-w-full items-center"
    >
      <motion.div
        onMouseEnter={() => {
          isHovered.set(1);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
        }}
        className={`${className} absolute dark:bg-black backdrop-blur-md not-dark:bg-white bottom-2 left-1/2 transform -translate-x-1/2 flex items-end w-fit gap-4 rounded-2xl border-neutral-700 border-[1px] pb-2 px-4`}
        style={{ height: panelHeight }}
        role="toolbar"
        aria-label="Application dock"
      >
        {items.map((item, index) => (
          <DockItem
            key={index}
            onClick={item.onClick}
            className={item.className}
            itemSize={itemSize}
            isActive={item.isActive} // Pass isActive prop to DockItem
          >
            <DockIcon>{item.icon}</DockIcon>
            <DockLabel>{item.label}</DockLabel>
          </DockItem>
        ))}
      </motion.div>
    </motion.div>
  );
}
