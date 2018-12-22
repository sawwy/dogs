import React from 'react';
import { PropTypes } from 'prop-types';
import { TouchableWithoutFeedback, Image, View, ActivityIndicator } from 'react-native';

export const DogImage = ({ dogUrl, fetchDog, fetching }) => {
  if (fetching) {
    return <ActivityIndicator size="large" color="#003366" />;
  }

  if (dogUrl) {
    return (
      <TouchableWithoutFeedback onPress={fetchDog}>
        <Image source={{ uri: dogUrl }} style={{ width: 400, height: 400 }} />
      </TouchableWithoutFeedback>
    );
  }
  return <View />;
};

DogImage.propTypes = {
  dogUrl: PropTypes.string.isRequired,
  fetching: PropTypes.bool.isRequired,
  fetchDog: PropTypes.func.isRequired,
};
