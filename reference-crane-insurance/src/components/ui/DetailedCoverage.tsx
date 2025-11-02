import React, { useState } from 'react';
import { Shield, Wrench, HardHat, FileCheck, ChevronRight, Check, AlertCircle } from 'lucide-react';

// TypeScript interfaces for coverage data
interface CoverageItem {
  name: string;
  included: boolean;
  description?: string;
  sublimits?: string;
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
}

interface DetailedCoverageProps {
  className?: string;
}

const DetailedCoverage: React.FC<DetailedCoverageProps> = ({ className = '' }) => {
  const [activeTab, setActiveTab] = useState<string>('general-liability');

  // Comprehensive coverage data with industry-specific terminology
  const coverageSections: CoverageSection[] = [
    {
      id: 'general-liability',
      title: 'General Liability',
      icon: <Shield className="w-5 h-5" />,
      description: 'Comprehensive third-party protection for your crane operations',
      limits: '$1M to $10M+ per occurrence',
      deductibles: '$5,000 - $25,000 options available',
      coverageItems: [
        {
          name: 'Premises Operations',
          included: true,
          description: 'Coverage for bodily injury and property damage at job sites'
        },
        {
          name: 'Products/Completed Operations',
          included: true,
          description: 'Protection after project completion'
        },
        {
          name: 'Personal & Advertising Injury',
          included: true,
          sublimits: 'Included in policy limit'
        },
        {
          name: 'Medical Payments',
          included: true,
          sublimits: '$5,000 - $10,000 per person'
        },
        {
          name: 'Defense Costs Outside Limits',
          included: true,
          description: 'Legal defense doesn\'t reduce your coverage limits'
        },
        {
          name: 'Blanket Additional Insured',
          included: true,
          description: 'Automatic coverage for required parties'
        }
      ],
      specialNotes: [
        'Coverage follows crane to multiple job sites',
        'Includes loading and unloading operations',
        'Defense costs outside policy limits'
      ]
    },
    {
      id: 'riggers-liability',
      title: 'Riggers Liability',
      icon: <Wrench className="w-5 h-5" />,
      description: 'Specialized "on the hook" coverage for property of others',
      limits: '$250,000 to $5M+ per occurrence',
      deductibles: '$10,000 - $50,000 based on equipment value',
      coverageItems: [
        {
          name: 'Care, Custody & Control',
          included: true,
          description: 'Coverage while property is "on the hook"'
        },
        {
          name: 'Transit Protection',
          included: true,
          description: 'Coverage during lifting and movement'
        },
        {
          name: 'Boom & Cable Damage',
          included: true,
          description: 'Protection for boom strikes and cable failures'
        },
        {
          name: 'Tag Lines & Drift Protection',
          included: true,
          description: 'Coverage for wind-related movement'
        },
        {
          name: 'HVAC Equipment',
          included: true,
          sublimits: 'Up to $1M+ per unit'
        },
        {
          name: 'Telecom & Generator Equipment',
          included: true,
          sublimits: 'Full limits available'
        }
      ],
      specialNotes: [
        'Covers property from pick-up to set-down',
        'Includes rigging equipment failures',
        'Protection for high-value industrial machinery'
      ]
    },
    {
      id: 'physical-damage',
      title: 'Equipment Physical Damage',
      icon: <HardHat className="w-5 h-5" />,
      description: 'All-risk protection for your crane equipment',
      limits: 'Actual Cash Value or Replacement Cost',
      deductibles: '1-3% of equipment value',
      coverageItems: [
        {
          name: 'Upset or Overturn',
          included: true,
          description: 'Coverage for tipping incidents'
        },
        {
          name: 'Boom Damage',
          included: true,
          description: 'Specific protection for boom strikes'
        },
        {
          name: 'Wire Rope & Cable Failure',
          included: true,
          description: 'Coverage for cable/rope damage'
        },
        {
          name: 'Theft Protection',
          included: true,
          description: 'Complete theft coverage'
        },
        {
          name: 'Rental Reimbursement',
          included: true,
          sublimits: '$2,500/day up to $75,000'
        },
        {
          name: 'Downtime Protection',
          included: true,
          sublimits: 'Lost income during repairs'
        }
      ],
      specialNotes: [
        'All-risk coverage available',
        'Worldwide territory options',
        'New equipment replacement cost coverage'
      ]
    },
    {
      id: 'endorsements',
      title: 'Specialized Endorsements',
      icon: <FileCheck className="w-5 h-5" />,
      description: 'Additional coverages to complete your protection',
      coverageItems: [
        {
          name: 'Pollution Liability',
          included: true,
          description: 'Environmental damage protection',
          sublimits: '$1M - $5M limits'
        },
        {
          name: 'Employee Benefits Liability',
          included: true,
          description: 'ERISA and benefits administration',
          sublimits: '$1M - $2M limits'
        },
        {
          name: 'Primary & Non-Contributory',
          included: true,
          description: 'Your coverage responds first'
        },
        {
          name: 'Waiver of Subrogation',
          included: true,
          description: 'Waive recovery rights when required'
        },
        {
          name: 'Hired & Non-Owned Auto',
          included: true,
          description: 'Coverage for rented/employee vehicles'
        },
        {
          name: 'Blanket Contractual Liability',
          included: true,
          description: 'Automatic coverage for contracts'
        },
        {
          name: 'Per Project/Location Aggregate',
          included: true,
          description: 'Separate limits per project'
        },
        {
          name: 'Professional Liability',
          included: true,
          description: 'Errors & omissions coverage',
          sublimits: 'Optional - Quote on request'
        }
      ],
      specialNotes: [
        'All endorsements available nationwide',
        'Custom endorsements for unique operations',
        'Bundle discounts available'
      ]
    }
  ];

  const handleTabClick = (sectionId: string) => {
    setActiveTab(sectionId);
  };

  const activeSection = coverageSections.find(section => section.id === activeTab);

  return (
    <div className={`detailed-coverage ${className}`}>
      {/* Tab Navigation - Desktop */}
      <div className="hidden md:flex border-b border-gray-200 mb-8">
        <div className="flex space-x-1 -mb-px">
          {coverageSections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleTabClick(section.id)}
              className={`
                flex items-center gap-2 px-6 py-4 font-medium text-sm transition-all duration-200
                border-b-2 hover:text-construction-yellow
                ${activeTab === section.id 
                  ? 'border-construction-yellow text-construction-yellow bg-yellow-50/50' 
                  : 'border-transparent text-gray-600 hover:border-gray-300'
                }
              `}
              aria-selected={activeTab === section.id}
              role="tab"
            >
              <span className={activeTab === section.id ? 'text-construction-yellow' : 'text-gray-500'}>
                {section.icon}
              </span>
              <span>{section.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Accordion Navigation */}
      <div className="md:hidden space-y-2 mb-6">
        {coverageSections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleTabClick(section.id)}
            className={`
              w-full flex items-center justify-between p-4 rounded-lg transition-all duration-200
              ${activeTab === section.id 
                ? 'bg-construction-yellow text-white shadow-md' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            `}
          >
            <div className="flex items-center gap-3">
              {section.icon}
              <span className="font-medium">{section.title}</span>
            </div>
            <ChevronRight className={`w-5 h-5 transition-transform ${activeTab === section.id ? 'rotate-90' : ''}`} />
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      {activeSection && (
        <div className="tab-content animate-fadeIn">
          {/* Section Header */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-steel-black mb-2">
              {activeSection.title}
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
                    <Shield className="w-4 h-4 text-blue-600" />
                    <span className="font-semibold text-steel-black">Coverage Limits</span>
                  </div>
                  <p className="text-gray-700">{activeSection.limits}</p>
                </div>
              )}
              {activeSection.deductibles && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <AlertCircle className="w-4 h-4 text-green-600" />
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
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start gap-3">
                  <div className={`mt-1 flex-shrink-0 ${item.included ? 'text-green-500' : 'text-gray-400'}`}>
                    <Check className="w-5 h-5" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-semibold text-steel-black mb-1">
                      {item.name}
                    </h4>
                    {item.description && (
                      <p className="text-sm text-gray-600 mb-1">
                        {item.description}
                      </p>
                    )}
                    {item.sublimits && (
                      <p className="text-xs text-construction-yellow font-medium">
                        {item.sublimits}
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
                <AlertCircle className="w-5 h-5 text-construction-yellow" />
                Important Coverage Notes
              </h4>
              <ul className="space-y-2">
                {activeSection.specialNotes.map((note, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-construction-yellow mt-1">•</span>
                    <span className="text-gray-700 text-sm">{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DetailedCoverage;