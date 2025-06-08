"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./AmirPage.module.css";

export function HeroAmir() {
  return (
    <div className={styles.page}>
      {/* Navbar (placed above hero image for layering control) */}
      <nav className={styles.navbar}>
        <div className={styles.navLeft}>EcoStudy</div>
        <div className={styles.navRight}>
          <Link href="/">Home</Link>
          <Link href="#quiz">Quiz</Link>
        </div>
      </nav>

      {/* Hero Section with full-width image background */}
      <section className={styles.titleSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/village.jpg"
            alt="Aerial view of coastline"
            fill
            priority
            className={styles.heroImage}
          />
        </div>
        <h1 className={styles.heroTitle}>
          Land use and land cover change at Kampung Bagan Pasir, Tanjung Karang using satellite imagery on mangrove ecosystem in Sungai Merbok, Kedah: a remote sensing approach
        </h1>
      </section>

      {/* Introduction Section */}
      <section className={styles.introSection}>
        <h2 className={styles.sectionTitle}>Introduction</h2>

        <div className={styles.grid}>
          <div>
            <h3>Background</h3>
            <ul>
              <li>Definition of mangroves: Salt-tolerant trees/shrubs in tropical/subtropical intertidal zones.</li>
              <li>Global and local importance: Nursery habitats for marine life, coastal protection from storms, carbon sequestration (blue carbon).</li>
              <li>Threats: Deforestation for aquaculture, urbanization, climate change (sea-level rise).</li>
            </ul>

            <h3>Study Area</h3>
            <p><strong>Kampung Bagan Pasir (Tanjung Karang, Selangor):</strong></p>
            <ul>
              <li>Coastal village with historically dense mangroves.</li>
              <li>Proximity to agricultural (paddy fields) and urban zones.</li>
            </ul>

            <p><strong>Sungai Merbok (Kedah):</strong></p>
            <ul>
              <li>Part of the Merbok River estuary, one of Malaysia’s largest mangrove reserves.</li>
              <li>Key biodiversity hotspot (e.g., migratory birds, fish breeding grounds).</li>
            </ul>
          </div>

          <div className={styles.rightColumn}>
            <Image
              src="/images/village2.jpg"
              alt="Mangrove forest"
              width={800}
              height={600}
              className={styles.mangroveImage}
            />
            <p>Test your knowledge?</p>
            <div id="quiz" className={styles.quizBox}>
                <Link href="/quiz" className={styles.quizButton}>
                  Take Quiz!
                </Link>
            </div>
          </div>
        </div>

      {/* Methodology Section */}
      <h4 className={styles.methodologyTitle}>Methodology</h4>
        <div className={styles.buttonGroup}>
          {["Satellite Data", "Timeframe", "Image Processing", "Change Detection"].map((item) => (
            <button key={item} className={styles.featureButton}>
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className={styles.impactSection}>
        <h2 className={styles.sectionTitle}>Impact On Mangrove Ecosystems</h2>

        <div className={styles.impactGrid}>
          <div>
            <Image src="/images/erosion.jpg" alt="Erosion" width={300} height={200} className={styles.impactImage} />
            <h3>Ecological Consequences</h3>
            <p>Erosion: Increased shoreline retreat (e.g., 2.5 m/year in degraded zones).</p>
          </div>
          <div>
            <Image src="/images/fishing.jpg" alt="Fishing boat" width={300} height={200} className={styles.impactImage} />
            <h3>Socioeconomic Effects</h3>
            <p>Fisheries: Reduced catches (30% decline in local crab harvests)</p>
          </div>
          <div>
            <Image src="/images/mangrove.png" alt="Carbon cycle" width={300} height={200} className={styles.impactImage} />
            <h3>Ecological Consequences</h3>
            <p>Carbon Emissions: Loss of 1,200 ha mangroves ≈ 1.2 million Mg CO</p>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>© EcoStudy</footer>
    </div>
  );
}
