import logo from "../../assets/hero-section/swl-logo.svg";

const Header = () => {
  return (
    <nav className="flex justify-between py-4 mx-[75px]">
      <img src={logo} alt="logo" />

      <ul className="flex items-center gap-8">
        <li>
          <a
            className="font-helvetica font-normal text-light-blue capitalize"
            href="/"
          >
            language lessons
          </a>
        </li>
        <li>
          <a
            className="font-helvetica font-normal text-light-blue capitalize"
            href="/"
          >
            language exchange
          </a>
        </li>
        <li>
          <a
            className="font-helvetica font-normal text-light-blue capitalize"
            href="/"
          >
            plans
          </a>
        </li>
        <li>
          <a
            className="font-helvetica font-normal text-light-blue capitalize"
            href="/"
          >
            login
          </a>
        </li>
        <li>
          <button className="bg-orange text-white font-inter font-bold capitalize py-[10px] px-[14px] rounded-lg">
            sign up
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
