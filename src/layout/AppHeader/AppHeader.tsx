import cn from "classnames";

import styles from "./AppHeader.module.scss";

import { Avatar, Col, Layout, Row, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { AppHeaderProps } from "./AppHeader.props";
import { UserDropdown } from "../UserDropdown/UserDropdown";

const { Header } = Layout;

export const AppHeader: React.FC<AppHeaderProps> = ({
  className,
  ...props
}) => {
  return (
    <Header className={cn(styles["header"], className)} {...props}>
      <Row justify="end" align="middle">
        <Col>
          <Space align="center">
            <UserDropdown />
            <Avatar size="large" className={styles["avatar"]}>
              <UserOutlined />
            </Avatar>
          </Space>
        </Col>
      </Row>
    </Header>
  );
};
