/**
 * Contact Page Component
 *
 * This component renders the contact form, allowing users to get in touch.
 * It includes form fields defined in the content configuration and handles
 * user submissions with appropriate styling and accessibility considerations.
 */

import { content } from "@/config/content";
import { generateMetadata } from "@/lib/metadata";
import { viewport } from "@/lib/metadata";

export const metadata = generateMetadata(
  "Contact - Wais Almakaleh",
  "Contact me."
);
export { viewport };

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">{content.contact.title}</h1>
      <p className="text-lg mb-8 text-neutral-600 dark:text-neutral-400">
        {content.contact.description}
      </p>

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
  );
}
