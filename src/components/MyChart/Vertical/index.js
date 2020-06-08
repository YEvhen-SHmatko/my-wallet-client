import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import mapper from '../hendlers';
import Styles from './index.module.css';

class testV extends Component {
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
    const newTitle = options.styles.title || {};
    const newName = options.styles.name || {};
    const newValue = options.styles.value || {};
    const List = styled.ul`
      ${{
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'column',
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
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'column',
        opacity: 1,
        ...newItem,
      }}
    `;
    const Title = styled.div`
      ${{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 4,
        ...newTitle,
      }}
    `;
    const Name = styled.span`
      ${{
        marginRight: 4,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        ...newName,
      }}
    `;
    const Value = styled.span`
      ${{
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
            <Title
              style={{
                width: `${el.height}%`,
              }}
            >
              <Name>{el.name}</Name>
              <Value>{el.value}</Value>
            </Title>
            <Bar
              className={Styles.bar}
              style={{
                width: `${el.height}%`,
              }}
            />
          </Item>
        ))}
      </List>
    );
  }
}
export default testV;
