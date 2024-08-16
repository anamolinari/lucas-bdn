import RareImg1 from "../../public/assets/rare-edition/img-rare-01.png";
import RareImg2 from "../../public/assets/rare-edition/img-rare-02.png";
import RareImg3 from "../../public/assets/rare-edition/img-rare-03.png";
import RareImg4 from "../../public/assets/rare-edition/img-rare-04.png";
import RareImg5 from "../../public/assets/rare-edition/img-rare-05.png";
import RareImg6 from "../../public/assets/rare-edition/img-rare-06.png";
import RareImg7 from "../../public/assets/rare-edition/img-rare-07.png";
import RareImg8 from "../../public/assets/rare-edition/img-rare-08.png";
import RareImg9 from "../../public/assets/rare-edition/img-rare-09.png";
import RareImg10 from "../../public/assets/rare-edition/img-rare-10.png";
import RareImg11 from "../../public/assets/rare-edition/img-rare-11.png";
import RareImg12 from "../../public/assets/rare-edition/img-rare-12.png";
import RareImg13 from "../../public/assets/rare-edition/img-rare-13.png";
import { Divider } from "../components/Divider";
import { PageContent } from "../components/PageContent";
import { PageFooter } from "../components/PageFooter";
import { PageHeader } from "../components/PageHeader";
import { PageImage } from "../components/PageImage";

export default function RareEdition() {
  return (
    <div>
      <PageHeader
        title="Rare Edition"
        text="Card Grading company with web platform."
      />

      <section className="mt-10 space-y-4">
        <PageImage image={RareImg1} alt="Rare Edition - Image 01" />

        <PageContent title="Overview">
          <p>
            Rare Edition sought to revolutionize trading card storage and
            presentation with a stylish, high-security <i>slab</i> case. The
            company required a brand identity that aligned with the
            product&apos;s premium aesthetic. I joined the team to develop this
            brand and extend it across the website, web platform, and
            marketplace. As the company expanded its focus to include other
            collectibles and introduced NFT technology for vaulted cards, the
            goal was to create a seamless trading experience without the need
            for physical asset transfer.
          </p>
        </PageContent>
      </section>

      <section className="mt-10 space-y-6">
        <PageContent title="Branding and Website">
          <p>
            Rare&apos;s brand identity was designed to adapt seamlessly to
            various contexts, achieved through a versatile logo that could be
            customized for different applications.
          </p>
          <p>
            Building upon the established brand, we developed the website,
            incorporating striking 3D visuals of the slab created with the
            assistance of an external artist. The website&apos;s hero section
            featured a captivating video showcasing the slab&apos;s features,
            which I directed.
          </p>
        </PageContent>

        <PageImage
          image={RareImg2}
          alt="Rare Edition - Image 02"
          text="Pieces of the brand material."
        />

        <PageImage
          image={RareImg3}
          alt="Rare Edition - Image 03"
          text="Website home page."
        />
      </section>

      <section className="mt-10 space-y-6">
        <PageContent title="Grading iPad App">
          <p>
            A critical component of the ecosystem was the iPad app designed for
            graders to assess card scans and assign grades. The generated
            grading reports were accessible to anyone via a QR code on the slab
            label. Optimizing the grading workflow for efficiency involved
            multiple rounds of interviews and iterative design. Due to the
            app&apos;s core role in the company&apos;s operations, visual assets
            are confidential.
          </p>
        </PageContent>

        <PageImage
          image={RareImg4}
          alt="Rare Edition - Image 04"
          text="Photography of the grading process."
        />

        <PageImage
          image={RareImg5}
          alt="Rare Edition - Image 05"
          text="iPad app used by graders (whole app is confidential)."
        />

        <PageImage
          image={RareImg6}
          alt="Rare Edition - Image 06"
          text="Icons created to represent each grade and tools."
        />
      </section>

      <section className="mt-10 space-y-6">
        <PageContent title="Submission Web Platform">
          <p>
            To facilitate card submissions and shipping, we developed a
            client-facing web platform. Through in-depth interviews with
            industry key players and a comprehensive analysis of competitor
            offerings, we identified market gaps and opportunities. By mapping
            out user flows and conducting extensive usability testing on
            high-fidelity prototypes, we created a user interface that supported
            both single and bulk submissions. To ensure a smooth user onboarding
            experience, we implemented educational banners and videos for new
            users.
          </p>
        </PageContent>

        <PageImage
          image={RareImg7}
          alt="Rare Edition - Image 07"
          text="User flows from the research phase."
        />

        <PageImage
          image={RareImg8}
          alt="Rare Edition - Image 08"
          text="Components from the Design System."
        />

        <PageImage
          image={RareImg9}
          alt="Rare Edition - Image 09"
          text="Elements used in the submission flow."
        />

        <PageImage
          image={RareImg10}
          alt="Rare Edition - Image 10"
          text="Illustration made for the submission process."
        />
      </section>

      <section className="mt-10 space-y-6">
        <PageContent title="Vault, Marketplace and NFT">
          <p>
            As Rare Edition expanded and welcomed new investors, I took the lead
            on developing and pitching innovative product concepts.
          </p>
          <p>
            The Vault service offered secure, climate-controlled storage for
            collectibles in exchange for a monthly fee. We created a submission
            platform similar to the grading process for this product.
          </p>
          <p>
            The Marketplace was established as a secure trading platform
            leveraging Rare Edition&apos;s grading and security standards.
          </p>
          <p>
            To further streamline the trading process, we introduced NFTs
            representing physical collectibles stored in the Vault. This
            approach eliminated the need for physical shipping while maintaining
            the security and authenticity guaranteed by Rare Edition.
          </p>
        </PageContent>

        <PageImage
          image={RareImg11}
          alt="Rare Edition - Image 11"
          text="Marketplace interface."
        />

        <PageImage
          image={RareImg12}
          alt="Rare Edition - Image 12"
          text="NFT-Vault card component."
        />

        <PageImage
          image={RareImg13}
          alt="Rare Edition - Image 13"
          text="Items in the marketplace connected with NFT-Vault."
        />
      </section>

      <Divider title="Details" />

      <PageFooter
        company="Rare Edition"
        url="#"
        year="2021-2022"
        list={[
          "Brand Identity",
          "Market Research",
          "User Interviews",
          "Website",
          "User Experience",
          "Design System",
          "Illustration",
          "Video Production",
        ]}
      />
    </div>
  );
}
