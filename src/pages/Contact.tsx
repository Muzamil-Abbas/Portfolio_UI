import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

interface ContactFormInputs {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInputs>();
  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <section className=" py-16 mt-4 bg-white min-h-80 flex items-center max-md:mb-20">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 xl:px-52">
        <h2 className="text-3xl font-bold text-center mb-3 ">Contact Us</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-xl mx-auto bg-slate-300 p-4 rounded-lg"
        >
          {/* Name Field */}
          <div className="form-group mb-2">
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-700 "
            >
              Name
            </label>
            <InputText
              id="name"
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
              className={`p-inputtext p-2 w-full h-10 ${
                errors.name ? "p-invalid" : ""
              }`}
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700  "
            >
              Email
            </label>
            <InputText
              id="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className={`p-inputtext p-2 w-full h-10 ${
                errors.email ? "p-invalid" : ""
              }`}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>

          {/* Message Field */}
          <div className="form-group mb-3">
            <label
              htmlFor="message"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Message
            </label>
            <InputTextarea
              id="message"
              placeholder="Enter your message"
              {...register("message", { required: "Message is required" })}
              rows={7}
              className={`p-inputtextarea p-2 w-full ${
                errors.message ? "p-invalid" : ""
              }`}
            />
            {errors.message && (
              <span className="text-red-500">{errors.message.message}</span>
            )}
          </div>

          {/* Submit Button */}

          <div className="text-center">
            <Button
              label="Submit"
              type="submit"
              className="p-button-primary rounded-md w-3 h-10"
              style={{ backgroundColor: "#FF6464", color: "white" }}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
