import { useLocale } from "next-intl";
// import Link from "next-intl/link";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect, useTransition } from "react";
import { GrLanguage } from "react-icons/gr";

const LanguageChange = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const modalRef = useRef(null);

  const [isPending, startTransition] = useTransition();
  const router = useRouter()


  const openModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleClick = (e) => {
    setIsOpen(!isOpen)
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`)
    })
  }

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    closeModal();
    if (typeof window !== "undefined" && window.localStorage) {
      window.localStorage.setItem("selectedLanguage", language);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedLanguage = window.localStorage.getItem("selectedLanguage");
      if (storedLanguage) {
        setSelectedLanguage(storedLanguage);
      }
    }
  }, []);

  const availableLanguages = [
    { key: "English", label: "English", locale: "en" },
    { key: "دری ", label: "دری ", locale: "fa" },
    { key: "پښتو", label: "پښتو", locale: "ps" },
  ];

  return (
    <div>
      <button
        type="button"
        onClick={openModal}
        className="flex flex-row-reverse justify-center items-center gap-1 text-lg text-black p-2"
      >
        {selectedLanguage} {/* Display the selected language */}
        <GrLanguage className="text-blue-500" />
      </button>

      {isOpen && (
        <div className="relative sm:fixed shadow-lg  z-10 sm:top-5 mt-0  md:mt-12 border">
          <div className="bg-[#f7f9fb] w-full shadow-lg" ref={modalRef}>
            {availableLanguages.map((language) => {
              if (
                language.key.toLowerCase() !== selectedLanguage.toLowerCase()
              ) {
                return (
                  <div
                    className="flex items-center justify-center hover:text-center hover:bg-sky-500 border-b"
                    key={language.key}
                    onClick={() => handleLanguageSelect(language.key)}
                  >
                    <button className="text-lg text-black hover:text-white  px-5" onClick={handleClick} value={language.locale}>
                      {language.key}
                    </button>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      )
      }
    </div>
  );
};

export default LanguageChange;
