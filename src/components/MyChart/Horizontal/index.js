import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import mapper from '../hendlers';
import Styles from './index.module.css';

class Horizontal extends Component {
  static defaultProps = {
    data: [],
    styles: {
      list: {},
      item: {},
      bar: {},
    },
    options: {},
  };

  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.any),
    styles: PropTypes.shape({
      list: PropTypes.objectOf(PropTypes.any),
      item: PropTypes.objectOf(PropTypes.any),
      bar: PropTypes.objectOf(PropTypes.any),
    }),
    options: PropTypes.objectOf(PropTypes.any),
  };

  state = {};

  render() {
    const { options } = this.props;
    const newData = mapper(options.data);
    const newList = options.styles.list || {};
    const newItem = options.styles.item || {};
    const newBar = options.styles.bar || {};
    const newName = options.styles.name || {};
    const newValue = options.styles.value || {};
    const List = styled.ul`
      ${{
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
        listStyle: 'none',
        boxSizing: 'border-box',
        ...newList,
      }}
    `;
    const Item = styled.li`
      ${{
        boxSizing: 'border-box',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        opacity: 1,
        ...newItem,
      }}
    `;
    const Name = styled.span`
      ${{
        height: 24,
        minHeight: 24,
        display: 'inline-block',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        ...newName,
      }}
    `;
    const Value = styled.span`
      ${{
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        ...newValue,
      }}
    `;
    const Bar = styled.div`
      ${{
        boxSizing: 'border-box',
        ...newBar,
      }}
    `;
    return (
      <List>
        {newData.map(el => (
          <Item key={el.id} className={Styles.Item}>
            <Value>{el.value}</Value>
            <Bar
              className={Styles.bar}
              style={{
                height: `${el.height}%`,
              }}
            />
            <Name>{el.name}</Name>
          </Item>
        ))}
      </List>
    );
  }
}
export default Horizontal;
