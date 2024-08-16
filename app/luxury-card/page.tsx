import LuxuryCardImg1 from "../../public/assets/luxury-card/img-luxury-01.png";
import LuxuryCardImg2 from "../../public/assets/luxury-card/img-luxury-02.png";
import LuxuryCardImg3 from "../../public/assets/luxury-card/img-luxury-03.png";
import LuxuryCardImg4 from "../../public/assets/luxury-card/img-luxury-04.png";
import { Divider } from "../components/Divider";
import { PageContent } from "../components/PageContent";
import { PageFooter } from "../components/PageFooter";
import { PageHeader } from "../components/PageHeader";
import { PageImage } from "../components/PageImage";

export default function LuxuryCard() {
  return (
    <div>
      <PageHeader
        title="Luxury Card"
        text="iOS and Android app for a deluxe credit card with exclusive perks and concierge."
      />

      <section className="mt-10 space-y-4">
        <PageImage image={LuxuryCardImg1} alt="Luxury Card - Image 01" />

        <PageContent title="Context">
          <p>
            I joined Luxury Card to elevate the user experience of their
            concierge app. The app aimed to provide exclusive benefits and
            services to high-end cardholders. My role involved conducting a
            comprehensive UX audit, identifying areas for improvement, and
            redesigning the app to align with the brand&apos;s luxurious
            aesthetic. Overcoming challenges such as an outdated UI and tight
            development timelines, I successfully created a new design system
            that enhanced usability while preserving the brand&apos;s identity.
            My responsibilities extended to leading the design team and ensuring
            a smooth handover to development.
          </p>
        </PageContent>
      </section>

      <section className="mt-10 space-y-6">
        <PageContent title="UX Audit">
          <p>
            An initial UX audit revealed significant usability issues within the
            app. Key UI elements were missing, hindering navigation, and
            critical user flows were incomplete, leading to user frustration and
            confusion.
          </p>
        </PageContent>

        <PageImage
          image={LuxuryCardImg2}
          alt="Luxury Card - Image 02"
          text="Breakdown of the current flows."
        />
      </section>

      <section className="mt-10 space-y-6">
        <PageContent title="Experience Redesigned">
          <p>
            To elevate the overall user experience and deliver a truly luxurious
            feel, I spearheaded the redesign of both the UX and UI. By
            meticulously mapping out user flows and stories, I established clear
            paths for users to navigate the app&apos;s features. The redesigned
            UI captured the essence of the brand&apos;s luxury aesthetic while
            prioritizing simplicity and efficiency, catering to the discerning
            tastes of the target audience. A key feature, the concierge chat,
            was seamlessly integrated with the booking section for a more
            streamlined and convenient user journey.
          </p>
        </PageContent>

        <PageImage
          image={LuxuryCardImg3}
          alt="Luxury Card - Image 03"
          text="App promo by the client."
        />
      </section>

      <section className="mt-10 space-y-6">
        <PageContent title="Results">
          <p>
            The initial deliverables were met with enthusiastic approval from
            the client, leading to Arctouch being entrusted with additional UX
            and UI projects to enhance the overall user experience. The Luxury
            Card Concierge app is now live on the App Store, and while
            subsequent updates have been implemented, the foundational design
            framework we established remains the core of the app&apos;s
            functionality and growth.
          </p>
        </PageContent>

        <PageImage
          image={LuxuryCardImg4}
          alt="Luxury Card - Image 04"
          text="The Luxury Card."
        />
      </section>

      <Divider title="Details" />

      <PageFooter
        company="Luxury Card"
        url="#"
        year="2018-2019"
        list={[
          "UX Analysis",
          "User Flows",
          "User Interviews",
          "User Interface",
          "Illustrations",
        ]}
      />
    </div>
  );
}
