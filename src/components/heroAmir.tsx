"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./AmirPage.module.css";

export function HeroAmir() {
  return (
    <div className="bg-[#B8C9AC] min-h-screen">
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <nav className={styles.navLeft}>EcoStudy</nav>
        <nav className={styles.navRight}>
          <Link href="/">Home</Link>
          <Link href="#quiz">Quiz</Link>
        </nav>
        <h1 className={styles.heroTitle}>
          Land use and land cover change at Kampung Bagan Pasir, Tanjung Karang
          using satellite imagery used change on mangrove ecosystem in Sungai
          Merbok, Kedah: a remote sensing approach
        </h1>
        <Image
          src="/images/village.jpg"
          alt="Aerial view of coastline"
          width={1200}
          height={400}
          className="mt-6 rounded-md object-cover max-w-full h-auto"
        />
      </section>

      {/* Summary Section */}
      <section className={styles.summarySection}>
        <h2 className={styles.subTitle}>Project Summary</h2>
        <p className={styles.paragraph}>
          This project utilizes satellite remote sensing to monitor changes in
          land cover, focusing on mangrove ecosystem transformation in Sungai
          Merbok. The findings are crucial for environmental conservation and
          sustainable development.
        </p>
      </section>

      {/* Quiz Section */}
      <section id="quiz" className="py-16 px-4 text-center bg-[#A2B89F]">
        <h2 className="text-3xl font-semibold mb-4 text-white">
          Ready to Test Your Knowledge?
        </h2>
        <p className="mb-6 text-white">
          Try the quiz to see what you’ve learned about land cover and remote
          sensing!
        </p>
        <Link
          href="/quiz/amir"
          className="inline-block bg-white text-[#456145] px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition"
        >
          Start Quiz
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-[#7B8F72] text-white">
        © 2025 EcoStudy · Made with 🌱 by Amir
      </footer>
    </div>
  );
}
