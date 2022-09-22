import '../styles.css';
import style from './image.module.css';
import { Component } from 'react';
import { render } from '@testing-library/react';

class Modal extends Component {

componentDidMount() {
  document.addEventListener('keydown', e => {

    if (e.key === 'Escape') {
      this.props.quitModal();
    }
  });
}
  

render() {
  return (
    <div className={style.Overlay} onClick={this.props.quitModal}>
      <div className={style.Modal}>
        <img width="1000px" height="auto" src={this.props.largePhoto} alt="" />
      </div>
    </div>
  );
}
}



export default Modal;
