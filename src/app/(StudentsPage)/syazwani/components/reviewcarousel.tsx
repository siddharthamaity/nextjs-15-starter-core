"use client";
import { useEffect, useState } from "react";
import { fetchReviews } from "@/lib/getReviews"; // your existing function
import styles from "./ReviewsCarousel.module.css";

export default function ReviewsCarousel() {
  const [reviews, setReviews] = useState<google.maps.places.PlaceReview[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetchReviews()
      .then((data) => setReviews(data))
      .catch(console.error);
  }, []);

  const nextReview = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  if (!reviews.length) return <p>Loading reviews...</p>;

  const review = reviews[index];

  return (
    <div className={styles.carousel}>
      <button className={styles.nav} onClick={prevReview}>&lt;</button>

      <div className={styles.card}>
        <img
          src={review.profile_photo_url || "/default-avatar.png"}
          alt={review.author_name}
          className={styles.avatar}
          onError={(e) => (e.currentTarget.src = "/default-avatar.png")}
        />
        <h3>{review.author_name}</h3>
        <p className={styles.rating}>Rating: {review.rating} ★</p>
        <p>{review.text}</p>
      </div>

      <button className={styles.nav} onClick={nextReview}>&gt;</button>
    </div>
  );
}
