import PageLayout from "~/layouts/PageLayout";

export default function propertyManagement() {
  const items = [
    {
      title: "Property Management",
      text: "It's time for your real estate investments to benefit from a dedicated team committed to delivering successful, efficient, and personalized solutions. Our wide range of services covers every detail, ensuring your property is not just managed but also maximized to its highest potential. Recognizing the complexity and time-consuming nature of managing real estate investments, we offer a comprehensive range of property management services crafted to alleviate your burden and enhance the performance of your real estate portfolio. With decades of experience and a proven track record of success, we have established ourselves as a trusted partner for property owners seeking effective solutions.",
      image: "/images/propertyManagement/villa-garden.jpg",
      link: "/contact-us",
    },
    {
      title: "Our Commitment To Property Management",
      text: "At SAVOIR, our approach to property management revolves around the concept of excellence. We believe that every property deserves the highest level of care and attention to ensure its long-term success. Whether you own a single residential property or a diverse portfolio of commercial assets, our team is dedicated to delivering exceptional results tailored to your unique needs and goals. What distinguishes SAVOIR from other property management companies is our unwavering commitment to excellence in every aspect of our operations. From tenant relations to maintenance and financial management, we consistently strive to exceed our clients' expectations. Our team of experienced professionals brings a wealth of knowledge and expertise to the table, enabling us to tackle even the most complex property management challenges with confidence and precision. Transparency is one of the cornerstones of our property management philosophy. We believe in keeping our clients informed every step of the way, providing detailed reports and regular updates on the performance of their properties. By fostering open lines of communication and promoting trust and accountability, we aim to build lasting relationships with our clients based on mutual respect and integrity.",
      image: "/images/propertyManagement/villa-exterior.jpg",
      link: "/contact-us",
    },
    {
      title: "We Don't Just Manage, We Excel",
      text: "Our commitment goes beyond industry standards to provide you with a seamless and hassle-free property management solution. Your peace of mind is our priority, and your needs take center stage in our property management services. We listen, understand, and adapt solutions to meet your goals. Leveraging the latest technology and industry best practices, we streamline operations and enhance efficiency, ensuring your real estate investments receive the attention they deserve. Our goal is clear; to provide real estate investors with the peace of mind and confidence they need to succeed in today's competitive market. Whether you are an experienced investor or new to the world of real estate, you can trust SAVOIR to deliver results that exceed your expectations.",
      image: "/images/propertyManagement/savoir-featured.jpg",
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
            const useTextFlowImage = index === 1 || index === 2;

            if (useTextFlowImage) {
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
                  <div
                    className="
                      mb-[24px] flex w-full items-center
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

                  <div
                    className="text-[14px] leading-[175%] lg:text-[17px]"
                    style={{
                      color: "#111111",
                      fontWeight: 600,
                      opacity: 1,
                    }}
                  >
                    {sentences.map((sentence: string, i: number) => (
                      <div key={i}>
                        {i === 2 && (
                          <img
                            loading="lazy"
                            src={item.image}
                            alt={item.title}
                            className="
                              mb-[22px] mt-[4px]
                              h-[235px] w-full
                              rounded-[18px]
                              object-cover object-center
                              shadow-[0_18px_44px_rgba(0,0,0,0.08)]
                              lg:float-right
                              lg:mb-[18px]
                              lg:ml-[38px]
                              lg:mt-[4px]
                              lg:h-[265px]
                              lg:w-[405px]
                            "
                          />
                        )}

                        <p
                          className="mb-[12px]"
                          style={{
                            color: "#111111",
                            fontWeight: 600,
                            opacity: 1,
                          }}
                        >
                          {sentence}.
                        </p>
                      </div>
                    ))}

                    {sentences.length <= 2 && (
                      <img
                        loading="lazy"
                        src={item.image}
                        alt={item.title}
                        className="
                          mx-auto my-[18px]
                          h-[235px] w-full max-w-[430px]
                          rounded-[18px]
                          object-cover object-center
                          shadow-[0_18px_44px_rgba(0,0,0,0.08)]
                          lg:h-[265px]
                        "
                      />
                    )}

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
              <div className="flex w-full justify-center lg:w-[42%]">
                <img
                  loading="lazy"
                  src={item.image}
                  alt={item.title}
                  className="
                    h-[235px] w-full max-w-[420px]
                    rounded-[18px] object-cover object-center
                    shadow-[0_18px_44px_rgba(0,0,0,0.08)]
                    lg:h-[305px]
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