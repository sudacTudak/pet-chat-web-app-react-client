import { Layout, Row, theme, Typography } from "antd";
import { AppFooterProps } from "./AppFooter.props";

const { Footer } = Layout;

export const AppFooter: React.FC<AppFooterProps> = ({
  className,
  ...props
}) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Footer style={{ background: colorBgContainer }} {...props}>
      <Row align="middle" justify="center">
        <Typography.Text>
          © Designed by sudac_tudak for educational purposes, 2023
        </Typography.Text>
      </Row>
    </Footer>
  );
};
