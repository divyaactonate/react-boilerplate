/** @jsxImportSource @emotion/react */
import { DefaultProps } from '@library/theme';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode, useState } from 'react';
import { Arrow, useLayer } from 'react-laag';

export interface PopoverProps extends DefaultProps {
  bgColor?: string;
  borderColor?: string;
  children?: JSX.Element;
  content: ReactNode;
  placement?:
    | 'top-start'
    | 'top-center'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-center'
    | 'bottom-end'
    | 'right-start'
    | 'right-center'
    | 'right-end'
    | 'left-start'
    | 'left-center'
    | 'left-end'
    | 'center';
  triggerOffset?: number;
  containerOffset?: number;
  arrowOffset?: number;
}
export const Popover = (props: PopoverProps) => {
  const [isOpen, setOpen] = useState(false);

  // helper function to close the menu
  function close() {
    setOpen(false);
  }

  const {
    children,
    content,
    bgColor = '#48BB78',
    borderColor = '#48BB78',
    triggerOffset = 12,
    containerOffset = 16,
    arrowOffset = 16,
    placement = 'bottom-end',
  } = props;

  const { renderLayer, triggerProps, layerProps, arrowProps } = useLayer({
    isOpen,
    onOutsideClick: close, // close the menu when the user clicks outside
    onDisappear: close, // close the menu when the menu gets scrolled out of sight
    overflowContainer: false, // keep the menu positioned inside the container
    auto: true, // automatically find the best placement
    placement, // we prefer to place the menu "top-end"
    triggerOffset, // keep some distance to the trigger
    containerOffset, // give the menu some room to breath relative to the container
    arrowOffset, // let the arrow have some room to breath also
  });
  // Again, we're using framer-motion for the transition effect
  return (
    <div data-beautify-popover>
      <button
        {...triggerProps}
        className={`outline-none focus:outline-none`}
        onClick={() => setOpen(!isOpen)}
      >
        {children}
      </button>
      {renderLayer(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className='tooltip-box z-150'
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.1 }}
              {...layerProps}
            >
              {content}
              <Arrow
                {...arrowProps}
                backgroundColor={bgColor}
                borderColor={borderColor}
                borderWidth={1}
                size={6}
              />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};
Popover.displayName = '@beautify/core/Popover';
