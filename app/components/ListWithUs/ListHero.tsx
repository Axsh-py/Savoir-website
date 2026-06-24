import React from "react";

const ListHero = () => {
  return (
    <section className="relative flex items-center justify-center w-full min-h-[70vh] lg:min-h-[90vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-white/60 lg:bg-white/70"
        aria-hidden="true"
        style={{
          backgroundImage: "url('/images/icons/vLetter.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative z-10 flex w-full justify-center px-[16px] lg:px-[45px] py-[72px] lg:py-[96px] pb-[0px]">
        <div className="flex w-full max-w-5xl flex-col items-center gap-[32px] text-center">
          <div className="flex flex-col items-center gap-[14px]">
            <h1 className="CormorantGaramond text-[34px] sm:text-[46px] lg:text-[86px] leading-[1.1] font-normal text-[#111111]">
              List With Us
            </h1>

            <p className="CormorantGaramond text-[20px] sm:text-[24px] lg:text-[42px] leading-[1.2] font-normal text-[#111111]">
              Your property. Seen by the world.
            </p>
          </div>

          <div className="w-full flex justify-center">
            <img
              loading="lazy"
              src="/images/placeholders/list-with-us.jpg"
              alt="Luxury homes in Dubai listing preview"
              className="w-full max-w-[90%] rounded-xl mix-blend-multiply"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListHero;