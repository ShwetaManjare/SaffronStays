import { useEffect, useState } from "react";
import { Container, Typography, Grid, Box, TextField, Button, Card, CardContent, IconButton } from "@mui/material";
import { Phone, Email, LocationOn, Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import AOS from "aos";
import "aos/dist/aos.css";
const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.subject) tempErrors.subject = "Subject is required";
    if (!formData.message) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted", formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <Box className="overflow-hidden" >
      {/* Hero Section */}
      <Box
        className="relative flex items-center justify-center bg-cover bg-center h-[100vh]"
        sx={{
          backgroundImage: ` url("https://s7ap1.scene7.com/is/image/incredibleindia/1-gateway-of-india-state-hero?qlt=82")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          
        }}
      >
        <Container 
      maxWidth="lg" 
      className="relative flex flex-col items-center justify-center text-center h-screen pt-16"
    >
      <Typography
        variant="h3"
        className="text-white font-bold drop-shadow-lg"
        fontFamily="Times New Roman"
        sx={{ marginBottom: 2 }}
        data-aos="fade-down"
      >
        Travel More, Worry Less – We’re Here to Help!
      </Typography>

      <Typography
        variant="h6"
        className="text-white opacity-90 mt-2"
        fontFamily="Times New Roman"
        data-aos="fade-up"
      >
        Whether it’s a dream vacation or a weekend getaway, we’re here to guide you.
      </Typography>
    </Container>
      </Box>

      {/* Contact Information and Form Section */}
      <Container maxWidth="lg" className="py-16" >
        <Grid container spacing={6}>
          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <Typography variant="h4" className="font-bold mb-4" data-aos="fade-right" fontFamily="Times New Roman" sx={{ marginBottom: 2 }}>Get In Touch</Typography>
            <Typography variant="body1" className="mb-6" data-aos="fade-right" color="gray" sx={{ marginBottom: 6 }} fontFamily="Times New Roman">
              Have questions about our properties? Our team is here to assist you.
            </Typography>
            <Box data-aos="fade-right" >
              {[{ icon: <LocationOn />,   text: "123 Hospitality Lane, Mumbai, India" },
                { icon: <Phone />, text: "+91 98765 43210" },
                { icon: <Email />, text: "info@saffronstays.com" }].map((item, index) => (
                <Box key={index} className="flex items-center mb-4">
                  <Box className="text-blue-500 mr-3">{item.icon}</Box>
                  <Typography variant="body1" fontFamily="Times New Roman">{item.text}</Typography>
                </Box>
              ))}
            </Box>
            <Box className="mt-6" data-aos="fade-right">
              <Typography variant="h6" fontFamily="Times New Roman" sx={{marginTop:12}}>Follow Us</Typography>
              <Box className="flex space-x-3 mt-2">
                {[Facebook, Twitter, Instagram, LinkedIn].map((Icon, index) => (
                  <IconButton key={index} className="bg-gray-200 hover:bg-yellow-200">
                    <Icon />
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Card className="shadow-lg rounded-lg" data-aos="fade-left">
              <CardContent className="p-6">
                <Typography variant="h5" className="font-bold mb-4 "  sx={{ marginBottom: 2 }} fontFamily="Times New Roman" >Send Us a Message</Typography>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {[{ label: "Your Name", name: "name" }, { label: "Your Email", name: "email" },
                    { label: "Subject", name: "subject" }].map((field, index) => (
                    <TextField
                      key={index}
                      fullWidth
                      label={field.label}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      error={!!errors[field.name]}
                      helperText={errors[field.name] || ""}
                      sx={{ marginBottom: 2 }}
                    />
                  ))}
                  <TextField
                    fullWidth
                    label="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    error={!!errors.message}
                    helperText={errors.message || ""}
                    multiline
                    rows={4}
                    sx={{ marginBottom: 2 }}
                  />
                  <Button type="submit" variant="contained" className="bg-yellow-500 text-gray-800 w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Map Section */}
      <Box className="bg-white py-16">
        <Container maxWidth="lg">
          <Typography variant="h4" className="font-bold mb-8 text-center"fontFamily="Times New Roman" data-aos="fade-up" marginBottom={4}>Find Us Here</Typography>
          <Box className="w-full h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2498570421017!2d73.8421569746521!3d18.51760786926578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c079d4c6d387%3A0x2ef12f3e384c82a!2sQspiders%20Pune%20Deccan%20Gymkhana!5e0!3m2!1sen!2sin!4v1740677275524!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ContactUs;

