import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "../api";
import CardComponent from "../components/CardComponent";

function Delete() {
  const history = useNavigate();
  const { state } = useLocation();
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (!state) history(-1);
  });
  const onSubmit = ({ amount }) => {
    setIsLoading(true);
    api
      .post(
        `/product/${state.sku_code}/deduct-stock`,
        {
          amount,
        },
        {
          headers: {
            "X-API-Key": localStorage.getItem("token"),
          },
        }
      )
      .then((res) => setStatus(res.data))
      .catch((res) => {
        setStatus(res.response.data);
        setIsLoading(false);
      });
  };

  return (
    <CardComponent
      title="Deduct Stock"
      data={state}
      status={status}
      onSubmit={onSubmit}
      isLoading={isLoading}
    />
  );
}

export default Delete;
