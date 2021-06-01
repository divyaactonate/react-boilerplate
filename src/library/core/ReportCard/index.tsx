/** @jsxImportSource @emotion/react */
import cx from 'clsx';
import { useStyles } from './ReportCard.styles';
import { DefaultProps } from '@library/theme';
import {
  ChatIcon,
  DotsVerticalIcon,
  EyeIcon,
  HeartIcon,
  InformationCircleIcon,
  TagIcon,
} from '@heroicons/react/outline';
import { OfficeBuildingIcon } from '@heroicons/react/solid';
import { Badge } from '@library/core/Badge';
import { Checkbox } from '../Checkbox';
import { useHover } from 'react-laag';
import { Tooltip } from '../Tooltip';

export interface ReportCardProps extends DefaultProps {
  image?: string;
  title?: string;
  description?: string;
  lastUpdated?: string;
  onInfoClick?: any;
  onLiked?: any;
  onView?: any;
  onComment?: any;
  checked?: boolean;
}
export const ReportCard = ({
  themeOverride,
  image,
  className,
  checked = false,
  ...others
}: ReportCardProps) => {
  const { classes, css } = useStyles({ themeOverride, checked });
  const [isOver, hoverProps] = useHover({ delayEnter: 100 });

  return (
    <div data-beautify-card css={css.card} className={cx(className)} {...others} {...hoverProps}>
      <Tooltip
        triggerOffset={12}
        arrowClassName='-mt-10'
        bgColor={'#1F2937'}
        borderColor={'#1F2937'}
        placement='right-center'
        possiblePlacements={['right-center', 'left-center']}
        text={
          <div className='break-words rounded-lg text-sm max-w-xs bg-gray-800 text-white p-3'>
            Adventure works top five sales and stores. his report illustrates a dataset with
            querries containing the top caluse. It illustrates the use of tables, charts ,
            parameters , circulates fields and drill through links
          </div>
        }
      >
        <div style={{ minHeight: '8rem' }} className={classes.wrapper}>
          <div data-beautify-left-section className={classes.leftWrapper}>
            {image ? (
              // <div data-left-section-content className={'flex items-center h-full justify-center'}>
              //   <span data-left-section-content-text css={''} className={''}>
              <img
                data-beautify-left-section-content
                alt=''
                // style={{ height: '8rem', width: '8rem' }}
                className='w-32 h-32'
                src='http://ubiq.co/analytics-blog/wp-content/uploads/2020/07/marketing-dashboard-examples.png'
              />
            ) : (
              //   </span>
              // </div>
              <div data-beautify-left-section-content className={classes.leftContent}>
                <span
                  data-beautify-left-section-content-text
                  css={css.leftContentText}
                  className={classes.leftContentText}
                >
                  Brand analytics web and transactional
                </span>
              </div>
            )}
          </div>
          <div data-beautify-right-section className={classes.rightWrapper}>
            <div data-beautify-right-top-section>
              <div className={classes.rightTopWrapper}>
                <div className='flex items-center space-x-6 flex-row justify-between'>
                  <h1 className={classes.title}>Brand analytics web and transactional</h1>
                  {isOver || checked ? (
                    <div className={classes.checkBoxClass}>
                      <Checkbox radius='xs' checked={checked} size='xs' />
                    </div>
                  ) : (
                    <div className={classes.checkBoxClass}></div>
                  )}
                </div>
                <div className={classes.subTitle}>Last Updated : 1 month ago</div>
                <div className={classes.metaData}>
                  <OfficeBuildingIcon className={classes.iconClass} />
                  <TagIcon className={classes.iconClass} />
                  <Badge color='yellow' variant='filled' size='xs' className={classes.badgeClass}>
                    GOLD
                  </Badge>
                </div>
              </div>
            </div>
            <div data-beautify-right-bottom-section>
              <div className={classes.rightBottompWrapper}>
                <div className={classes.rightBottomLeftSection}>
                  <HeartIcon className={classes.iconClass} /> 22
                  <EyeIcon className={classes.iconClass} />
                  16
                  <ChatIcon className={classes.iconClass} />
                  16
                </div>
                <div className={classes.rightBottomRightSection}>
                  <InformationCircleIcon className={classes.iconClass} />
                  <DotsVerticalIcon className={classes.iconClass} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tooltip>
    </div>
  );
};
ReportCard.displayName = '@beautify/core/Card';
