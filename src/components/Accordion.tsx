import { useState } from 'react'

interface AccordionProps {
  title: string
  content: React.ReactNode
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <div className="accordion-title">{title}</div>
        <svg
          className={`accordion-icon ${isExpanded ? 'expanded' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
        </svg>
      </div>
      {isExpanded && <div className="accordion-content">{content}</div>}
    </div>
  )
}

export default Accordion
