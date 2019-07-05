import React, {Component, Fragment} from 'react';
import { Form, Select, Input, Button } from 'antd';
import * as actions from '../../actions/unit/index';
import {connect} from 'react-redux';
import item from '../list/item';
import { Redirect } from 'react-router';

const { TextArea } = Input;
const { Option } = Select;

class MasterUnitForm extends Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            nameUnit: "",
            codeUnit: "",
            unitUnit:"",
            fireRedirect: false
        };        
    }



    handleInput = (field:string) => (ev:any) => {
        this.setState({ [field]: ev.target.value });
        console.log(this.state);
    }

    handleSelectChange = (value: any) => {
        console.log(value);
    };


    handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.addPostUnit(this.state.nameUnit, this.state.codeUnit, this.state.unit);
        console.log(this.state);
    };



    render() { 
        // const { from } = this.props.location.state || '/'
        // const { fireRedirect } = this.state

        return(
            <Fragment>
                <h3 className="text-center">Add Data For Master Unit</h3>
                <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
                    <Form.Item label="Name">
                        <Input 
                                minLength={3} 
                                maxLength={20} 
                                onChange={this.handleInput('nameUnit')}
                                type="text"
                                value={this.state.nameUnit}
                                name="name" 
                                required
                        />
                    </Form.Item>
                    <Form.Item label="Code">
                        <Input 
                                minLength={1} 
                                maxLength={6}
                                onChange={this.handleInput('codeUnit')}
                                value={this.state.codeUnit}
                                type="text"
                                name="code" 
                                required
                        />
                    </Form.Item>
                    <Form.Item label="Master Unit">
                        
                            <TextArea 
                                    rows={4}
                                    onChange={this.handleInput('unit')}
                                    value={this.state.unit} />,

                        {/* <Select placeholder="Select a option and change input text above"
                            onChange={this.handleSelectChange}>
                            <Option value="test">test</Option>
                        </Select>  */}
                        
                    </Form.Item>
                    <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
                {/* {fireRedirect && (
                    <Redirect to={from || '/master-unit'}/>
                )} */}
            </Fragment>
        );
    }
}

const toProps = (state: any) => {
    return {
        allPosts : state.allPosts
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addPostUnit: (nameUnit:string, codeUnit:string, unit:string) => {
            dispatch(actions.addPostUnit(nameUnit, codeUnit, unit));
        }
    };
};

export default connect(
    toProps,
    mapDispatchToProps 
)(MasterUnitForm);
