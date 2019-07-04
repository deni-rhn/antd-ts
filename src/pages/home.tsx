import React, {Component, Fragment} from 'react';
import HeaderMenu from '../layout/header-menu';
import { Layout, Breadcrumb } from 'antd';
import SidebarMenu from '../layout/sidebar-menu';
import MasterLokasi from './master-lokasi/master-lokasi';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MasterUnit from './master-unit/master-unit';
import MasterLokasiForm from '../component/master-lokasi-form/master-lokasi-form';
import MasterUnitForm from '../component/master-unit-form/master-unit-form';
import Test from './test';

const { Content, Footer } = Layout;

class Home extends Component {
    render() {
        return(
            <Layout style={{ minHeight: '100vh' }}>
                <Router>
                    <SidebarMenu />
                    <Layout>
                        <HeaderMenu />
                        <Content style={{ margin: '0 16px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Data</Breadcrumb.Item>
                            </Breadcrumb>

                            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                                <Fragment>
                                    <Route path='/' exact  component={Test}/>
                                    <Route path='/master-unit' exact component={MasterUnit} />
                                    <Route path='/master-lokasi' exact component={MasterLokasi} />
                                    <Route path='/new-master-lokasi' exact component={MasterLokasiForm} />
                                    <Route path='/new-master-unit' exact component={MasterUnitForm} />
                                </Fragment>                            
                            </div>

                        </Content>
                        <Footer style={{ textAlign: 'center' }}>dr ©2019 Created with love</Footer>
                    </Layout>
                </Router>
            </Layout>
        );
    }
}

export default Home;