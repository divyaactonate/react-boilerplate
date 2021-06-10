/** @jsxImportSource @emotion/react */
import { DefaultProps } from '@library/theme';
import { AnimatePresence, motion } from 'framer-motion';
import { cloneElement, ReactNode } from 'react';
import { Arrow, useHover, useLayer } from 'react-laag';
import { PlacementType } from 'react-laag/dist/PlacementType';

export interface TooltipProps extends DefaultProps {
  bgColor?: any;
  text: ReactNode;
  placement?: PlacementType;
  children: JSX.Element;
  arrowClassName?: string;
  borderColor?: string;
  possiblePlacements?: PlacementType[];
  triggerOffset?: number;
  /** Get element ref */
  // elementRef?: ForwardedRef<HTMLDivElement>;
}
export const Tooltip = (props: TooltipProps) => {
  const {
    arrowClassName,
    children,
    possiblePlacements,
    text,
    triggerOffset = 10,
    placement = 'top-center',
    bgColor = '#60a5fa',
    borderColor = '#60a5fa',
  } = props;
  // We use `useHover()` to determine whether we should show the tooltip.
  // Notice how we're configuring a small delay on enter / leave.
  const [isOver, hoverProps] = useHover({ delayEnter: 100, delayLeave: 300 });

  // Tell `useLayer()` how we would like to position our tooltip
  const { triggerProps, layerProps, arrowProps, renderLayer } = useLayer({
    isOpen: isOver,
    placement,
    auto: true,
    possiblePlacements,
    triggerOffset, // small gap between wrapped content and the tooltip
  });

  // when children equals text (string | number), we need to wrap it in an
  // extra span-element in order to attach props
  let trigger;
  if (isReactText(children)) {
    trigger = (
      <span className='tooltip-text-wrapper' {...triggerProps} {...hoverProps}>
        {children}
      </span>
    );
  } else {
    // In case of an react-element, we need to clone it in order to attach our own props
    trigger = cloneElement(children, { ...triggerProps, ...hoverProps });
  }

  // We're using framer-motion for our enter / exit animations.
  // This is why we need to wrap our actual tooltip inside `<AnimatePresence />`.
  // The only thing left is to describe which styles we would like to animate.
  return (
    <>
      {trigger}
      {renderLayer(
        <AnimatePresence>
          {isOver && (
            <motion.div
              className='tooltip-box z-150'
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.1 }}
              {...layerProps}
            >
              {text}
              <Arrow
                {...arrowProps}
                className={arrowClassName}
                backgroundColor={bgColor}
                borderColor={borderColor}
                borderWidth={1}
                size={10}
              />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
};
function isReactText(children: any) {
  return ['string', 'number', 'any'].includes(typeof children);
}
Tooltip.displayName = '@beautify/core/Tooltip';