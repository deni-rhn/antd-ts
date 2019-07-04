import React, {Component} from 'react';
import Item from './item';

class List extends Component<any, any> {
    render() {
        return(
            <div>
                {this.props.posts.map((post: any, index: any) => (
                    <Item {...post} key={index} id={post.id} />
                ))}
            </div>
        );
    }
}

export default List;