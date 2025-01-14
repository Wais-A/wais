/**
 * Contact Page Component
 * 
 * This component renders the contact form, allowing users to get in touch.
 * It includes form fields defined in the content configuration and handles
 * user submissions with appropriate styling and accessibility considerations.
 */

import { content } from "@/config/content";
import { person } from "@/config/personal";
import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata(
  "Blog - Wais Almakaleh",
  "Contact me."
);

export default function Contact() {
  return (
    <div className="min-h-screen w-full dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative">
      {/* Radial gradient overlay for aesthetic effect */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Contact Form Container */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">
          {content.contact.title} {/* Title of the contact section */}
        </h1>
        <p className="text-lg mb-8 text-neutral-600 dark:text-neutral-400">
          {content.contact.description}
          {/* Description encouraging users to contact */}
        </p>

        {/* Contact Form */}
        <form className="space-y-6">
          {content.contact.form.fields.map((field) => (
            <div key={field.name}>
              <label
                htmlFor={field.name}
                className="block text-sm font-medium mb-2"
              >
                {field.label}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  required={field.required}
                  className="w-full p-3 rounded-lg border bg-white/50 dark:bg-black/50 backdrop-blur-sm"
                  rows={5}
                />
              ) : (
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  required={field.required}
                  className="w-full p-3 rounded-lg border bg-white/50 dark:bg-black/50 backdrop-blur-sm"
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}