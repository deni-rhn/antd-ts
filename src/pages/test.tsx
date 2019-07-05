import React, {Component} from 'react';
import MasterUnitForm from '../component/master-unit-form/master-unit-form';
import MasterLokasiForm from '../component/master-lokasi-form/master-lokasi-form';
import List from '../component/list/list';
import {connect} from 'react-redux';

class Test extends Component<any, any> {
    render() {
        return(
            <div>
                <MasterUnitForm />
                <List posts={this.props.allPosts} />
            </div>
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
)(Test);
