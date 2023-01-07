import { Button, Card, Col, Row, Typography } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api, tokenApi } from "../api";
const { Text } = Typography;

function Home() {
  const history = useNavigate();
  const [data, setData] = useState([]);

  const getToken = () => {
    tokenApi
      .post("/rr33gg1155TT331212", {
        email: "fithrahsyawaludin6@gmail.com",
      })
      .then((res) => localStorage.setItem("token", res.data.data.x_api_key));
  };

  const getData = () => {
    api.get("/product").then((res) => setData(res.data.data));
  };

  useEffect(() => {
    getToken();
    getData();
  }, []);

  return (
    <>
      {data.map((item, i) => {
        return (
          <Card style={{ width: 400, margin: "30px auto" }} key={i}>
            <Row>
              <Col span={8}>
                <img src={item.sku_img} alt={item.sku_name} width="20px" />
              </Col>
              <Col>
                <Text
                  type="secondary"
                  style={{ fontWeight: "bold", display: "block" }}
                >
                  {item.sku_code}
                </Text>
                <Text style={{ fontWeight: "bold", display: "block" }}>
                  {item.sku_name}
                </Text>
                <Text>Qty: {item.amount}</Text>
              </Col>
            </Row>
            <Row
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "15px",
              }}
            >
              <Button
                style={{
                  width: "150px",
                  backgroundColor: "green",
                  color: "white",
                }}
                onClick={() =>
                  history("/add", {
                    state: { sku_code: item.sku_code, sku_name: item.sku_name },
                  })
                }
              >
                Add
              </Button>
              {item.amount > 0 ? (
                <Button
                  style={{
                    width: "150px",
                    backgroundColor: "orange",
                    color: "white",
                  }}
                  onClick={() =>
                    history("/delete", {
                      state: {
                        sku_code: item.sku_code,
                        sku_name: item.sku_name,
                      },
                    })
                  }
                >
                  Deduct
                </Button>
              ) : null}
            </Row>
          </Card>
        );
      })}
    </>
  );
}

export default Home;
