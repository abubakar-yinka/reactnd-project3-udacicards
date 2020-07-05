import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import TouchButton from './TouchButton';
import { gray, green, white } from '../utils/colors';
import { connect } from 'react-redux';
import { addDeck } from '../actions/index';
import { saveDeckTitle_ } from '../utils/api';
import { StackActions, NavigationActions } from 'react-navigation';

export class AddDeck extends Component {
  static propTypes = {
    addDeck: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
  };

  state = {
    text: ''
  };

  handleChange = text => {
    this.setState({ text });
  };

  handleSubmit = () => {
    const { addDeck, navigation } = this.props;

    addDeck(this.state.text);
    saveDeckTitle_(this.state.text);

    const resetAction = StackActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({ routeName: 'Home' }),
        NavigationActions.navigate({
          routeName: 'DeckView',
          params: { title: this.state.text }
        })
      ]
    });

    navigation.dispatch(resetAction);

    this.setState(() => ({ text: '' }));
  };

  render() {
    const { text } = this.state
    return (
      <View style={styles.container}>
        <View style={{ height: 100 }} />
        <View style={styles.block}>
          <Text style={styles.title}>What is the title of your new deck?</Text>
        </View>
        <View style={[styles.block]}>
          <TextInput
            style={styles.input}
            value={text}
            onChangeText={this.handleChange}
            placeholder="Deck Name"
            autoFocus={true}
            returnKeyType="done"
            onSubmitEditing={this.handleSubmit}
          />
        </View>
        <TouchButton
          btnStyle={{ backgroundColor: green, borderColor: white }}
          onPress={this.handleSubmit}
          disabled={text === ''}
        >
          Create Deck
        </TouchButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: gray
  },
  block: {
    marginBottom: 20
  },
  title: {
    textAlign: 'center',
    fontSize: 32
  },
  input: {
    borderWidth: 1,
    borderColor: gray,
    backgroundColor: white,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 10,
    fontSize: 15,
    height: 50,
    marginBottom: 20
  }
});

export default connect( null, { addDeck } )(AddDeck);
