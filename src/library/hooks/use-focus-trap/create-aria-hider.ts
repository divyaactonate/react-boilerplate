/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-inferrable-types */
type Value = {
  node: HTMLElement;
  ariaHidden: string;
};

export function createAriaHider(
  containerNode: HTMLElement,
  selector: string = 'body > :not(script)'
) {
  const rootNodes: Value[] | any = Array.from<HTMLElement>(document.querySelectorAll(selector)).map(
    (node) => {
      if (node.contains(containerNode)) {
        return undefined;
      }

      const ariaHidden = node.getAttribute('aria-hidden');

      if (ariaHidden === null || ariaHidden === 'false') {
        node.setAttribute('aria-hidden', 'true');
      }

      return { node, ariaHidden };
    }
  );

  return () => {
    rootNodes.forEach((item: any) => {
      if (!item) {
        return;
      }

      if (item.ariaHidden === null) {
        item.node.removeAttribute('aria-hidden');
      } else {
        item.node.setAttribute('aria-hidden', item.ariaHidden);
      }
    });
  };
}
