# User Management Dashboard

This is a simple React-based web application for managing users. The application allows you to view, add, edit, and delete users, with a clean and professional UI. It uses the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API for backend interactions.

## Features

- **View Users**: Displays a list of users with their details (ID, Name, Email).
- **Add User**: Add a new user via a separate form page.
- **Edit User**: Edit an existing user by navigating to a pre-filled form.
- **Delete User**: Remove a user from the list.
- **Routing**: Navigate between pages using React Router.
- **Error Handling**: Displays error messages for failed API interactions.
- **Responsive Design**: Mobile-friendly layout.

## Folder Structure
src/
|-- components/
|   |-- UserTable.js      # Displays the list of users
|-- pages/
|   |-- UserFormPage.js   # Handles user add/edit functionality
|-- App.js                # Main application entry point with routing
|-- index.js              # React DOM rendering
|-- App.css               # Styling for the entire application

## Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:
   ```bash
   cd user-management-dashboard
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm start
   ```

2. Open the application in your browser at:
   ```
   http://localhost:3000
   ```

## Usage

1. **Home Page**:
   - View the list of users.
   - Use the "Add User" button to navigate to the add user form.
   - Edit or delete users using the respective buttons.

2. **Add/Edit User Page**:
   - Fill in the form to add a new user or update an existing user's details.
   - Submit the form to save changes.

## API Details

The application uses the following endpoints from JSONPlaceholder:
- `GET /users`: Fetch all users.
- `POST /users`: Simulate adding a new user.
- `PUT /users/:id`: Simulate updating a user's details.
- `DELETE /users/:id`: Simulate deleting a user.

### Note:
JSONPlaceholder is a mock API. While it simulates successful responses, changes won't persist.

## Dependencies

- React
- React Router DOM
- Axios

### Install React Router DOM and Axios:
```bash
npm install react-router-dom axios
```

## Styling

The application is styled using modern, responsive CSS with:
- Professional layout and hover effects.
- Mobile-friendly design.

## Future Improvements

- Implement real backend integration.
- Add pagination or infinite scrolling for large user lists.
- Enhance validation and error handling.