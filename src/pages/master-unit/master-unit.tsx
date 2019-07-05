import React, {Component, Fragment} from 'react';
import { Table, Divider, Button } from 'antd';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../actions/unit/index';
import MasterUnitModal from '../../shared/modals/master-unit/master-unit-modal';

const { Column } = Table;


class MasterUnit extends Component<any, any> {

    state = {
        visible: false,
        nameUnit:"",
        codeUnit:"",
        unit:"",
        key:"",
        status:"",
        allData:[]
    }

    addData = (status: string) => {
        console.log(status);
    }

    column = [
        {
            title : 'Name',
            dataIndex: 'nameUnit',
            key: 'nameUnit'
        },
        {
            title : 'Code',
            dataIndex: 'codeUnit',
            key: 'codeUnit'
        },
        {
            title : 'Unit',
            dataIndex: 'unit',
            key: 'unit'
        },
        {
            title: 'Action',
            key: 'action',
            render: (text:string, record:any) => (
              <span>
                <Button type="primary" style={{marginRight:'10px'}} onClick={()=>this.modalEdit('EDIT',record.key)} >Edit</Button>
                <Button type="danger" onClick={()=> this.delete(record.id) } >Delete</Button>
              </span>
            ),
        }];

        delete = (id:number) => {
            if (window.confirm("Delete the item?")) {
                this.props.removePostUnit(id);
            }
            console.log(id);
        }

        modalEdit = (status:string = "",value:string = "") => {
            let select;
            if(this.props.allPosts.length > 0){
                select = this.props.allPosts[0].key;
            }else{
                select ="";
            }
            this.setState({
                            visible:!this.state.visible,
                            nameUnit:"",
                            codeUnit:"",
                            unitUnit:"",
                            status:status,
                            key:value},()=>
                        {
              if(status === "EDIT" ){
                console.log(value);
                this.setState({
                    name:this.props.allPosts[(parseInt(value))].nameUnit,
                    code:this.props.allPosts[(parseInt(value))].codeUnit,
                    unit:this.props.allPosts[(parseInt(value))].unit
                });
              }
            });
        }

        handleChangeName = (e: any) => {
            this.setState({ nameUnit: e.target.value }, () => {});
        };
    
        handleChangeCode = (e: any) => {
            this.setState({ codeUnit: e.target.value }, () => {});
        };
    
        handleChangeUnit = (e: any) => {
            this.setState({ unit: e.target.value }, () => {});
        };

        submitUpdate = () => {
            if(this.state.status === "ADD"){
                console.log(this.state);
            }else{
                this.props.updatePostUnit(
                    this.state.key,
                    this.state.nameUnit,
                    this.state.codeUnit,
                    this.state.unit
                );
            }
            this.setState( {visible:false} );
        }

    render() {
        return(
            <Fragment>
                <Link className="btn-primary-right" to='/new-master-unit' onClick={() => this.addData("ADD")} >Add New </Link>
                <MasterUnitModal 
                    visible={this.state.visible}
                    update={this.submitUpdate}
                    changeName={this.handleChangeName}
                    changeCode={this.handleChangeCode}
                    changeUnit={this.handleChangeUnit}
                    valName={this.state.nameUnit}
                    valCode={this.state.codeUnit}
                    valUnit={this.state.unit}
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
        allPosts: state.postUnit
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        removePostUnit: (id: number) => {
            dispatch(actions.removePostUnit(id));
        },
        updatePostUnit: (id: number, nameUnit: string, codeUnit: string, unit: string) => {
            dispatch(actions.updatePostUnit(id, nameUnit, codeUnit, unit));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MasterUnit);

