const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 p-6 text-white">
      <p className="text-small text-center">
        &copy; {currentYear} Itinna. All rights reserved.
      </p>
    </footer>
  );
};
