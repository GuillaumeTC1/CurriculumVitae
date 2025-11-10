import { Layout as AntdLayout } from "antd";
import { useState } from "react";
import { ChatButton } from "@/components/chat/ChatButton";
import { MenuSider } from "./MenuSider";
import { ChatSider } from "./ChatSider";
import { LayoutHeader } from "./LayoutHeader";
import { MainContent } from "./MainContent";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import "./Layout.css";

export const Layout = () => {

    const navigate = useNavigate();

    const isSmallScreen = useMediaQuery({ maxWidth: 768 });

    const [menuOpen, setMenuOpen] = useState(false);
    const [chatOpen, setChatOpen] = useState(false);

    const toggleMenuOpen = () => {
        setMenuOpen(!menuOpen)
    }

    const toggleChatOpen = () => {
        if (isSmallScreen && !chatOpen) {
            navigate("/chat");
        } else {
            setChatOpen(!chatOpen);
        }
    }

    const handleMenuItemClick = () => {
        if (isSmallScreen) {
            setMenuOpen(false);
        }
    }

    return (
        <AntdLayout style={{ height: "100%" }}>
            <LayoutHeader
                onMenuButtonClick={toggleMenuOpen} />
            <AntdLayout>
                <MenuSider
                    open={menuOpen}
                    onMenuItemClick={handleMenuItemClick} />
                <MainContent />
                <ChatSider
                    open={chatOpen && !isSmallScreen}
                    onBackButtonClick={toggleChatOpen} />
                {!chatOpen && <ChatButton onClick={toggleChatOpen} />}
            </AntdLayout>
        </AntdLayout>
    );
}