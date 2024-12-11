interface ThemeSwitchProps {
  isDarkMode: boolean;
  handleThemeSwitch: () => void;
}

const ThemeSwitch = ({ isDarkMode, handleThemeSwitch }: ThemeSwitchProps) => {
  return (
    <div className="col-span-1 row-span-1 bg-white rounded-[32px] dark:bg-[#1F2937] pt-10">
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
