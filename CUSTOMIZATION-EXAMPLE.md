# Foundation Template Customization Example

**Scenario:** Create website for "Spray Foam Insurance Specialists" at sprayfoaminsurance.com

---

## Sample Planning Data

```json
{
  "domain": "sprayfoaminsurance.com",
  "businessInfo": {
    "name": "Spray Foam Insurance Specialists",
    "tagline": "Specialized Coverage for Spray Foam Contractors",
    "description": "Comprehensive insurance solutions for spray foam insulation contractors and instalators",
    "email": "info@sprayfoaminsurance.com",
    "phone": "1-844-FOAM-INS",
    "address": {
      "street": "12220 E Riggs Rd",
      "city": "Chandler",
      "state": "AZ",
      "zip": "85249"
    },
    "hours": "Monday-Friday 9:00AM - 5:00PM MST",
    "npn": "8608479",
    "established": "2005"
  },
  "seoResearch": {
    "primaryHeadline": "Spray Foam Contractor Insurance",
    "subheadline": "Comprehensive coverage for spray foam insulation businesses from $1M to $10M+",
    "metaTitle": "Spray Foam Contractor Insurance | $1M-$10M Coverage",
    "metaDescription": "Specialized insurance for spray foam contractors. General liability, pollution liability, and equipment coverage. Licensed in all 50 states.",
    "primaryKeywords": [
      "spray foam insurance",
      "insulation contractor insurance",
      "spray foam liability coverage"
    ],
    "schemaType": "InsuranceAgency"
  },
  "services": [
    {
      "id": "general-liability",
      "name": "General Liability Insurance",
      "description": "Comprehensive protection for spray foam installation operations",
      "features": [
        "$1M-$10M coverage limits",
        "Fire safety and property damage",
        "Installation error protection"
      ],
      "coverage": "$1M - $10M"
    },
    {
      "id": "pollution-liability",
      "name": "Pollution Liability Coverage",
      "description": "Environmental protection for spray foam chemicals and VOC emissions",
      "features": [
        "Chemical cleanup coverage",
        "VOC emission protection",
        "Environmental legal defense"
      ],
      "coverage": "$1M - $5M"
    },
    {
      "id": "equipment-coverage",
      "name": "Equipment & Tools Insurance",
      "description": "Protection for expensive spray foam equipment and machinery",
      "features": [
        "Spray equipment protection",
        "Tool and machinery coverage",
        "Business interruption insurance"
      ],
      "coverage": "Actual equipment value"
    }
  ],
  "faq": [
    {
      "question": "Is spray foam installation covered under general liability?",
      "answer": "Yes! Our specialized policies specifically cover spray foam installation, including fire safety risks and application errors that standard GL policies often exclude."
    },
    {
      "question": "Do I need pollution liability for spray foam work?",
      "answer": "Absolutely. Spray foam involves chemicals and VOC emissions. Our pollution liability protects you from environmental claims that standard policies don't cover."
    },
    {
      "question": "What coverage limits do spray foam contractors typically need?",
      "answer": "Most spray foam contractors need $1M-$5M in general liability. Larger commercial operations may need $10M+. We'll help determine the right coverage for your business size."
    },
    {
      "question": "Does this cover equipment damage or theft?",
      "answer": "Yes! Our equipment coverage protects your expensive spray rigs, generators, and tools from damage, theft, and breakdown."
    },
    {
      "question": "Are fire-related claims covered?",
      "answer": "Yes. Fire safety is a major concern with spray foam, and our policies specifically include fire-related property damage protection."
    }
  ],
  "trustSignals": [
    "A+ Rated Carriers",
    "Licensed in 50 States",
    "20 Years Experience"
  ],
  "valuePropositions": [
    {
      "title": "Spray Foam Expertise",
      "description": "We understand the unique risks of spray foam installation and provide specialized coverage"
    },
    {
      "title": "Nationwide Coverage",
      "description": "Licensed in all 50 states to protect your operations wherever you work"
    },
    {
      "title": "A+ Rated Carriers",
      "description": "We partner only with financially strong, A+ rated insurance companies"
    }
  ],
  "stats": [
    { "value": "20", "label": "Years Experience", "suffix": "+" },
    { "value": "1500", "label": "Contractors Insured", "suffix": "+" },
    { "value": "4.9", "label": "Client Rating", "suffix": "/5" }
  ]
}
```

