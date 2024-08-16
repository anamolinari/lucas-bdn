import TellusImg1 from "../../public/assets/tellus/img-tellus-01.png";
import TellusImg2 from "../../public/assets/tellus/img-tellus-02.png";
import TellusImg3 from "../../public/assets/tellus/img-tellus-03.png";
import TellusImg4 from "../../public/assets/tellus/img-tellus-04.png";
import TellusImg5 from "../../public/assets/tellus/img-tellus-05.png";
import TellusImg6 from "../../public/assets/tellus/img-tellus-06.png";
import TellusImg7 from "../../public/assets/tellus/img-tellus-07.png";
import TellusImg8 from "../../public/assets/tellus/img-tellus-08.png";
import TellusImg9 from "../../public/assets/tellus/img-tellus-09.png";
import { Divider } from "../components/Divider";
import { PageContent } from "../components/PageContent";
import { PageFooter } from "../components/PageFooter";
import { PageHeader } from "../components/PageHeader";
import { PageImage } from "../components/PageImage";

export default function Tellus() {
  return (
    <div>
      <PageHeader
        title="Tellus App"
        text="Mobile app for passive income with savings account and boost account."
      />

      <section className="mt-10 space-y-4">
        <PageImage image={TellusImg1} alt="Tellus - Image 01" />

        <PageContent title="Overview">
          <p>
            I joined Tellus to kickoff the company&apos;s rebranding, overseeing
            the implementation of the new brand identity across all digital
            platforms, including the website, mobile app, and web app. This
            massive project encompassed stakeholder collaboration for brand
            development, the creation of a design system from scratch, and the
            complete redesign of the app.
          </p>
        </PageContent>
      </section>

      <section className="mt-10 space-y-6">
        <PageContent title="Branding">
          <p>
            The new brand aimed to differentiate Tellus from traditional banking
            and financial institutions by focusing on tangible, real-world
            elements. We sought to create a brand identity that felt natural,
            solid, and relatable to both existing and potential customers.
          </p>
        </PageContent>

        <PageImage
          image={TellusImg2}
          alt="Tellus - Image 02"
          text="Brand icon breakdown."
        />

        <PageImage
          image={TellusImg3}
          alt="Tellus - Image 03"
          text="Slides from the Brand Book."
        />
      </section>

      <section className="mt-10 space-y-6">
        <PageContent title="Design System">
          <p>
            The Tellus Design System was an extensive documentation of the
            app&apos;s visual and interactive language. Comprising over 1,000
            components for both mobile and web platforms, I developed this
            system independently. The process involved multiple rounds of
            testing and refinement in close collaboration with developers and
            junior designers.
          </p>
        </PageContent>

        <PageImage
          image={TellusImg4}
          alt="Tellus - Image 04"
          text="Pieces of the Design System."
        />
      </section>

      <section className="mt-10 space-y-6">
        <PageContent title="User Interface">
          <p>
            The mobile app and web platform designs prioritized clarity and
            usability. By focusing on essential information and considering
            users with varying tech proficiency, we created intuitive
            interfaces. Given the diverse product range, including vaults,
            stacks, savings accounts, and real estate, a key challenge was
            effectively showcasing these offerings on the homepage.
          </p>
          <p>
            To address this, we conducted extensive prototyping with mobile
            developers to refine interactions and animations. Streamlining
            transactions was another primary focus. Additionally, I spearheaded
            the creation of badges and iconography, particularly for the
            app&apos;s Boost feature, which required diverse visual elements.
            Examples of the final designs are included below.
          </p>
        </PageContent>

        <PageImage
          image={TellusImg5}
          alt="Tellus - Image 05"
          text="Designs iterations from the concept stage."
        />

        <PageImage
          image={TellusImg6}
          alt="Tellus - Image 06"
          text="Design for Stacks, where you would set your goals."
        />

        <PageImage
          image={TellusImg7}
          alt="Tellus - Image 07"
          text="Transaction flow."
        />

        <PageImage
          image={TellusImg8}
          alt="Tellus - Image 08"
          text="Badges for special promos."
        />

        <PageImage
          image={TellusImg9}
          alt="Tellus - Image 09"
          text="Illustrations."
        />
      </section>

      <Divider title="Details" />

      <PageFooter
        company="Tellus App"
        url="#"
        year="2022-2023"
        list={[
          "Research",
          "Concept",
          "Brand Identity",
          "Website",
          "User Experience",
          "Design System",
          "Illustration",
        ]}
      />
    </div>
  );
}
