import {
  generatePath,
  useHistory,
  useParams,
  useRouteMatch,
  useLocation,
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
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);

  //console.log(useLocation());
  const showStock = queryParam.get("showStock") === "true";

  function toggleShow() {
    history.replace({
      pathname: routeMatch.path,
      search: `?showStock=${!showStock}`,
    });
  }

  return (
    <div>
      <h3>
        Estoque de Produtos
        <ButtonVisibility onClick={toggleShow}>
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
