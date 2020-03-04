import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams, deleteStream } from '../../actions';

class StreamList extends React.Component{
    componentDidMount(){
        this.props.fetchStreams();
        console.log(this.props);
    }
    
    deleteStreamBtn(id){
        this.props.deleteStream(id);
    }
    
    renderAdmin(stream){
        
        if(stream.userId === this.props.currentUserId) {
            return( 
                <div className="right floated content"> 
                    <Link to= {`/stream/edit/${stream.id}`} className="ui button primary">Edit</Link>
                    <button className="ui button negative" onClick={() => this.deleteStreamBtn(stream.id)}> Delete</button>
                </div>    
            );
        }
    }

    renderCreateBtn(){
        if(this.props.isSignedIn){
            return (
                <div style={{'textAlign':'right'}}>
                    <Link to="/stream/new" className="ui button primary">
                        Create Stream
                    </Link>
                </div>
            );
        }
    }

    renderList(){
        return this.props.streams.map(stream =>{
            return(
                <div className="item" key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className="large middle aligned icon camera"/>
                    <div className="content">
                        {stream.title}
                        <div className="description"> 
                            {stream.description}
                        </div>
                    </div>
                </div>
            );
        });
    }

    render(){
        return(
            <div>
                <h1>Stream</h1>
                <div className="ui celled list">{this.renderList()}</div>
                {this.renderCreateBtn()}
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return { 
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps,
{ 
    fetchStreams,deleteStream 
})
(StreamList);