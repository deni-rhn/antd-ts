import React, {Component} from 'react';
import { Layout, Menu, Icon } from 'antd';
import {Link} from 'react-router-dom';

const { Sider } = Layout;

class SidebarMenu extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed : any) => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        return(
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                <div className="tc">
                    <img className="logo-sb" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Logo_PLN.svg/1280px-Logo_PLN.svg.png" />
                </div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="master-unit">
                        <Link to='/master-unit'>
                            <Icon type="pie-chart" />
                            <span className="btn">Master Unit</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="master-lokasi">
                        <Link to='/master-lokasi'>
                            <Icon type="desktop" />
                            <span className="btn">Master Lokasi</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}

export default SidebarMenu;