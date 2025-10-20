import emailjs from 'emailjs-com';

const EMAIL_CONFIG = {
  serviceId: 'service_xxxxx',
  templateId: 'template_xxxxx', 
  publicKey: 'publicKey_xxxxx'
};

export const sendEmail = async (formData) => {
  try {
    const result = await emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      EMAIL_CONFIG.publicKey
    );
    return { success: true, result };
  } catch (error) {
    console.error('Erreur EmailJS:', error);
    return { success: false, error };
  }
};