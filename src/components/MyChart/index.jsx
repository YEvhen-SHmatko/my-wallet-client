import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as selectors from '../../redux/selectors';
import Horizontal from './Horizontal';
import Vertical from './Vertical';
import { Mobile, Default } from '../../services/mediaQuery';
import Styles from './index.module.css';
import Wrapper from '../Wrapper';

const MyChart = ({ data }) => {
  const HorizontalOptions = {
    data,
    styles: {
      list: {
        width: '100%',
        height: '100%',
        padding: 20,
        color: '#52555f',
        fontSize: '11px',
        background: 'transparent',
        display: 'flex',
        justifyContent: 'center',
      },
      item: {
        maxWidth: 80,
      },
      bar: {
        width: 40,
        margin: '0 20px',
        background: '#edcbbbcc',
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        borderBottomLeftRadius: '0px',
        borderBottomRightRadius: '0px',
      },
      name: {
        width: '100%',
        borderTop: '1px solid #cccccc',
        textAlign: 'center',
        fontSize: '13px',
        paddingTop: 4,
      },
    },
    options: {
      title: true,
      value: true,
    },
  };
  const VerticalOptions = {
    data,
    styles: {
      list: {
        width: '100%',
        color: '#52555f',
        fontSize: '11px',
        padding: 20,
        background: 'transparent',
      },
      item: {
        height: 60,
        borderBottom: '1px solid #cccccc',
      },
      bar: {
        height: 16,
        margin: '4px 0 10px',
        background: '#edcbbbcc',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 8,
      },
    },
    options: {
      title: true,
      value: true,
    },
  };
  return (
    <>
      {!!data.length && (
        <Wrapper className={Styles.section}>
          <Mobile>
            <Vertical options={VerticalOptions} />
          </Mobile>
          <Default>
            <Horizontal options={HorizontalOptions} />
          </Default>
        </Wrapper>
      )}
    </>
  );
};

MyChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.number,
    }).isRequired,
  ).isRequired,
};
const MSTP = store => ({
  data: selectors.getDataCharts(store),
});
export default connect(MSTP)(MyChart);
