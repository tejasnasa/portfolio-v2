interface ThemeSwitchProps {
  isDarkMode: boolean;
  handleThemeSwitch: () => void;
}

const ThemeSwitch = ({ isDarkMode, handleThemeSwitch }: ThemeSwitchProps) => {
  return (
    <div className=" w-96 bg-white dark:bg-[#26242E] border-2 border-black dark:border-white m-10">
      <input
        id="switch"
        type="checkbox"
        checked={isDarkMode}
        onChange={handleThemeSwitch}
        className="hidden"
      />
      <div className="box">
        <div className="content">
          <div className="circle">
            <div className="crescent"></div>
          </div>

          <label htmlFor="switch">
            <div className="toggle"></div>
            <div className="names">
              <p className="light">Light</p>
              <p className="dark22">Dark</p>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitch;
