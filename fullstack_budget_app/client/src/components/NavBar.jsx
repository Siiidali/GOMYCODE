import home_icon from "../assets/logomark.svg";
const NavBar = () => {
  return (
    <nav className="flex py-8 items-center ">
      <div className="flex gap-2 border-[3px]  transition-all duration-200 ease-linear border-inherit rounded-xl hover:border-[#1DBBC3] hover:border-[3px] p-3  ">
        <div>
          <img className="h-[30px]" src={home_icon} alt="" />
        </div>
        <h3 className="font-extrabold text-xl">HomeBudget</h3>
      </div>
    </nav>
  );
};

export default NavBar;
