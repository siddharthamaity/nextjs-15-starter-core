import { Button } from "./ui/button";
import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import Link from "next/link";

const cards = [
  {
    id: 1,
    title: "Sweethorn",
    description: "Measuring Soil Compaction Using Five-Point Pocket",
    image: "/images/Trees.jpeg",
    link: "/sweethorn"
  },
  {
    id: 2,
    title: "Syazwani",
    description: "The Impact Of Tourism Management On Customer Satisfaction: A Case Study Of Petronas Twin Towers, Kuala Lumpur",
    image: "/images/Trees.jpeg",
    link: "/syazwani"
  },
  {
    id: 3,
    title: "Hizran",
    description: "Land use and land cover change at Kampung Bagan Pasir, Tanjung Karang using satellite imagery used change on mangrove ecosystem in sungai merbok , kedah : a remote sensing approach",
    image: "/images/Trees.jpeg",
    link: "/amir"
  },
];

export function Hero() {
  return (
    <div
      style={{
        height: "100vh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          height: "100vh",
          scrollSnapAlign: "start",
          position: "relative",
          width: "100%",
          
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: "90%",
          }}
        >
          <source src="/images/trees.mp4" type="video/mp4" />
        </video>

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "3rem",
            fontWeight: "bold",
            textAlign: "center",
            textShadow: "2px 2px 4px #000",
            padding: "0 20px",
            zIndex: 1,
          }}
        >
          Sustainable Development and Environmental Monitoring
          <br />
          through Technological and Managerial Approaches in Malaysia
        </div>
      </section>

      {/* Contents Section */}
      <section
        style={{
          height: "100vh",
          scrollSnapAlign: "start",
          padding: "100px 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxSizing: "border-box",
          width: "100%",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Contents
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "60px",
          }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              style={{
                width: "400px",
                height: "550px",
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ width: "100%", height: "300px" }}>
                <img
                  src={card.image}
                  alt={card.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                style={{
                  padding: "16px",
                  flex: "1",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.25rem",
                    marginBottom: "8px",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    color: "#555",
                    marginBottom: "16px",
                    flex: "1",
                  }}
                >
                  {card.description}
                </p>
                <Link href={card.link}>
                  <button
                    style={{
                      padding: "10px 16px",
                      backgroundColor: "#000000",
                      color: "#92CA6A",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  >
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Ecostudy Section */}
      <section
        style={{
          height: "100vh",
          scrollSnapAlign: "start",
          display: "flex",
          flexDirection : "column",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "10px",
          padding: "200px 20px",
          width: "100%",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        {/* Description */}
        <div style={{ flex: "1 1 30%", minWidth: "300px" ,backgroundColor : "#FAFFCA", borderRadius: "20px", padding: "20px", height: "600px" }}>
          <h2 style={{ paddingBottom: "20px", color:"#000" }}>About Ecostudy 🌳</h2>
          <h3 style={{ paddingBottom: "40px", color:"#000" }}>Exploring Sustainable Development in Malaysia</h3>
          <p style={{color:"#000"}}>
            EcoStudy is a collaborative platform dedicated to<br/>
             investigating sustainable development and environmental <br/>
            monitoring in Malaysia through technological and managerial<br/>
             approaches. Our team of researchers focuses on <br/>
            pressing ecological and socio-economic challenges, <br/>
            leveraging tools like remote sensing, field surveys,<br/>
             and data analytics to drive actionable insights for <br/>
             conservation and policy-making.
          </p>
        </div>

        {/* Image */}
        <div style={{ flex: "1 1 70%", minWidth: "300px" }}>
          <img
            src="/images/trees.jpeg"
            alt=""
            style={{
              width: "100%",
              height: "600px",
              objectFit: "cover",
              borderRadius: "16px",
            }}
          />
        </div>
      </section>
      <section
        style={{
          height: "100vh",
          scrollSnapAlign: "start",
          display: "flex",
          flexDirection : "column",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "10px",
          padding: "200px 20px",
          width: "100%",
          margin: "0 auto",
          boxSizing: "border-box",
          textAlign:"start"
        }}
      >
       <h1 style={{fontSize: "3rem"}}>Take Quiz🤯</h1> 
       
       <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "60px",
          }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              style={{
                width: "400px",
                height: "450px",
                borderRadius: "16px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              
              <div
                style={{
                  padding: "16px",
                  flex: "1",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor : "#5DAD24"
                }}
              >              
                <p
                  style={{
                    color: "#000",
                    marginBottom: "16px",
                    flex: "1",
                  }}
                >
                  {card.description}
                </p>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    paddingTop: "10px",
                    marginBottom: "8px",
                  }}
                >
                  {card.title}
                </h3>
                <h5
                  style={{
                    marginBottom: "8px",
                    color :"#FFFF",
                    fontWeight:"lighter"
                  }}
                >
                  Alam Bina Student
                </h5>
              </div>
              <Link href={card.link}>
                  <button
                    style={{
                      marginTop : "30px",
                      padding: "10px 16px",
                      backgroundColor: "#000000",
                      color: "#92CA6A",
                      border: "none",
                      borderRadius: "10px",
                      cursor: "pointer",
                    }}
                  >
                    Start
                  </button>
                </Link>
            </div>
            
          ))}
          </div>
      </section>
    </div>
  );
}
