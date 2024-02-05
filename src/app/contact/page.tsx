import ContactFeature from "@/components/Contact Components/ContactFeature";
import ContactFormSection from "@/components/Contact Components/ContactFormSection";
import ContactHeader from "@/components/Contact Components/ContactHeader";
import NonErrorLayout from "@/layouts/NonErrorLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shikshya | Contact"
};


export default function Page() {
  return (
    <NonErrorLayout>
      <ContactHeader />
      <ContactFormSection />
      <ContactFeature />
    </NonErrorLayout>
  );
}
