import { useAuthContext } from '@/components/auth/context';
import { Button, Flex, Popover, Typography } from 'antd';
import Avatar from 'antd/es/avatar/Avatar';

export const Profile = () => {

    const authContext = useAuthContext();

    const handleLogout = () => {
        fetch("/auth/logout", { method: "POST" })
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
                <Flex vertical
                    gap="small">
                    <Typography.Text>{authContext.user!.given_name} {authContext.user!.surname}</Typography.Text>
                    <Typography.Text>{authContext.user!.email}</Typography.Text>
                    <Button onClick={handleLogout}>Logout</Button>
                </Flex>
            }>
            <Avatar
                className="profile-picture"
                src={authContext.user!.picture} />
        </Popover>
    );
}