import { track } from '@amplitude/analytics-browser';

import SectionTitle from 'views/PartDetailPage/components/SectionTitle';
import { PART_DETAIL_TITLE, PART_NAME_MAP } from 'views/PartDetailPage/constants/constant';
import { PartId, ReviewApiItem } from 'views/PartDetailPage/types';
import useGetReviews from 'views/PartDetailPage/hooks/useGetReviews';
import {
  wrapper,
  listContainer,
  card,
  cardLeft,
  header,
  profileCircle,
  divider,
  body,
  cardTitle,
  cardDescription,
  tagList,
  tag,
  thumbnailWrapper,
  thumbnail,
  moreButton,
  chevronIcon,
} from './style.css';
import { IconChevronRight } from '@sopt-makers/icons';
import blogDefault from '@assets/blogDefault.svg';

interface Props {
  partId: PartId;
}

const Review = ({ partId }: Props) => {
  const { data } = useGetReviews(partId);
  const reviews = data?.data ?? [];
  const partName = PART_NAME_MAP[partId];

  return (
    <section className={wrapper}>
      <SectionTitle label={PART_DETAIL_TITLE.REVIEW.label} title={PART_DETAIL_TITLE.REVIEW.title} />
      <div className={listContainer}>
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} partName={partName} />
        ))}
      </div>

      <button
        className={moreButton}
        onClick={() => {
          window.open('https://www.sopt.org/blog', '_blank');
          track('click-recruit-part-blog', { part_name: partName, click_target: 'view_all' });
        }}>
        <p>전체 후기 보기</p>
        <IconChevronRight className={chevronIcon} />
      </button>
    </section>
  );
};

export default Review;

interface ReviewCardProps {
  review: ReviewApiItem;
  partName: string;
}

const ReviewCard = ({ review, partName }: ReviewCardProps) => {
  return (
    <article
      className={card}
      onClick={() => {
        window.open(review.url, '_blank');
        track('click-recruit-part-blog', { part_name: partName, click_target: 'review_card' });
      }}>
      <div className={cardLeft}>
        <div>
          <div className={header}>
            {review.authorProfileImageUrl ? (
              <img className={profileCircle} src={review.authorProfileImageUrl} alt={review.author} />
            ) : (
              <div className={profileCircle} />
            )}
            <span>{review.author}</span>
            <span className={divider}>∙</span>
            <span>{review.generation}기</span>
          </div>

          <div className={body}>
            <h2 className={cardTitle}>{review.title}</h2>
            <p className={cardDescription}>{review.description}</p>
          </div>
        </div>

        <div className={tagList}>
          <span className={tag}>{review.generation}기</span>
          <span className={tag}>{review.partType}</span>
        </div>
      </div>

      <div className={thumbnailWrapper}>
        <img
          className={thumbnail}
          src={review.thumbnailUrl ?? blogDefault}
          alt={review.title}
          onError={(e) => {
            e.currentTarget.src = blogDefault;
          }}
        />
      </div>
    </article>
  );
};
