import React, {Component, Fragment} from 'react';
import { Table, Divider } from 'antd';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

const { Column } = Table;

class MasterLokasi extends Component<any, any> {
      
    render() {
        return(
            <Fragment>
                <Link className="btn-primary-right" to='/new-master-lokasi' >Add New </Link>
                <Table dataSource={this.props.allPosts}>
                    <Column title="Name" dataIndex="name" key="name" />
                    <Column title="Code" dataIndex="code" key="code" />
                    <Column title="Address" dataIndex="address" key="address" />
                    <Column title="Action" key="action" render={(text, record)=> (
                        <span>
                            <a href="javascript:;">Edit</a>
                            <Divider type="vertical" />
                            <a href="javascript:;">Delete</a>
                        </span>
                        )}
                        />
                </Table>
            </Fragment>
        );
    }
}

const mapStateToProps = (state:any) => {
    return {
        allPosts: state.post
    };
};

export default connect(
    mapStateToProps,
    null
)(MasterLokasi);
