//heroAmir.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./AmirPage.module.css";
import { Navbar } from "./navbar";


export function HeroAmir() {
  return (
    <div className={styles.page}>

      {/* Navbar (placed above hero image for layering control) */}
      <nav className={styles.navbar}>
        <div className={styles.navLeft}>EcoStudy</div>
        <div className={styles.navRight}>
          <Link href="/">Home</Link>
          <Link href="/amir/quiz">Quiz</Link>
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
          LAND USE AND LAND COVER CHANGE (LULC) AT KAMPUNG BAGAN PASIR, TANJUNG KARANG USING SATELLITE IMAGERY
        </h1>
      </section>

      {/* Introduction Section */}
      <section className={styles.introSection}>
        <h2 className={styles.sectionTitle}>Introduction</h2>

        <div className={styles.grid}>
          <div>
            <h3>Background Information</h3>
            <ul>
            Land Use and Land Cover (LULC) changes are pressing environmental issues in coastal and mangrove areas like Kampung Bagan Pasir in Tanjung Karang, Malaysia, where human 
            activities such as logging, urbanization, and aquaculture development degrade and fragment ecosystems, threatening local fisheries, coastal protection, and wildlife. 
            Traditional field-based monitoring methods face limitations, making remote sensing with satellite imagery a practical alternative for tracking spatial and temporal LULC changes. 
            This study aims to analyze these changes over recent decades, identify key drivers, and assess environmental impacts to guide conservation efforts and promote sustainable land management in the region.


            </ul>

            <h3>Problem Statement</h3>
            <ul>
            <li>This mangrove ecosystem provides critical habitat for a diverse range of species,
            supports local fisheries, and provides important ecosystem services such as carbon
            sequestration and coastal protection. However, this valuable forest is under severe 
            threat from a variety of human activities, resultingin significant land use and land 
            cover (LULC) changes that compromise its sustainability and health.</li>
            </ul>

            <h3>Research Objective</h3>
            <ul>
              <li>To determine the spatial and temporal patterns of land use and land cover changes in the Kampung Bagan Pasir, Tanjung Karang over recent decades.</li>
              <li>To map the change detection for mangrove swamp forest in Kampung Bagan Pasir, Tanjung Karang</li>
            </ul>

            <h3>Significance of The Study</h3>
            <ul>
              <li>This study is significant as it aims to have significant implications for both natural ecosystems and human societies. Examining LULC changes in Kampung
                Bagan Pasir, Tanjung Karang, using remote satellite data offers important new perspectives on the scientific, policy, economical, and environmental aspects of 
                managing mangrove ecosystems.</li>
            </ul>
          </div>


          <div className={styles.rightColumn}>
            <Image
              src="/images/village2.jpg"
              alt="Forest forest"
              width={800}
              height={600}
              className={styles.forestImage}
            />

            <p>Test Your Knowledge?</p>
            <div id="quiz" className={styles.quizBox}>
                <Link href="/amir/quiz" className={styles.quizButton}>
                  Take Quiz!
                </Link>
            </div>
          </div>
        </div>
        </section>

        {/* Methodology Preview */}
        <section className={styles.methodSection}>
          <h4 className={styles.methodologyTitle}>Methodology Preview</h4>
          <div className={styles.buttonGroup}>
            {[
              { title: "Picture preprocessing", description: "Band selection and stacking to improve spectral discrimination of important land cover categories, subsetting of the Area of Interest (AOI) to isolate the study location, and geometric correction to correct spatial distortions." },
              { title: "Two-tiered classification approach", description: "Unsupervised classification (i.e., ISODATA method) is first used to investigate intrinsic spectral clusters in the images, producing first LULC classes without the need for previous training data. Supervised categorisation follows, which is based on a wealth of fieldwork-gathered ground-truth data." },
              { title: "The methodology's use of field verification is essential", description: "GPS-referenced land cover data is gathered by systematic ground surveys, which are used to improve classification training samples and enable a thorough post-classification accuracy evaluation." },
              { title: "Determine spatial patterns and measure rates of LULC change", description: "A comparison evaluation of the categorised photos from 2014 and 2024 is carried out for temporal analysis. The work incorporates quasi-experimental techniques, to improve causal inference about anthropogenic drivers of land cover change." },
            ].map((item) => (
              <button key={item.title} className={styles.featureButton}>
                <div className={styles.buttonTitle}>{item.title}</div>
                <div className={styles.buttonDescription}>{item.description}</div>
              </button>
            ))}
          </div>
        </section>

      {/* Scope Section */}
      <section className={styles.scopeSection}>
        <h2 className={styles.sectionTitle}>Scope and Limitation</h2>

        <div className={styles.scopeGrid}>
          <div>
            <Image src="/images/mangroveForest.jpg" alt="Erosion" width={300} height={200} className={styles.scopeImage} />
            <h3>Study Focus: Mangrove Ecosystems at Risk</h3>
            <p>This research assesses land use and land cover (LULC) changes in Kampung Bagan Pasir's mangrove ecosystems from 2000 to 2025. Mangroves here are vital for coastal protection, biodiversity, and carbon storage, but face threats from urbanization, aquaculture, and natural processes. The study maps these changes using satellite data to guide sustainable management strategies.</p>
          </div>
          <div>
            <Image src="/images/satellite.jpg" alt="Fishing boat" width={300} height={200} className={styles.scopeImage} />
            <h3>Challenges in Remote Sensing Analysis</h3>
            <p>The study relies on satellite imagery (Landsat, Sentinel, ALOS) but faces limitations like cloud cover, sensor inconsistencies, and coarse resolution (10-30 m), which may miss fine-scale mangrove changes. Advanced techniques like machine learning (Random Forest, NDVI) help, but ground truth data is scarce due to tough terrain and tidal effects, impacting accuracy.</p>
          </div>
          <div>
            <Image src="/images/mangroveRestoration.jpg" alt="Carbon cycle" width={300} height={200} className={styles.scopeImage} />
            <h3>Policy Gaps & Conservation Strategies</h3>
            <p>Beyond technical hurdles, inconsistent policies and poor interagency coordination hinder conservation. Conflicting land-use priorities and limited access to high-resolution data challenge planning. Effective mangrove management requires collaboration between governments, scientists, and local communities to balance development and ecological sustainability.</p>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>© EcoStudy</footer>
    </div>
  
  );
}