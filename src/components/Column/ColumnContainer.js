import { connect } from 'react-redux';
import Column from './Column.js';
import { getCardsForColumn, createActionAddCard } from '../../redux/cardsRedux.js';

const mapStateToProps = (state, props) => {
    return {
        cards: getCardsForColumn(state, props.id, props.listId),
    };
};

const mapDispatchToProps = (dispatch, props) => ({
    addCard: title => dispatch(createActionAddCard({
        columnId: props.id,
        title,
    })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);