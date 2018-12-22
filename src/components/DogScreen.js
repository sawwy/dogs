import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';

import { DogImage } from './DogImage';
import { fetchDog } from '../actions';

class DogScreen extends Component {
  componentDidMount() {
    const { fetchDog } = this.props;
    fetchDog();
  }

  render() {
    const { dogUrl, fetchDog, fetching, error } = this.props;
    return (
      <View>
        <DogImage dogUrl={dogUrl} fetchDog={fetchDog} fetching={fetching} error={error} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  dogUrl: state.dogReducer.dogUrl,
  fetching: state.dogReducer.fetching,
  error: state.dogReducer.error,
});

const mapDispatchToProps = {
  fetchDog,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DogScreen);

DogScreen.propTypes = {
  dogUrl: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  fetchDog: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
};
