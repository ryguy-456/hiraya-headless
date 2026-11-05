import { useState } from 'react'
import AuroraFlow from './AuroraFlow'

function Hero({ t }) {
  console.log('HERO TRANSLATION:', t.hero)
  const [showNotice, setShowNotice] = useState(true)
  const [isNoticePoofing, setIsNoticePoofing] = useState(false)

  const handleDismissNotice = () => {
    if (!isNoticePoofing) {
      setIsNoticePoofing(true)
    }
  }

  const handlePoofAnimationEnd = (event) => {
    if (
      event.target === event.currentTarget &&
      isNoticePoofing
    ) {
      setShowNotice(false)
    }
  }

  return (
    <section
      className={`hiraya-hero hiraya-aurora-hero ${
        showNotice ? 'hiraya-hero--notice-open' : ''
      }`}
    >
      <AuroraFlow />

      <div
        className={`hiraya-aurora-overlay ${
          showNotice ? 'hiraya-aurora-overlay--notice-open' : ''
        }`}
        aria-hidden="true"
      />

      <div className="hiraya-container">
        <div className="hiraya-hero__content">
          <p className="hiraya-hero__eyebrow">
            {t.hero.eyebrow}
          </p>

          <h1 className="hiraya-hero__title">
            Ryan Buenconsejo
          </h1>

          <p className="hiraya-hero__lead">
            {t.hero.lead}
          </p>

          <div className="hiraya-hero__actions">
            <a
              href="#projects"
              className="hiraya-button hiraya-button--primary"
            >
              {t.hero.viewWork}
            </a>

            <a
              href="#contact"
              className="hiraya-button hiraya-button--secondary"
            >
              {t.hero.contact}
            </a>
          </div>
        </div>

        <div className="hiraya-hero__visual" aria-hidden="true">
          <div className="hiraya-hero__card">
            <span className="hiraya-hero__card-label">
              DRUPAL 11
            </span>

            <span className="hiraya-hero__card-line" />

            <span className="hiraya-hero__card-code">
              &lt;/&gt;
            </span>
          </div>
        </div>
      </div>

      {showNotice && (
        <div
          className={`hiraya-notice ${
            isNoticePoofing ? 'hiraya-notice--poof' : ''
          }`}
          role="status"
          onAnimationEnd={handlePoofAnimationEnd}
        >
          <div className="hiraya-notice__content">
            <strong>
              {t.hero.noticeTitle}
            </strong>

            <p>
              {t.hero.noticeDescription}
            </p>

            <a
              href="#contact"
              className="hiraya-button hiraya-button--primary"
            >
              {t.hero.consultation}
            </a>
          </div>

          <button
            type="button"
            className="hiraya-notice__close"
            onClick={handleDismissNotice}
            aria-label={t.hero.dismiss}
            disabled={isNoticePoofing}
          >
            ×
          </button>

          {isNoticePoofing && (
            <span
              className="hiraya-notice__poof"
              aria-hidden="true"
            >
              💨 ✨
            </span>
          )}
        </div>
      )}
    </section>
  )
}

export default Hero