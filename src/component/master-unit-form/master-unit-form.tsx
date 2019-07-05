import React, {Component, Fragment} from 'react';
import { Form, Select, Input, Button } from 'antd';
import * as actions from '../../actions/index';
import {connect} from 'react-redux';

const { TextArea } = Input;
const { Option } = Select;

interface data {
    masterLok: any;
}

class MasterUnitForm extends Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            nameUnit: "",
            codeUnit: "",
            master:""
        };
    }



    handleInput = (field:string) => (ev:any) => {
        this.setState({ [field]: ev.target.value });
        console.log(this.state);
    }

    handleSelectChange = (value: any) => {
        console.log(value);
        this.props.form.setFieldsValue({
            note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
        });
    };


    handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.addPost(this.state.name, this.state.code, this.state.address);
        console.log(this.state);
    };

    render() {

        return(
            <Fragment>
                <h3 className="text-center">Add Data For Master Unit</h3>
                <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
                    <Form.Item label="Name">
                        <Input 
                                minLength={3} 
                                maxLength={20} 
                                onChange={this.handleInput('name')}
                                type="text"
                                value={this.state.name}
                                name="name" 
                                required
                        />
                    </Form.Item>
                    <Form.Item label="Code">
                        <Input 
                                minLength={1} 
                                maxLength={6}
                                onChange={this.handleInput('code')}
                                value={this.state.code}
                                type="text"
                                name="code" 
                                required
                        />
                    </Form.Item>
                    <Form.Item label="Address">
                        
                            {/* <TextArea 
                                    rows={4}
                                    onChange={this.handleInput('address')}
                                    value={this.state.address} />, */}

                        <Select placeholder="Select a option and change input text above"
                            onChange={this.handleSelectChange}>
                            <Option value="master-unit-1">master-unit-1</Option>
                            <Option value="master-unit-2">master-unit-2</Option>
                        </Select>, 
                        
                    </Form.Item>
                    <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Fragment>
        );
    }
}

const toProps = (state: any) => {
    return {
        masterLok: state.masterLokasi
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: (name:string, code:string, address:string) => {
            dispatch(actions.addPost(name, code, address));
        }
    };
};

export default connect(
    toProps,
    mapDispatchToProps 
)(MasterUnitForm);
