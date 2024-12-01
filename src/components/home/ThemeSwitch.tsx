interface ThemeSwitchProps {
  onClick: () => void;
}

const ThemeSwitch = ({ onClick }: ThemeSwitchProps) => {
  return (
    <div className="h-40 w-96">
      <input
        id="switch"
        type="checkbox"
        onChange={onClick}
      />
      <div className="app">
        <div className="content">
          <div className="circle">
            <div className="crescent"></div>
          </div>

          <label htmlFor="switch">
            <div className="toggle"></div>
            <div className="names">
              <p className="light">Light</p>
              <p className="dark">Dark</p>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitch;
