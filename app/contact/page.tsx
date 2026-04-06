import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with us.",
  openGraph: {
    title: "Contact",
    description: "Get in touch with us.",
  },
  twitter: {
    title: "Contact",
    description: "Get in touch with us.",
  },
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Contact Us</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        We&apos;d love to hear from you. Please reach out with any questions.
      </p>
      <div className="mt-8">
        <a
          className="text-primary underline underline-offset-4"
          href="mailto:contact@example.com"
        >
          contact@example.com
        </a>
      </div>
    </main>
  );
}
