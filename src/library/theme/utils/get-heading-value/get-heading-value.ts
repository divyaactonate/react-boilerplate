import { BeautifyHeading } from '@library/theme';
import { headings as AllHeadings } from '../../headings';
export function getHeadingValue({
  heading,
  headings,
  defaultValue = 4,
}: {
  heading: BeautifyHeading | null;
  headings?: Record<BeautifyHeading, any>;
  defaultValue?: BeautifyHeading;
}) {
  if (!heading) {
    return AllHeadings[defaultValue];
  }
  if (headings) {
    return AllHeadings[heading] || AllHeadings[defaultValue];
  }

  return AllHeadings[heading] || AllHeadings[heading];
}
