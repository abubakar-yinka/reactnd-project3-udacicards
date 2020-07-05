import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import Deck from './Deck';
import { gray, green  } from '../utils/colors';
import { handleInitialData } from '../actions/index';

export class DeckList extends Component {
  static propTypes = {
    decks: PropTypes.object.isRequired,
    handleInitialData: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    const { decks, navigation } = this.props;

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Mobile Flashcards</Text>
        {Object.values(decks).map(deck => {
          return (
            <TouchableOpacity
              key={deck.title}
              onPress={() => navigation.navigate('DeckView', { title: deck.title })}
            >
              <Deck id={deck.title} />
            </TouchableOpacity>
          );
        })}
        <View style={{ marginBottom: 30 }} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: gray
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
    marginBottom: 20,
    color: green
  }
});

const mapStateToProps = state => ({ decks: state });

export default connect( mapStateToProps, { handleInitialData } )(DeckList);
