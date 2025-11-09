import { Layout as AntdLayout } from "antd";
import { useState } from "react";
import { ChatButton } from "@/components/chat/ChatButton";
import { MenuSider } from "./MenuSider";
import { ChatSider } from "./ChatSider";
import { LayoutHeader } from "./LayoutHeader";
import { MainContent } from "./MainContent";
import "./Layout.css";

export const Layout = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [chatOpen, setChatOpen] = useState(false);

    const toggleMenuOpen = () => {
        setMenuOpen(!menuOpen)
    }

    const toggleChatOpen = () => {
        setChatOpen(!chatOpen);
    }

    return (
        <AntdLayout style={{ height: "100vh" }}>
            <LayoutHeader onMenuButtonClick={toggleMenuOpen} />
            <AntdLayout>
                <MenuSider open={menuOpen} />
                <MainContent />
                <ChatSider
                    open={chatOpen}
                    onCloseButtonClick={toggleChatOpen} />
                {!chatOpen && <ChatButton onClick={toggleChatOpen} />}
            </AntdLayout>
        </AntdLayout>
    );
}