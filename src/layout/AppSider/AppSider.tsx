import cn from "classnames";

import styles from "./AppSider.module.scss";

import { Layout, Menu, MenuProps } from "antd";
import { UserOutlined, WechatOutlined } from "@ant-design/icons";

import { AppSiderProps } from "./AppSider.props";

const { Sider } = Layout;

export const AppSider: React.FC<AppSiderProps> = ({ className, ...props }) => {
  const siderMenuItems: MenuProps["items"] = [
    {
      key: "/profile",
      label: <a href={"/profile"}>Мой профиль</a>,
      icon: <UserOutlined />,
    },
    {
      key: "/chats",
      label: <a href={"/chats"}>Мои чаты</a>,
      icon: <WechatOutlined />,
    },
  ];

  return (
    <Sider className={cn(styles["sider"], className)} {...props}>
      <Menu
        className={styles["menu"]}
        mode="inline"
        defaultSelectedKeys={["/profile"]}
        style={{ height: "100%" }}
        items={siderMenuItems}
      />
    </Sider>
  );
};
