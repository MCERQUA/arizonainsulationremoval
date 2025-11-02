import React, { useState, useCallback, useMemo, Suspense } from 'react';
import { Shield, Wrench, HardHat, FileCheck, ChevronRight, Check, AlertCircle, Loader } from 'lucide-react';

// Enhanced TypeScript interfaces with better type safety
interface CoverageItem {
  name: string;
  included: boolean;
  description?: string;
  sublimits?: string;
  popular?: boolean; // New: highlight popular options
}

interface CoverageSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  coverageItems: CoverageItem[];
  limits?: string;
  deductibles?: string;
  specialNotes?: string[];
  badge?: string; // New: optional badge like "Most Popular"
}

interface DetailedCoverageProps {
  className?: string;
  defaultTab?: string;
  onTabChange?: (tabId: string) => void; // New: callback for analytics
}

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center bg-red-50 rounded-lg">
          <p className="text-red-600">Unable to load coverage information. Please refresh the page.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

const DetailedCoverageEnhanced: React.FC<DetailedCoverageProps> = ({ 
  className = '',
  defaultTab = 'general-liability',
  onTabChange
}) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Comprehensive coverage data with enhanced details
  const coverageSections: CoverageSection[] = useMemo(() => [
    {
      id: 'general-liability',
      title: 'General Liability',
      icon: <Shield className="w-5 h-5" aria-hidden="true" />,
      description: 'Comprehensive third-party protection for bodily injury and property damage claims arising from crane operations',
      limits: '$1M to $10M+ per occurrence / $2M to $20M+ aggregate',
      deductibles: '$5,000 - $25,000 options available',
      badge: 'Most Popular',
      coverageItems: [
        {
          name: 'Premises Operations',
          included: true,
          description: 'Coverage for bodily injury and property damage at job sites',
          popular: true
        },
        {
          name: 'Products/Completed Operations',
          included: true,
          description: 'Protection after project completion for work-related claims',
          sublimits: 'Full policy limits'
        },
        {
          name: 'Personal & Advertising Injury',
          included: true,
          sublimits: 'Included in policy limit',
          description: 'Protection against libel, slander, false arrest claims'
        },
        {
          name: 'Medical Payments',
          included: true,
          sublimits: '$5,000 - $10,000 per person',
          description: 'No-fault medical coverage for minor injuries'
        },
        {
          name: 'Defense Costs Outside Limits',
          included: true,
          description: 'Legal defense doesn\'t reduce your coverage limits',
          popular: true
        },
        {
          name: 'Blanket Additional Insured',
          included: true,
          description: 'Automatic coverage for contractually required parties'
        },
        {
          name: 'Cross Liability Coverage',
          included: true,
          description: 'Each insured treated separately under the policy'
        },
        {
          name: 'Aggregate Per Project',
          included: true,
          description: 'Separate aggregate limits for each project location'
        }
      ],
      specialNotes: [
        'Coverage territory includes USA, its territories and possessions, Puerto Rico and Canada',
        'Defense costs outside policy limits preserves your full coverage for settlements',
        'Automatic coverage for newly acquired entities for 90 days',
        'Worldwide coverage for products and completed operations'
      ]
    },
    {
      id: 'riggers-liability',
      title: 'Riggers Liability',
      icon: <Wrench className="w-5 h-5" aria-hidden="true" />,
      description: 'Specialized "on the hook" coverage protecting property of others in your care, custody & control',
      limits: '$250,000 to $5M+ per occurrence',
      deductibles: '$10,000 - $50,000 based on equipment value',
      coverageItems: [
        {
          name: 'Care, Custody & Control',
          included: true,
          description: 'Full coverage while property is "on the hook"',
          popular: true
        },
        {
          name: 'Transit Protection',
          included: true,
          description: 'Coverage during lifting, hoisting and movement operations'
        },
        {
          name: 'Boom & Cable Damage',
          included: true,
          description: 'Protection for damage from boom strikes and cable failures'
        },
        {
          name: 'Tag Lines & Drift Protection',
          included: true,
          description: 'Coverage for wind-related movement and control issues'
        },
        {
          name: 'HVAC Equipment',
          included: true,
          sublimits: 'Up to $1M+ per unit',
          description: 'Specialized coverage for high-value HVAC systems'
        },
        {
          name: 'Telecom & Generator Equipment',
          included: true,
          sublimits: 'Full limits available',
          description: 'Protection for sensitive electronic equipment'
        },
        {
          name: 'Modular Buildings',
          included: true,
          description: 'Coverage for prefabricated structures during placement'
        },
        {
          name: 'Industrial Machinery',
          included: true,
          sublimits: 'Based on equipment value',
          description: 'Protection for manufacturing and processing equipment'
        }
      ],
      specialNotes: [
        'Coverage applies from the moment of rigging attachment to final placement',
        'Includes coverage for property during intermediate storage at job site',
        'Protection extends to rigging equipment and accessories',
        'Coverage for mysterious disappearance when property is in your custody'
      ]
    },
    {
      id: 'physical-damage',
      title: 'Equipment Physical Damage',
      icon: <HardHat className="w-5 h-5" aria-hidden="true" />,
      description: 'Comprehensive all-risk protection for your valuable crane equipment investment',
      limits: 'Actual Cash Value or Agreed Value/Replacement Cost',
      deductibles: '1-3% of equipment value (minimum $5,000)',
      coverageItems: [
        {
          name: 'Upset or Overturn',
          included: true,
          description: 'Full coverage for tipping and stability incidents',
          popular: true
        },
        {
          name: 'Boom Damage',
          included: true,
          description: 'Specific protection for boom strikes and structural damage'
        },
        {
          name: 'Wire Rope & Cable Failure',
          included: true,
          description: 'Coverage for load line and hoist cable damage'
        },
        {
          name: 'Theft Protection',
          included: true,
          description: 'Complete theft coverage including partial theft'
        },
        {
          name: 'Rental Reimbursement',
          included: true,
          sublimits: '$2,500/day up to $75,000 total',
          description: 'Rental costs while equipment is being repaired'
        },
        {
          name: 'Downtime Protection',
          included: true,
          sublimits: 'Based on daily revenue',
          description: 'Lost income coverage during repair periods'
        },
        {
          name: 'Transportation Coverage',
          included: true,
          description: 'Protection while equipment is being transported'
        },
        {
          name: 'Newly Acquired Equipment',
          included: true,
          sublimits: '30 days automatic coverage',
          description: 'Automatic coverage for new purchases'
        }
      ],
      specialNotes: [
        'All-risk coverage including flood, earthquake, and named windstorm',
        'Worldwide territory coverage available',
        'Agreed value option eliminates depreciation at claim time',
        'Coverage for attachments, accessories, and boom extensions'
      ]
    },
    {
      id: 'endorsements',
      title: 'Specialized Endorsements',
      icon: <FileCheck className="w-5 h-5" aria-hidden="true" />,
      description: 'Comprehensive additional coverages tailored to crane operations',
      coverageItems: [
        {
          name: 'Pollution Liability',
          included: true,
          description: 'Environmental damage and cleanup protection',
          sublimits: '$1M - $5M limits available'
        },
        {
          name: 'Employee Benefits Liability',
          included: true,
          description: 'ERISA and benefits administration errors coverage',
          sublimits: '$1M - $2M limits'
        },
        {
          name: 'Primary & Non-Contributory',
          included: true,
          description: 'Your coverage responds first without seeking contribution',
          popular: true
        },
        {
          name: 'Waiver of Subrogation',
          included: true,
          description: 'Waive recovery rights when contractually required'
        },
        {
          name: 'Hired & Non-Owned Auto',
          included: true,
          description: 'Coverage for rented and employee-owned vehicles',
          sublimits: '$1M combined single limit'
        },
        {
          name: 'Blanket Contractual Liability',
          included: true,
          description: 'Automatic coverage for all written contracts'
        },
        {
          name: 'Per Project/Location Aggregate',
          included: true,
          description: 'Separate aggregate limits for each project',
          popular: true
        },
        {
          name: 'Professional Liability',
          included: true,
          description: 'Errors & omissions for crane planning and consulting',
          sublimits: 'Optional - Quote on request'
        },
        {
          name: 'Cyber Liability',
          included: true,
          description: 'Data breach and cyber attack protection',
          sublimits: '$1M - $5M limits'
        },
        {
          name: 'Stop Gap Coverage',
          included: true,
          description: 'Employers liability for monopolistic states',
          sublimits: '$1M per accident'
        }
      ],
      specialNotes: [
        'All endorsements available in all 50 states',
        'Custom endorsements available for unique operations',
        'Bundle discounts when combining multiple endorsements',
        'Manuscript endorsements for specialized requirements'
      ]
    }
  ], []);

  const handleTabClick = useCallback((sectionId: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(sectionId);
      setIsTransitioning(false);
      onTabChange?.(sectionId);
    }, 150);
  }, [onTabChange]);

  const activeSection = useMemo(
    () => coverageSections.find(section => section.id === activeTab),
    [activeTab, coverageSections]
  );

  return (
    <ErrorBoundary>
      <div className={`detailed-coverage ${className}`} role="region" aria-label="Insurance Coverage Details">
        {/* Tab Navigation - Desktop */}
        <div className="hidden md:flex border-b border-gray-200 mb-8" role="tablist" aria-label="Coverage types">
          <div className="flex space-x-1 -mb-px">
            {coverageSections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleTabClick(section.id)}
                className={`
                  relative flex items-center gap-2 px-6 py-4 font-medium text-sm transition-all duration-200
                  border-b-2 hover:text-construction-yellow focus:outline-none focus:ring-2 focus:ring-construction-yellow focus:ring-offset-2
                  ${activeTab === section.id 
                    ? 'border-construction-yellow text-construction-yellow bg-yellow-50/50' 
                    : 'border-transparent text-gray-600 hover:border-gray-300'
                  }
                `}
                aria-selected={activeTab === section.id}
                aria-controls={`panel-${section.id}`}
                role="tab"
                tabIndex={activeTab === section.id ? 0 : -1}
              >
                <span className={activeTab === section.id ? 'text-construction-yellow' : 'text-gray-500'}>
                  {section.icon}
                </span>
                <span>{section.title}</span>
                {section.badge && (
                  <span className="ml-2 px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                    {section.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Accordion Navigation */}
        <div className="md:hidden space-y-2 mb-6" role="tablist" aria-label="Coverage types">
          {coverageSections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleTabClick(section.id)}
              className={`
                w-full flex items-center justify-between p-4 rounded-lg transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-construction-yellow
                ${activeTab === section.id 
                  ? 'bg-construction-yellow text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
              `}
              aria-selected={activeTab === section.id}
              aria-controls={`panel-${section.id}`}
              role="tab"
            >
              <div className="flex items-center gap-3">
                {section.icon}
                <span className="font-medium">{section.title}</span>
                {section.badge && (
                  <span className="ml-2 px-2 py-1 text-xs bg-white/20 rounded-full">
                    {section.badge}
                  </span>
                )}
              </div>
              <ChevronRight 
                className={`w-5 h-5 transition-transform ${activeTab === section.id ? 'rotate-90' : ''}`}
                aria-hidden="true"
              />
            </button>
          ))}
        </div>

        {/* Active Tab Content with Loading State */}
        <div className="relative min-h-[400px]">
          {isTransitioning && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10">
              <Loader className="w-8 h-8 text-construction-yellow animate-spin" />
            </div>
          )}
          
          {activeSection && (
            <div 
              id={`panel-${activeSection.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${activeSection.id}`}
              className={`tab-content ${isTransitioning ? 'opacity-50' : 'animate-fadeIn'}`}
            >
              {/* Section Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-steel-black mb-2">
                  {activeSection.title}
                  {activeSection.badge && (
                    <span className="ml-3 px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full">
                      {activeSection.badge}
                    </span>
                  )}
                </h3>
                <p className="text-gray-600">
                  {activeSection.description}
                </p>
              </div>

              {/* Limits and Deductibles */}
              {(activeSection.limits || activeSection.deductibles) && (
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {activeSection.limits && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <Shield className="w-4 h-4 text-blue-600" aria-hidden="true" />
                        <span className="font-semibold text-steel-black">Coverage Limits</span>
                      </div>
                      <p className="text-gray-700">{activeSection.limits}</p>
                    </div>
                  )}
                  {activeSection.deductibles && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <AlertCircle className="w-4 h-4 text-green-600" aria-hidden="true" />
                        <span className="font-semibold text-steel-black">Deductible Options</span>
                      </div>
                      <p className="text-gray-700">{activeSection.deductibles}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Coverage Items Grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {activeSection.coverageItems.map((item, index) => (
                  <div 
                    key={index}
                    className={`
                      bg-white border rounded-lg p-4 transition-all duration-200
                      hover:shadow-md hover:border-construction-yellow/50
                      ${item.popular ? 'border-green-200 bg-green-50/20' : 'border-gray-200'}
                    `}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`mt-1 flex-shrink-0 ${item.included ? 'text-green-500' : 'text-gray-400'}`}>
                        <Check className="w-5 h-5" aria-label={item.included ? 'Included' : 'Not included'} />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-semibold text-steel-black mb-1">
                          {item.name}
                          {item.popular && (
                            <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                              Popular
                            </span>
                          )}
                        </h4>
                        {item.description && (
                          <p className="text-sm text-gray-600 mb-1">
                            {item.description}
                          </p>
                        )}
                        {item.sublimits && (
                          <p className="text-xs text-construction-yellow font-medium">
                            Limits: {item.sublimits}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Special Notes */}
              {activeSection.specialNotes && activeSection.specialNotes.length > 0 && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h4 className="font-semibold text-steel-black mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-construction-yellow" aria-hidden="true" />
                    Important Coverage Notes
                  </h4>
                  <ul className="space-y-2" role="list">
                    {activeSection.specialNotes.map((note, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-construction-yellow mt-1" aria-hidden="true">•</span>
                        <span className="text-gray-700 text-sm">{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </ErrorBoundary>
  );
};

export default DetailedCoverageEnhanced;