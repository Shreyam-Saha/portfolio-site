import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Send, Mail, User, MessageSquare, Loader2, CheckCircle2 } from "lucide-react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message";
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    // TODO: Integrate with backend API (e.g., Formspree, EmailJS, or Vercel Serverless Function)
    // For now, this is a mock submission
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      console.log("Form data:", formData);
      
      // Reset form after showing success
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setSuccess(false);
      }, 3000);
    }, 2000);
  };

  return (
    <div className="contact-page">
      <div className="contact-content">
        <div className="contact-header">
          <Mail className="header-icon" />
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">
            Have a question or want to work together? Drop me a message!
          </p>
        </div>

        <Separator className="contact-separator" />

        <Card className="contact-card">
          {success ? (
            <div className="success-message">
              <CheckCircle2 className="success-icon" />
              <h3 className="success-title">Message Sent Successfully!</h3>
              <p className="success-text">
                Thank you for reaching out. I&apos;ll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <>
              <CardHeader>
                <CardTitle className="form-title">Send Me a Message</CardTitle>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="contact-form">
                  {/* Name Field */}
                  <div className="form-field">
                    <Label htmlFor="name" className="form-label">
                      <User className="label-icon" />
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? "input-error" : ""}
                      disabled={loading}
                    />
                    {errors.name && (
                      <span className="error-message">{errors.name}</span>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="form-field">
                    <Label htmlFor="email" className="form-label">
                      <Mail className="label-icon" />
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? "input-error" : ""}
                      disabled={loading}
                    />
                    {errors.email && (
                      <span className="error-message">{errors.email}</span>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="form-field">
                    <Label htmlFor="message" className="form-label">
                      <MessageSquare className="label-icon" />
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell me about your project or inquiry..."
                      value={formData.message}
                      onChange={handleChange}
                      className={errors.message ? "input-error" : ""}
                      disabled={loading}
                    />
                    {errors.message && (
                      <span className="error-message">{errors.message}</span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="submit-button"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="btn-icon spinning" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="btn-icon" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </>
          )}
        </Card>
      </div>
    </div>
  );
}

export default Contact;
