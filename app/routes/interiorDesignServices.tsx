import AdvisoryHero from "~/components/RealEstateAdvisory/AdvisoryHero";
import PageLayout from "~/layouts/PageLayout";

export default function interiorDesignServices() {
  const items = [
    {
      title: "Interior Design",
      text: "Escape the monotony and sameness of the world of uniform fashion and discover modern elegance and originality with SAVOIR interior design services. Our dedicated team of talented professionals specializes in crafting high-end interior designs that seamlessly blend elegance, innovation, and functionality to create spaces that reflect your unique personality and style. We believe in going beyond mere aesthetics to deliver transformative design solutions that elevate your living or working environment to new heights of opulence and refinement",
      image: "/images/interiorDesignServices/image1.jpg",
      link: "/contact-us",
    },
    {
      title: "Journey to Perfection",
      text: "Your journey with SAVOIR starts with a deep exploration of your vision, preferences, and lifestyle requirements. Our experienced designers work closely with you to understand your aspirations and translate them into breathtaking design concepts that surpass your expectations. From luxurious residential sanctuaries to sophisticated commercial spaces, we tailor our approach to suit your specific needs, ensuring every detail reflects your individual taste and flair.",
      image: "/images/interiorDesignServices/image2.jpg",
      link: "/contact-us",
    },
    {
      title: "A World of Luxury Transformation With SAVOIR.",
      text: "Step into a realm of elevated luxury and refinement as you explore our visionary design concepts, meticulously crafted to transcend fleeting trends and stand the test of time. Our team of top-tier interior designers and fit-out specialists collaborate seamlessly to bring your vision to life, infusing each space with a harmonious fusion of style, functionality, and grandeur. Whether you seek a serene oasis of tranquility in your home or a captivating ambiance in your commercial establishment, SAVOIR delivers bespoke turnkey solutions that exceed your wildest imagination.",
      image: "/images/interiorDesignServices/image3.jpg",
      link: "/contact-us",
    },
  ];

  const visitSiteIndexes: number[] = [];

  return (
    <div className="mt-[100px]">
      <PageLayout>
        <div className="flex w-full flex-col items-center gap-[56px] lg:gap-[70px]">
          {items.map((item: any, index: number) => {
            const imageRight = index % 2 === 0;
            const showVisitButton = visitSiteIndexes.includes(index);
            const isLongSection = item.text.length > 520;

            const textBlock = (
              <div className="flex w-full flex-col items-start lg:w-[58%]">
                <div
                  className="
                    mb-[22px] flex w-full items-center
                    border-l-[3px] border-[#111111]
                    px-[16px] py-[10px]
                    lg:px-[18px] lg:py-[12px]
                  "
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(17,17,17,0.08) 52%, rgba(255,255,255,0) 100%)",
                  }}
                >
                  <h2
                    className="CormorantGaramond text-[20px] leading-[1.12] lg:text-[30px]"
                    style={{
                      color: "#111111",
                      fontWeight: 700,
                      opacity: 1,
                    }}
                  >
                    {item.title}
                  </h2>
                </div>

                <p
                  className="whitespace-pre-line text-[14px] leading-[175%] lg:text-[17px]"
                  style={{
                    color: "#111111",
                    fontWeight: 600,
                    opacity: 1,
                  }}
                >
                  {item.text.replace(/\./g, ".\n")}
                </p>

                {showVisitButton && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      mt-[24px] inline-flex items-center justify-center
                      rounded-[8px] bg-[#111111]
                      px-[24px] py-[11px]
                      text-[14px] font-semibold text-white
                      transition-all duration-300
                      hover:scale-[1.02] hover:bg-[#000000]
                      hover:shadow-[0_14px_32px_rgba(17,17,17,0.18)]
                    "
                  >
                    Visit the Site
                  </a>
                )}
              </div>
            );

            const imageBlock = (
              <div
                className={`flex w-full justify-center lg:w-[42%] ${
                  isLongSection ? "lg:sticky lg:top-[130px]" : ""
                }`}
              >
                <img
                  loading="lazy"
                  src={item.image}
                  alt={item.title}
                  className={`w-full max-w-[420px] rounded-[18px] object-cover object-center shadow-[0_18px_44px_rgba(0,0,0,0.08)] ${
                    isLongSection
                      ? "h-[250px] lg:h-[300px]"
                      : "h-[235px] lg:h-[305px]"
                  }`}
                />
              </div>
            );

            return (
              <section
                key={index}
                className="
                  w-full max-w-[1100px]
                  rounded-[18px]
                  border border-[#E8DFD2]
                  bg-white
                  px-[22px] py-[28px]
                  shadow-[0_22px_60px_rgba(0,0,0,0.055)]
                  lg:px-[32px] lg:py-[32px]
                "
              >
                <div
                  className={`flex w-full flex-col gap-[30px] lg:flex-row lg:gap-[46px] ${
                    isLongSection ? "lg:items-start" : "lg:items-center"
                  }`}
                >
                  {imageRight ? (
                    <>
                      {textBlock}
                      {imageBlock}
                    </>
                  ) : (
                    <>
                      {imageBlock}
                      {textBlock}
                    </>
                  )}
                </div>
              </section>
            );
          })}
        </div>
      </PageLayout>
    </div>
  );
}