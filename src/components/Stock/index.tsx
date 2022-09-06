import {
  generatePath,
  useHistory,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import data from "../../assets/data.json";
import { ButtonVisibility, StockContainer } from "./styles";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

type ParamsType = {
  selectedProduct: string;
};
export const Stock = () => {
  const history = useHistory();
  const routeMatch = useRouteMatch();
  const showStock = false;

  return (
    <div>
      <h3>
        Estoque de Produtos
        <ButtonVisibility>
          {showStock ? <AiFillEyeInvisible /> : <AiFillEye />}
        </ButtonVisibility>
      </h3>

      <StockContainer>
        {data.products.map((product) => (
          <div key={product.id}>
            <h4>{product.name}</h4>
            <h5>{showStock ? product.stock : "-"}</h5>
          </div>
        ))}
      </StockContainer>
    </div>
  );
};
