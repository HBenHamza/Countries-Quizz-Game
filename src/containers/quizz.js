import { connect } from 'react-redux';
import Quizz from '../components/Quizz';
import { choose, ExtractItemsAction } from '../actions';



const mapStateToProps = state => ({
    data : state
})

const mapDispatchToProps = dispatch => {
    return {
        ExtractItemsAction: (text) => dispatch(ExtractItemsAction(text))
    }  
}

export default connect(mapStateToProps,mapDispatchToProps)(Quizz);