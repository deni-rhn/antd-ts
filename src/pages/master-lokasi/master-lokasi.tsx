import React, {Component, Fragment} from 'react';
import { Table, Divider, Button } from 'antd';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';
import MasterLokasiModal from '../../shared/modals/master-lokasi-modal/master-lokasi-modal';

const { Column } = Table;

interface lokasi {
    master: any;
}
class MasterLokasi extends Component<any, any> {
    
    state = {
        visible: false,
        name:"",
        code:"",
        address:"",
        key:"",
        status:"",
        allData:[]
    }

    column = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "Code",
            dataIndex: "code",
            key: "code"
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address"
        },
        {
            title: "Action",
            key: "action",
            render: (text: any, record: any) => (
                <span>
                    <Button type="primary" style={{marginRight:'10px'}} onClick={()=>this.modalEdit("EDIT",record.id)} >Edit</Button>
                    <Button type="danger" onClick={()=> this.delete(record.id) } >Delete</Button>
                </span>
            ),
        }];

        delete = (id:number) => {
            if (window.confirm("Delete the item?")) {
                this.props.removePost(id);
            }
            console.log(id);
        }

        modalEdit = (status:string = "",value:string = "") => {
            this.setState({
                            visible:!this.state.visible,
                            name:"",
                            code:"",
                            address:"",
                            status:status,
                            key:value},()=>
                        {
              if(status === "EDIT" ){
                console.log(value);
                this.setState({
                    name:this.props.allPosts[(parseInt(value))].name,
                    code:this.props.allPosts[(parseInt(value))].code,
                    address:this.props.allPosts[(parseInt(value))].address
                });
              }
            });
        }

        handleChangeName = (e: any) => {
            this.setState({ name: e.target.value }, () => {});
        };
    
        handleChangeCode = (e: any) => {
            this.setState({ code: e.target.value }, () => {});
        };
    
        handleChangeAddress = (e: any) => {
            this.setState({ address: e.target.value }, () => {});
        };

        submitUpdate = () => {
            if(this.state.status === "ADD"){
                console.log(this.state);
            }else{
                this.props.updatePost(
                    this.state.key,
                    this.state.name,
                    this.state.code,
                    this.state.address
                );
            }
            this.setState( {visible:false} );
        }

      
    render() {
        return(
            <Fragment>
                <Link className="btn-primary-right" to='/new-master-lokasi' >Add New </Link>
                {/* <Table dataSource={this.props.allPosts}>
                    <Column title="Name" dataIndex="name" key="name" />
                    <Column title="Code" dataIndex="code" key="code" />
                    <Column title="Address" dataIndex="address" key="address" />
                    <Column title="Action" key="action" render={(text, record: any)=> (
                        <span>
                            <a href="javascript:;">Edit</a>
                            <Divider type="vertical" />
                            <a onClick={() => this.removePost()}>Delete</a>
                        </span>
                        )}
                        />
                </Table> */}
                <MasterLokasiModal
                    visible={this.state.visible}
                    update={this.submitUpdate}
                    changeName={this.handleChangeName}
                    changeCode={this.handleChangeCode}
                    changeAddr={this.handleChangeAddress}
                    valName={this.state.name}
                    valCode={this.state.code}
                    valAddr={this.state.address}
                    cancel={this.modalEdit}
                />
                <div>
                    <Table columns={this.column} dataSource={this.props.allPosts} />
                </div>

            </Fragment>
        );
    }
}

const mapStateToProps = (state:any) => {
    return {
        allPosts: state.post
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        removePost: (id: number) => {
            dispatch(actions.removePost(id));
        },
        updatePost: (id: number, name: string, code: string, address: string) => {
            dispatch(actions.updatePost(id, name, code, address));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MasterLokasi);
