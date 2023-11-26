import logo from './../assets/thinkit_logo.png'

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Logo"></img>
      <h3>Coffee Banner Generator</h3>
    </div>
  );
};

export default Header;
