import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import TouchButton from './TouchButton';
import { gray, green } from '../utils/colors';
import { connect } from 'react-redux';
import { addCardToDeck } from '../actions/index';
import { addCardToDeck_ } from '../utils/api';

export class AddCard extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    addCardToDeck: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
  };
  state = {
    question: '',
    answer: ''
  };

  handleQuestionChange = question => {
    this.setState({ question });
  };

  handleAnswerChange = answer => {
    this.setState({ answer });
  };

  handleSubmit = () => {
    const { question, answer } = this.state;
    const card = { question, answer };
    const { addCardToDeck, title, navigation } = this.props;

    addCardToDeck(title, card);
    addCardToDeck_(title, card);

    this.setState({ question: '', answer: '' });
    navigation.goBack();
  };
  render() {
    const { question, answer } = this.state;

    return (
      <View style={styles.container}>
        <View>
          <View style={styles.block}>
            <Text style={styles.title}>Add a question</Text>
          </View>
          <View style={[styles.block]}>
            <TextInput
              style={styles.input}
              value={question}
              onChangeText={this.handleQuestionChange}
              placeholder="Question"
              autoFocus={true}
              returnKeyType="next"
              onSubmitEditing={() => this.answerTextInput.focus()}
              blurOnSubmit={false}
            />
          </View>
          <View style={[styles.block]}>
            <TextInput
              style={styles.input}
              value={answer}
              onChangeText={this.handleAnswerChange}
              placeholder="Answer"
              ref={input => {this.answerTextInput = input}}
              returnKeyType="done"
              onSubmitEditing={this.handleSubmit}
            />
          </View>
          <TouchButton
            btnStyle={{ backgroundColor: green, borderColor: '#fff' }}
            onPress={this.handleSubmit}
            disabled={question === '' || answer === ''}
          >
            Submit
          </TouchButton>
        </View>
        <View style={{ height: '30%' }} />
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
    backgroundColor: gray,
    justifyContent: 'space-around'
  },
  block: {
    marginBottom: 20
  },
  title: {
    textAlign: 'center',
    fontSize: 35
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#fff',
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 10,
    fontSize: 15,
    height: 50
  }
});

const mapStateToProps = (state, { navigation }) => {
  const title = navigation.getParam('title', 'undefined');

  return {
    title
  };
};

export default connect(
  mapStateToProps,
  { addCardToDeck }
)(AddCard);
