# IRCTC Refund Calculator

A modern, user-friendly web application to calculate cancellation charges and refund amounts for Indian Railway bookings. Built with React, TypeScript, and Tailwind CSS.

![Refund Calculator](https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=1200&h=400)

## 🚀 Features

- **Comprehensive Cancellation Support**: Calculate refunds for all train classes (1A/EC/2A, 3A/CC/3E, SL, 2S).
- **Various Booking Statuses**: Handles Confirmed, RAC, and Waitlisted tickets.
- **Timing Logic**: Accurate calculations based on cancellation timing:
  - More than 48 hours before departure
  - 48 to 12 hours before departure
  - 12 to 4 hours before departure
  - Less than 4 hours / After chart preparation
- **Special Scenarios**:
  - **Tatkal**: Calculations for confirmed and waitlisted Tatkal tickets.
  - **Train Cancelled**: Logic for when the train is cancelled by railways (Full Refund).
- **Instant Explanations**: Provides a clear explanation for how the refund/charge was calculated based on IRCTC rules.
- **Responsive Design**: Fully responsive UI powered by Tailwind CSS and Shadcn UI components.
- **Dark Mode Support**: Seamless integration with system theme preferences.

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://reactjs.org/) (v18)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) / [Shadcn UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: React Hooks (`useState`)

## 📦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd refundCalculator
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:8080` (or similar port).

### Building for Production

To create a production-ready build:

```bash
npm run build
```

The output will be in the `dist/` directory.

### Linting

To check for code quality issues:

```bash
npm run lint
```

## 📐 Project Structure

```
src/
├── components/         # React components
│   ├── ui/             # Reusable UI components (buttons, inputs, etc.)
│   ├── Calculator.tsx  # Main calculator logic and UI
│   ├── Hero.tsx        # Landing page hero section
│   └── ...
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── App.tsx             # Main application component
└── main.tsx            # Entry point
```

## 📝 IRCTC Refund Rules Implemented

The calculator adheres to the following general rules (subject to change by IRCTC):

*   **Confirmed Tickets (48h+)**: Flat cancellation charge based on class.
*   **Confirmed Tickets (48h-12h)**: 25% of fare (subject to min flat charge).
*   **Confirmed Tickets (12h-4h)**: 50% of fare (subject to min flat charge).
*   **Confirmed Tickets (<4h)**: No refund.
*   **Waitlisted/RAC**: Flat clerkage charge (₹60).
*   **Tatkal**: No refund for confirmed tickets; clerkage for WL/RAC.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
