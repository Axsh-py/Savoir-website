import React from "react";
import PageLayout from "~/layouts/PageLayout";

export default function realEstateAdvisory() {
  const items = [
    {
      title: "Real Estate Advisory",
      text: "Embark on an extraordinary journey where the complex decisions that often consume your time are transformed into seamless, effortless choices. At SAVOIR, our real estate advisory solutions redefine how you engage with the Dubai property market, offering more than conventional services. Here, we promise a personalized approach to investing that not only aligns with your primary goals but anticipates your specific requirements.",
      image: "/images/real-estate-advisory/advisory1.jpg",
      link: "/contact-us",
    },
    {
      title: "Ready To Redefine Your Real Estate Success?",
      text: "Get in touch with us today to find out how our real estate consultancy can help you maximize the return on your real estate assets. Our team of experts, specialized in formulating strategic suggestions designed to fit your specific property objectives and investment ambitions, is here to advise and support you whether you are an experienced investor or are just entering in the market. Navigating the complexities of the dynamic real estate landscape in Dubai requires more than routine solutions. That's why our advisory services stand out, promising customized investment plans that provide not just guidance but a transformative experience that complement your key goals. We support you every step of the way, drawing on our specific knowledge to make sure the journey goes well.",
      image: "/images/real-estate-advisory/advisory2.jpg",
      link: "/contact-us",
    },
    {
      title: "Crafting Your Real Estate Journey",
      text: "At SAVOIR, we understand that your real estate journey is as unique as you are. Therefore, our advisory solutions are more than just a service. They are a personalized experience designed to elevate your real estate success story. Every suggestion, every strategy, and every tip is a testament to our commitment to ensuring that your investment journey is not only smooth, but also truly exceptional. Our mission goes beyond the ordinary: every interaction is an opportunity to redefine your real estate journey. We believe in more than only transactional relations; we want to develop lifelong ties. With SAVOIR, you are more than simply a customer; you are an essential component of our dedication to excellence in premium real estate services.",
      image: "/images/real-estate-advisory/advisory3.jpg",
      link: "/contact-us",
    },
  ];

  const visitSiteIndexes: number[] = [];

  const textStyle = {
    color: "#111111",
    fontWeight: 600,
    opacity: 1,
  };

  const headingStyle = {
    color: "#111111",
    fontWeight: 700,
    opacity: 1,
  };

  const headingClass =
    "mb-[22px] flex w-full items-center border-l-[3px] border-[#111111] px-[16px] py-[10px] lg:px-[18px] lg:py-[12px]";

  const headingBg =
    "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(17,17,17,0.08) 52%, rgba(255,255,255,0) 100%)";

  return (
    <div className="mt-[100px]">
      <PageLayout>
        <div className="flex w-full flex-col items-center gap-[56px] lg:gap-[70px]">
          {items.map((item: any, index: number) => {
            const imageRight = index % 2 === 0;
            const showVisitButton = visitSiteIndexes.includes(index);
            const longCard = index === 1 || index === 2;

            if (longCard) {
              const sentences = item.text
                .split(".")
                .map((sentence: string) => sentence.trim())
                .filter(Boolean);

              return (
                <section
                  key={index}
                  className="
                    w-full max-w-[1100px]
                    rounded-[18px]
                    border border-[#E8DFD2]
                    bg-white
                    px-[22px] py-[30px]
                    shadow-[0_22px_60px_rgba(0,0,0,0.055)]
                    lg:px-[34px] lg:py-[34px]
                  "
                >
                  <div className={headingClass} style={{ background: headingBg }}>
                    <h2
                      className="CormorantGaramond text-[20px] leading-[1.12] lg:text-[30px]"
                      style={headingStyle}
                    >
                      {item.title}
                    </h2>
                  </div>

                  <div
                    className="text-[14px] leading-[175%] lg:text-[17px]"
                    style={textStyle}
                  >
                    {sentences.map((sentence: string, i: number) => (
                      <React.Fragment key={i}>
                        {i === 2 && (
                          <img
                            loading="lazy"
                            src={item.image}
                            alt={item.title}
                            className="
                              mb-[22px]
                              mt-[4px]
                              h-[220px]
                              w-full
                              rounded-[18px]
                              object-cover
                              object-center
                              shadow-[0_18px_44px_rgba(0,0,0,0.08)]
                              lg:float-right
                              lg:mb-[18px]
                              lg:ml-[38px]
                              lg:mt-[0px]
                              lg:h-[245px]
                              lg:w-[365px]
                            "
                          />
                        )}

                        <p className="mb-[12px]" style={textStyle}>
                          {sentence}.
                        </p>
                      </React.Fragment>
                    ))}

                    {showVisitButton && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          mt-[18px] inline-flex items-center justify-center
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

                    <div className="clear-both" />
                  </div>
                </section>
              );
            }

            const textBlock = (
              <div className="flex w-full flex-col items-start lg:w-[58%]">
                <div className={headingClass} style={{ background: headingBg }}>
                  <h2
                    className="CormorantGaramond text-[20px] leading-[1.12] lg:text-[30px]"
                    style={headingStyle}
                  >
                    {item.title}
                  </h2>
                </div>

                <p
                  className="whitespace-pre-line text-[14px] leading-[175%] lg:text-[17px]"
                  style={textStyle}
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
              <div className="flex w-full justify-center lg:w-[42%]">
                <img
                  loading="lazy"
                  src={item.image}
                  alt={item.title}
                  className="
                    h-[220px]
                    w-full
                    max-w-[390px]
                    rounded-[18px]
                    object-cover
                    object-center
                    shadow-[0_18px_44px_rgba(0,0,0,0.08)]
                    lg:h-[270px]
                  "
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
                <div className="flex w-full flex-col gap-[30px] lg:flex-row lg:items-center lg:gap-[46px]">
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