import '../styles.css';
import style from './image.module.css';
import { Component } from 'react';

export class Modal extends Component {

componentDidMount() {
  document.addEventListener('keydown', e => {

    if (e.key === 'Escape') {
      this.props.quitModal();
    }
  });
}

componentWillUnmount() {
  document.removeEventListener('keydown', e => {

    if (e.key === 'Escape') {
      this.props.quitModal();
    }
  })
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
