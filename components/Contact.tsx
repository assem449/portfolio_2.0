import { useState } from "react";

const Contact = () => {
  const scriptURL = "https://script.google.com/macros/s/AKfycbwtBF4ZKFNnuH9MrwAVj03JPUXjYrD-3Wecpgad7fJlmRQUWC0N06nKqO8ejMFir9j6/exec";
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        setMessage("Message sent successfully!");
        setTimeout(() => setMessage(""), 5000);
        form.reset();
      })
      .catch((error) => console.error("Error!", error.message));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* Your Contact Form JSX here */}
      </form>
      <p className="text-green-600 mt-2">{message}</p>
    </>
  );
};

export default Contact;
