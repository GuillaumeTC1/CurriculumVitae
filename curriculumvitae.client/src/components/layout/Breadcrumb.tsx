import { Breadcrumb as AntdBreadcrumb } from "antd";

export const Breadcrumb = () => {

    return (
        <AntdBreadcrumb
            items={[{ title: 'Home' }, { title: 'Resume' }]}
            style={{ margin: '8px 0' }} />
    );
}