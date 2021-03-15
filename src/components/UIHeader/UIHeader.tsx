import { Menu } from "antd";
import { Logo, StyledHeader } from "./styles";

const UIHeader = () => {
    return (
        <StyledHeader style={{ position: "fixed", zIndex: 1, width: "100%" }}>
            <Logo />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
                <Menu.Item key="1">Home</Menu.Item>
                <Menu.Item key="2">Movie List</Menu.Item>
                <Menu.Item key="3">More</Menu.Item>
            </Menu>
        </StyledHeader>
    );
};

export default UIHeader;
