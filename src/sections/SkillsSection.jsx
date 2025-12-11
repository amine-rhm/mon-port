import React, { useState, forwardRef } from 'react';
import { 
  Code, Database, Smartphone, Settings, 
  Palette, Layers, BarChart3
} from 'lucide-react';

const SkillsSection = forwardRef((props, ref) => {
  const { theme = "light", textColor = "#333" } = props;
  
  const [activeCategory, setActiveCategory] = useState(0);
  
  const categories = [
    {
      title: "Frontend",
      icon: <Code size={18} />,
      skills: [
        {
          name: "React",
          description: "Modern UI library for building interactive interfaces",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        },
        {
          name: "JavaScript",
          description: "Dynamic programming language for web development",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        },
        {
          name: "TypeScript",
          description: "Typed superset of JavaScript for better development",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        },
        {
          name: "Next.js",
          description: "React framework for production applications",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
        },
        {
          name: "Tailwind CSS",
          description: "Utility-first CSS framework for rapid styling",
         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
        },
      ]
    },
    {
      title: "Backend",
      icon: <Database size={18} />,
      skills: [
        {
          name: "Node.js",
          description: "JavaScript runtime for server-side development",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        },
        {
          name: "PHP",
          description: "Server-side scripting language for web development",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
        },
        {
          name: "Python",
          description: "Versatile programming language for backend",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        },
        {
          name: "Java",
          description: "Enterprise-grade programming language",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
        },
        {
          name: "C++",
          description: "High-performance programming language",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
        },
        {
          name: "C",
          description: "Low-level programming language",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
        },
        {
          name: "Symphony",
          description: "PHP framework for web applications",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg"
        },
        {
          name: "Express.js",
          description: "Fast web framework for Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
        },
        {
          name: "Firebase",
          description: "Backend-as-a-Service platform by Google",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
        },
        {
          name: "PostgreSQL",
          description: "Advanced open source relational database",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
        },
        {
          name: "MySQL",
          description: "Popular relational database management system",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
        },
        {
          name: "MongoDB",
          description: "NoSQL document database for modern apps",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
        },
        {
          name: "WordPress",
          description: "Popular CMS for websites and blogs",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg"
        }
      ]
    },
    {
      title: "Mobile",
      icon: <Smartphone size={18} />,
      skills: [
        {
          name: "React Native",
          description: "Cross-platform mobile app development",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        },
      ]
    },
    {
      title: "Data",
      icon: <BarChart3 size={18} />,
      skills: [
        {
          name: "Pandas",
          description: "Data manipulation and analysis library for Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
        },
        {
          name: "NumPy",
          description: "Numerical computing library for Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
        },
        {
          name: "BeautifulSoup",
          description: "Web scraping library for Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        },
        {
          name: "Requests",
          description: "HTTP library for Python web scraping",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        },
        {
          name: "Tableau",
          description: "Business intelligence and data visualization",
          icon: "https://logos-world.net/wp-content/uploads/2021/10/Tableau-Logo.png"
        },
        {
          name: "Power BI",
          description: "Microsoft's business analytics solution",
          icon: "https://logos-world.net/wp-content/uploads/2022/02/Microsoft-Power-BI-Symbol.png"
        }
      ]
    },
    {
      title: "UX/UI",
      icon: <Palette size={18} />,
      skills: [
        {
          name: "Figma",
          description: "Collaborative design and prototyping tool",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
        },
        {
          name: "Adobe XD",
          description: "User experience design software",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg"
        },
        {
          name: "Sketch",
          description: "Digital design toolkit",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg"
        },
        {
          name: "Photoshop",
          description: "Image editing and graphic design",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
        }
      ]
    },
    {
      title: "Tools",
      icon: <Settings size={18} />,
      skills: [
        {
          name: "VS Code",
          description: "Powerful code editor with rich extensions",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
        },
        {
          name: "Git",
          description: "Version control system for code management",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        },
        {
          name: "Docker",
          description: "Containerization platform for applications",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
        },
        {
          name: "Webpack",
          description: "Module bundler for JavaScript applications",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg"
        },
        {
          name: "Terminal",
          description: "Command-line interface for system operations",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"
        },
        {
          name: "Postman",
          description: "API testing and development platform",
          icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
        }
      ]
    }
  ];

  return (
    <section
      ref={ref}
      id="competences"
      style={{
        backgroundColor: theme === "dark" ? "#0a0a0a" : "#ffffff",
        color: textColor,
        padding: "80px 20px",
        minHeight: "100vh"
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{
            fontSize: "2.5rem",
            fontWeight: "600",
            marginBottom: "20px",
            color: textColor
          }}>
            Skills & Technologies
          </h2>
        </div>

        {/* Barre de navigation horizontale */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "0",
          marginBottom: "60px",
          backgroundColor: theme === "dark" ? "#111111" : "#f8f9fa",
          borderRadius: "12px",
          padding: "8px",
          maxWidth: "fit-content",
          margin: "0 auto 60px auto",
          flexWrap: "wrap"
        }}>
          {categories.map((category, index) => (
            <button
              key={category.title}
              onClick={() => setActiveCategory(index)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 24px",
                backgroundColor: activeCategory === index ? 
                  (theme === "dark" ? "#ffffff" : "#ffffff") : "transparent",
                color: activeCategory === index ? 
                  (theme === "dark" ? "#000000" : "#000000") : textColor,
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontSize: "0.95rem",
                fontWeight: "500",
                opacity: activeCategory === index ? 1 : 0.7
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== index) {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.backgroundColor = theme === "dark" ? "#1a1a1a" : "#f0f0f0";
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== index) {
                  e.currentTarget.style.opacity = "0.7";
                  e.currentTarget.style.backgroundColor = "transparent";
                }
              }}
            >
              {category.icon}
              {category.title}
            </button>
          ))}
        </div>

        {/* Grid des skills */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          {categories[activeCategory].skills.map((skill, index) => (
            <div
              key={skill.name}
              style={{
                backgroundColor: theme === "dark" ? "#111111" : "#ffffff",
                border: `1px solid ${theme === "dark" ? "#222222" : "#e5e5e5"}`,
                borderRadius: "16px",
                padding: "32px 24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                transition: "all 0.3s ease",
                cursor: "pointer",
                position: "relative",
                opacity: 0,
                transform: "translateY(20px)",
                animation: `fadeInUp 0.6s ease ${index * 0.1}s forwards`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = theme === "dark" 
                  ? "0 20px 40px rgba(0,0,0,0.3)" 
                  : "0 20px 40px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Icône */}
              <div style={{
                width: "60px",
                height: "60px",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "12px",
                backgroundColor: theme === "dark" ? "#1a1a1a" : "#f8f9fa"
              }}>
                <img 
                  src={skill.icon}
                  alt={skill.name}
                  style={{
                    width: "40px",
                    height: "40px",
                    objectFit: "contain"
                  }}
                />
              </div>

              {/* Nom */}
              <h3 style={{
                fontSize: "1.2rem",
                fontWeight: "600",
                marginBottom: "12px",
                color: textColor
              }}>
                {skill.name}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: "0.9rem",
                lineHeight: "1.5",
                opacity: 0.7,
                margin: 0
              }}>
                {skill.description}
              </p>
            </div>
          ))}
        </div>

      </div>
      
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
});

SkillsSection.displayName = "SkillsSection";

export default SkillsSection;
