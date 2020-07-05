import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import Deck from './Deck';
import TouchButton from './TouchButton';
import TextButton from './TextButton';
import { gray, textGray, green, white, red } from '../utils/colors';
import { connect } from 'react-redux';
import { removeDeck } from '../actions/index';
import { removeDeck_ } from '../utils/api';
import { NavigationActions } from 'react-navigation';

export class DeckView extends Component {
  static propTypes = {
    deck: PropTypes.object,
    removeDeck: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
  };

  shouldComponentUpdate(nextProps) {
    return nextProps.deck !== undefined;
  }

  handleDelete = id => {
    const { removeDeck, navigation } = this.props;

    removeDeck(id);
    removeDeck_(id);

    navigation.goBack();
  };

  render() {
    const { deck, navigation } = this.props;

    return (
      <View style={styles.container}>
        <Deck id={deck.title} />
        <View>
          <TouchButton
            btnStyle={{ backgroundColor: white, borderColor: textGray }}
            txtStyle={{ color: textGray }}
            onPress={() => navigation.navigate('AddCard', { title: deck.title })}
          >
            Add a Card
          </TouchButton>
          <TouchButton
            btnStyle={{ backgroundColor: green, borderColor: white }}
            txtStyle={{ color: white }}
            onPress={() => navigation.navigate('Quiz', { title: deck.title })}
          >
            Start Your Quiz
          </TouchButton>
        </View>
        <TextButton
          txtStyle={{ color: red }}
          onPress={() => this.handleDelete(deck.title)}
        >
          Delete This Deck
        </TextButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: gray
  }
});

const mapStateToProps = (state, { navigation }) => {
  const title = navigation.getParam('title', 'undefined');
  const deck = state[title];

  return {
    deck
  };
};

export default connect( mapStateToProps, { removeDeck } )(DeckView);