---

## Populated site-config.json (Result)

```json
{
  "site": {
    "name": "Spray Foam Insurance Specialists",
    "tagline": "Specialized Coverage for Spray Foam Contractors",
    "description": "Comprehensive insurance solutions for spray foam insulation contractors and instalators",
    "url": "https://sprayfoaminsurance.com",
    "email": "info@sprayfoaminsurance.com",
    "phone": "1-844-FOAM-INS",
    "address": {
      "street": "12220 E Riggs Rd",
      "city": "Chandler",
      "state": "AZ",
      "zip": "85249",
      "country": "United States"
    },
    "hours": "Monday-Friday 9:00AM - 5:00PM MST",
    "npn": "8608479",
    "established": "2005"
  },

  "hero": {
    "headline": "Spray Foam Contractor Insurance",
    "subheadline": "Comprehensive coverage for spray foam insulation businesses from $1M to $10M+",
    "ctaText": "Get Free Quote",
    "ctaLink": "#contact-form",
    "image": "/images/hero/hero.jpg",
    "imageAlt": "Spray foam contractor applying insulation",
    "trustSignals": [
      "A+ Rated Carriers",
      "Licensed in 50 States",
      "20 Years Experience"
    ]
  },

  "seo": {
    "title": "Spray Foam Contractor Insurance | $1M-$10M Coverage",
    "description": "Specialized insurance for spray foam contractors. General liability, pollution liability, and equipment coverage. Licensed in all 50 states.",
    "keywords": [
      "spray foam insurance",
      "insulation contractor insurance",
      "spray foam liability coverage"
    ],
    "schema": {
      "type": "InsuranceAgency",
      "additionalTypes": ["LocalBusiness"],
      "priceRange": "$$"
    }
  },

  "services": [
    {
      "id": "general-liability",
      "name": "General Liability Insurance",
      "description": "Comprehensive protection for spray foam installation operations",
      "icon": "shield",
      "image": "/images/services/general-liability.jpg",
      "features": [
        "$1M-$10M coverage limits",
        "Fire safety and property damage",
        "Installation error protection"
      ],
      "coverage": "$1M - $10M",
      "link": "/services#general-liability"
    },
    {
      "id": "pollution-liability",
      "name": "Pollution Liability Coverage",
      "description": "Environmental protection for spray foam chemicals and VOC emissions",
      "icon": "leaf",
      "image": "/images/services/pollution-liability.jpg",
      "features": [
        "Chemical cleanup coverage",
        "VOC emission protection",
        "Environmental legal defense"
      ],
      "coverage": "$1M - $5M",
      "link": "/services#pollution-liability"
    },
    {
      "id": "equipment-coverage",
      "name": "Equipment & Tools Insurance",
      "description": "Protection for expensive spray foam equipment and machinery",
      "icon": "wrench",
      "image": "/images/services/equipment-coverage.jpg",
      "features": [
        "Spray equipment protection",
        "Tool and machinery coverage",
        "Business interruption insurance"
      ],
      "coverage": "Actual equipment value",
      "link": "/services#equipment-coverage"
    }
  ],

  "faq": [
    {
      "question": "Is spray foam installation covered under general liability?",
      "answer": "Yes! Our specialized policies specifically cover spray foam installation, including fire safety risks and application errors that standard GL policies often exclude."
    },
    {
      "question": "Do I need pollution liability for spray foam work?",
      "answer": "Absolutely. Spray foam involves chemicals and VOC emissions. Our pollution liability protects you from environmental claims that standard policies don't cover."
    },
    {
      "question": "What coverage limits do spray foam contractors typically need?",
      "answer": "Most spray foam contractors need $1M-$5M in general liability. Larger commercial operations may need $10M+. We'll help determine the right coverage for your business size."
    },
    {
      "question": "Does this cover equipment damage or theft?",
      "answer": "Yes! Our equipment coverage protects your expensive spray rigs, generators, and tools from damage, theft, and breakdown."
    },
    {
      "question": "Are fire-related claims covered?",
      "answer": "Yes. Fire safety is a major concern with spray foam, and our policies specifically include fire-related property damage protection."
    }
  ],

  "whyChooseUs": [
    {
      "title": "Spray Foam Expertise",
      "description": "We understand the unique risks of spray foam installation and provide specialized coverage",
      "icon": "star"
    },
    {
      "title": "Nationwide Coverage",
      "description": "Licensed in all 50 states to protect your operations wherever you work",
      "icon": "map"
    },
    {
      "title": "A+ Rated Carriers",
      "description": "We partner only with financially strong, A+ rated insurance companies",
      "icon": "shield-check"
    }
  ],

  "stats": [
    {
      "value": "20",
      "label": "Years Experience",
      "suffix": "+"
    },
    {
      "value": "1500",
      "label": "Contractors Insured",
      "suffix": "+"
    },
    {
      "value": "4.9",
      "label": "Client Rating",
      "suffix": "/5"
    }
  ],

  "footer": {
    "companyInfo": "Spray Foam Insurance Specialists - A Division of Contractors Choice Agency",
    "disclaimer": "Insurance products offered through licensed agents. Coverage subject to underwriting approval.",
    "socialMedia": {
      "facebook": "https://facebook.com/sprayfoaminsurance",
      "linkedin": "https://linkedin.com/company/sprayfoaminsurance"
    },
    "legal": {
      "privacy": "/privacy",
      "terms": "/terms"
    }
  },

  "contactForm": {
    "headline": "Get Your Free Quote",
    "subheadline": "Fill out the form and we'll contact you within 24 hours with a customized quote",
    "submitText": "Get Free Quote",
    "successMessage": "Thank you! We'll contact you within 24 hours with your customized quote.",
    "netlifyFormName": "contact"
  }
}
```

