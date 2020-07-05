//MainNavigatorTab contains tabNavigaor and stackNavigator
import React from 'react';
import { Platform } from 'react-native';
import * as Icon from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import DeckList from '../components/DeckList';
import AddDeck from '../components/AddDeck';
import DeckView from '../components/DeckView';
import AddCard from '../components/AddCard';
import Quiz from '../components/Quiz';
import Settings from '../components/Settings';
import { darkGray, white, green, lightGreen } from '../utils/colors';

const Tabs = createBottomTabNavigator({
  Decks: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => (
        <Icon.Ionicons
          name={Platform.OS === 'ios' ? 'ios-bookmarks' : 'md-bookmarks'}
          size={30}
          color={tintColor}
        />
      )
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => (
        <Icon.FontAwesome name="plus-square" size={30} color={tintColor} />
      )
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => (
        <Icon.FontAwesome name="sliders" size={30} color={tintColor} />
      )
    }
  }
}, {
  navigationOptions: {
    headerShown: false
  },
  defaultNavigationOptions: {
    bounces: true
  },
  tabBarOptions: {
    activeTintColor: green,
    style: {
      height: 60,
      backgroundColor: white,
      shadowColor: 'rgba(0,0,0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1,
      borderTopWidth: 1,
      borderTopColor: darkGray
    },
    labelStyle: {
      fontSize: 12,
      fontWeight: 'bold'
    },
    tabStyle: {
      marginTop: 5,
      marginBottom: 3
    },
    showIcon: true
  }
});

const MainTabNavigator = createStackNavigator(
  {
    Home: {
      screen: Tabs
    },
    DeckView: {
      screen: DeckView,
      navigationOptions: {
        headerTintColor: green,
        headerStyle: {
          backgroundColor: lightGreen
        },
        title: 'Deck View'
      }
    },
    AddCard: {
      screen: AddCard,
      navigationOptions: {
        headerTintColor: green,
        headerStyle: {
          backgroundColor: lightGreen
        },
        headerTitleStyle: {
          justifyContent: 'center',
          textAlign: 'center'
        },
        title: 'Add Card'
      }
    },
    Quiz: {
      screen: Quiz,
      navigationOptions: {
        headerTintColor: green,
        headerStyle: {
          backgroundColor: lightGreen
        }
      }
    }
  },
  { headerTitleAlign: 'center' }
);

const AppContainer = createAppContainer(MainTabNavigator);

// Now AppContainer is the main component for React to render

export default AppContainer
