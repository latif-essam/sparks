# React Native Practice App

Welcome to the React Native Practice App! This repository contains a React Native application developed to practice and demonstrate various aspects of React Native development. The app includes navigation, state management, API integration, and data persistence, all built with TypeScript for type safety and maintainability.

## Screen Shots
coming soon
## Features

- **Navigation**: Utilizes Stack, Drawer, and Tab navigation to create a comprehensive and user-friendly navigation experience.
- **State Management**: Manages application state with Redux and Redux Thunk, integrated with Redux Persist for data persistence.
- **API Integration**: Fetches data from external APIs and handles responses efficiently.
- **Local Storage**: Saves and retrieves data using Async Storage for persistent local storage.
- **Clean Architecture**: Follows a clean app structure with modular components and well-organized code.
- **TypeScript Support**: Written in TypeScript for enhanced development experience and type safety.

## Installation

To get started with the app, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/latif-essam/sparks.git
    ```

2. **Navigate into the project directory**:
    ```bash
    cd sparks
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Run the app**:
    - For iOS:
        ```bash
        npm start ios
        ```
    - For Android:
        ```bash
        npm start android
        ```
        
    - For Web:
        ```bash
        npm start web
        ```

## Features & Implementation

### Navigation

The app uses a combination of Stack, Drawer, and Tab navigation:

- **Stack Navigation**: Manages navigation between screens in a stack-like manner.
- **Drawer Navigation**: Provides a side drawer menu for accessing different app sections.
- **Tab Navigation**: A tab bar for quick navigation between main sections is implemented.

### State Management

- **Redux**: Centralized state management for predictable state changes.
- **Redux Thunk**: Middleware for handling asynchronous actions.
- **Redux Persist**: Persisted state using Async Storage to retain state across app restarts.

### API Integration

- Fetch data from external APIs using `fetch`.
- Handle API responses and manage loading and error states.

### Local Storage

- **Async Storage**: Used for saving and retrieving data locally to maintain state across app sessions.

### Code Structure

- **Clean Architecture**: Organized project structure with separate components, screens, and services folders.
- **TypeScript**: Ensures type safety and improves code quality with explicit type definitions.

## Contributing

Feel free to submit issues or pull requests to improve the app. Contributions are welcome!

## License

This project is licensed under the MIT License.

---

Happy coding!

