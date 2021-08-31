// to use this, create a ref and attach it to the required element
// pass in the ref and the offsetNo as argument

const scrollFunc = (elementRef, offsetNo) => {
  const handleScroll = () => {
    if (
      elementRef.current.getBoundingClientRect().top <=
      window.innerHeight / (offsetNo || 2)
    ) {
      elementRef.current.classList.add("show");
    }
  };

  window.addEventListener("scroll", handleScroll);

  if (
    elementRef.current.getBoundingClientRect().top <=
    window.innerHeight / (offsetNo || 2)
  ) {
    elementRef.current.classList.add("show");
  }

  return () => window.removeEventListener("scroll", handleScroll);
};

export default scrollFunc;
