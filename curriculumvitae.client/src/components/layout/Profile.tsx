import { useAuthContext } from '@/components/auth/context';
import { Button, Flex, Popover } from 'antd';
import Avatar from 'antd/es/avatar/Avatar';
import axios from 'axios';

export const Profile = () => {

    const authContext = useAuthContext();

    const handleLogout = () => {
        axios.post("/auth/logout")
            .then(() => window.location.reload())
    }

    if (!authContext.isLogged) {
        return (
            <Popover
                placement="bottomRight"
                content={
                    <Flex vertical>
                        <Button href="/login">Login</Button>
                    </Flex>
                }>
                <Avatar />
            </Popover>
        );
    }

    return (
        <Popover
            placement="bottomRight"
            content={
                <Flex vertical>
                    <span>{authContext.user!.given_name} {authContext.user!.surname}</span>
                    <span>{authContext.user!.email}</span>
                    <Button onClick={handleLogout}>Logout</Button>
                </Flex>
            }>
            <Avatar
                className="profile-picture"
                src={authContext.user!.picture} />
        </Popover>
    );
}