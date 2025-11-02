# Phase 2: Enhanced Coverage Display - Detailed Implementation Todo

## 🎯 Objective
Build a sophisticated coverage display system that showcases our expertise equal to or exceeding RPS's comprehensive presentation.

## 📋 Master Task List

### 1. Component Architecture & Design
- [ ] **1.1 Design DetailedCoverage Component**
  - [ ] Create component wireframe/mockup
  - [ ] Define TypeScript interfaces for coverage data
  - [ ] Plan tab navigation UX (click vs hover)
  - [ ] Design mobile accordion fallback
  - [ ] Define color scheme matching brand (construction-yellow, steel-black)
  
- [ ] **1.2 Data Model Structure**
  ```typescript
  interface CoverageSection {
    id: string
    title: string
    icon: string
    description: string
    coverageItems: CoverageItem[]
    limits?: string
    deductibles?: string
    specialNotes?: string[]
  }
  
  interface CoverageItem {
    name: string
    included: boolean
    description?: string
    sublimits?: string
  }
  ```

### 2. DetailedCoverage Component Development
- [ ] **2.1 Build Base Component Structure**
  - [ ] Create `/src/components/ui/DetailedCoverage.tsx`
  - [ ] Implement tab navigation logic
  - [ ] Add keyboard navigation support (arrow keys)
  - [ ] Implement ARIA labels for accessibility
  
- [ ] **2.2 Create Tab Content Sections**
  - [ ] General Liability tab content
  - [ ] Riggers Liability tab content  
  - [ ] Equipment Physical Damage tab content
  - [ ] Specialized Endorsements tab content
  
- [ ] **2.3 Styling & Animations**
  - [ ] Tab active/inactive states
  - [ ] Smooth content transitions
  - [ ] Hover effects with brand colors
  - [ ] Mobile-responsive accordion mode

### 3. Content Creation with Industry Terminology
- [ ] **3.1 General Liability Content**
  - [ ] Premises Operations coverage details
  - [ ] Products/Completed Operations
  - [ ] Personal & Advertising Injury
  - [ ] Medical Payments
  - [ ] Defense costs outside limits language
  - [ ] $1M-$10M+ limits clearly stated
  
- [ ] **3.2 Riggers Liability Content** 
  - [ ] "Care, Custody & Control" terminology
  - [ ] "On the Hook" coverage explicitly
  - [ ] Transit protection details
  - [ ] Boom damage coverage
  - [ ] Cable/wire rope failure
  - [ ] Tag lines and drift protection
  
- [ ] **3.3 Equipment Physical Damage Content**
  - [ ] "Upset or overturn" language
  - [ ] All-risk vs named perils
  - [ ] Replacement cost vs ACV
  - [ ] Rental reimbursement terms
  - [ ] Downtime protection options
  - [ ] Boom damage specific coverage
  
- [ ] **3.4 Specialized Endorsements Content**
  - [ ] ✓ Pollution Liability
  - [ ] ✓ Employee Benefits Liability  
  - [ ] ✓ Blanket Additional Insured
  - [ ] ✓ Primary & Non-Contributory
  - [ ] ✓ Waiver of Subrogation
  - [ ] ✓ Hired & Non-Owned Auto
  - [ ] ✓ Blanket Contractual Liability
  - [ ] ✓ Per Project/Per Location Aggregate

### 4. Integration Tasks
- [ ] **4.1 Services Page Integration**
  - [ ] Import DetailedCoverage component
  - [ ] Position below current service cards
  - [ ] Add section introduction text
  - [ ] Ensure smooth scroll to component
  
- [ ] **4.2 Update Existing Content**
  - [ ] Replace generic terms with technical terminology
  - [ ] Update all "$5M" references missed in Phase 1
  - [ ] Add "on the hook" language throughout
  - [ ] Include care, custody & control mentions

### 5. Trust Signals Enhancement
- [ ] **5.1 Add Trust Badges to Multiple Pages**
  - [ ] Services page - below hero, above cards
  - [ ] About page - in company overview section
  - [ ] Contact page - near form for credibility
  
- [ ] **5.2 Create "Why Choose Us" Section**
  - [ ] A+ Rated Carriers with logos (if available)
  - [ ] 20 years experience (Since 2005)
  - [ ] 50-state coverage capability
  - [ ] NPN #8608479 licensing info
  - [ ] Claims support promises
  - [ ] Dedicated account management

### 6. Quality Assurance
- [ ] **6.1 Component Testing**
  - [ ] Tab navigation works smoothly
  - [ ] Content displays correctly in each tab
  - [ ] No console errors or warnings
  - [ ] Proper TypeScript types throughout
  
- [ ] **6.2 Mobile Responsiveness**
  - [ ] Test on iPhone (375px width)
  - [ ] Test on iPad (768px width)  
  - [ ] Test on desktop (1920px width)
  - [ ] Accordion mode triggers correctly
  - [ ] Text remains readable at all sizes
  
- [ ] **6.3 Cross-Browser Testing**
  - [ ] Chrome/Edge (Chromium)
  - [ ] Firefox
  - [ ] Safari (if available)
  - [ ] Check for CSS compatibility issues
  
- [ ] **6.4 Performance Validation**
  - [ ] Component loads quickly
  - [ ] No layout shift (CLS)
  - [ ] Animations are smooth (60fps)
  - [ ] Bundle size is reasonable

### 7. Content Review Checklist
- [ ] **7.1 Accuracy Review**
  - [ ] All coverage limits correct ($10M+)
  - [ ] Technical terms used properly
  - [ ] No contradictions with existing content
  - [ ] Legal/compliance language accurate
  
- [ ] **7.2 SEO Optimization**
  - [ ] Schema markup for new sections
  - [ ] Alt text for any new images
  - [ ] Semantic HTML structure
  - [ ] Keywords naturally integrated
  
- [ ] **7.3 Competitive Parity Check**
  - [ ] Matches or exceeds RPS detail level
  - [ ] All RPS endorsements covered
  - [ ] Trust signals equally prominent
  - [ ] Technical expertise demonstrated

### 8. Deployment & Validation
- [ ] **8.1 Pre-Deployment**
  - [ ] Run full build locally
  - [ ] Check for TypeScript errors
  - [ ] Validate all imports work
  - [ ] Test all interactive elements
  
- [ ] **8.2 Git & Deployment**
  - [ ] Commit with descriptive message
  - [ ] Push to main branch
  - [ ] Verify Netlify deployment starts
  - [ ] Check deployment preview
  
- [ ] **8.3 Post-Deployment Verification**
  - [ ] Test live site functionality
  - [ ] Verify all tabs work
  - [ ] Check mobile experience
  - [ ] Confirm no broken elements
  - [ ] Test form submissions still work

## 🎯 Success Criteria
- ✅ DetailedCoverage component displays all 4 coverage types
- ✅ Technical terminology matches or exceeds RPS
- ✅ All specialized endorsements listed and explained
- ✅ Trust badges visible on 3+ pages
- ✅ Mobile responsive with accordion fallback
- ✅ Zero console errors or warnings
- ✅ Build and deployment successful
- ✅ Live site functionality verified

## 📊 Progress Tracking
- **Started:** January 26, 2025
- **Target Completion:** January 28, 2025
- **Status:** IN PROGRESS

---

*This document tracks all Phase 2 implementation tasks. Check off items as completed and note any issues or changes required.*