# Cricket Team Builder

## 🚀 Live Demo

Check out the live preview of the Cricket Team Builder app
[here](my-dream-eleven-team.surge.sh).

---

## 🏏 Project Overview

Cricket Team Builder is a React-based application that allows users to assemble
and manage a custom cricket team by selecting players from a list. It uses
virtual coins as currency, enabling users to add players to their team within a
set coin limit. Players can be removed as needed, and the app provides real-time
feedback with notifications.

## 📸 Screenshots

![App Screenshot 1](link_to_screenshot1.png)
![App Screenshot 2](link_to_screenshot2.png)

## ✨ Key Features

1. **Dynamic Coin Balance Management**: Users earn coins and spend them to add
   players to their team.
2. **Player Selection and Removal**: Select players from a list and manage your
   selected team within a 6-player limit.
3. **Real-Time Notifications**: Integrated with React-Toastify for smooth and
   user-friendly notifications.

## 🛠️ Technologies Used

- **React**: JavaScript library for building the UI
- **React-Toastify**: For user notifications
- **CSS (or Tailwind CSS)**: For styling, adhering to Figma's design
- **Vite**: Fast React app development setup

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your
local machine.

### Prerequisites

- **Node.js** and **npm** installed
- Basic knowledge of React and state management

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/cricket-team-builder.git
   cd cricket-team-builder
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the app in your
   browser.

## 📂 Project Structure

- `src/components`: Contains all reusable components such as Navbar, Banner,
  PlayerCard, SelectedPlayers, Newsletter, and Footer.
- `src/data/players.json`: JSON file holding player data with details like
  player name, role, country, etc.
- `src/App.js`: Main application component that integrates all sections.
- `public/index.html`: Set the title of the web app here.

## 🧩 How It Works

- **Coin Management**: The Navbar displays the user's coin balance. Users can
  increase their coin balance by clicking a button in the Banner section.
- **Player Selection and Validation**:
  - Clicking “Choose Player” on a player card will check if the user has enough
    coins to add the player.
  - If the player is already selected or the selected player count reaches 6, a
    notification will prevent further selection.
  - Selected players appear in the “Selected Players” section with the option to
    remove any player.
- **Notification System**: All alerts use React-Toastify for a smoother user
  experience.

## 📄 Components Breakdown

### Navbar

Displays the user's current coin balance.

### Banner

Includes a button to add coins, increasing the user’s balance for player
purchases.

### Available Players and Selected Players

List players in a grid format and allows toggling between the available and
selected players sections.

### PlayerCard

Displays player information, including their name, role, and a "Choose Player"
button for selection.

### Footer & Newsletter

Styled according to Figma to add a polished finish to the app.

## 🌟 Challenges

1. **React-Toastify for Alerts**: Replacing all alert messages with Toast
   notifications for better UX.
2. **Player Selection Validation**: Ensuring a player can be selected only once,
   and limiting the selection to 6 players.
3. **Coin Validation**: Preventing selection if the user does not have enough
   coins.

## 👩‍💻 Future Improvements

- Add a “Favorite Player” feature.
- Integrate with a backend to persist player selection data.
- Implement authentication for personalized team management.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file
for details.

---

### 💬 Contact

For questions or feedback, please reach out via
[Your Email Address](mailto:youremail@example.com).

---

**Enjoy managing your Cricket Dream Team! 🏏**
