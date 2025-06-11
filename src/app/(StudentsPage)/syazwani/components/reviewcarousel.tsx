import { useEffect, useState } from "react";
import { fetchReviews } from "@/lib/getReviews";
import styles from "./ReviewsCarousel.module.css";

export default function ReviewsCarousel() {
  const [reviews, setReviews] = useState<google.maps.places.PlaceReview[]>([]);
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    fetchReviews()
      .then((data) => setReviews(data))
      .catch(console.error);
  }, []);

  const handleTransition = (direction: "next" | "prev") => {
    setTransitioning(true);

    setTimeout(() => {
      setIndex((prev) =>
        direction === "next"
          ? (prev + 1) % reviews.length
          : (prev - 1 + reviews.length) % reviews.length
      );
      setExpanded(false);
      setTransitioning(false);
    }, 300); // must match CSS transition duration
  };

  const getReviewIndex = (offset: number) =>
    (index + offset + reviews.length) % reviews.length;

  const maxLength = 200;

  if (!reviews.length) return <p>Loading reviews...</p>;

  return (
    <div className={styles.carouselWrapper}>
      <button className={styles.nav} onClick={() => handleTransition("prev")}>&lt;</button>

      <div className={`${styles.carousel} ${transitioning ? styles.fadeOut : styles.fadeIn}`}>
        {[-1, 0, 1].map((offset) => {
          const reviewIndex = getReviewIndex(offset);
          const review = reviews[reviewIndex];
          const isCenter = offset === 0;
          const isLong = review.text.length > maxLength;
          const shortText = review.text.slice(0, maxLength) + "...";

          return (
            <div
              key={offset}
              className={`${styles.card} ${isCenter ? styles.centerCard : styles.sideCard}`}
            >
              <img
                src={review.profile_photo_url || "images/default-avatar.png"}
                alt={review.author_name}
                className={styles.avatar}
                onError={(e) => (e.currentTarget.src = "images/default-avatar.png")}
              />
              <h3>{review.author_name}</h3>
              <p className={styles.rating}>Rating: {review.rating} ★</p>

              <p>
                {isCenter
                  ? expanded || !isLong
                    ? review.text
                    : shortText
                  : shortText}
              </p>

              {isCenter && isLong && (
                <button
                  className={styles.readMoreButton}
                  onClick={() => setExpanded(!expanded)}
                >
                  {expanded ? "Show less" : "Read more"}
                </button>
              )}
            </div>
          );
        })}
      </div>

      <button className={styles.nav} onClick={() => handleTransition("next")}>&gt;</button>
    </div>
  );
}
