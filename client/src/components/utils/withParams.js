import { useParams } from "react-router-dom";

export const withParams = (Component) => (props) => {
  const params = useParams();
  return <Component params={params} {...props} />;
};
