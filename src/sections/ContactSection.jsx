import React, { useState, forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import emailjs from 'emailjs-com';

const ContactSection = forwardRef((props, ref) => {
  const { theme, textColor, primaryColor } = props;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState('');

  // Styles dynamiques basés sur le thème
  const bgColor = theme === "dark" ? "#1a1a1a" : "#ffffff";
  const cardBg = theme === "dark" ? "#262626" : "#f8f9fa";
  const inputBg = theme === "dark" ? "#333333" : "#ffffff";
  const borderColor = theme === "dark" ? "#404040" : "#e1e5e9";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status) setStatus('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus('');

    try {
      await emailjs.send(
        'service_xxxxx',
        'template_xxxxx',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'publicKey_xxxxx'
      );
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Erreur EmailJS:', error);
      setStatus('error');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        padding: "80px 20px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center"
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto", width: "100%" }}>
        
        {/* Header */}
        <motion.div
          style={{ textAlign: "center", marginBottom: "50px" }}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              marginBottom: "15px",
              color: primaryColor
            }}
          >
            Me Contacter
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              opacity: 0.8,
              maxWidth: "500px",
              margin: "0 auto"
            }}
          >
            Une question ou un projet ? Contactez-moi !
          </p>
        </motion.div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "400px 1fr", 
          gap: "50px",
          alignItems: "start"
        }}>
          
          {/* Infos Contact */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                marginBottom: "25px"
              }}
            >
              Informations
            </h3>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              
              <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <div style={{
                  width: "45px",
                  height: "45px",
                  backgroundColor: primaryColor,
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <Mail size={20} color="white" />
                </div>
                <div>
                  <h4 style={{ fontWeight: "600", marginBottom: "3px" }}>Email</h4>
                  <p style={{ opacity: 0.7, fontSize: "0.95rem" }}>rahmouni.mohamedamine1@gmail.com</p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <div style={{
                  width: "45px",
                  height: "45px",
                  backgroundColor: primaryColor,
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <Phone size={20} color="white" />
                </div>
                <div>
                  <h4 style={{ fontWeight: "600", marginBottom: "3px" }}>Téléphone</h4>
                  <p style={{ opacity: 0.7, fontSize: "0.95rem" }}>+33 7 51 11 68 41</p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <div style={{
                  width: "45px",
                  height: "45px",
                  backgroundColor: primaryColor,
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <MapPin size={20} color="white" />
                </div>
                <div>
                  <h4 style={{ fontWeight: "600", marginBottom: "3px" }}>Localisation</h4>
                  <p style={{ opacity: 0.7, fontSize: "0.95rem" }}>France</p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div
              style={{
                backgroundColor: cardBg,
                padding: "35px",
                borderRadius: "15px",
                border: `1px solid ${borderColor}`,
                boxShadow: theme === "dark" 
                  ? "0 10px 30px rgba(0,0,0,0.2)" 
                  : "0 10px 30px rgba(0,0,0,0.08)"
              }}
            >
              
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                
                <input
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 15px",
                    fontSize: "1rem",
                    backgroundColor: inputBg,
                    border: `1px solid ${borderColor}`,
                    borderRadius: "8px",
                    outline: "none",
                    color: textColor,
                    transition: "border-color 0.3s ease"
                  }}
                  onFocus={(e) => e.target.style.borderColor = primaryColor}
                  onBlur={(e) => e.target.style.borderColor = borderColor}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 15px",
                    fontSize: "1rem",
                    backgroundColor: inputBg,
                    border: `1px solid ${borderColor}`,
                    borderRadius: "8px",
                    outline: "none",
                    color: textColor,
                    transition: "border-color 0.3s ease"
                  }}
                  onFocus={(e) => e.target.style.borderColor = primaryColor}
                  onBlur={(e) => e.target.style.borderColor = borderColor}
                />

                <textarea
                  name="message"
                  placeholder="Votre message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 15px",
                    fontSize: "1rem",
                    backgroundColor: inputBg,
                    border: `1px solid ${borderColor}`,
                    borderRadius: "8px",
                    outline: "none",
                    color: textColor,
                    resize: "vertical",
                    minHeight: "100px",
                    transition: "border-color 0.3s ease"
                  }}
                  onFocus={(e) => e.target.style.borderColor = primaryColor}
                  onBlur={(e) => e.target.style.borderColor = borderColor}
                />

                <motion.button
                  type="submit"
                  disabled={isSending}
                  whileHover={{ scale: isSending ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    backgroundColor: primaryColor,
                    color: "white",
                    padding: "12px 20px",
                    fontSize: "1rem",
                    fontWeight: "600",
                    border: "none",
                    borderRadius: "8px",
                    cursor: isSending ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    opacity: isSending ? 0.7 : 1,
                    transition: "all 0.3s ease"
                  }}
                >
                  {isSending ? (
                    <>
                      <Loader2 size={18} className="animate-spin" style={{
                        animation: "spin 1s linear infinite"
                      }} />
                      Envoi...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Envoyer
                    </>
                  )}
                </motion.button>

                <AnimatePresence>
                  {status && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      style={{
                        padding: "12px 15px",
                        borderRadius: "8px",
                        textAlign: "center",
                        fontSize: "0.95rem",
                        backgroundColor: status === 'success' ? '#10B98115' : '#EF444415',
                        border: `1px solid ${status === 'success' ? '#10B981' : '#EF4444'}`,
                        color: status === 'success' ? '#10B981' : '#EF4444'
                      }}
                    >
                      {status === 'success' ? (
                        'Message envoyé avec succès !'
                      ) : (
                        'Erreur lors de l\'envoi. Réessayez.'
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

              </form>
            </div>
          </motion.div>

        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @media (max-width: 768px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
      `}</style>
    </motion.section>
  );
});

ContactSection.displayName = "ContactSection";

export default ContactSection;