---

## What the Site Looks Like

### Hero Section
```
╔════════════════════════════════════════════════════════════╗
║                                                            ║
║  Spray Foam Contractor Insurance                          ║
║  Comprehensive coverage for spray foam insulation         ║
║  businesses from $1M to $10M+                             ║
║                                                            ║
║  [A+ Rated Carriers] [Licensed in 50 States] [20 Years]  ║
║                                                            ║
║  [Get Free Quote]                                         ║
║                                                            ║
║  (Background: Spray foam contractor working)              ║
╚════════════════════════════════════════════════════════════╝
```

### Services Section
```
╔══════════════════════════════════════════════════════════════╗
║                         Our Services                          ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  ┌──────────────────┐  ┌──────────────────┐  ┌────────────┐ ║
║  │ General Liability│  │ Pollution Liab.  │  │ Equipment  │ ║
║  │ Insurance        │  │ Coverage         │  │ Coverage   │ ║
║  │                  │  │                  │  │            │ ║
║  │ • $1M-$10M      │  │ • Chemical cleanup│  │ • Spray    │ ║
║  │ • Fire safety   │  │ • VOC emissions  │  │   equipment│ ║
║  │ • Installation  │  │ • Legal defense  │  │ • Tools    │ ║
║  │                  │  │                  │  │            │ ║
║  │ $1M - $10M      │  │ $1M - $5M       │  │ Actual val │ ║
║  └──────────────────┘  └──────────────────┘  └────────────┘ ║
╚══════════════════════════════════════════════════════════════╝
```

### FAQ Section
```
╔═══════════════════════════════════════════════════════════╗
║              Frequently Asked Questions                    ║
╠═══════════════════════════════════════════════════════════╣
║                                                           ║
║  ▼ Is spray foam installation covered under GL?         ║
║    Yes! Our specialized policies specifically cover...   ║
║                                                           ║
║  ▶ Do I need pollution liability for spray foam work?    ║
║                                                           ║
║  ▶ What coverage limits do contractors typically need?   ║
║                                                           ║
║  ▶ Does this cover equipment damage or theft?            ║
║                                                           ║
║  ▶ Are fire-related claims covered?                      ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
```

---

## Quality Metrics (Predicted)

Based on crane-insurance.com foundation:

- **Lighthouse Performance:** 94/100
- **Lighthouse Accessibility:** 96/100
- **Lighthouse SEO:** 96/100
- **Mobile Responsive:** ✓ 100%
- **Build Time:** < 30 seconds
- **Page Load Time:** < 1.5 seconds

---

## Customization Time

**Manual:** 2-3 hours
- Find/replace all placeholders
- Download images manually
- Build and test

**Automated (foundation-customizer agent):** 60 minutes
- Agent reads planning data
- Populates all config automatically
- Downloads and optimizes images
- Builds and validates
- Reports when ready

---

**This example shows exactly how the foundation template becomes a complete, professional website through config population.**
