import { useState } from "react";
import { Form, Input, Button, message, Spin } from "antd";
const { TextArea } = Input;
import "./Contact.css";

function Contact() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values) => {
    setLoading(true); // Show spinner
    setTimeout(() => {
      setLoading(false); // Hide spinner after 3 seconds
      message.success({
        content: "Your message has been sent successfully!",
        duration: 5,
      });
      console.log(values); // Show success message
      form.resetFields(); // Reset form fields
    }, 3000);
  };

  const handleFocus = (e) => {
    e.target.setAttribute("data-placeholder", e.target.placeholder);
    e.target.placeholder = ""; // Clear placeholder
  };

  const handleBlur = (e) => {
    e.target.placeholder = e.target.getAttribute("data-placeholder"); // Restore placeholder
  };
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Me</h2>

      {loading ? (
        <div className="contact-form">
          <Spin
            className="loading-spin"
            spinning={loading}
            tip="Submitting..."
          />
        </div>
      ) : (
        <Form
          className="contact-form"
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={{ name: "", email: "", message: "" }}
        >
          <Form.Item
            className="contact-form-label"
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name!" }]}
          >
            <Input
              placeholder="Enter your name"
              onFocus={handleFocus} // Remove placeholder on focus
              onBlur={handleBlur} // Restore placeholder on blur
            />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input
              placeholder="Enter your email"
              onFocus={handleFocus} // Remove placeholder on focus
              onBlur={handleBlur} // Restore placeholder on blur
            />
          </Form.Item>

          <Form.Item
            label="Message"
            name="message"
            rules={[{ required: true, message: "Please enter your message!" }]}
          >
            <TextArea
              rows={4}
              placeholder="Enter your message"
              onFocus={handleFocus} // Remove placeholder on focus
              onBlur={handleBlur} // Restore placeholder on blur
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" disabled={loading}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
}

export default Contact;
