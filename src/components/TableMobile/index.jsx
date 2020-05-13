import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import routes from '../../routes';
import { Mobile, Default } from '../../services/media-query';
import test from './MOCK_DATA.json';
import Styles from './index.module.css';
import Trash from '../Trash';
import Cost from '../Cost';
import Date from '../Date';
import Category from '../Category';
import Name from '../Name';
import Button from '../Button';
import Modal from '../Modal';

class index extends Component {
  state = {
    isModal: false,
  };

  openModal = () => {
    this.setState({ isModal: true });
  };

  closeModal = () => {
    this.setState({ isModal: false });
  };

  render() {
    const { isModal } = this.state;
    const height =
      window.innerHeight - 364 < 180 ? 180 : window.innerHeight - 364;
    return (
      <>
        <Mobile>
          {isModal ? (
            <div
              className={Styles.modal}
              style={{
                width: window.innerWidth,
                left: `-${(window.innerWidth - 320) / 2}px`,
              }}
            >
              <Modal onClick={this.closeModal} />
            </div>
          ) : (
            <>
              <section
                className={Styles.section}
                style={{ height: `${height}px` }}
              >
                <ul className={Styles.list}>
                  {test.map(item => (
                    <li key={item.id} className={Styles.item}>
                      <div className={Styles.M_first}>
                        <Name name={item.name} />
                        <div className={Styles.M_info}>
                          <Date date={item.date} />
                          <Category category={item.category} />
                        </div>
                      </div>
                      <div className={Styles.M_second}>
                        <Cost cost={item.cost} />
                        <Trash id={item.id} />
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
              <section>
                <Button title="Pасход" onClick={this.openModal} />
                <Button title="Доход" onClick={this.openModal} />
              </section>
            </>
          )}
        </Mobile>
        <Default>
          <Redirect to={routes.Expenses.path} />
        </Default>
      </>
    );
  }
}

export default index;
