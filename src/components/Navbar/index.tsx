import { Container, Link } from "./styles";

export const Navbar = () => {
  return (
    <Container>
      <Link to="/production">Production</Link>
      <Link to="/stock">Stock</Link>
    </Container>
  );
};
