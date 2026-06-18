import PageLayout from "~/layouts/PageLayout";

export default function mortgageServices() {
  const items = [
    {
      title: "Mortgage Services",
      text: "Discover an innovative approach to mortgage solutions, fine-tuned to suit your requirements, financial situation and circumstances. Our skilled team of experts is ready to provide you with one-on-one support and guidance as you navigate the complexities of mortgage servicing. No matter your background or nationality, we offer outstanding support and customized solutions, driven by strong partnerships with leading banks in the UAE.",
      image: "/images/mortgageServices/mortgage1.jpg",
      link: "/contact-us",
    },
    {
      title: "Partnerships That Support Success",
      text: "Savoir are partnering with the first digital mortgage platform in the Middle East with access to over 500 mortgage products available across the UAE. We can get you the best deal on your mortgage. we harness these partnerships to deliver tailored solutions that cater to your specific needs and aspirations. Our strategy goes beyond simply getting you the loan; it also involves getting to know your particular situation and financial objectives in order to offer options that work best for you. When you have skilled staff and years of expertise behind you, navigating the complicated mortgage servicing landscape becomes effortless. Regardless of your level of expertise and desire to increase your real estate holdings, our knowledgeable team of professionals are prepared to offer personalised assistance and direction at every stage of the process.",
      image: "/images/mortgageServices/mortgage2.jpg",
      link: "/contact-us",
    },
    {
      title: "Charting Your Mortgage Journey With Honesty And Refinement",
      text: "You can rely on forthright, refined, and transparent advice to support your decision-making process. Whether you're a seasoned investor growing your portfolio or a first-time homeowner starting your next chapter, our commitment to honesty, sophistication, and transparency ensures a smooth and stress-free experience, surpassing the ordinary.",
      image: "/images/mortgageServices/mortgage3.jpg",
      link: "/contact-us",
    },
  ];

  const visitSiteIndexes: number[] = [1];

  const linkToSite =
    "https://savoirprive.useholo.com/en/mortgage-products-services";

  return (
    <div className="mt-[100px]">
      <PageLayout>
        <div className="flex w-full flex-col items-center gap-[56px] lg:gap-[70px]">
          {items.map((item: any, index: number) => {
            const imageRight = index % 2 === 0;
            const showVisitButton = visitSiteIndexes.includes(index);
            const isLongSection = index === 1;

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
                    href={linkToSite}
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