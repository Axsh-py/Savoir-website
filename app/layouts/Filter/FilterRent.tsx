import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useArrow from "~/hooks/imageHooks/useArrow";

type Interested = "Buy" | "Rent";
type Status = "All" | "Ready" | "Off-plan";

export type RentFilters = {
  interested: Interested;
  status: Status;
};

type Props = {
  value?: RentFilters;
  onChange?: (next: RentFilters) => void;
  label?: string;
  placeholder?: string;
  maxWidthClass?: string;
};

const DEFAULT_VALUE: RentFilters = { interested: "Buy", status: "All" };

export default function FilterRent({
  value,
  onChange,
  label = "Property Type",
  placeholder = "Buy",
  maxWidthClass = "max-w-[185.68px]",
}: Props) {
  const arrow = useArrow();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const getValidInitialState = (): RentFilters => {
    const initial = { ...DEFAULT_VALUE, ...value };

    if (initial.interested === "Rent" && initial.status === "Off-plan") {
      return { interested: "Buy", status: "Off-plan" };
    }

    return initial;
  };

  const [draft, setDraft] = useState<RentFilters>(getValidInitialState());

  useEffect(() => {
    if (value) {
      if (value.interested === "Rent" && value.status === "Off-plan") {
        const fixed: RentFilters = { interested: "Buy", status: "Off-plan" };
        setDraft(fixed);
        onChange?.(fixed);
      } else {
        setDraft(value);
      }
    }
  }, [value, onChange]);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target as Node)) setOpen(false);
    };

    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const triggerSummary = useMemo(() => {
    if (draft.status === "Off-plan") return "Off plan";
    return draft.interested;
  }, [draft]);

  const setOption = (option: "Buy" | "Rent" | "Off-plan") => {
    let next: RentFilters;

    if (option === "Buy") {
      next = {
        interested: "Buy",
        status: "All",
      };
    } else if (option === "Rent") {
      next = {
        interested: "Rent",
        status: "All",
      };
    } else {
      next = {
        interested: "Buy",
        status: "Off-plan",
      };
    }

    setDraft(next);
    onChange?.(next);
    setOpen(false);
  };

  const filled =
    "bg-[#B59B62] text-white border-[#B59B62] shadow-[0_10px_24px_rgba(0,0,0,0.18)]";
  const outline =
    "bg-transparent text-white border-white/80 hover:bg-white/10 hover:border-white";

  return (
    <div className={`relative w-full ${maxWidthClass}`} ref={wrapperRef}>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full"
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <div className="flex flex-col items-start">
          <p className="text-white text-[15.84px] font-semibold">{label}</p>

          <div className="flex items-center gap-[13.2px]">
            <p className="text-white text-[14.08px] truncate">
              {triggerSummary || placeholder}
            </p>

            <img
              loading="lazy"
              src={arrow.smallBoldWhite}
              alt=""
              className={`transition-transform ${open ? "rotate-180" : ""}`}
            />
          </div>
        </div>
      </button>

      {/* Dropdown */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute right-0 top-[145%] z-10 w-[230px] rounded-[18px] border border-white/15 bg-[#3F3F3F]/95 p-[12px] backdrop-blur-[20px] shadow-[0_24px_60px_rgba(0,0,0,0.28)] lg:w-[260px]"
          >
            <div className="flex flex-col gap-[9px]">
              <button
                type="button"
                onClick={() => setOption("Buy")}
                className={`h-[42px] rounded-[10px] border text-[15px] font-semibold transition-all duration-200 ${
                  draft.interested === "Buy" && draft.status !== "Off-plan"
                    ? filled
                    : outline
                }`}
              >
                Buy
              </button>

              <button
                type="button"
                onClick={() => setOption("Rent")}
                className={`h-[42px] rounded-[10px] border text-[15px] font-semibold transition-all duration-200 ${
                  draft.interested === "Rent" ? filled : outline
                }`}
              >
                Rent
              </button>

              <button
                type="button"
                onClick={() => setOption("Off-plan")}
                className={`h-[42px] rounded-[10px] border text-[15px] font-semibold transition-all duration-200 ${
                  draft.status === "Off-plan" ? filled : outline
                }`}
              >
                Off plan
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}