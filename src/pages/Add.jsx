import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "../api";
import CardComponent from "../components/CardComponent";

function Add() {
  const history = useNavigate();
  const { state } = useLocation();
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (!state) history(-1);
  });
  const onSubmit = (props) => {
    setIsLoading(true);
    api
      .post(
        `/product/${state.sku_code}/add-stock`,
        {
          amount: props.amount,
        },
        {
          headers: {
            "X-API-Key": localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        setStatus(res.data);
        setIsLoading(false);
      });
  };

  return (
    <CardComponent
      title="Add Stock"
      data={state}
      status={status}
      onSubmit={onSubmit}
      isLoading={isLoading}
    />
  );
}

export default Add;
