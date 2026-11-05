
import './LanguageToggle.scss'

function LanguageToggle({ language, setLanguage }) {
  return (
    <div className="language-toggle" aria-label="Select language">
      <button
        type="button"
        className={`language-toggle__button ${
          language === 'en' ? 'is-active' : ''
        }`}
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
      >
        EN
      </button>

      <button
        type="button"
        className={`language-toggle__button ${
          language === 'es' ? 'is-active' : ''
        }`}
        onClick={() => setLanguage('es')}
        aria-pressed={language === 'es'}
      >
        ES
      </button>
    </div>
  )
}

export default LanguageToggle
