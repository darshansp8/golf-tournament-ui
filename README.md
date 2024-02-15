**Project Name**: Mini Golf Tournament UI with Real-Time Updates

**Description**: This project showcases the fundamental integration of real-time data into a user interface using Angular and Socket.IO. It simulates a live golf tournament, displaying constantly updated player data in a tabular format.

**Technology Stack**:

- Angular CLI for project scaffolding and development
- Socket.IO for real-time data communication
- HTML, SCSS, and Bootstrap for UI

**Installation**:

- Prerequisites: Node.js and npm installed on your system.
- Clone the repository: `git clone https://github.com/your-username/mini-golf-tournament-ui.git`
- Install dependencies: `npm install`

**Running the Application**:

- Serve the application: ng serve
- Open the application in your browser: http://localhost:4200

**Functionality**:

- The UI displays a table with columns for player name, score, and potentially other relevant data.
- New player data is received from the server every 10 seconds and dynamically updates the table in real-time.
- Users can  sort the table by various criteria:
    - First Name: Ascending order based on first names.
    - Last Name: Ascending order based on last names.
    - Latest Data: Display the most recently received players first.
    - Oldest Data: Display the players received earlier in the tournament first.


