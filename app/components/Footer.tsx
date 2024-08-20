export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="flex items-center justify-between pt-16 pb-6 border-t-[0.75px] border-line sm:mb-20"
      aria-label="Website footer"
    >
      <small className="text-xs leading-4 text-secondary font-semibold tracking-wide opacity-50">
        Copyright {currentYear}
      </small>
      <small className="text-xs leading-4 text-secondary font-semibold tracking-wide opacity-50">
        Lucas Bordignon
      </small>
    </footer>
  );
}
