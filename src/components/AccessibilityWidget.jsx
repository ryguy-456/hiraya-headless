import { useEffect, useRef, useState } from 'react'
import '../styles/accessibility-widget.css'

const DEFAULT_SETTINGS = {
  textScale: 1,
  highContrast: false,
  underlineLinks: false,
  spaciousText: false,
  reduceMotion: false,
}

const STORAGE_KEY = 'hiraya-accessibility-settings'

function readSavedSettings() {
  if (typeof window === 'undefined') return DEFAULT_SETTINGS

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (!saved) return DEFAULT_SETTINGS

    const parsed = JSON.parse(saved)
    const allowedScales = [1, 1.1, 1.2, 1.3]

    return {
      textScale: allowedScales.includes(parsed.textScale) ? parsed.textScale : 1,
      highContrast: Boolean(parsed.highContrast),
      underlineLinks: Boolean(parsed.underlineLinks),
      spaciousText: Boolean(parsed.spaciousText),
      reduceMotion: Boolean(parsed.reduceMotion),
    }
  } catch {
    return DEFAULT_SETTINGS
  }
}

function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [settings, setSettings] = useState(readSavedSettings)
  const triggerRef = useRef(null)
  const panelRef = useRef(null)

  useEffect(() => {
    const root = document.documentElement

    root.dataset.hirayaTextScale = String(settings.textScale)
    root.dataset.hirayaContrast = settings.highContrast ? 'high' : 'normal'
    root.dataset.hirayaUnderlineLinks = String(settings.underlineLinks)
    root.dataset.hirayaSpaciousText = String(settings.spaciousText)
    root.dataset.hirayaReduceMotion = String(settings.reduceMotion)

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
    } catch {
      // The widget still works for this session if storage is unavailable.
    }
  }, [settings])

  useEffect(() => {
    if (!isOpen) return undefined

    const previousFocus = document.activeElement
    const panel = panelRef.current
    const firstControl = panel?.querySelector('button:not([disabled])')
    firstControl?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        return
      }

      if (event.key !== 'Tab' || !panel) return

      const focusable = Array.from(
        panel.querySelectorAll(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => element.offsetParent !== null)

      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      if (previousFocus instanceof HTMLElement) previousFocus.focus()
    }
  }, [isOpen])

  const updateSetting = (key, value) => {
    setSettings((current) => ({ ...current, [key]: value }))
  }

  const resetSettings = () => setSettings(DEFAULT_SETTINGS)

  const decreaseText = () => {
    updateSetting('textScale', Math.max(1, Math.round((settings.textScale - 0.1) * 10) / 10))
  }

  const increaseText = () => {
    updateSetting('textScale', Math.min(1.3, Math.round((settings.textScale + 0.1) * 10) / 10))
  }

  return (
    <div className="hiraya-a11y">
      <button
        ref={triggerRef}
        className="hiraya-a11y__launcher"
        type="button"
        aria-label={isOpen ? 'Close accessibility settings' : 'Open accessibility settings'}
        aria-expanded={isOpen}
        aria-controls="hiraya-a11y-panel"
        onClick={() => setIsOpen((open) => !open)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <circle cx="12" cy="4.5" r="2" />
          <path d="M4 8.2h16M12 8.4v5.2m0 0-4.3 6M12 13.6l4.3 6M7.5 8.4l1.4 5.2h6.2l1.4-5.2" />
        </svg>
        <span className="hiraya-a11y__launcher-label">Accessibility</span>
      </button>

      {isOpen && (
        <>
          <button
            className="hiraya-a11y__backdrop"
            type="button"
            tabIndex={-1}
            aria-label="Close accessibility settings"
            onClick={() => setIsOpen(false)}
          />
          <section
            id="hiraya-a11y-panel"
            ref={panelRef}
            className="hiraya-a11y__panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="hiraya-a11y-title"
            aria-describedby="hiraya-a11y-description"
          >
            <header className="hiraya-a11y__header">
              <div>
                <p className="hiraya-a11y__eyebrow">HIRAYA TOOLS</p>
                <h2 id="hiraya-a11y-title">Accessibility</h2>
              </div>
              <button
                className="hiraya-a11y__close"
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close accessibility settings"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="m6 6 12 12M18 6 6 18" />
                </svg>
              </button>
            </header>

            <p className="hiraya-a11y__description" id="hiraya-a11y-description">
              Adjust the page to make reading more comfortable. Your choices are saved on this device.
            </p>

            <div className="hiraya-a11y__group">
              <h3>Text size</h3>
              <div className="hiraya-a11y__text-controls">
                <button
                  type="button"
                  className="hiraya-a11y__secondary-button"
                  onClick={decreaseText}
                  disabled={settings.textScale <= 1}
                  aria-label="Decrease text size"
                >
                  A−
                </button>
                <output className="hiraya-a11y__scale" aria-live="polite">
                  {Math.round(settings.textScale * 100)}%
                </output>
                <button
                  type="button"
                  className="hiraya-a11y__secondary-button"
                  onClick={increaseText}
                  disabled={settings.textScale >= 1.3}
                  aria-label="Increase text size"
                >
                  A+
                </button>
              </div>
            </div>

            <div className="hiraya-a11y__options">
              <SettingToggle
                title="High contrast"
                description="Increase contrast across the page."
                checked={settings.highContrast}
                onChange={(value) => updateSetting('highContrast', value)}
              />
              <SettingToggle
                title="Underline links"
                description="Make links easier to identify."
                checked={settings.underlineLinks}
                onChange={(value) => updateSetting('underlineLinks', value)}
              />
              <SettingToggle
                title="Comfortable spacing"
                description="Increase text and line spacing."
                checked={settings.spaciousText}
                onChange={(value) => updateSetting('spaciousText', value)}
              />
              <SettingToggle
                title="Reduce motion"
                description="Limit animations and transitions."
                checked={settings.reduceMotion}
                onChange={(value) => updateSetting('reduceMotion', value)}
              />
            </div>

            <footer className="hiraya-a11y__footer">
              <button
                type="button"
                className="hiraya-a11y__reset"
                onClick={resetSettings}
              >
                Reset settings
              </button>
              <button
                type="button"
                className="hiraya-a11y__done"
                onClick={() => setIsOpen(false)}
              >
                Done
              </button>
            </footer>

            <p className="hiraya-a11y__note">
              These tools support browsing preferences; they do not replace accessibility testing.
            </p>
          </section>
        </>
      )}
    </div>
  )
}

function SettingToggle({ title, description, checked, onChange }) {
  return (
    <div className="hiraya-a11y__option">
      <div className="hiraya-a11y__option-copy">
        <span className="hiraya-a11y__option-title">{title}</span>
        <span className="hiraya-a11y__option-description">{description}</span>
      </div>
      <button
        type="button"
        className={`hiraya-a11y__switch ${checked ? 'is-on' : ''}`}
        role="switch"
        aria-checked={checked}
        aria-label={title}
        onClick={() => onChange(!checked)}
      >
        <span className="hiraya-a11y__switch-thumb" />
      </button>
      <AccessibilityWidget />
    </div>
  )
}
export default AccessibilityWidget
