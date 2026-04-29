import SectionTitle from 'views/PartDetailPage/components/SectionTitle';
import { PART_DETAIL_TITLE } from 'views/PartDetailPage/constants/constant';
import { ReviewItem } from 'views/PartDetailPage/types';
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

interface Props {
  reviews: ReviewItem[];
}

const Review = ({ reviews }: Props) => {
  return (
    <section className={wrapper}>
      <SectionTitle label={PART_DETAIL_TITLE.REVIEW.label} title={PART_DETAIL_TITLE.REVIEW.title} />
      <div className={listContainer}>
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      <button className={moreButton}>
        <p>전체 후기 보기</p>
        <IconChevronRight className={chevronIcon} />
      </button>
    </section>
  );
};

export default Review;

interface ReviewCardProps {
  review: ReviewItem;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <article className={card}>
      <div className={cardLeft}>
        <div>
          <div className={header}>
            <div className={profileCircle} />
            <span>{review.author}</span>
            <span className={divider}>∙</span>
            <span>{review.date}</span>
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
        <div className={thumbnail} />
      </div>
    </article>
  );
};
