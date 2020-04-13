import { connect } from 'react-redux';
import ChooseContinent from '../components/ChooseContinent';
import { choose, ExtractItemsAction } from '../actions';



const mapStateToProps = state => ({
    data : state
})

const mapDispatchToProps = dispatch => {
    return {
        choose: (text) => dispatch(choose(text))
        //ExtractItemsAction: (text) => dispatch(ExtractItemsAction(text)),
    }  
}

export default connect(mapStateToProps,mapDispatchToProps)(ChooseContinent);