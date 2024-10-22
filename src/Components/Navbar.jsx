const Navbar = () => {
  return (
    <nav>
      <Logo />
      <h4>Home</h4>
      <h4>Contact</h4>
      <h4>Destacados</h4>
    </nav>
  );
};
export default Navbar;

const Logo = () => {
  return (
    <>
      <h5>Mi logo</h5>
      <img src="" alt="logo" />
    </>
  );
};

// const OtroElemento = () => {
//   return <h1>Otro elemento</h1>;
// };

// export { Logo, OtroElemento };
