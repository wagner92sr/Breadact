import {
  generatePath,
  useHistory,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import data from "../../assets/data.json";
import { ProductContainer, ProductImage, ProductsContainer } from "./styles";

type ParamsType = {
  selectedProduct: string;
};
export const Production = () => {
  const { selectedProduct } = useParams<ParamsType>();
  const history = useHistory();
  const routeMatch = useRouteMatch();

  const selected = data.products.find(
    (p) => p.id.toString() === selectedProduct
  );

  function goToProduct(id: number) {
    const urlToGo = generatePath(routeMatch.path, {
      selectedProduct: id,
    });
    history.push(urlToGo);
  }

  return (
    <div>
      <h3>O que você vai fabricar hoje ?</h3>

      <ProductsContainer>
        {data.products.map((product) => (
          <ProductContainer
            key={product.id}
            onClick={() => goToProduct(product.id)}
          >
            <ProductImage src={product.image} />
            <h4>{product.name}</h4>
          </ProductContainer>
        ))}
      </ProductsContainer>

      <p>{selected?.recipe}</p>
    </div>
  );
};
