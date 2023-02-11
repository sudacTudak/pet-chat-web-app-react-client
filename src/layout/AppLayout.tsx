import styles from "./AppLayout.module.scss";

import React, { DetailedHTMLProps, HTMLAttributes } from "react";

import { Layout, theme } from "antd";
import { AppHeader } from "./AppHeader/AppHeader";
import { AppSider } from "./AppSider/AppSider";
import { AppFooter } from "./AppFooter/AppFooter";

const { Content } = Layout;

export const AppLayout: React.FC<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className={styles["wrapper"]}>
      <AppHeader />
      <Layout className={styles["content-wrapper"]}>
        <AppSider />
        <Layout className={styles["main-wrapper"]}>
          <Content
            style={{ background: colorBgContainer }}
            className={styles["main"]}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
      <AppFooter />
    </Layout>
  );
};
