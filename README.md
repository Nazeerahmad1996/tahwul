# Tahwul Dashboard

Hey! Thanks for checking out this dashboard code. Here's the lowdown on how to get it running and what went into building it.

## How to Run

1.  **Install Dependencies**:
    ```bash
    npm install
    ```
2.  **Start Dev Server**:
    ```bash
    npm run dev
    ```
3.  **Build for Production**:
    ```bash
    npm run build
    ```

## How It's Built

I focused heavily on **Clean Architecture** and **Scalability**.

*   **Vite + React**: For a fast, modern development experience.
*   **Tailwind CSS**: For custom, pixel-perfect styling (no generic UI libraries were harmed in the making of this dashboard).
*   **Component Composition**: I built small, focused components (`Card`, `StatusBadge`, `GaugeChart`) and composed them into larger widgets.
*   **Separation of Concerns**:
    *   `src/data`: All mock data lives here.
    *   `src/theme`: Centralized design tokens (colors, fonts).
    *   `src/components`: UI Logic.

## Assumptions

*   **API Simulation**: Since there's no live backend yet, I used a `useDashboardData` hook to simulate async data fetching. This makes swapping in a real API later trivial.
*   **Responsiveness**: The design is data-heavy, so I prioritized a clean Desktop experience while ensuring it degrades gracefully to a stacked layout on Mobile.

## With More Time...

If I had another sprint, here is what I would tackle next:

1.  **Unit Tests**: Add Jest/React Testing Library to bulletproof the utilities and components.
2.  **Storybook**: Document the component library visually for other developers.
3.  **Transitions & Animations**: Add smooth transitions and animations for a premium feel.
4.  **Backend Integration**: Create a simple backend to fetch real data.
5.  **Dark Mode**: The theme structure is ready for it; just need to define the palette!

Enjoy checking it out!
