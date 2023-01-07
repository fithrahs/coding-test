import { Button, Card, Form, InputNumber, Typography } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
const { Text } = Typography;

function CardComponent(props) {
  const history = useNavigate();
  const location = useLocation();
  const styleBtn = (code) => {
    if (code === 200) {
      return {
        width: "100%",
        color: "white",
        backgroundColor: "green",
      };
    }
    return {
      width: "100%",
      color: "white",
      backgroundColor: "orange",
    };
  };

  return (
    <>
      <Card style={{ width: 400, margin: "30px auto" }}>
        <Text
          style={{ fontWeight: "bold", display: "block", fontSize: "18px" }}
        >
          {props.title}
        </Text>
        <Text type="secondary" style={{ fontWeight: "bold", display: "block" }}>
          {props.data.sku_code}
        </Text>
        <Text style={{ display: "block", fontWeight: "bold" }}>
          {props.data.sku_name}
        </Text>
        <Form
          name="stock"
          autoComplete="off"
          layout="vertical"
          style={{ marginTop: "20px" }}
          onFinish={props.onSubmit}
        >
          {props.status ? (
            <>
              <Text style={{ display: "block" }}>{props.status.msg}</Text>
              <Form.Item style={{ marginTop: "50px" }}>
                <Button
                  style={styleBtn(props.status.code)}
                  onClick={() => history(-1)}
                >
                  OK
                </Button>
              </Form.Item>
            </>
          ) : (
            <>
              <Form.Item
                name="amount"
                label="Amount"
                rules={[{ required: true, message: "Please input Amount!" }]}
              >
                <InputNumber style={{ width: "100%" }} min={1} />
              </Form.Item>
              <Form.Item>
                <Button
                  htmlType="submit"
                  style={{
                    width: "100%",
                    backgroundColor: location.pathname.includes("delete")
                      ? "orange"
                      : "green",
                    color: "white",
                  }}
                  loading={props.isLoading}
                >
                  Submit
                </Button>
              </Form.Item>
            </>
          )}
        </Form>
      </Card>
    </>
  );
}

export default CardComponent;
