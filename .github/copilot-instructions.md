# Copilot Instructions for Logic Loop

## Project Overview
Logic Loop is a React + Vite web app for automating reputation management for local businesses. It integrates with Google Maps, Facebook, Yelp, and EmailJS, and uses AI for review response automation.

## Architecture & Key Patterns
- **Component Structure**: All UI logic is in `components/`. Each feature (e.g., onboarding, dashboard, AI reply) is a separate component. Use props and hooks for data flow.
- **Service Layer**: API and AI logic are in `services/` (e.g., `geminiService.ts`). Services should be imported into components as needed.
- **Styling**: Tailwind CSS is used throughout. Utility classes are preferred; custom styles go in `index.css`.
- **Routing**: Vite handles routing. No explicit React Router setup is present; navigation is typically managed via component state.
- **State Management**: Use React hooks (`useState`, `useEffect`, `useMemo`, `useCallback`) for local and memoized state. No Redux or global state library.
- **Performance**: Use lazy loading and memoization for heavy components. See README for details.

## Developer Workflows
- **Start Dev Server**: `npm run dev`
- **Install Dependencies**: `npm install`
- **Environment Variables**: Set `VITE_GEMINI_API_KEY` in `.env.local` for Gemini API access.
- **EmailJS Setup**: Update `SERVICE_ID`, `TEMPLATE_ID`, and `PUBLIC_KEY` in `components/OnboardingPage.tsx` for email integration.
- **Build for Production**: `npm run build`

## Conventions & Integration Points
- **AI Integration**: All AI calls use `geminiService.ts`. Pass API keys via environment variables.
- **External APIs**: Review platforms are integrated via service calls. Email notifications use EmailJS.
- **Component Communication**: Pass data via props; avoid global state. Use hooks for side effects and memoization.
- **File Naming**: Use PascalCase for components, camelCase for functions/variables.
- **Testing**: No test framework is present; add tests in `__tests__/` if needed.

## Examples
- To add a new feature, create a component in `components/`, add any service logic to `services/`, and wire up via props/hooks.
- For AI replies, use `geminiService.ts` and ensure the API key is set in `.env.local`.
- For onboarding or email, update keys in `OnboardingPage.tsx` and verify EmailJS setup.

## References
- [README.md](../../README.md) — setup, environment, and integration details
- [components/](../../components/) — UI logic and feature components
- [services/geminiService.ts](../../services/geminiService.ts) — AI integration

---
**Update this file if project structure or workflows change.**
