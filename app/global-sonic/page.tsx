"use client";
import GlobalSonicImg1 from "../../public/assets/global-sonic/img-global-01.png";
import GlobalSonicImg2 from "../../public/assets/global-sonic/img-global-02.png";
import GlobalSonicImg3 from "../../public/assets/global-sonic/img-global-03.png";
import GlobalSonicImg4 from "../../public/assets/global-sonic/img-global-04.png";
import GlobalSonicImg5 from "../../public/assets/global-sonic/img-global-05.png";
import GlobalSonicImg6 from "../../public/assets/global-sonic/img-global-06.png";
import GlobalSonicImg7 from "../../public/assets/global-sonic/img-global-07.png";
import GlobalSonicImg8 from "../../public/assets/global-sonic/img-global-08.png";
import GlobalSonicImg9 from "../../public/assets/global-sonic/img-global-09.png";
import GlobalSonicImg10 from "../../public/assets/global-sonic/img-global-10.png";
import { Divider } from "../components/Divider";
import { FadeInWhenVisible } from "../components/FadeInWhenVisible";
import { PageContent } from "../components/PageContent";
import { PageFooter } from "../components/PageFooter";
import { PageHeader } from "../components/PageHeader";
import { PageImage } from "../components/PageImage";

export default function GlobalSonic() {
  return (
    <div>
      <FadeInWhenVisible delay={0}>
        <PageHeader
          title="Global Sonic"
          text="Reinventing a fire alarm system for a touch screen experience."
        />
      </FadeInWhenVisible>

      <section className="mt-10 space-y-4">
        <FadeInWhenVisible delay={0.2}>
          <PageImage image={GlobalSonicImg1} alt="Global Sonic - Image 01" />
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.4}>
          <PageContent title="Overview">
            <p>
              Tasked with revolutionizing the fire alarm system user experience,
              I was hired by Global Sonic as the Product Design Lead.
              Collaborating closely with product owners and developers, I
              developed a groundbreaking software solution. Global Sonic sought
              a departure from traditional fire alarm panels, inspiring me to
              create a design that excelled in both aesthetics and usability.
              Balancing innovative design with stringent regulatory requirements
              for fire alarm panels presented a significant challenge.
              Additionally, the shift from a horizontal to vertical screen
              format necessitated a complete overhaul of the information
              architecture.
            </p>
          </PageContent>
        </FadeInWhenVisible>
      </section>

      <section className="mt-10 space-y-6">
        <FadeInWhenVisible delay={0.6}>
          <PageContent title="The Existing Product">
            <p>
              Global Sonic had already distinguished itself from competitors by
              incorporating a full touchscreen interface. However, the
              software&apos;s underlying design and functionality closely
              mirrored traditional fire alarm systems, presenting an opportunity
              to innovate and create a truly differentiated product.
            </p>
          </PageContent>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.8}>
          <PageImage
            image={GlobalSonicImg2}
            alt="Global Sonic - Image 02"
            text="State of the software when I joined."
          />
        </FadeInWhenVisible>
      </section>

      <section className="mt-10 space-y-6">
        <FadeInWhenVisible delay={1}>
          <PageContent title="The Process">
            <p>
              The project demanded a unique approach tailored to Global
              Sonic&apos;s company culture. As a traditional organization with
              limited UX exposure, I initiated the process with interviews and
              workshops to introduce UX methodologies to the team.
            </p>
            <p>
              Following this foundation, we embarked on wireframing the
              platform&apos;s layout. Given the stringent requirements for
              displaying specific information at all times, wireframing was
              crucial. Through iterative design, we achieved a layout that
              effectively communicated essential data while enhancing the user
              experience with additional features and visualization options on
              the home screen.
            </p>
            <p>
              The research process included going deep into softwares like Cars
              Interfaces and complex dashboards, so we could break the pattern
              of the alarm industry.
            </p>
          </PageContent>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={1.2}>
          <PageImage
            image={GlobalSonicImg3}
            alt="Global Sonic - Image 03"
            text="UI Moodboard."
          />
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={1.4}>
          <PageImage
            image={GlobalSonicImg4}
            alt="Global Sonic - Image 04"
            text="Some early iterations."
          />
        </FadeInWhenVisible>
      </section>

      <section className="mt-10 space-y-6">
        <FadeInWhenVisible delay={1.6}>
          <p className="text-base leading-6 text-primary">
            The Fire Alarm System
          </p>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={1.8}>
          <PageImage
            image={GlobalSonicImg5}
            alt="Global Sonic - Image 05"
            text="UI proposal approved by the client."
          />
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={2}>
          <PageImage
            image={GlobalSonicImg6}
            alt="Global Sonic - Image 06"
            text="Final home screen."
          />
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={2.2}>
          <PageImage
            image={GlobalSonicImg7}
            alt="Global Sonic - Image 07"
            text="Final settings screens."
          />
        </FadeInWhenVisible>
      </section>

      <section className="mt-10 space-y-6">
        <FadeInWhenVisible delay={2.4}>
          <PageContent title="The Monitoring Platform">
            <p>
              I was also hired to design a 24/7 monitoring platform as a new
              product offering for Global Sonic. This platform enabled agents to
              oversee multiple fire alarm centrals from a single interface.
            </p>
          </PageContent>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={2.6}>
          <PageImage
            image={GlobalSonicImg8}
            alt="Global Sonic - Image 08"
            text="Pieces of the research."
          />
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={2.8}>
          <PageImage
            image={GlobalSonicImg9}
            alt="Global Sonic - Image 09"
            text="Final home screen."
          />
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={3}>
          <PageImage
            image={GlobalSonicImg10}
            alt="Global Sonic - Image 10"
            text="Some interactions from the platform."
          />
        </FadeInWhenVisible>
      </section>

      <FadeInWhenVisible delay={3.2}>
        <Divider title="Details" />
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={3.4}>
        <PageFooter
          company="Global Sonic"
          url="https://www.globalsonic.com.br/"
          year="2020 / 2023"
          list={[
            "Research",
            "User Experience",
            "Interaction Design",
            "Design System",
            "Icon Design",
          ]}
        />
      </FadeInWhenVisible>
    </div>
  );
}
