# Pigeon Messaging App

A real-time messaging application built with Node.js, Express, MongoDB, React, and Socket.io, enabling users to send and receive instant messages.

## Features

- **Real-time messaging**: Utilizes Socket.io for seamless communication between users.
- **Authentication**: Secure user authentication using JWT for user sessions.
- **CRUD Operations**: Users can send, receive, and view messages.
- **Responsive Design**: Optimized for both mobile and desktop devices.
- **Deployed Backend and Frontend**: Frontend deployed on GitHub Pages, backend on Railway for scalability and reliability.

## Tech Stack

- **Frontend**: React, Context API, Socket.io
- **Backend**: Node.js, Express, MongoDB, Socket.io
- **Authentication**: JSON Web Tokens (JWT)
- **Database**: MongoDB (using Mongoose)

## Backend Repository

The backend for the Pigeon messaging app is located in a separate repository:

- [Pigeon API Repository](https://github.com/meuzishun/pigeon-api)

## Setup

### Frontend

1. Clone the repository:

   ```bash
   git clone https://github.com/meuzishun/pigeon-ui.git
   cd pigeon-ui
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the app:

   ```bash
   npm run dev
   ```

4. Open the app in your browser at [http://localhost:5173](http://localhost:5173).

### Backend

1. Clone the API repository:

   ```bash
   git clone https://github.com/meuzishun/pigeon-api.git
   cd pigeon-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up RSA key pairs (if not already generated):

   The app will automatically generate RSA keys if the necessary files aren't present in the `./keys` directory.

4. Run the API server:

   ```bash
   npm start
   ```

5. The API server will be available at [http://localhost:3000](http://localhost:3000).

## Environment Variables

Make sure to create a `.env` file in the backend project with the following variables:

```
PORT=3000
MONGODB_URI=your_mongodb_connection_string
```

## Contributing

Feel free to open issues or submit pull requests if you'd like to contribute to the project!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```

This version includes a direct link to the backend repository and emphasizes that RSA key pairs are automatically generated. Does this look good to you?
```
