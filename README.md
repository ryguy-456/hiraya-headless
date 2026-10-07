# HIRAYA Headless

A decoupled Drupal portfolio demonstrating a modern **Drupal + Symfony + React** architecture.

HIRAYA Headless separates content management from the frontend presentation layer. Drupal manages structured portfolio content, a custom Symfony controller exposes that content through a JSON API, and React consumes the API to render the frontend.

## Architecture

```text
┌─────────────────────────────┐
│       Drupal 11 / Pantheon  │
│                             │
│  Content Management System  │
│  Project content type       │
└──────────────┬──────────────┘
               │
               │ GET /api/projects
               ▼
┌─────────────────────────────┐
│     Symfony Controller      │
│                             │
│  Custom Drupal Module       │
│  Drupal Entity API          │
│  JSON Response              │
└──────────────┬──────────────┘
               │
               │ JSON
               ▼
┌─────────────────────────────┐
│       React + Vite          │
│                             │
│  Component-based frontend   │
│  API-driven project cards   │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│          Vercel             │
│      Frontend Hosting       │
└─────────────────────────────┘
```

## What I Built

This project started as a traditional Drupal portfolio and was extended into a decoupled architecture.

### Drupal

Drupal serves as the content management system and source of truth for portfolio content.

- Drupal 11
- Custom `Project` content type
- Structured project descriptions
- Custom Drupal module
- Drupal Entity API
- Pantheon hosting

### Symfony

Drupal uses Symfony components under the hood. I created a custom Drupal module containing a Symfony controller and custom routes.

The API exposes project content through:

```text
GET /api/projects
```

Example response:

```json
[
  {
    "id": "4",
    "title": "Symfony API Integration",
    "description": "A Drupal and Symfony API integration demonstrating custom routing, Symfony controllers, Drupal's Entity API, JSON responses, and a React headless frontend."
  }
]
```

The controller retrieves published Project nodes through Drupal's Entity API and returns them as JSON.

### React

The frontend is built with React and Vite.

React does not contain the project content itself. Instead, it requests the content from Drupal:

```javascript
fetch('https://dev-ryan-buenconsejo.pantheonsite.io/api/projects')
```

The returned JSON is stored in React state and passed into the Projects component.

This means new project content can be created in Drupal without modifying the React frontend.

## Why Headless?

The traditional Drupal architecture combines:

```text
Drupal
 ├── Content
 ├── Backend
 └── Twig presentation
```

The headless architecture separates those responsibilities:

```text
Drupal
 └── Content / CMS

Symfony
 └── API / Backend logic

React
 └── Presentation / Frontend
```

This separation makes the frontend independently deployable and allows Drupal to act as a content platform rather than being responsible for the final presentation layer.

## Key Features

- Decoupled Drupal architecture
- Custom Drupal API module
- Symfony controller and routing
- Drupal Entity API
- JSON API responses
- React state management
- API-driven React components
- Vite development environment
- Pantheon Drupal hosting
- Vercel frontend deployment
- Cross-origin API configuration
- Responsive portfolio UI
- Reusable React components

## Technology Stack

| Layer | Technology |
|---|---|
| CMS | Drupal 11 |
| Backend/API | PHP, Symfony, Drupal Entity API |
| Frontend | React |
| Build Tool | Vite |
| CMS Hosting | Pantheon |
| Frontend Hosting | Vercel |
| Version Control | Git / GitHub |
| Local Development | DDEV |
| API Format | JSON |

## Project Structure

```text
hiraya-headless/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── ReactNav.jsx
│   │   ├── Skills.jsx
│   │   └── Toolkit.jsx
│   │
│   ├── App.jsx
│   └── ...
│
├── public/
├── package.json
└── README.md
```

The Drupal API module lives in the separate Drupal project:

```text
web/modules/custom/hiraya_api/
├── hiraya_api.info.yml
├── hiraya_api.routing.yml
└── src/
    └── Controller/
        └── HirayaApiController.php
```

## Data Flow

When the Projects section loads:

```text
1. React application loads
        ↓
2. useEffect() executes
        ↓
3. React sends GET /api/projects
        ↓
4. Drupal routing system matches the request
        ↓
5. Symfony controller executes
        ↓
6. Drupal Entity API loads Project nodes
        ↓
7. Controller returns JsonResponse
        ↓
8. React receives JSON
        ↓
9. Projects component renders the cards
```

## Local Development

Clone the repository:

```bash
git clone git@github.com:ryguy-456/hiraya-headless.git
cd hiraya-headless
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The Vite development server will normally be available at:

```text
http://localhost:5173
```

The React application can be configured to consume either the local Drupal API or the Pantheon development API.

## API

The Drupal backend currently exposes:

```text
GET /api/hello
GET /api/projects
```

The projects endpoint returns published Drupal Project content as JSON.

## Deployment

The React frontend is deployed to Vercel.

The Drupal backend is deployed to Pantheon.

The architecture therefore allows the frontend and CMS to be developed and deployed independently.

```text
GitHub
  │
  ├── React repository
  │       ↓
  │     Vercel
  │
  └── Drupal repository
          ↓
       Pantheon
```

## Future Improvements

Potential future enhancements include:

- POST/PUT/PATCH API endpoints
- Authentication for protected API operations
- Additional Drupal content types
- Project images and media fields
- React project filtering
- API error/loading states
- Environment variables for API URLs
- Automated testing
- CI/CD improvements
- Production API domain and CORS configuration

## About HIRAYA

HIRAYA is a personal portfolio project created to demonstrate practical experience with Drupal development while exploring modern decoupled web architecture.

The project combines my Drupal experience with newer frontend and API development concepts, allowing the same content to be managed through Drupal while being presented through a modern React application.
