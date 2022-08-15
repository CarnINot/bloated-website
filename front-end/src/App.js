import logo from './logo.svg';
import './App.css';
import './style.css';

function TheContent(props){
    return (
	<>

	    <div dangerouslySetInnerHTML={{__html: "<div> <h1>"+ props.heading + "</h1> </div>" +  props.articleContent}}>
	    
	</div>
	    </>
	    
    );
}



export default TheContent;
