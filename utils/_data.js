export const decks = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'The Uniqueness of React are due to?',
        answer: 'Its compositional model, its declarative model, and the way data flows through a component'
      },
      {
        question: 'What is virtual DOM?',
        answer: 'Virtual DOM is an internal representation of the rendered UI'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is an asynchronous function?',
        answer:
          'An asynchronous function is a function which operates asynchronously via the event loop, using an implicit Promise to return its result. But the syntax and structure of your code using async functions is much more like using standard synchronous functions'
      }
    ]
  },
  Redux: {
    title: 'Redux',
    questions: [
      {
        question: 'What is Redux?',
        answer: 'Redux is an open-source JavaScript library for managing application state, a predictable state container for JavaScript Apps'
      },
      {
        question: 'What is an action creator?',
        answer:
          'The most common use case for middleware is to support asynchronous actions without much boilerplate code or a dependency on a library like Rx. It does so by letting you dispatch async actions in addition to normal actions.'
      },
      {
        question: 'What are actions?',
        answer:
          'Actions are payloads of information that send data from your application to your store. They are the only source of information for the store retrieved by invoking store.dispatch().'
      }
    ]
  }
};
