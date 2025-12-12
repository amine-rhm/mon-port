import React, { forwardRef } from "react";
import { motion } from "framer-motion";

// Import images
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";
import img4 from "../assets/image4.png";

const images = [img1, img2, img3, img4];

const AboutSection = forwardRef(
  ({ theme = "dark", textColor = "#ffffff", primaryColor = "#61DAFB" }, ref) => {
    return (
      <motion.section
        id="apropos"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{
          padding: "6rem 2rem",
          background: "#0a0a0a",
          paddingTop: "5rem",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5rem",
            }}
          >
            {images.map((img, index) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true }}
                style={{
                  height: "200px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow:
                    theme === "dark"
                      ? "0 4px 12px rgba(0,0,0,0.5)"
                      : "0 4px 12px rgba(0,0,0,0.1)",
                }}
              >
                <motion.img
                  src={img}
                  alt="Projet"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  loading="lazy"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    );
  }
);

export default AboutSection;