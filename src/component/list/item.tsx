import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';
import { Form, Input, Button } from 'antd';

const { TextArea } = Input;

class Item extends Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            isEdit: false,
            name: this.props.name,
            code: this.props.code,
            address: this.props.address
        };
    }

    handleChangeName = (e: any) => {
        this.setState({ name: e.target.value });
    };

    handleChangeCode = (e: any) => {
        this.setState({ code: e.target.value });
    };

    handleChangeAddress = (e: any) => {
        this.setState({ address: e.target.value });
    };

    removePost = () => {
        this.props.removePost(this.props.id);
    };

    updatePost = () => {
        this.setState({ isEdit: true });
    };

    donePost = () => {
        this.props.updatePost(this.props.id, this.state.name, this.state.code, this.state.address);
        this.setState({ isEdit: false });
    };

    renderName = () => {
        return (
            <Form.Item label="Name">
                <Input 
                        minLength={3} 
                        maxLength={20} 
                        onChange={this.handleChangeName}
                        defaultValue={this.props.name}
                        type="text"
                        name="name" 
                        required
                />
            </Form.Item>
        );
    };

    renderCode = () => {
        return (
            <Form.Item label="Code">
                <Input 
                        minLength={1} 
                        maxLength={6}
                        onChange={this.handleChangeCode}
                        defaultValue={this.props.code}
                        type="text"
                        name="code" 
                        required
                />
            </Form.Item>
        );
    };

    renderAddress = () => {
        return (
            <Form.Item label="Address">
                        
                    <TextArea 
                            rows={4}
                            onChange={this.handleChangeAddress}
                            defaultValue={this.props.address} />,
                
            </Form.Item>
        );
    };

    renderUpdateButton = () => {
        return (
            <Button type="primary" onClick={this.updatePost}>
                Update
            </Button>
        );
    };

    renderDoneButton = () => {
        return (
            <Button type="primary" onClick={this.donePost}>
                Done
            </Button>
        );
    };

    render() {
        return (
            <div>
                {this.state.isEdit ? this.renderName() : this.props.name + `: `}
                {this.state.isEdit ? this.renderCode() : this.props.code}
                {this.state.isEdit ? this.renderAddress() : this.props.address}
                <br />
                {
                    this.state.isEdit
                    ? this.renderDoneButton()
                    : this.renderUpdateButton()
                }
                <Button type="primary" onClick={this.removePost}>
                    Remove
                </Button>
            </div>
        );
    }
}

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
    null,
    mapDispatchToProps
)(Item);
