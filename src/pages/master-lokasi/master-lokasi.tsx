import React, {Component, Fragment} from 'react';
import { Table, Button, Input } from 'antd';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';
import MasterLokasiModal from '../../shared/modals/master-lokasi-modal/master-lokasi-modal';

const { Search } = Input;

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

        find = (e: any) => {
            let arr: any = [];
            if(e.target.value !== ""){
                this.props.allPosts.forEach((x:any, r:any) => {
                    if(x.name.search(e.target.value) > 1){
                        arr.push(r);
                    }
                    this.setState({allPosts:arr});
                });
            }else{
                this.setState({allData: this.props.allPosts});
            }
        }

      
    render() {
        return(
            <Fragment>
                <div style={{display:'flex'}}>
                    <Search placeholder="search" onChange={this.find} />
                    <Link className="btn-primary-right" to='/new-master-lokasi' >Add New </Link>
                </div>
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
