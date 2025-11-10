import { Chat } from "@/components/chat/Chat";
import { Page } from "@/components/page/Page";
import { useNavigate } from "react-router-dom";

const ChatPage = () => {

    const navigate = useNavigate();

    return (
        <Page title="AI Chat">
            <Chat
                onBackButtonClick={() => navigate(-1)} />
        </Page>
    );
}

export default ChatPage;