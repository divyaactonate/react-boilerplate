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

export interface ReportCardProps extends DefaultProps {
  image?: string;
  title?: string;
  lastUpdated?: string;
  onInfoClick?: any;
  onLiked?: any;
  onView?: any;
  onComment?: any;
}
export const ReportCard = ({ themeOverride, image, className, ...others }: ReportCardProps) => {
  const { classes, css } = useStyles({ themeOverride });
  return (
    <div data-beautify-card css={css.card} className={cx(className)} {...others}>
      <div style={{ minHeight: '8rem' }} className={classes.wrapper}>
        <div data-left-section className={classes.leftWrapper}>
          {image ? (
            // <div data-left-section-content className={'flex items-center h-full justify-center'}>
            //   <span data-left-section-content-text css={''} className={''}>
            <img
              data-left-section-content
              alt=''
              // style={{ height: '8rem', width: '8rem' }}
              className='w-32 h-32'
              src='http://ubiq.co/analytics-blog/wp-content/uploads/2020/07/marketing-dashboard-examples.png'
            />
          ) : (
            //   </span>
            // </div>
            <div data-left-section-content className={classes.leftContent}>
              <span
                data-left-section-content-text
                css={css.leftContentText}
                className={classes.leftContentText}
              >
                Brand analytics web and transactional
              </span>
            </div>
          )}
        </div>
        <div data-right-section className={classes.rightWrapper}>
          <div data-right-top-section>
            <div className={classes.rightTopWrapper}>
              <div className='flex items-center space-x-8 flex-row justify-between'>
                <h1 className={classes.title}>Brand analytics web and transactional</h1>
                <Checkbox size='xs' />
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
          <div data-right-bottom-section>
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
    </div>
  );
};
ReportCard.displayName = '@beautify/core/Card';
