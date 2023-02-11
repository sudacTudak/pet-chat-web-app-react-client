import styles from "./UserDropdown.module.scss";

import { Button, Dropdown, MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";

import { UserDropdownProps } from "./UserDropdown.props";

export const UserDropdown: React.FC<UserDropdownProps> = () => {
  const dropdownItems: MenuProps["items"] = [
    {
      key: "profile",
      label: <a href="/profile">Мой профиль</a>,
    },
    {
      type: "divider",
    },
    {
      key: "exit",
      label: (
        <Button
          className={styles["exit-btn"]}
          type="default"
          size="middle"
          block
        >
          Выйти
        </Button>
      ),
      style: {
        padding: 0,
      },
    },
  ];

  return (
    <Dropdown menu={{ items: dropdownItems }} trigger={["click"]} arrow={true}>
      <Button type="text" className={styles["dropdown__btn"]}>
        <span className={styles["username"]}>Username</span>
        <DownOutlined className={styles["dropdown__arrow"]} />
      </Button>
    </Dropdown>
  );
};
