import React, {Component, Fragment} from 'react';
import { Table, Divider } from 'antd';
import { Link } from 'react-router-dom';

const { Column } = Table;

const data = [
    {
      key: '1',
      name: 'John',
      code: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim',
      code: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe',
      code: 32,
      address: 'Sidney No. 1 Lake Park',
    },
];

class MasterLokasi extends Component {
      
    render() {
        return(
            <Fragment>
                <Link className="btn-primary-right" to='/new-master-lokasi' >Add New </Link>
                <Table dataSource={data}>
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

export default MasterLokasi;