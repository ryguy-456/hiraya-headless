import React from 'react'
import ChatBot from 'react-chatbotify'
import './Chatbot.css'

function Chatbot() {
  const flow = {
    start: {
      message:
        "Hey! I'm Ryan's portfolio assistant. What would you like to know?",
      options: [
        'Drupal experience',
        'React projects',
        'NRECA experience',
        'Portfolio projects',
        'Contact Ryan',
      ],
      path: (params) => {
        switch (params.userInput) {
          case 'Drupal experience':
            return 'drupal'

          case 'React projects':
            return 'react'

          case 'NRECA experience':
            return 'nreca'

          case 'Portfolio projects':
            return 'projects'

          case 'Contact Ryan':
            return 'contact'

          default:
            return 'start'
        }
      },
    },

    drupal: {
      message:
        'Ryan has 7+ years of Drupal experience, including Drupal 8–11, Twig, Views, Webforms, content types, taxonomies, custom blocks, accessibility, Pantheon, Drush, Composer, and responsive web development.',
options: [
  'Drupal',
  'React',
  'NRECA',
  'Contact Ryan',
],
path: (params) => {
  switch (params.userInput) {
    case 'Drupal':
      return 'drupal'

    case 'React':
      return 'react'

    case 'NRECA':
      return 'nreca'

    case 'Contact Ryan':
      return 'contact'

    default:
      return 'start'
  }
},
    },

    react: {
      message:
        'Ryan has been expanding his front-end experience with React and headless Drupal. His portfolio uses React, Vite, JavaScript, reusable components, APIs, and Vercel.',
      options: [
        'Drupal experience',
        'Portfolio projects',
        'NRECA experience',
        'Contact Ryan',
        'Main menu',
      ],
      path: (params) => {
        switch (params.userInput) {
          case 'Drupal experience':
            return 'drupal'
          case 'Portfolio projects':
            return 'projects'
          case 'NRECA experience':
            return 'nreca'
          case 'Contact Ryan':
            return 'contact'
          default:
            return 'start'
        }
      },
    },

    nreca: {
      message:
        'Ryan worked as a Web Developer at NRECA, supporting multiple Drupal sites across development, QA, accessibility, content management, analytics, SEO, and Pantheon deployments.',
      options: [
        'Drupal experience',
        'React projects',
        'Portfolio projects',
        'Contact Ryan',
        'Main menu',
      ],
      path: (params) => {
        switch (params.userInput) {
          case 'Drupal experience':
            return 'drupal'
          case 'React projects':
            return 'react'
          case 'Portfolio projects':
            return 'projects'
          case 'Contact Ryan':
            return 'contact'
          default:
            return 'start'
        }
      },
    },

    projects: {
      message:
        'HIRAYA combines Ryan’s Drupal development, custom Twig theming, React/headless development, and modern front-end projects.',
      options: [
        'Drupal experience',
        'React projects',
        'NRECA experience',
        'Contact Ryan',
        'Main menu',
      ],
      path: (params) => {
        switch (params.userInput) {
          case 'Drupal experience':
            return 'drupal'
          case 'React projects':
            return 'react'
          case 'NRECA experience':
            return 'nreca'
          case 'Contact Ryan':
            return 'contact'
          default:
            return 'start'
        }
      },
    },
contact: {
  message:
    'Let’s connect! Email: ryan.buenconsejo@gmail.com | Phone: 571-999-5051',
  options: [
    'Drupal',
    'React',
    'Main menu',
  ],
  path: (params) => {
    switch (params.userInput) {
      case 'Drupal':
        return 'drupal'

      case 'React':
        return 'react'

      default:
        return 'start'
    }
  },
},
}

  return (
    <div className="hiraya-chatbot">
      <ChatBot
        flow={flow}
        settings={{
          general: {
            primaryColor: '#4f8cff',
            secondaryColor: '#111827',
            fontFamily: 'Inter, Arial, sans-serif',
          },
          header: {
            title: 'HIRAYA Assistant',
          },
          tooltip: {
            mode: 'NEVER',
          },
        }}
      />
    </div>
  )
}

export default Chatbot
