import { connect } from 'react-redux'
import Modal from '../components/Modal/Modal';
import { closeModal, сloseAndSave } from '../actions/modal';
import { updateBooks } from '../actions/books';
import { openNotify } from '../actions/notify';
import { updateHistory } from '../actions/history';
const mapStateToProps = ({modal}) => {
  return modal;
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => {
      dispatch(closeModal())
    },
    closeAndSave: (form) => {
      dispatch(сloseAndSave(form));
      dispatch(updateBooks());
      if(form.id === 0) {
        dispatch(openNotify(form.title));
        dispatch(updateHistory(form));
      }
    }
  }
}

const ModalContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Modal)

export default ModalContainer