/**
 * ============================================================================
 * CandidateMasterProfileFormPage.jsx - CONSOLIDATED FORM & PAGE MODULE
 * ============================================================================
 *
 * Contains all UI components, context provider, and pages for the application:
 * 1. CandidateMasterProfileFormPage (Default & Named Export) -> Main 15-step form page
 * 2. CandidateMasterProfileForm (Named Export) -> Section fields renderer & layout
 * 3. FormProvider (Named Export) -> Central Form Context provider & state manager
 * 4. ProgressBar (Named Export) -> 15-step interactive progress tracker
 * 5. SectionNavigation (Named Export) -> Bottom form navigation buttons
 * 6. TrustFooter (Named Export) -> Security and trust badges footer
 * 7. PreviewPage (Named Export) -> Review page before submission
 * 8. SuccessPage (Named Export) -> Submission success confirmation screen
 * 9. NotFound (Named Export) -> 404 error page
 *
 * ============================================================================
 */

import { useState, useMemo, useRef, useEffect } from 'react'
import { useNavigate, useLocation } from '../router-compat'
import {
  Info,
  UserRound,
  Check,
  ArrowLeft,
  ArrowRight,
  Save,
  BadgeCheck,
  FileBadge,
  Headphones,
  ShieldCheck,
  ChevronDown,
  Search,
  Send,
  CheckCircle2,
  AlertCircle,
  User, Mail, Phone, Calendar, MapPin, Briefcase, GraduationCap, Award, FileText, Building, Hash, Languages, Globe, Activity, Link as LinkIcon,
  Home
} from 'lucide-react'
import applicationSections, { FormContext, useFormContext } from './CandidateMasterProfileFormPageData'

// ============================================================================
// ICON MAPPING FUNCTION
// ============================================================================
const getFieldIcon = (fieldName, fieldType) => {
  const lower = fieldName.toLowerCase()
  if (lower.includes('name') || lower.includes('spouse') || lower.includes('father') || lower.includes('mother') || lower.includes('gender')) return User
  if (lower.includes('email')) return Mail
  if (lower.includes('mobile') || lower.includes('phone') || lower.includes('whatsapp') || lower.includes('contact')) return Phone
  if (lower.includes('date') || lower.includes('year') || lower.includes('dob') || lower.includes('session') || lower.includes('period') || lower.includes('duration') || lower.includes('time')) return Calendar
  if (lower.includes('address') || lower.includes('city') || lower.includes('state') || lower.includes('pin') || lower.includes('location') || lower.includes('place')) return MapPin
  if (lower.includes('occupation') || lower.includes('company') || lower.includes('employment') || lower.includes('designation') || lower.includes('role') || lower.includes('internship') || lower.includes('work')) return Briefcase
  if (lower.includes('school') || lower.includes('college') || lower.includes('university') || lower.includes('institute') || lower.includes('degree') || lower.includes('qualification') || lower.includes('diploma') || lower.includes('iti') || lower.includes('bachelor') || lower.includes('master') || lower.includes('stream') || lower.includes('board') || lower.includes('study')) return GraduationCap
  if (lower.includes('certificate') || lower.includes('certification') || lower.includes('marks') || lower.includes('grade') || lower.includes('percentage') || lower.includes('cgpa') || lower.includes('result') || lower.includes('division')) return Award
  if (lower.includes('skill') || lower.includes('language') || lower.includes('tongue')) return Languages
  if (lower.includes('nationality') || lower.includes('country') || lower.includes('religion') || lower.includes('community') || lower.includes('caste')) return Globe
  if (lower.includes('blood') || lower.includes('height') || lower.includes('weight') || lower.includes('disability') || lower.includes('mark') || lower.includes('age') || lower.includes('status')) return Activity
  if (lower.includes('url') || lower.includes('link') || lower.includes('profile') || lower.includes('website')) return LinkIcon
  if (lower.includes('number') || lower.includes('id') || lower.includes('roll') || lower.includes('code') || lower.includes('pan') || lower.includes('aadhaar')) return Hash
  
  if (fieldType === 'email') return Mail
  if (fieldType === 'tel') return Phone
  if (fieldType === 'number') return Hash
  if (fieldType === 'url') return LinkIcon

  return FileText
}

// ============================================================================
// CUSTOM SELECT COMPONENT (Strictly Opens Downwards / Niche)
// ============================================================================

/**
 * CustomSelect Component - Replaces native HTML <select> so dropdown always opens DOWNWARDS (niche).
 * Includes click-outside detection, option searching for long lists (e.g. Board names),
 * and handles 'Other' option specification input.
 */
function CustomSelect({ field, value, onChange, controlClassName }) {
  const formContext = useFormContext()
  const sectionError = formContext?.sectionError
  const hasError = sectionError?.field === field.name

  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [openUpwards, setOpenUpwards] = useState(false)
  const dropdownRef = useRef(null)
  const hiddenInputRef = useRef(null)

  const hasOtherOption = field.options?.includes('Other')
  const isOtherMode =
    hasOtherOption &&
    (value === 'Other' || (value !== '' && !field.options?.includes(value)))

  const selectDisplayValue = isOtherMode ? 'Other' : value

  // Clear custom validity whenever value updates
  useEffect(() => {
    if (hiddenInputRef.current && selectDisplayValue) {
      hiddenInputRef.current.setCustomValidity('')
    }
  }, [selectDisplayValue, isOtherMode])

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const filteredOptions = useMemo(() => {
    if (!field.options) return []
    if (!searchTerm.trim()) return field.options
    return field.options.filter((opt) =>
      opt.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [field.options, searchTerm])

  const handleSelectOption = (optionValue) => {
    if (hiddenInputRef.current) {
      hiddenInputRef.current.setCustomValidity('')
    }
    onChange({ target: { name: field.name, value: optionValue } })
    setIsOpen(false)
    setSearchTerm('')
  }

  const handleOtherTextChange = (e) => {
    onChange({ target: { name: field.name, value: e.target.value } })
  }

  const handleToggle = () => {
    if (!isOpen && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect()
      const spaceBelow = window.innerHeight - rect.bottom
      const spaceAbove = rect.top
      // If less than 240px below and more room above, open upwards
      setOpenUpwards(spaceBelow < 240 && spaceAbove > spaceBelow)
    }
    setIsOpen((prev) => !prev)
  }

  return (
    <div className="flex flex-col gap-2">
      <div className={`relative ${isOpen ? 'z-30' : ''}`} ref={dropdownRef}>
        {/* Hidden input for HTML5 form validation */}
        <input
          ref={hiddenInputRef}
          type="text"
          tabIndex={-1}
          required={field.required && !isOtherMode}
          value={selectDisplayValue || ''}
          onChange={() => {
            if (hiddenInputRef.current) {
              hiddenInputRef.current.setCustomValidity('')
            }
          }}
          className="absolute inset-0 h-full w-full opacity-0 pointer-events-none z-[-1]"
          onInvalid={(e) => {
            if (!selectDisplayValue) {
              const cleanPlaceholder = field.placeholder
                ? field.placeholder.replace(/^Select\s+/i, '')
                : 'an option'
              e.target.setCustomValidity(`Please select ${cleanPlaceholder}`)
            } else {
              e.target.setCustomValidity('')
            }
          }}
          onInput={(e) => {
            e.target.setCustomValidity('')
          }}
        />

        {/* Field Icon */}
        <div className="absolute left-1.5 top-1/2 -translate-y-1/2 flex h-9 w-9 sm:h-11 sm:w-11 lg:h-7 lg:w-7 items-center justify-center rounded-full bg-[#F3EEFF] text-[#6D28D9] z-10 pointer-events-none transition-colors group-focus-within:bg-[#0B1F4D] group-focus-within:text-[#D4AF37]">
          {(() => {
            const FieldIcon = getFieldIcon(field.name, field.type)
            return <FieldIcon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-3.5 lg:w-3.5" />
          })()}
        </div>

        {/* Trigger Button */}
        <button
          type="button"
          id={field.name}
          onClick={handleToggle}
          className={`${controlClassName} ${hasError ? '!border-red-500 !ring-2 !ring-red-100' : ''} flex items-center justify-between text-left cursor-pointer bg-white ${!selectDisplayValue ? 'text-slate-400' : 'text-[#0B1F4D] font-medium'
            }`}
        >
          <span className="truncate">
            {selectDisplayValue || field.placeholder || 'Select...'}
          </span>
          <ChevronDown
            size={18}
            className={`shrink-0 text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#0B1F4D]' : ''
              }`}
          />
        </button>

        {hasError && (
          <p className="mt-1 text-xs font-semibold text-red-600 flex items-center gap-1">
            <span>⚠️ {sectionError.message || `Please select ${field.label}`}</span>
          </p>
        )}

        {/* Dropdown Menu */}
        {isOpen && (
          <div className={`absolute left-0 right-0 z-50 max-h-64 overflow-hidden rounded-md border border-slate-300 bg-white shadow-2xl text-xs sm:text-sm ${
            openUpwards ? 'bottom-full mb-1' : 'top-full mt-1'
          }`}>
            {/* Search Box if options count > 5 */}
            {field.options?.length > 5 && (
              <div className="p-2 border-b border-slate-100 bg-slate-50 sticky top-0 z-10">
                <div className="relative flex items-center">
                  <Search size={14} className="absolute left-2.5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search option..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                    className="w-full rounded border border-slate-300 bg-white pl-8 pr-2.5 py-1.5 text-xs text-slate-800 outline-none focus:border-[#6D28D9]"
                    autoFocus
                  />
                </div>
              </div>
            )}

            <div className="max-h-52 overflow-y-auto py-1 [scrollbar-width:thin] [scrollbar-color:#cbd5e1_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-400">
              <button
                type="button"
                onClick={() => handleSelectOption('')}
                className="w-full px-3 py-2 text-left text-slate-400 hover:bg-slate-100 text-xs italic border-0 border-b border-slate-100 bg-transparent outline-none focus:outline-none cursor-pointer"
              >
                {field.placeholder || 'Select option...'}
              </button>

              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => {
                  const isSelected = selectDisplayValue === option
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleSelectOption(option)}
                      className={`w-full px-3 py-2 text-left transition-colors flex items-center justify-between text-xs sm:text-sm border-0 border-none outline-none focus:outline-none cursor-pointer ${isSelected
                          ? 'bg-[#071733] text-amber-400 font-semibold'
                          : 'bg-transparent text-slate-800 hover:bg-amber-50 hover:text-[#071733]'
                        }`}
                    >
                      <span className="truncate">{option}</span>
                      {isSelected && <Check size={16} className="text-amber-400 ml-2 shrink-0" />}
                    </button>
                  )
                })
              ) : (
                <div className="px-3 py-3 text-center text-xs text-slate-500">
                  No matching options found
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Text input shown when 'Other' is selected */}
      {isOtherMode && (
        <div className="relative mt-2">
          <div className="absolute left-1.5 top-1/2 -translate-y-1/2 flex h-9 w-9 sm:h-11 sm:w-11 lg:h-7 lg:w-7 items-center justify-center rounded-full bg-[#f1f5f9] text-[#071733] z-10 pointer-events-none transition-colors">
            {(() => {
              const FieldIcon = getFieldIcon(field.name, field.type)
              return <FieldIcon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-3.5 lg:w-3.5" />
            })()}
          </div>
          <input
            type="text"
            name={field.name}
            value={value === 'Other' ? '' : value}
            onChange={handleOtherTextChange}
            placeholder="Please specify..."
            required={field.required}
            autoFocus
            className={controlClassName}
          />
        </div>
      )}
    </div>
  )
}

// ============================================================================
// AGE CALCULATION & DATE OF BIRTH VALIDATION
// ============================================================================

/**
 * validateDateOfBirth() - Validates Date of Birth format, validity, future dates, and minimum age (>10).
 *
 * @param {string} dobStr - Date string "DD/MM/YYYY" or "YYYY-MM-DD"
 * @returns {object} { isValid: boolean, age?: number, status: string, message: string }
 */
export function validateDateOfBirth(dobStr) {
  if (!dobStr || typeof dobStr !== 'string') {
    return { isValid: false, status: 'empty', message: 'Date of birth is required.' }
  }

  const clean = dobStr.trim()
  let day, month, year

  if (clean.includes('-')) {
    const parts = clean.split('-').map(Number)
    if (parts.length === 3) [year, month, day] = parts
  } else if (clean.includes('/')) {
    const parts = clean.split('/').map(Number)
    if (parts.length === 3) [day, month, year] = parts
  }

  if (!day || !month || !year || String(year).length !== 4) {
    return { isValid: false, status: 'incomplete', message: 'Please enter complete Date of Birth in DD/MM/YYYY format.' }
  }

  if (month < 1 || month > 12) {
    return { isValid: false, status: 'invalid_month', message: 'Month must be between 01 and 12.' }
  }

  const daysInMonth = new Date(year, month, 0).getDate()
  if (day < 1 || day > daysInMonth) {
    return { isValid: false, status: 'invalid_day', message: `Day must be between 01 and ${daysInMonth} for the selected month.` }
  }

  if (year < 1920) {
    return { isValid: false, status: 'invalid_year', message: 'Please enter a valid year of birth (after 1920).' }
  }

  const dobDate = new Date(year, month - 1, day)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  dobDate.setHours(0, 0, 0, 0)

  // Disallow future date of birth
  if (dobDate > today) {
    return { isValid: false, status: 'future_date', message: 'Date of birth cannot be in the future.' }
  }

  // Calculate age
  let age = today.getFullYear() - dobDate.getFullYear()
  const monthDiff = today.getMonth() - dobDate.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
    age -= 1
  }

  // Candidates aged 0 to 10 years are not allowed to fill the form
  if (age <= 10) {
    return {
      isValid: false,
      age,
      status: 'underage',
      message: `Age is ${age} year${age === 1 ? '' : 's'}. Candidates aged 0 to 10 years are not eligible to apply (minimum age must be above 10 years).`
    }
  }

  return {
    isValid: true,
    age,
    status: 'valid',
    message: `Valid Date of Birth (Age: ${age} Years)`
  }
}

/**
 * calculateAge() - Date of Birth se age calculate karta hai.
 *
 * @param {string} dateOfBirth - Date string "DD/MM/YYYY" ya "YYYY-MM-DD" format mein
 * @returns {string} Age as string (e.g., "25"), ya empty string agar date invalid hai
 */
function calculateAge(dateOfBirth) {
  const res = validateDateOfBirth(dateOfBirth)
  if (res.isValid && res.age !== undefined) {
    return String(res.age)
  }
  return ''
}

/**
 * validateYearOfPassing() - Validates education passing year.
 * Ensures 4 digits, 1950 <= year <= currentYear, and year >= birthYear + 10 (if candidate's DOB provided).
 *
 * @param {string|number} yearStr - Year string or number
 * @param {string} dobStr - Candidate's DOB in "DD/MM/YYYY" format
 * @returns {object} { isValid: boolean, status: string, message: string }
 */
export function validateYearOfPassing(yearStr, dobStr = '') {
  if (!yearStr && yearStr !== 0) {
    return { isValid: false, status: 'empty', message: 'Year of passing is required.' }
  }

  const str = String(yearStr).trim()
  if (!/^\d{4}$/.test(str)) {
    return { isValid: false, status: 'invalid_format', message: 'Please enter a valid 4-digit passing year (e.g., 2018).' }
  }

  const yearNum = parseInt(str, 10)
  const currentYear = new Date().getFullYear()

  if (yearNum < 1950) {
    return { isValid: false, status: 'too_early', message: 'Year of passing cannot be earlier than 1950.' }
  }

  if (yearNum > currentYear) {
    return { isValid: false, status: 'future', message: `Year of passing cannot be in the future (maximum ${currentYear}).` }
  }

  // Candidate must have completed 10th at reasonable age (at least 10 years after birth)
  if (dobStr && typeof dobStr === 'string') {
    let birthYear = null
    if (dobStr.includes('/')) {
      const parts = dobStr.split('/')
      if (parts.length === 3 && parts[2]?.length === 4) birthYear = parseInt(parts[2], 10)
    } else if (dobStr.includes('-')) {
      const parts = dobStr.split('-')
      if (parts.length === 3 && parts[0]?.length === 4) birthYear = parseInt(parts[0], 10)
    }

    if (birthYear && !isNaN(birthYear)) {
      if (yearNum < birthYear + 10) {
        return {
          isValid: false,
          status: 'before_minimum_age',
          message: `Year of passing (${yearNum}) cannot be earlier than birth year + 10 years (${birthYear + 10}).`
        }
      }
    }
  }

  return { isValid: true, status: 'valid', message: `Valid Passing Year (${yearNum})` }
}

/**
 * validateMarks() - Validates obtained and maximum marks.
 * Ensures maximum marks > 0, marks obtained >= 0, and marks obtained <= maximum marks.
 *
 * @param {string|number} obtainedVal - Total marks obtained
 * @param {string|number} maxVal - Maximum marks
 * @returns {object} { isValid: boolean, field?: string, message: string }
 */
export function validateMarks(obtainedVal, maxVal) {
  const obtStr = String(obtainedVal ?? '').trim()
  const maxStr = String(maxVal ?? '').trim()

  if (!obtStr && !maxStr) {
    return { isValid: true, status: 'empty', message: '' }
  }

  const obtNum = parseFloat(obtStr)
  const maxNum = parseFloat(maxStr)

  if (maxStr !== '') {
    if (isNaN(maxNum) || maxNum <= 0) {
      return { isValid: false, field: 'max', message: 'Maximum marks must be greater than 0.' }
    }
  }

  if (obtStr !== '') {
    if (isNaN(obtNum) || obtNum < 0) {
      return { isValid: false, field: 'obtained', message: 'Marks obtained cannot be negative.' }
    }
  }

  if (obtStr !== '' && maxStr !== '' && !isNaN(obtNum) && !isNaN(maxNum)) {
    if (obtNum > maxNum) {
      return {
        isValid: false,
        field: 'obtained',
        message: `Total marks obtained (${obtNum}) cannot exceed maximum marks (${maxNum}).`
      }
    }
  }

  return { isValid: true, status: 'valid', message: 'Valid marks' }
}

/**
 * validateCertificateIssueDate() - Validates certificate issue date.
 * Format DD/MM/YYYY, not in the future, not earlier than passing year.
 *
 * @param {string} dateStr - Date string in DD/MM/YYYY
 * @param {string|number} yearOfPassing - Year of passing
 * @returns {object} { isValid: boolean, status: string, message: string }
 */
export function validateCertificateIssueDate(dateStr, yearOfPassing = '') {
  if (!dateStr || typeof dateStr !== 'string') {
    return { isValid: true, status: 'empty', message: '' }
  }

  const clean = dateStr.trim()
  if (!clean) return { isValid: true, status: 'empty', message: '' }

  let day, month, year
  if (clean.includes('/')) {
    const parts = clean.split('/').map(Number)
    if (parts.length === 3) [day, month, year] = parts
  } else if (clean.includes('-')) {
    const parts = clean.split('-').map(Number)
    if (parts.length === 3) [year, month, day] = parts
  }

  if (!day || !month || !year || String(year).length !== 4) {
    return { isValid: false, status: 'incomplete', message: 'Enter complete date in DD/MM/YYYY format.' }
  }

  if (month < 1 || month > 12) {
    return { isValid: false, status: 'invalid_month', message: 'Month must be between 01 and 12.' }
  }

  const daysInMonth = new Date(year, month, 0).getDate()
  if (day < 1 || day > daysInMonth) {
    return { isValid: false, status: 'invalid_day', message: `Day must be between 01 and ${daysInMonth}.` }
  }

  if (year < 1950) {
    return { isValid: false, status: 'too_early', message: 'Issue year cannot be before 1950.' }
  }

  const certDate = new Date(year, month - 1, day)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  certDate.setHours(0, 0, 0, 0)

  if (certDate > today) {
    return { isValid: false, status: 'future_date', message: 'Certificate issue date cannot be in the future.' }
  }

  if (yearOfPassing) {
    const passYearNum = parseInt(yearOfPassing, 10)
    if (!isNaN(passYearNum) && year < passYearNum) {
      return {
        isValid: false,
        status: 'before_passing_year',
        message: `Issue date year (${year}) cannot be earlier than passing year (${passYearNum}).`
      }
    }
  }

  return { isValid: true, status: 'valid', message: 'Valid Certificate Issue Date' }
}

// ============================================================================
// SECTION VALIDATION FUNCTIONS
// ============================================================================

/**
 * validateSection() - Validates all required and important fields for any given section.
 *
 * @param {number} sectionId - Section id (1-18)
 * @param {object} formData - Form state object
 * @returns {object} { isValid: boolean, field?: string, message?: string }
 */
export function validateSection(sectionId, formData = {}) {
  // Section 1: Personal Information
  if (sectionId === 1) {
    if (!formData.candidateFirstName?.trim()) {
      return { isValid: false, field: 'candidateFirstName', message: 'Candidate First Name is required.' }
    }
    if (!/^[a-zA-Z][a-zA-Z\s.]*$/.test(formData.candidateFirstName.trim())) {
      return { isValid: false, field: 'candidateFirstName', message: 'Candidate First Name must contain only alphabets.' }
    }
    if (!formData.candidateLastName?.trim()) {
      return { isValid: false, field: 'candidateLastName', message: 'Candidate Last Name is required.' }
    }
    if (!/^[a-zA-Z][a-zA-Z\s.]*$/.test(formData.candidateLastName.trim())) {
      return { isValid: false, field: 'candidateLastName', message: 'Candidate Last Name must contain only alphabets.' }
    }
    if (!formData.fathersFirstName?.trim()) {
      return { isValid: false, field: 'fathersFirstName', message: "Father's First Name is required." }
    }
    if (!/^[a-zA-Z][a-zA-Z\s.]*$/.test(formData.fathersFirstName.trim())) {
      return { isValid: false, field: 'fathersFirstName', message: "Father's first name must contain only alphabets." }
    }
    if (!formData.fathersLastName?.trim()) {
      return { isValid: false, field: 'fathersLastName', message: "Father's Last Name is required." }
    }
    if (!/^[a-zA-Z][a-zA-Z\s.]*$/.test(formData.fathersLastName.trim())) {
      return { isValid: false, field: 'fathersLastName', message: "Father's last name must contain only alphabets." }
    }
    if (!formData.mothersFirstName?.trim()) {
      return { isValid: false, field: 'mothersFirstName', message: "Mother's First Name is required." }
    }
    if (!/^[a-zA-Z][a-zA-Z\s.]*$/.test(formData.mothersFirstName.trim())) {
      return { isValid: false, field: 'mothersFirstName', message: "Mother's first name must contain only alphabets." }
    }
    if (!formData.mothersLastName?.trim()) {
      return { isValid: false, field: 'mothersLastName', message: "Mother's Last Name is required." }
    }
    if (!/^[a-zA-Z][a-zA-Z\s.]*$/.test(formData.mothersLastName.trim())) {
      return { isValid: false, field: 'mothersLastName', message: "Mother's last name must contain only alphabets." }
    }

    const optionalNameFields = [
      ['candidateMiddleName', 'Candidate Middle Name'],
      ['fathersMiddleName', "Father's Middle Name"],
      ['mothersMiddleName', "Mother's Middle Name"],
      ['spouseFirstName', "Spouse First Name"],
      ['spouseMiddleName', "Spouse Middle Name"],
      ['spouseLastName', "Spouse Last Name"],
    ]
    for (const [key, label] of optionalNameFields) {
      if (formData[key]?.trim() && !/^[a-zA-Z][a-zA-Z\s.]*$/.test(formData[key].trim())) {
        return { isValid: false, field: key, message: `${label} must contain only alphabets.` }
      }
    }

    const dobCheck = validateDateOfBirth(formData.dateOfBirth || '')
    if (!dobCheck.isValid) {
      return { isValid: false, field: 'dateOfBirth', message: dobCheck.message || 'Valid Date of Birth is required.' }
    }
    if (!formData.gender?.trim()) {
      return { isValid: false, field: 'gender', message: 'Please select Gender.' }
    }
    if (!formData.maritalStatus?.trim()) {
      return { isValid: false, field: 'maritalStatus', message: 'Please select Marital Status.' }
    }
    if (!formData.nationality?.trim()) {
      return { isValid: false, field: 'nationality', message: 'Nationality is required.' }
    }
    return { isValid: true }
  }

  // Section 2: Physical & Identification Information
  if (sectionId === 2) {
    if (formData.heightCm) {
      const h = parseFloat(formData.heightCm)
      if (isNaN(h) || h < 30 || h > 300) {
        return { isValid: false, field: 'heightCm', message: 'Height must be between 30 cm and 300 cm.' }
      }
    }
    if (formData.weightKg) {
      const w = parseFloat(formData.weightKg)
      if (isNaN(w) || w < 10 || w > 500) {
        return { isValid: false, field: 'weightKg', message: 'Weight must be between 10 kg and 500 kg.' }
      }
    }
    return { isValid: true }
  }

  // Section 3: Education, Skills & Experience
  if (sectionId === 3) {
    if (!formData.higherQualification?.trim()) {
      return { isValid: false, field: 'higherQualification', message: 'Higher Educational Qualification is required.' }
    }
    if (formData.typingSpeed) {
      const speed = parseInt(formData.typingSpeed, 10)
      if (isNaN(speed) || speed < 0 || speed > 300) {
        return { isValid: false, field: 'typingSpeed', message: 'Typing Speed must be between 0 and 300 WPM.' }
      }
    }
    if (!formData.languagesKnown?.trim()) {
      return { isValid: false, field: 'languagesKnown', message: 'Languages Known is required.' }
    }
    return { isValid: true }
  }

  // Section 4: Address & Contact Information
  if (sectionId === 4) {
    const mobileRegex = /^[6-9]\d{9}$/
    if (!mobileRegex.test((formData.mobileNumber || '').trim())) {
      return { isValid: false, field: 'mobileNumber', message: 'Please enter a valid 10-digit Mobile Number starting with 6, 7, 8, or 9.' }
    }
    if (!mobileRegex.test((formData.whatsappNumber || '').trim())) {
      return { isValid: false, field: 'whatsappNumber', message: 'Please enter a valid 10-digit WhatsApp Number starting with 6, 7, 8, or 9.' }
    }
    if (formData.alternateMobileNumber && !mobileRegex.test(formData.alternateMobileNumber.trim())) {
      return { isValid: false, field: 'alternateMobileNumber', message: 'Alternate Mobile Number must be 10 digits starting with 6-9.' }
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test((formData.emailId || '').trim())) {
      return { isValid: false, field: 'emailId', message: 'Please enter a valid Primary Email address.' }
    }
    if (formData.alternateEmailId && !emailRegex.test(formData.alternateEmailId.trim())) {
      return { isValid: false, field: 'alternateEmailId', message: 'Please enter a valid Alternate Email address.' }
    }
    if (!formData.permanentAddress?.trim()) {
      return { isValid: false, field: 'permanentAddress', message: 'Permanent Address is required.' }
    }
    if (!formData.presentAddress?.trim()) {
      return { isValid: false, field: 'presentAddress', message: 'Present Address is required.' }
    }
    return { isValid: true }
  }

  // Section 5: Social Media
  if (sectionId === 5) {
    return { isValid: true }
  }

  // Section 6: Internship Details
  if (sectionId === 6) {
    if (!formData.internshipIfAny?.trim()) {
      return { isValid: false, field: 'internshipIfAny', message: 'Please select whether you have Internship Experience (Yes/No).' }
    }
    if (formData.internshipIfAny === 'Yes') {
      if (!formData.internshipOrganizationName?.trim()) {
        return { isValid: false, field: 'internshipOrganizationName', message: 'Internship Organization Name is required.' }
      }
      if (!formData.internshipRole?.trim()) {
        return { isValid: false, field: 'internshipRole', message: 'Internship Role / Designation is required.' }
      }
    }
    return { isValid: true }
  }

  // Section 7: Trainer & Certificate Details
  if (sectionId === 7) {
    if (formData.internshipIfAny === 'No') return { isValid: true }
    if (formData.trainerSupervisorContactNumber) {
      if (!/^[6-9]\d{9}$/.test(formData.trainerSupervisorContactNumber.trim())) {
        return { isValid: false, field: 'trainerSupervisorContactNumber', message: 'Trainer contact number must be a valid 10-digit number.' }
      }
    }
    if (formData.trainerSupervisorEmailId) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.trainerSupervisorEmailId.trim())) {
        return { isValid: false, field: 'trainerSupervisorEmailId', message: 'Please enter a valid trainer email address.' }
      }
    }
    return { isValid: true }
  }

  // Section 8: Employment Information
  if (sectionId === 8) {
    if (!formData.employmentIfAny?.trim()) {
      return { isValid: false, field: 'employmentIfAny', message: 'Please select whether you have Employment Experience (Yes/No).' }
    }
    if (formData.employmentIfAny === 'Yes') {
      if (!formData.currentEmploymentStatus?.trim()) {
        return { isValid: false, field: 'currentEmploymentStatus', message: 'Please select Current Employment Status.' }
      }
    }
    return { isValid: true }
  }

  // Section 9: Identity & Government Information
  if (sectionId === 9) {
    const aadhaarClean = (formData.aadhaarNumber || '').trim()
    if (!/^\d{12}$/.test(aadhaarClean)) {
      return { isValid: false, field: 'aadhaarNumber', message: 'Please enter a valid 12-digit Aadhaar Number.' }
    }
    const panClean = (formData.panNumber || '').trim().toUpperCase()
    if (!/^[A-Z]{5}\d{4}[A-Z]{1}$/.test(panClean)) {
      return { isValid: false, field: 'panNumber', message: 'Please enter a valid 10-character PAN Number (e.g., ABCDE1234F).' }
    }
    return { isValid: true }
  }

  // Section 10: 10th Standard Qualification Details
  if (sectionId === 10) {
    if (!formData.tenthQualificationName?.trim()) {
      return { isValid: false, field: 'tenthQualificationName', message: 'Qualification Name (10th) is required.' }
    }
    const yearCheck = validateYearOfPassing(formData.tenthYearOfPassing, formData.dateOfBirth)
    if (!yearCheck.isValid) {
      return { isValid: false, field: 'tenthYearOfPassing', message: yearCheck.message }
    }
    if (!formData.tenthBoardName?.trim()) {
      return { isValid: false, field: 'tenthBoardName', message: 'Please select 10th Class Board.' }
    }
    if (!formData.tenthBoardType?.trim()) {
      return { isValid: false, field: 'tenthBoardType', message: 'Please select Type of Board.' }
    }
    if (!formData.tenthRollNumber?.trim()) {
      return { isValid: false, field: 'tenthRollNumber', message: 'Student Roll Number is required.' }
    }
    const maxMarks = parseFloat(formData.tenthMaximumMarks)
    if (isNaN(maxMarks) || maxMarks <= 0) {
      return { isValid: false, field: 'tenthMaximumMarks', message: 'Maximum Marks must be greater than 0.' }
    }
    const obtMarks = parseFloat(formData.tenthTotalMarksObtained)
    if (isNaN(obtMarks) || obtMarks < 0) {
      return { isValid: false, field: 'tenthTotalMarksObtained', message: 'Total Marks Obtained is required.' }
    }
    if (obtMarks > maxMarks) {
      return { isValid: false, field: 'tenthTotalMarksObtained', message: `Total Marks (${obtMarks}) cannot exceed Maximum Marks (${maxMarks}).` }
    }
    if (!formData.tenthSubjectsStudied?.trim()) {
      return { isValid: false, field: 'tenthSubjectsStudied', message: 'Please enter main subjects studied.' }
    }
    if (!formData.tenthSchoolName?.trim()) {
      return { isValid: false, field: 'tenthSchoolName', message: 'School Name is required.' }
    }
    if (!formData.tenthMediumOfInstruction?.trim()) {
      return { isValid: false, field: 'tenthMediumOfInstruction', message: 'Please select Medium of Instruction.' }
    }
    if (formData.tenthCertificateIssueDate) {
      const certCheck = validateCertificateIssueDate(formData.tenthCertificateIssueDate, formData.tenthYearOfPassing)
      if (!certCheck.isValid) {
        return { isValid: false, field: 'tenthCertificateIssueDate', message: certCheck.message }
      }
    }
    return { isValid: true }
  }

  // Section 11: Secondary / Higher Secondary / Technical Qualification Details
  if (sectionId === 11) {
    const selectedQual = formData.twelfthQualificationName || '12th'
    if (selectedQual === '12th' || !selectedQual) {
      if (!formData.twelfthStream?.trim()) {
        return { isValid: false, field: 'twelfthStream', message: 'Please select 12th Stream.' }
      }
      if (!formData.twelfthSchoolCollegeName?.trim()) {
        return { isValid: false, field: 'twelfthSchoolCollegeName', message: 'School / College Name is required.' }
      }
      if (!formData.twelfthMediumOfInstruction?.trim()) {
        return { isValid: false, field: 'twelfthMediumOfInstruction', message: 'Please select Medium of Instruction.' }
      }
      const yearCheck = validateYearOfPassing(formData.twelfthYearOfPassing, formData.dateOfBirth)
      if (!yearCheck.isValid) {
        return { isValid: false, field: 'twelfthYearOfPassing', message: yearCheck.message }
      }
      if (formData.tenthYearOfPassing) {
        const tY = parseInt(formData.tenthYearOfPassing, 10)
        const twY = parseInt(formData.twelfthYearOfPassing, 10)
        if (!isNaN(tY) && !isNaN(twY) && twY < tY) {
          return { isValid: false, field: 'twelfthYearOfPassing', message: `12th passing year (${twY}) cannot be earlier than 10th passing year (${tY}).` }
        }
      }
      if (!formData.twelfthBoardName?.trim()) {
        return { isValid: false, field: 'twelfthBoardName', message: 'Please select Board / Council.' }
      }
      if (!formData.twelfthBoardType?.trim()) {
        return { isValid: false, field: 'twelfthBoardType', message: 'Please select Type of Board.' }
      }
      if (!formData.twelfthRollNumber?.trim()) {
        return { isValid: false, field: 'twelfthRollNumber', message: 'Roll Number is required.' }
      }
      if (!formData.twelfthSubjectsStudied?.trim()) {
        return { isValid: false, field: 'twelfthSubjectsStudied', message: 'Please enter subjects studied.' }
      }
      const maxMarks = parseFloat(formData.twelfthMaximumMarks)
      if (isNaN(maxMarks) || maxMarks <= 0) {
        return { isValid: false, field: 'twelfthMaximumMarks', message: 'Maximum Marks must be greater than 0.' }
      }
      const obtMarks = parseFloat(formData.twelfthTotalMarksObtained)
      if (isNaN(obtMarks) || obtMarks < 0) {
        return { isValid: false, field: 'twelfthTotalMarksObtained', message: 'Total Marks Obtained is required.' }
      }
      if (obtMarks > maxMarks) {
        return { isValid: false, field: 'twelfthTotalMarksObtained', message: `Total Marks (${obtMarks}) cannot exceed Maximum Marks (${maxMarks}).` }
      }
    } else if (selectedQual === 'ITI') {
      if (!formData.itiTrade?.trim()) return { isValid: false, field: 'itiTrade', message: 'Please select ITI Trade.' }
      if (!formData.itiInstituteName?.trim()) return { isValid: false, field: 'itiInstituteName', message: 'ITI Institute Name is required.' }
      if (!formData.itiAffiliation?.trim()) return { isValid: false, field: 'itiAffiliation', message: 'Please select Affiliation.' }
      if (!formData.itiMediumOfInstruction?.trim()) return { isValid: false, field: 'itiMediumOfInstruction', message: 'Please select Medium of Instruction.' }
      const yearCheck = validateYearOfPassing(formData.itiYearOfPassing, formData.dateOfBirth)
      if (!yearCheck.isValid) return { isValid: false, field: 'itiYearOfPassing', message: yearCheck.message }
      if (!formData.itiRollNumber?.trim()) return { isValid: false, field: 'itiRollNumber', message: 'ITI Roll Number is required.' }
      if (!formData.itiSubjectsStudied?.trim()) return { isValid: false, field: 'itiSubjectsStudied', message: 'Main Subjects / Modules Studied is required.' }
      const maxMarks = parseFloat(formData.itiMaximumMarks)
      if (isNaN(maxMarks) || maxMarks <= 0) return { isValid: false, field: 'itiMaximumMarks', message: 'Maximum Marks must be greater than 0.' }
      const obtMarks = parseFloat(formData.itiTotalMarksObtained)
      if (isNaN(obtMarks) || obtMarks < 0) return { isValid: false, field: 'itiTotalMarksObtained', message: 'Total Marks Obtained is required.' }
      if (obtMarks > maxMarks) return { isValid: false, field: 'itiTotalMarksObtained', message: `Marks Obtained (${obtMarks}) cannot exceed Maximum Marks (${maxMarks}).` }
    } else if (selectedQual === 'Diploma') {
      if (!formData.diplomaBranch?.trim()) return { isValid: false, field: 'diplomaBranch', message: 'Please select Diploma Branch.' }
      if (!formData.diplomaPolytechnicCollegeName?.trim()) return { isValid: false, field: 'diplomaPolytechnicCollegeName', message: 'Polytechnic College Name is required.' }
      if (!formData.diplomaTechnicalBoard?.trim()) return { isValid: false, field: 'diplomaTechnicalBoard', message: 'Please select Technical Board.' }
      if (!formData.diplomaMediumOfInstruction?.trim()) return { isValid: false, field: 'diplomaMediumOfInstruction', message: 'Please select Medium of Instruction.' }
      const yearCheck = validateYearOfPassing(formData.diplomaYearOfPassing, formData.dateOfBirth)
      if (!yearCheck.isValid) return { isValid: false, field: 'diplomaYearOfPassing', message: yearCheck.message }
      if (!formData.diplomaRollNumber?.trim()) return { isValid: false, field: 'diplomaRollNumber', message: 'Roll Number is required.' }
      if (!formData.diplomaSubjectsStudied?.trim()) return { isValid: false, field: 'diplomaSubjectsStudied', message: 'Core Subjects Studied is required.' }
      const maxMarks = parseFloat(formData.diplomaMaximumMarks)
      if (isNaN(maxMarks) || maxMarks <= 0) return { isValid: false, field: 'diplomaMaximumMarks', message: 'Maximum Marks must be greater than 0.' }
      const obtMarks = parseFloat(formData.diplomaTotalMarksObtained)
      if (isNaN(obtMarks) || obtMarks < 0) return { isValid: false, field: 'diplomaTotalMarksObtained', message: 'Total Marks Obtained is required.' }
      if (obtMarks > maxMarks) return { isValid: false, field: 'diplomaTotalMarksObtained', message: `Marks Obtained (${obtMarks}) cannot exceed Maximum Marks (${maxMarks}).` }
    } else if (selectedQual === 'Other') {
      if (!formData.otherQualInstitutionName?.trim()) return { isValid: false, field: 'otherQualInstitutionName', message: 'Institution Name is required.' }
      if (!formData.otherQualBoardUniversity?.trim()) return { isValid: false, field: 'otherQualBoardUniversity', message: 'Board / University is required.' }
      if (!formData.otherQualMediumOfInstruction?.trim()) return { isValid: false, field: 'otherQualMediumOfInstruction', message: 'Please select Medium of Instruction.' }
      const yearCheck = validateYearOfPassing(formData.otherQualYearOfPassing, formData.dateOfBirth)
      if (!yearCheck.isValid) return { isValid: false, field: 'otherQualYearOfPassing', message: yearCheck.message }
      if (!formData.otherQualRollNumber?.trim()) return { isValid: false, field: 'otherQualRollNumber', message: 'Roll Number is required.' }
      if (!formData.otherQualSubjectsStudied?.trim()) return { isValid: false, field: 'otherQualSubjectsStudied', message: 'Main Subjects Studied is required.' }
      const maxMarks = parseFloat(formData.otherQualMaximumMarks)
      if (isNaN(maxMarks) || maxMarks <= 0) return { isValid: false, field: 'otherQualMaximumMarks', message: 'Maximum Marks must be greater than 0.' }
      const obtMarks = parseFloat(formData.otherQualTotalMarksObtained)
      if (isNaN(obtMarks) || obtMarks < 0) return { isValid: false, field: 'otherQualTotalMarksObtained', message: 'Total Marks Obtained is required.' }
      if (obtMarks > maxMarks) return { isValid: false, field: 'otherQualTotalMarksObtained', message: `Marks Obtained (${obtMarks}) cannot exceed Maximum Marks (${maxMarks}).` }
    }
    return { isValid: true }
  }

  // Section 12: Bachelor's Degree / Graduation Qualification Details
  if (sectionId === 12) {
    if (!formData.hasBachelorDegree?.trim()) {
      return { isValid: false, field: 'hasBachelorDegree', message: "Please select whether you possess a Bachelor's Degree (Yes/No)." }
    }
    if (formData.hasBachelorDegree === 'Yes') {
      if (!formData.bachelorDegreeName?.trim()) return { isValid: false, field: 'bachelorDegreeName', message: 'Please select Degree Name.' }
      if (!formData.bachelorCollegeUniversityName?.trim()) return { isValid: false, field: 'bachelorCollegeUniversityName', message: 'College / University Name is required.' }
      if (!formData.bachelorCollegeUniversityType?.trim()) return { isValid: false, field: 'bachelorCollegeUniversityType', message: 'Please select College / University Type.' }
      if (!formData.bachelorAdmissionYear || !/^\d{4}$/.test(String(formData.bachelorAdmissionYear).trim())) return { isValid: false, field: 'bachelorAdmissionYear', message: 'Please enter a valid 4-digit Admission Year.' }
      if (!formData.bachelorGraduationYear || !/^\d{4}$/.test(String(formData.bachelorGraduationYear).trim())) return { isValid: false, field: 'bachelorGraduationYear', message: 'Please enter a valid 4-digit Graduation Year.' }
      if (parseInt(formData.bachelorGraduationYear, 10) < parseInt(formData.bachelorAdmissionYear, 10)) {
        return { isValid: false, field: 'bachelorGraduationYear', message: 'Graduation Year cannot be earlier than Admission Year.' }
      }
      if (!formData.bachelorCourseDuration?.trim()) return { isValid: false, field: 'bachelorCourseDuration', message: 'Please select Course Duration.' }
      if (!formData.bachelorModeOfStudy?.trim()) return { isValid: false, field: 'bachelorModeOfStudy', message: 'Please select Mode of Study.' }
      if (!formData.bachelorRegistrationNumber?.trim()) return { isValid: false, field: 'bachelorRegistrationNumber', message: 'Registration Number is required.' }
      if (!formData.bachelorRollNumber?.trim()) return { isValid: false, field: 'bachelorRollNumber', message: 'Roll Number is required.' }
      if (!formData.bachelorAcademicPattern?.trim()) return { isValid: false, field: 'bachelorAcademicPattern', message: 'Please select Academic Pattern.' }
      const maxMarks = parseFloat(formData.bachelorMaximumMarks)
      if (isNaN(maxMarks) || maxMarks <= 0) return { isValid: false, field: 'bachelorMaximumMarks', message: 'Maximum Marks must be greater than 0.' }
      const obtMarks = parseFloat(formData.bachelorTotalMarksObtained)
      if (isNaN(obtMarks) || obtMarks < 0) return { isValid: false, field: 'bachelorTotalMarksObtained', message: 'Total Marks Obtained is required.' }
      if (obtMarks > maxMarks) return { isValid: false, field: 'bachelorTotalMarksObtained', message: `Marks Obtained (${obtMarks}) cannot exceed Maximum Marks (${maxMarks}).` }
      if (!formData.bachelorResultStatus?.trim()) return { isValid: false, field: 'bachelorResultStatus', message: 'Please select Result Status.' }
    }
    return { isValid: true }
  }

  // Section 13: Master Degree / Post Graduate Qualification Details
  if (sectionId === 13) {
    if (!formData.hasMasterDegree?.trim()) {
      return { isValid: false, field: 'hasMasterDegree', message: "Please select whether you possess a Master's Degree (Yes/No)." }
    }
    if (formData.hasMasterDegree === 'Yes') {
      if (!formData.masterDegreeName?.trim()) return { isValid: false, field: 'masterDegreeName', message: 'Please select Master Degree Name.' }
      if (!formData.masterCollegeUniversityName?.trim()) return { isValid: false, field: 'masterCollegeUniversityName', message: 'College / University Name is required.' }
      if (!formData.masterCollegeUniversityType?.trim()) return { isValid: false, field: 'masterCollegeUniversityType', message: 'Please select College / University Type.' }
      if (!formData.masterAdmissionYear || !/^\d{4}$/.test(String(formData.masterAdmissionYear).trim())) return { isValid: false, field: 'masterAdmissionYear', message: 'Please enter a valid 4-digit Admission Year.' }
      if (!formData.masterCompletionYear || !/^\d{4}$/.test(String(formData.masterCompletionYear).trim())) return { isValid: false, field: 'masterCompletionYear', message: 'Please enter a valid 4-digit Completion Year.' }
      if (parseInt(formData.masterCompletionYear, 10) < parseInt(formData.masterAdmissionYear, 10)) {
        return { isValid: false, field: 'masterCompletionYear', message: 'Completion Year cannot be earlier than Admission Year.' }
      }
      if (!formData.masterCourseDuration?.trim()) return { isValid: false, field: 'masterCourseDuration', message: 'Please select Course Duration.' }
      if (!formData.masterModeOfStudy?.trim()) return { isValid: false, field: 'masterModeOfStudy', message: 'Please select Mode of Study.' }
      if (!formData.masterRegistrationNumber?.trim()) return { isValid: false, field: 'masterRegistrationNumber', message: 'Registration Number is required.' }
      if (!formData.masterRollNumber?.trim()) return { isValid: false, field: 'masterRollNumber', message: 'Roll Number is required.' }
      if (!formData.masterAcademicPattern?.trim()) return { isValid: false, field: 'masterAcademicPattern', message: 'Please select Academic Pattern.' }
      const maxMarks = parseFloat(formData.masterMaximumMarks)
      if (isNaN(maxMarks) || maxMarks <= 0) return { isValid: false, field: 'masterMaximumMarks', message: 'Maximum Marks must be greater than 0.' }
      const obtMarks = parseFloat(formData.masterTotalMarksObtained)
      if (isNaN(obtMarks) || obtMarks < 0) return { isValid: false, field: 'masterTotalMarksObtained', message: 'Total Marks Obtained is required.' }
      if (obtMarks > maxMarks) return { isValid: false, field: 'masterTotalMarksObtained', message: `Marks Obtained (${obtMarks}) cannot exceed Maximum Marks (${maxMarks}).` }
      if (!formData.masterResultStatus?.trim()) return { isValid: false, field: 'masterResultStatus', message: 'Please select Result Status.' }
    }
    return { isValid: true }
  }

  // Section 14: Travel Eligibility
  if (sectionId === 14) {
    if (!formData.willingToTravelOfficial?.trim()) return { isValid: false, field: 'willingToTravelOfficial', message: 'Please select willingness to travel for official work.' }
    if (!formData.comfortableOutsideCity?.trim()) return { isValid: false, field: 'comfortableOutsideCity', message: 'Please select comfort travelling outside your current city.' }
    if (!formData.comfortableOutsideState?.trim()) return { isValid: false, field: 'comfortableOutsideState', message: 'Please select comfort travelling outside your state.' }
    if (!formData.willingAnywhereIndia?.trim()) return { isValid: false, field: 'willingAnywhereIndia', message: 'Please select willingness to travel anywhere in India.' }
    if (!formData.willingFrequentTravel?.trim()) return { isValid: false, field: 'willingFrequentTravel', message: 'Please select willingness for frequent official travel.' }
    if (!formData.maxDurationAwayFromHome?.trim()) return { isValid: false, field: 'maxDurationAwayFromHome', message: 'Please select maximum duration comfortable away from home.' }
    return { isValid: true }
  }

  // Section 15: Travel Availability
  if (sectionId === 15) {
    if (!formData.preferredTravelMode?.trim()) return { isValid: false, field: 'preferredTravelMode', message: 'Please select preferred travel mode.' }
    if (!formData.comfortableOvernightTravel?.trim()) return { isValid: false, field: 'comfortableOvernightTravel', message: 'Please select comfort with overnight travel.' }
    if (!formData.availableEmergencyTravel?.trim()) return { isValid: false, field: 'availableEmergencyTravel', message: 'Please select availability for emergency travel.' }
    if (!formData.minNoticePeriodTravel?.trim()) return { isValid: false, field: 'minNoticePeriodTravel', message: 'Please select minimum notice period required before travelling.' }
    return { isValid: true }
  }

  // Section 16: Field Work Eligibility
  if (sectionId === 16) {
    if (!formData.comfortableWorkingOutsideOffice?.trim()) return { isValid: false, field: 'comfortableWorkingOutsideOffice', message: 'Please select comfort working outside office.' }
    if (!formData.willingFieldAssignments?.trim()) return { isValid: false, field: 'willingFieldAssignments', message: 'Please select willingness for field assignments.' }
    if (!formData.comfortableVisitingLocations?.trim()) return { isValid: false, field: 'comfortableVisitingLocations', message: 'Please select comfort visiting different locations.' }
    if (!formData.comfortableInteractingGovt?.trim()) return { isValid: false, field: 'comfortableInteractingGovt', message: 'Please select comfort interacting with government offices/institutions.' }
    if (!formData.comfortableMeetingsOutside?.trim()) return { isValid: false, field: 'comfortableMeetingsOutside', message: 'Please select comfort attending external meetings.' }
    return { isValid: true }
  }

  // Section 17: Travel Restrictions & Preferences
  if (sectionId === 17) {
    if (!formData.hasRestrictions?.trim()) return { isValid: false, field: 'hasRestrictions', message: 'Please select whether you have travel restrictions (Yes/No).' }
    return { isValid: true }
  }

  // Section 18: Emergency & Extended Travel
  if (sectionId === 18) {
    if (!formData.willingShortNoticeTravel?.trim()) return { isValid: false, field: 'willingShortNoticeTravel', message: 'Please select short notice travel willingness.' }
    if (!formData.willingWorkBeyondHours?.trim()) return { isValid: false, field: 'willingWorkBeyondHours', message: 'Please select willingness to work beyond normal hours.' }
    if (!formData.willingCompanyAccommodation?.trim()) return { isValid: false, field: 'willingCompanyAccommodation', message: 'Please select accommodation preference.' }
    if (!formData.willingExtendedOutstation?.trim()) return { isValid: false, field: 'willingExtendedOutstation', message: 'Please select extended outstation willingness.' }
    return { isValid: true }
  }

  return { isValid: true }
}

// ============================================================================
// VALIDATION RULES (Form Input Validation)
// ============================================================================

export const CANDIDATE_MOBILE_FIELDS = [
  'mobileNumber',
  'whatsappNumber',
  'alternateMobileNumber',
  'personalMobileNumber',
  'emergencyContactMobileNumber',
  'preferredContactNumber',
  'travelMobileNumber',
]

const validationRules = {
  alphabet: {
    pattern: "^[a-zA-Z][a-zA-Z\\s\\.]*$",
    title: "Must start with a letter and contain only alphabets, spaces, and dots."
  },
  mobile: {
    pattern: "^[6-9]\\d{9}$",
    title: "Must be a valid 10-digit mobile number starting with 6, 7, 8, or 9."
  },
  aadhaar: {
    pattern: "^\\d{12}$",
    title: "Must be a 12-digit Aadhaar number."
  },
  pan: {
    pattern: "^[a-zA-Z]{5}\\d{4}[a-zA-Z]{1}$",
    title: "Must be a valid 10-character PAN (e.g., ABCDE1234F)."
  },
  pincode: {
    pattern: "^\\d{6}$",
    title: "Must be a 6-digit PIN code."
  },
  percentage: {
    pattern: "^\\d{1,3}(\\.\\d{1,2})?%?$",
    title: "Must be a valid percentage (e.g., 95.5%) or CGPA (e.g., 9.8)."
  },
  yearOfPassing: {
    pattern: "^[1-2][0-9]{3}$",
    title: "Must be a valid 4-digit year (e.g., 2018)."
  }
}

const getValidationRule = (fieldName) => {
  const alphabetFields = [
    'candidateFirstName',
    'candidateMiddleName',
    'candidateLastName',
    'fathersFirstName',
    'fathersMiddleName',
    'fathersLastName',
    'mothersFirstName',
    'mothersMiddleName',
    'mothersLastName',
    'spouseFirstName',
    'spouseMiddleName',
    'spouseLastName',
    'candidateFullName',
    'fathersName',
    'mothersName',
    'nationality',
    'placeOfBirth',
    'religion',
    'emergencyContactPersonName',
    'emergencyContactRelationship',
    'nameAsPerAadhaarCard',
    'nameAsPerPanCard',
    'cityTownVillage',
    'districtName',
    'state',
    'country',
    'policeStation',
    'tehsilBlock'
  ]

  if (alphabetFields.includes(fieldName)) return validationRules.alphabet
  if (CANDIDATE_MOBILE_FIELDS.includes(fieldName)) return validationRules.mobile
  if (fieldName === 'aadhaarNumber') return validationRules.aadhaar
  if (fieldName === 'panNumber') return validationRules.pan
  if (fieldName === 'postalPinCode') return validationRules.pincode
  if (fieldName === 'percentageCgpa') return validationRules.percentage
  if (
    fieldName.toLowerCase().includes('yearofpassing') ||
    fieldName.toLowerCase().includes('passingyear') ||
    fieldName.toLowerCase().includes('admissionyear') ||
    fieldName.toLowerCase().includes('graduationyear') ||
    fieldName.toLowerCase().includes('completionyear')
  ) return validationRules.yearOfPassing

  return null
}

const getNumericLimits = (fieldName) => {
  const currentYear = new Date().getFullYear()
  const lower = fieldName.toLowerCase()

  if (fieldName === 'communicationSkillsSelfRating') {
    return { min: 1, max: 10 }
  }
  if (
    lower.includes('yearofpassing') ||
    lower.includes('passingyear') ||
    lower.includes('admissionyear') ||
    lower.includes('graduationyear') ||
    lower.includes('completionyear') ||
    fieldName === 'residingSinceYear'
  ) {
    return { min: 1950, max: currentYear }
  }
  if (lower.includes('maximummarks')) {
    return { min: 1, max: 10000 }
  }
  if (lower.includes('marksobtained')) {
    return { min: 0, max: 10000 }
  }
  if (fieldName === 'totalFamilyMembers') {
    return { min: 1 }
  }
  if (fieldName === 'heightCm') {
    return { min: 30, max: 300 }
  }
  if (fieldName === 'weightKg') {
    return { min: 10, max: 500 }
  }
  return { min: 0 }
}

// ============================================================================
// FIELD CONTROL COMPONENT
// ============================================================================

function FieldControl({ field, value, onChange, formData = {} }) {
  const formContext = useFormContext()
  const sectionError = formContext?.sectionError
  const hasSectionError = sectionError?.field === field.name

  const [isTouched, setIsTouched] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const isCandidateMobileField = CANDIDATE_MOBILE_FIELDS.includes(field.name)
  const valStr = String(value || '')
  const isCompleteValid = isCandidateMobileField && /^[6-9]\d{9}$/.test(valStr)
  const startsWrong = isCandidateMobileField && valStr.length > 0 && !/^[6-9]/.test(valStr)
  const isTooShort = isCandidateMobileField && valStr.length > 0 && valStr.length < 10 && !startsWrong
  const isInvalid = isCandidateMobileField && valStr.length > 0 && !isCompleteValid

  const isAadhaarField = field.name === 'aadhaarNumber'
  const isAadhaarValid = isAadhaarField && /^\d{12}$/.test(valStr)
  const isAadhaarIncomplete = isAadhaarField && valStr.length > 0 && valStr.length < 12

  const isPanField = field.name === 'panNumber'
  const isPanValid = isPanField && /^[A-Z]{5}\d{4}[A-Z]{1}$/.test(valStr)
  const isPanIncomplete = isPanField && valStr.length > 0 && valStr.length < 10
  const isPanInvalid = isPanField && valStr.length === 10 && !isPanValid

  const isEmailField =
    field.type === 'email' ||
    [
      'emailId',
      'alternateEmailId',
      'trainerSupervisorEmailId',
      'travelEmailId',
    ].includes(field.name)
  const isEmailValid = isEmailField && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valStr.trim())
  const isEmailInvalid = isEmailField && valStr.length > 0 && !isEmailValid

  const isDobField = field.name === 'dateOfBirth'
  const dobValidation = isDobField && valStr.length > 0 ? validateDateOfBirth(valStr) : null
  const isDobValid = isDobField && dobValidation?.isValid
  const isDobIncomplete = isDobField && valStr.length > 0 && valStr.length < 10
  const isDobInvalid = isDobField && valStr.length === 10 && !isDobValid

  // Year of passing fields (10th, 12th, ITI, Diploma, Bachelor, Master)
  const isYearField =
    field.name.toLowerCase().includes('yearofpassing') ||
    field.name.toLowerCase().includes('passingyear') ||
    field.name.toLowerCase().includes('admissionyear') ||
    field.name.toLowerCase().includes('graduationyear') ||
    field.name.toLowerCase().includes('completionyear')
  const yearValidation = isYearField && valStr.length > 0 ? validateYearOfPassing(valStr, formData.dateOfBirth) : null
  const isYearValid = isYearField && yearValidation?.isValid
  const isYearIncomplete = isYearField && valStr.length > 0 && valStr.length < 4
  const isYearInvalid = isYearField && ((valStr.length === 4 && !isYearValid) || valStr === '0')

  // Marks fields (generic for 10th, 12th, ITI, Diploma, Other, Bachelor, Master)
  const isMarksObt = field.name.toLowerCase().includes('marksobtained')
  const isMaxMarks = field.name.toLowerCase().includes('maximummarks')
  const marksPrefix = isMarksObt
    ? field.name.replace(/totalmarksobtained|marksobtained/i, '')
    : isMaxMarks
      ? field.name.replace(/maximummarks/i, '')
      : ''
  const obtKey = marksPrefix + (marksPrefix ? 'TotalMarksObtained' : 'totalMarksObtained')
  const maxKey = marksPrefix + (marksPrefix ? 'MaximumMarks' : 'maximumMarks')
  const currentMarksObt = isMarksObt ? valStr : (formData[obtKey] || '')
  const currentMaxMarks = isMaxMarks ? valStr : (formData[maxKey] || '')
  const marksValidation = (isMarksObt || isMaxMarks) && (currentMarksObt || currentMaxMarks)
    ? validateMarks(currentMarksObt, currentMaxMarks)
    : null
  const marksErrorForThisField = marksValidation && !marksValidation.isValid && (
    (marksValidation.field === 'max' && isMaxMarks) ||
    (marksValidation.field === 'obtained' && isMarksObt)
  )

  // Certificate Issue Date (generic for 10th, 12th, ITI, Diploma, Other, Degree, Master)
  const isCertDateField =
    field.name.toLowerCase().endsWith('certificateissuedate') ||
    field.name.toLowerCase().endsWith('certificatedate') ||
    field.name.toLowerCase().endsWith('dateofissue')

  let relatedYearOfPassing = ''
  if (field.name.startsWith('twelfth')) {
    relatedYearOfPassing = formData.twelfthYearOfPassing || formData.tenthYearOfPassing
  } else if (field.name.startsWith('iti')) {
    relatedYearOfPassing = formData.itiYearOfPassing || formData.tenthYearOfPassing
  } else if (field.name.startsWith('diploma')) {
    relatedYearOfPassing = formData.diplomaYearOfPassing || formData.tenthYearOfPassing
  } else if (field.name.startsWith('otherQual')) {
    relatedYearOfPassing = formData.otherQualYearOfPassing || formData.tenthYearOfPassing
  } else if (field.name.startsWith('bachelor')) {
    relatedYearOfPassing = formData.bachelorGraduationYear || formData.twelfthYearOfPassing
  } else if (field.name.startsWith('master')) {
    relatedYearOfPassing = formData.masterGraduationYear || formData.bachelorGraduationYear
  } else if (field.name.startsWith('tenth')) {
    relatedYearOfPassing = formData.tenthYearOfPassing
  }

  const certDateValidation = isCertDateField && valStr.length > 0
    ? validateCertificateIssueDate(valStr, relatedYearOfPassing)
    : null
  const isCertDateValid = isCertDateField && certDateValidation?.isValid
  const isCertDateIncomplete = isCertDateField && valStr.length > 0 && valStr.length < 10
  const isCertDateInvalid = isCertDateField && valStr.length === 10 && !isCertDateValid

  const isNameField = [
    'candidateFirstName',
    'candidateMiddleName',
    'candidateLastName',
    'fathersFirstName',
    'fathersMiddleName',
    'fathersLastName',
    'mothersFirstName',
    'mothersMiddleName',
    'mothersLastName',
    'spouseFirstName',
    'spouseMiddleName',
    'spouseLastName',
    'candidateFullName',
    'fathersName',
    'mothersName',
    'emergencyContactPersonName',
    'nameAsPerAadhaarCard',
    'nameAsPerPanCard',
    'travelCandidateFullName',
    'trainerSupervisorName',
    'nickname',
    'relativeNameRelationship',
    'panNumber',
  ].includes(field.name)

  let fieldBorderClass = ''
  if (hasSectionError) {
    fieldBorderClass = 'border-red-500 ring-2 ring-red-100 pr-10'
  } else if (isCandidateMobileField && valStr.length > 0) {
    if (isCompleteValid) {
      fieldBorderClass = 'border-emerald-500 focus:border-emerald-600 focus:ring-emerald-100 pr-10'
    } else if (isTouched || !isFocused) {
      fieldBorderClass = 'border-red-500 focus:border-red-500 focus:ring-red-100 pr-10'
    }
  } else if (isAadhaarField && valStr.length > 0) {
    if (isAadhaarValid) {
      fieldBorderClass = 'border-emerald-500 focus:border-emerald-600 focus:ring-emerald-100 pr-10'
    } else if (valStr.length === 12 || (isTouched && !isFocused)) {
      fieldBorderClass = 'border-red-500 focus:border-red-500 focus:ring-red-100 pr-10'
    }
  } else if (isPanField && valStr.length > 0) {
    if (isPanValid) {
      fieldBorderClass = 'border-emerald-500 focus:border-emerald-600 focus:ring-emerald-100 pr-10'
    } else if (valStr.length === 10 || (isTouched && !isFocused)) {
      fieldBorderClass = 'border-red-500 focus:border-red-500 focus:ring-red-100 pr-10'
    }
  } else if (isEmailField && valStr.length > 0) {
    if (isEmailValid) {
      fieldBorderClass = 'border-emerald-500 focus:border-emerald-600 focus:ring-emerald-100 pr-10'
    } else if (isTouched && !isFocused) {
      fieldBorderClass = 'border-red-500 focus:border-red-500 focus:ring-red-100 pr-10'
    }
  } else if (isDobField && valStr.length > 0) {
    if (isDobValid) {
      fieldBorderClass = 'border-emerald-500 focus:border-emerald-600 focus:ring-emerald-100 pr-10'
    } else if (valStr.length === 10 || (isTouched && !isFocused)) {
      fieldBorderClass = 'border-red-500 focus:border-red-500 focus:ring-red-100 pr-10'
    }
  } else if (isYearField && valStr.length > 0) {
    if (isYearValid) {
      fieldBorderClass = 'border-emerald-500 focus:border-emerald-600 focus:ring-emerald-100 pr-10'
    } else if (valStr.length === 4 || valStr === '0' || (isTouched && !isFocused)) {
      fieldBorderClass = 'border-red-500 focus:border-red-500 focus:ring-red-100 pr-10'
    }
  } else if ((isMarksObt || isMaxMarks) && valStr.length > 0) {
    if (marksErrorForThisField) {
      fieldBorderClass = 'border-red-500 focus:border-red-500 focus:ring-red-100 pr-10'
    } else if (marksValidation?.isValid && currentMarksObt && currentMaxMarks) {
      fieldBorderClass = 'border-emerald-500 focus:border-emerald-600 focus:ring-emerald-100 pr-10'
    }
  } else if (isCertDateField && valStr.length > 0) {
    if (isCertDateValid) {
      fieldBorderClass = 'border-emerald-500 focus:border-emerald-600 focus:ring-emerald-100 pr-10'
    } else if (valStr.length === 10 || (isTouched && !isFocused)) {
      fieldBorderClass = 'border-red-500 focus:border-red-500 focus:ring-red-100 pr-10'
    }
  }

  const controlClassName =
    `h-12 w-full rounded-md border bg-white pl-12 pr-3 text-sm text-[#0B1F4D] outline-none transition placeholder:text-slate-400 focus:border-[#6D28D9] focus:ring-4 focus:ring-purple-500/15 read-only:bg-slate-50 read-only:text-slate-500 sm:h-14 sm:pl-14 sm:pr-4 lg:h-10 lg:pl-10 lg:pr-3 lg:text-xs ${
      isEmailField ? 'lowercase' : isNameField ? 'uppercase' : ''
    } ${fieldBorderClass || 'border-slate-300'}`

  if (field.type === 'select') {
    return (
      <CustomSelect
        field={field}
        value={value}
        onChange={onChange}
        controlClassName={controlClassName}
      />
    )
  }

  if (field.type === 'textarea') {
    const FieldIcon = getFieldIcon(field.name, field.type)
    return (
      <div className="relative group">
        <div className="absolute left-1.5 top-1.5 flex h-9 w-9 sm:h-11 sm:w-11 lg:h-7 lg:w-7 items-center justify-center rounded-full bg-[#F3EEFF] text-[#6D28D9] z-10 pointer-events-none transition-colors group-focus-within:bg-[#0B1F4D] group-focus-within:text-[#D4AF37]">
          <FieldIcon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-3.5 lg:w-3.5" />
        </div>
        <textarea
          id={field.name}
          name={field.name}
          value={value}
          onChange={onChange}
          placeholder={field.placeholder}
          required={field.required}
          rows={3}
          className={`min-h-24 w-full resize-y rounded-md border ${
            hasSectionError ? 'border-red-500 ring-2 ring-red-100' : 'border-slate-300'
          } bg-white pl-12 pr-3 py-3 sm:py-4 lg:py-2 text-sm text-[#0B1F4D] outline-none transition placeholder:text-slate-400 focus:border-[#6D28D9] focus:ring-4 focus:ring-purple-500/15 sm:pl-14 sm:pr-4 lg:min-h-14 lg:pl-10 lg:text-xs ${isNameField ? 'uppercase' : ''}`}
        />
        {hasSectionError && (
          <p className="mt-1 text-xs font-semibold text-red-600 flex items-center gap-1">
            <span>⚠️ {sectionError.message}</span>
          </p>
        )}
      </div>
    )
  }

  const rule = getValidationRule(field.name)
  const limits = (field.type === 'number' || isYearField) ? getNumericLimits(field.name) : {}
  const FieldIcon = getFieldIcon(field.name, field.type)

  const handleKeyDown = (e) => {
    if (isCandidateMobileField) {
      if (
        [
          'Backspace', 'Delete', 'Tab', 'Escape', 'Enter',
          'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
          'Home', 'End'
        ].includes(e.key) || e.ctrlKey || e.metaKey
      ) {
        return
      }
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault()
        return
      }
      const target = e.target
      if (
        target.value.length >= 10 &&
        target.selectionStart === target.selectionEnd
      ) {
        e.preventDefault()
      }
    } else if (isAadhaarField) {
      if (
        [
          'Backspace', 'Delete', 'Tab', 'Escape', 'Enter',
          'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
          'Home', 'End'
        ].includes(e.key) || e.ctrlKey || e.metaKey
      ) {
        return
      }
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault()
        return
      }
      const target = e.target
      if (
        target.value.length >= 12 &&
        target.selectionStart === target.selectionEnd
      ) {
        e.preventDefault()
      }
    } else if (isYearField) {
      if (
        [
          'Backspace', 'Delete', 'Tab', 'Escape', 'Enter',
          'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
          'Home', 'End'
        ].includes(e.key) || e.ctrlKey || e.metaKey
      ) {
        return
      }
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault()
        return
      }
      if (e.target.value.length === 0 && e.key === '0') {
        e.preventDefault()
        return
      }
      const target = e.target
      if (
        target.value.length >= 4 &&
        target.selectionStart === target.selectionEnd
      ) {
        e.preventDefault()
      }
    }
  }

  return (
    <div className="w-full">
      <div className="relative group">
        <div className="absolute left-1.5 top-1/2 -translate-y-1/2 flex h-9 w-9 sm:h-11 sm:w-11 lg:h-7 lg:w-7 items-center justify-center rounded-full bg-[#F3EEFF] text-[#6D28D9] z-10 pointer-events-none transition-colors group-focus-within:bg-[#0B1F4D] group-focus-within:text-[#D4AF37]">
          <FieldIcon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-3.5 lg:w-3.5" />
        </div>
        <input
          id={field.name}
          type={isCandidateMobileField || isAadhaarField ? 'tel' : isYearField ? 'text' : (field.type || 'text')}
          name={field.name}
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            setIsFocused(false)
            setIsTouched(true)
            if (isCandidateMobileField) {
              if (valStr.length > 0 && !isCompleteValid) {
                if (startsWrong) {
                  e.target.setCustomValidity('Must start with 6, 7, 8, or 9.')
                } else if (isTooShort) {
                  e.target.setCustomValidity(`Must be exactly 10 digits (currently ${valStr.length} digits).`)
                } else {
                  e.target.setCustomValidity('Must be a valid 10-digit mobile number starting with 6, 7, 8, or 9.')
                }
              } else {
                e.target.setCustomValidity('')
              }
            } else if (isAadhaarField) {
              if (valStr.length > 0 && !isAadhaarValid) {
                e.target.setCustomValidity(`Aadhaar must be exactly 12 digits (currently ${valStr.length} digits).`)
              } else {
                e.target.setCustomValidity('')
              }
            } else if (isPanField) {
              if (valStr.length > 0 && !isPanValid) {
                e.target.setCustomValidity('Must be a valid 10-character PAN (e.g., ABCDE1234F).')
              } else {
                e.target.setCustomValidity('')
              }
            } else if (isEmailField) {
              if (valStr.length > 0 && !isEmailValid) {
                e.target.setCustomValidity('Please enter a valid email address (e.g., name@example.com).')
              } else {
                e.target.setCustomValidity('')
              }
            } else if (isDobField) {
              if (valStr.length > 0) {
                if (valStr.length < 10) {
                  e.target.setCustomValidity('Please enter complete Date of Birth in DD/MM/YYYY format.')
                } else if (!dobValidation?.isValid) {
                  e.target.setCustomValidity(dobValidation?.message || 'Invalid Date of Birth')
                } else {
                  e.target.setCustomValidity('')
                }
              } else {
                e.target.setCustomValidity('')
              }
            } else if (isYearField) {
              if (valStr.length > 0) {
                if (!yearValidation?.isValid) {
                  e.target.setCustomValidity(yearValidation?.message || 'Please enter a valid 4-digit passing year.')
                } else {
                  e.target.setCustomValidity('')
                }
              } else {
                e.target.setCustomValidity('')
              }
            } else if (isMarksObt || isMaxMarks) {
              if (marksErrorForThisField) {
                e.target.setCustomValidity(marksValidation?.message || 'Invalid marks entered.')
              } else {
                e.target.setCustomValidity('')
              }
            } else if (isCertDateField) {
              if (valStr.length > 0) {
                if (valStr.length < 10) {
                  e.target.setCustomValidity('Please enter complete Certificate Issue Date in DD/MM/YYYY format.')
                } else if (!certDateValidation?.isValid) {
                  e.target.setCustomValidity(certDateValidation?.message || 'Invalid Certificate Issue Date.')
                } else {
                  e.target.setCustomValidity('')
                }
              } else {
                e.target.setCustomValidity('')
              }
            }
          }}
          placeholder={field.placeholder}
          required={field.required}
          readOnly={field.readOnly}
          step={field.type === 'number' ? 'any' : undefined}
          inputMode={isCandidateMobileField || isAadhaarField || isDobField || isYearField ? 'numeric' : (field.type === 'number' ? 'decimal' : field.inputMode)}
          pattern={isYearField ? '^[1-2][0-9]{3}$' : rule?.pattern}
          minLength={isCandidateMobileField ? 10 : isAadhaarField ? 12 : isPanField ? 10 : isYearField ? 4 : undefined}
          maxLength={
            isCandidateMobileField
              ? 10
              : isDobField || isCertDateField
                ? 10
                : isYearField
                  ? 4
                  : field.name === 'aadhaarNumber'
                    ? 12
                    : field.name === 'postalPinCode'
                      ? 6
                      : field.name === 'panNumber'
                        ? 10
                        : undefined
          }
          title={isYearField ? 'Must be a 4-digit valid year (e.g., 2018)' : rule?.title}
          min={limits.min}
          max={limits.max}
          onInvalid={(e) => {
            if (isCandidateMobileField) {
              if (e.target.validity.valueMissing) {
                e.target.setCustomValidity(`Please enter your active 10-digit ${field.label || 'mobile number'}`)
              } else if (startsWrong) {
                e.target.setCustomValidity('Must start with 6, 7, 8, or 9.')
              } else if (isTooShort || e.target.validity.patternMismatch || e.target.validity.tooShort) {
                e.target.setCustomValidity(`Must be exactly 10 digits starting with 6-9 (currently ${valStr.length} digits).`)
              } else {
                e.target.setCustomValidity('')
              }
            } else if (isAadhaarField) {
              if (e.target.validity.valueMissing) {
                e.target.setCustomValidity('Aadhaar Number is required.')
              } else if (!isAadhaarValid) {
                e.target.setCustomValidity('Please enter a valid 12-digit Aadhaar Number.')
              } else {
                e.target.setCustomValidity('')
              }
            } else if (isPanField) {
              if (e.target.validity.valueMissing) {
                e.target.setCustomValidity('PAN Number is required.')
              } else if (!isPanValid) {
                e.target.setCustomValidity('Please enter a valid 10-character PAN Number (e.g., ABCDE1234F).')
              } else {
                e.target.setCustomValidity('')
              }
            } else if (isEmailField) {
              if (e.target.validity.valueMissing) {
                e.target.setCustomValidity('Email Address is required.')
              } else if (!isEmailValid) {
                e.target.setCustomValidity('Please enter a valid email address (e.g., name@example.com).')
              } else {
                e.target.setCustomValidity('')
              }
            } else if (isDobField) {
              if (e.target.validity.valueMissing) {
                e.target.setCustomValidity('Date of Birth is required.')
              } else if (!dobValidation?.isValid) {
                e.target.setCustomValidity(dobValidation?.message || 'Please enter a valid Date of Birth.')
              } else {
                e.target.setCustomValidity('')
              }
            } else if (isYearField) {
              if (e.target.validity.valueMissing) {
                e.target.setCustomValidity(`${field.label || 'Year'} is required.`)
              } else if (!yearValidation?.isValid) {
                e.target.setCustomValidity(yearValidation?.message || 'Please enter a valid 4-digit year (e.g., 2018).')
              } else {
                e.target.setCustomValidity('')
              }
            } else if (isMarksObt || isMaxMarks) {
              if (e.target.validity.valueMissing) {
                e.target.setCustomValidity(`${field.label || 'Marks'} is required.`)
              } else if (marksErrorForThisField) {
                e.target.setCustomValidity(marksValidation?.message || 'Invalid marks.')
              } else {
                e.target.setCustomValidity('')
              }
            } else if (isCertDateField) {
              if (!certDateValidation?.isValid) {
                e.target.setCustomValidity(certDateValidation?.message || 'Please enter a valid Certificate Issue Date.')
              } else {
                e.target.setCustomValidity('')
              }
            } else if (
              (e.target.validity.patternMismatch || e.target.validity.tooShort) &&
              rule?.title
            ) {
              e.target.setCustomValidity(rule.title)
            } else {
              e.target.setCustomValidity('')
            }
          }}
          onInput={(e) => {
            e.target.setCustomValidity('')
          }}
          className={controlClassName}
        />

        {/* Valid Checkmark Icon inside input on right */}
        {(
          (isCandidateMobileField && isCompleteValid) ||
          (isAadhaarField && isAadhaarValid) ||
          (isPanField && isPanValid) ||
          (isEmailField && isEmailValid) ||
          (isDobField && isDobValid) ||
          (isYearField && isYearValid) ||
          ((isMarksObt || isMaxMarks) && marksValidation?.isValid && currentMarksObt && currentMaxMarks) ||
          (isCertDateField && isCertDateValid)
        ) && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none text-emerald-600">
            <CheckCircle2 size={18} className="text-emerald-500" />
          </div>
        )}

        {/* Invalid Alert Icon inside input on right */}
        {(
          (isCandidateMobileField && (startsWrong || (!isFocused && isInvalid))) ||
          (isAadhaarField && (valStr.length === 12 && !isAadhaarValid)) ||
          (isPanField && isPanInvalid) ||
          (isEmailField && isEmailInvalid && (isTouched || !isFocused)) ||
          (isDobField && isDobInvalid) ||
          (isYearField && (valStr.length === 4 || valStr === '0' || (isTouched && !isFocused && !isYearValid)) && isYearInvalid) ||
          ((isMarksObt || isMaxMarks) && marksErrorForThisField) ||
          (isCertDateField && isCertDateInvalid) ||
          hasSectionError
        ) && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none text-red-500">
            <AlertCircle size={18} className="text-red-500" />
          </div>
        )}
      </div>

      {/* Section Error Helper text directly under field if active */}
      {hasSectionError && sectionError.message && (
        <div className="mt-1 px-0.5">
          <p className="text-xs font-semibold text-red-600 flex items-center gap-1">
            <span>⚠️ {sectionError.message}</span>
          </p>
        </div>
      )}

      {/* Live Helper / Validation Status Text below input for Mobile Fields */}
      {!hasSectionError && isCandidateMobileField && valStr.length > 0 && (
        <div className="mt-1 px-0.5">
          {startsWrong ? (
            <p className="text-xs font-semibold text-red-600 flex items-center gap-1">
              <span>⚠️ Must start with 6, 7, 8, or 9</span>
            </p>
          ) : isTooShort ? (
            <p className="text-xs font-medium text-amber-600 flex items-center justify-between">
              <span>Enter 10 digits ({valStr.length}/10 entered)</span>
              <span className="font-bold">{10 - valStr.length} more needed</span>
            </p>
          ) : isCompleteValid ? (
            <p className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
              <Check size={12} className="stroke-[3]" /> Valid 10-digit number
            </p>
          ) : null}
        </div>
      )}

      {/* Live Helper / Validation Status Text below input for Aadhaar */}
      {!hasSectionError && isAadhaarField && valStr.length > 0 && (
        <div className="mt-1 px-0.5">
          {isAadhaarIncomplete ? (
            <p className="text-xs font-medium text-amber-600 flex items-center justify-between">
              <span>Enter 12-digit Aadhaar ({valStr.length}/12 entered)</span>
              <span className="font-bold">{12 - valStr.length} more needed</span>
            </p>
          ) : isAadhaarValid ? (
            <p className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
              <Check size={12} className="stroke-[3]" /> Valid 12-digit Aadhaar number
            </p>
          ) : (
            <p className="text-xs font-semibold text-red-600 flex items-center gap-1">
              <span>⚠️ Must be exactly 12 numeric digits</span>
            </p>
          )}
        </div>
      )}

      {/* Live Helper / Validation Status Text below input for PAN */}
      {!hasSectionError && isPanField && valStr.length > 0 && (
        <div className="mt-1 px-0.5">
          {isPanIncomplete ? (
            <p className="text-xs font-medium text-amber-600 flex items-center justify-between">
              <span>Enter 10-character PAN ({valStr.length}/10 entered, e.g., ABCDE1234F)</span>
              <span className="font-bold">{10 - valStr.length} more needed</span>
            </p>
          ) : isPanValid ? (
            <p className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
              <Check size={12} className="stroke-[3]" /> Valid 10-character PAN number
            </p>
          ) : (
            <p className="text-xs font-semibold text-red-600 flex items-center gap-1">
              <span>⚠️ Invalid PAN format (expected 5 letters, 4 digits, 1 letter)</span>
            </p>
          )}
        </div>
      )}

      {/* Live Helper / Validation Status Text below input for Email */}
      {!hasSectionError && isEmailField && valStr.length > 0 && (
        <div className="mt-1 px-0.5">
          {isEmailValid ? (
            <p className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
              <Check size={12} className="stroke-[3]" /> Valid email address
            </p>
          ) : isEmailInvalid && (isTouched || !isFocused) ? (
            <p className="text-xs font-semibold text-red-600 flex items-center gap-1">
              <span>⚠️ Please enter a valid email address (e.g., name@example.com)</span>
            </p>
          ) : null}
        </div>
      )}

      {/* Live Helper / Validation Status Text below input for Date of Birth */}
      {!hasSectionError && isDobField && valStr.length > 0 && (
        <div className="mt-1 px-0.5">
          {isDobIncomplete ? (
            <p className="text-xs font-medium text-amber-600 flex items-center justify-between">
              <span>Enter complete date (DD/MM/YYYY)</span>
              <span className="font-bold">{10 - valStr.length} chars needed</span>
            </p>
          ) : isDobValid ? (
            <p className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
              <Check size={12} className="stroke-[3]" /> {dobValidation.message}
            </p>
          ) : isDobInvalid ? (
            <p className="text-xs font-semibold text-red-600 flex items-center gap-1">
              <span>⚠️ {dobValidation.message}</span>
            </p>
          ) : null}
        </div>
      )}

      {/* Live Helper / Validation Status Text below input for Year of Passing */}
      {!hasSectionError && isYearField && valStr.length > 0 && (
        <div className="mt-1 px-0.5">
          {valStr.length < 4 && valStr !== '0' ? (
            <p className="text-xs font-medium text-amber-600 flex items-center justify-between">
              <span>Enter 4-digit passing year (e.g., 2018)</span>
              <span className="font-bold">{4 - valStr.length} digits needed</span>
            </p>
          ) : isYearValid ? (
            <p className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
              <Check size={12} className="stroke-[3]" /> {yearValidation.message}
            </p>
          ) : isYearInvalid ? (
            <p className="text-xs font-semibold text-red-600 flex items-center gap-1">
              <span>⚠️ {yearValidation.message}</span>
            </p>
          ) : null}
        </div>
      )}

      {/* Live Helper / Validation Status Text below input for Marks */}
      {!hasSectionError && (isMarksObt || isMaxMarks) && marksErrorForThisField && (
        <div className="mt-1 px-0.5">
          <p className="text-xs font-semibold text-red-600 flex items-center gap-1">
            <span>⚠️ {marksValidation.message}</span>
          </p>
        </div>
      )}

      {/* Live Helper / Validation Status Text below input for Certificate Issue Date */}
      {!hasSectionError && isCertDateField && valStr.length > 0 && (
        <div className="mt-1 px-0.5">
          {isCertDateIncomplete ? (
            <p className="text-xs font-medium text-amber-600 flex items-center justify-between">
              <span>Enter complete date (DD/MM/YYYY)</span>
              <span className="font-bold">{10 - valStr.length} chars needed</span>
            </p>
          ) : isCertDateValid ? (
            <p className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
              <Check size={12} className="stroke-[3]" /> {certDateValidation.message}
            </p>
          ) : isCertDateInvalid ? (
            <p className="text-xs font-semibold text-red-600 flex items-center gap-1">
              <span>⚠️ {certDateValidation.message}</span>
            </p>
          ) : null}
        </div>
      )}
    </div>
  )
}

// ============================================================================
// APPLICATION SECTION FORM COMPONENT (Main Section Layout)
// ============================================================================

export function CandidateMasterProfileForm({ section, formData, onChange }) {
  const formContext = useFormContext()
  const sectionError = formContext?.sectionError

  const ageValidation = useMemo(
    () => validateDateOfBirth(formData.dateOfBirth),
    [formData.dateOfBirth]
  )

  const getFieldValue = (field) => {
    if (field.name === 'age' || field.name === 'ageAsOnApplicationDate') {
      if (ageValidation.isValid && ageValidation.age !== undefined) {
        return `${ageValidation.age} Years`
      }
      if (ageValidation.age !== undefined && ageValidation.age <= 10 && ageValidation.age >= 0) {
        return `${ageValidation.age} Years (Ineligible - Age must be above 10)`
      }
      return ''
    }
    return formData[field.name] || ''
  }

  let fieldCounter = 0

  return (
    <div className="w-full min-w-0 px-3 py-5 sm:px-8 sm:py-7 lg:px-6 lg:py-4">
      <div className="mb-5 flex items-start gap-3 border-b border-slate-200 pb-5 sm:mb-7 sm:gap-4 sm:pb-7 lg:mb-4 lg:pb-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0B1F4D] text-[#D4AF37] border border-[#D4AF37]/30 sm:h-16 sm:w-16 lg:h-11 lg:w-11 shadow-sm">
          <UserRound size={24} />
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-black leading-6 text-[#0B1F4D] sm:text-2xl sm:leading-8 lg:text-xl lg:leading-6">
            Section {section.id}: {section.title}
          </h2>
          <p className="mt-1 text-sm leading-6 text-slate-600 sm:text-base lg:text-xs lg:leading-4">
            {section.subtitle}
          </p>
        </div>
      </div>

      {sectionError && (
        <div className="mb-4 flex items-center gap-2.5 rounded-lg border border-red-200 bg-red-50 px-3.5 py-2.5 text-xs font-semibold text-red-700">
          <AlertCircle size={16} className="shrink-0 text-red-600" />
          <span>{sectionError.message}</span>
        </div>
      )}

      <div className="grid gap-x-8 gap-y-5 md:grid-cols-2 lg:gap-y-3 xl:gap-x-10 min-w-0">
        {section.fields.map((field) => {
          if (
            section.id === 6 &&
            field.name !== 'internshipIfAny' &&
            formData.internshipIfAny !== 'Yes'
          ) {
            return null
          }

          if (
            section.id === 8 &&
            field.name !== 'employmentIfAny' &&
            formData.employmentIfAny !== 'Yes'
          ) {
            return null
          }

          if (section.id === 11 && field.name !== 'twelfthQualificationName') {
            const selectedQual = formData.twelfthQualificationName || '12th'

            if (selectedQual === '12th' || !selectedQual) {
              if (!field.name.startsWith('twelfth')) return null
            } else if (selectedQual === 'ITI') {
              if (!field.name.startsWith('iti')) return null
            } else if (selectedQual === 'Diploma') {
              if (!field.name.startsWith('diploma')) return null
            } else {
              if (!field.name.startsWith('otherQual')) return null
            }
          }

          if (
            section.id === 12 &&
            field.name !== 'hasBachelorDegree' &&
            formData.hasBachelorDegree !== 'Yes'
          ) {
            return null
          }

          if (
            section.id === 13 &&
            field.name !== 'hasMasterDegree' &&
            formData.hasMasterDegree !== 'Yes'
          ) {
            return null
          }
          const nameTriplets = {
            candidateFirstName: ['candidateFirstName', 'candidateMiddleName', 'candidateLastName'],
            fathersFirstName: ['fathersFirstName', 'fathersMiddleName', 'fathersLastName'],
            mothersFirstName: ['mothersFirstName', 'mothersMiddleName', 'mothersLastName'],
            spouseFirstName: ['spouseFirstName', 'spouseMiddleName', 'spouseLastName'],
          }

          const middleAndLastNames = [
            'candidateMiddleName', 'candidateLastName',
            'fathersMiddleName', 'fathersLastName',
            'mothersMiddleName', 'mothersLastName',
            'spouseMiddleName', 'spouseLastName',
          ]

          if (middleAndLastNames.includes(field.name)) {
            return null
          }

          fieldCounter++
          const currentFieldNumber = fieldCounter

          if (nameTriplets[field.name]) {
            const groupTitles = {
              candidateFirstName: 'Candidate Name',
              fathersFirstName: "Father's Name",
              mothersFirstName: "Mother's Name",
              spouseFirstName: 'Spouse Name',
            }

            const subLabels = ['First Name', 'Middle Name', 'Last Name']
            const tripletNames = nameTriplets[field.name]
            const tripletFields = tripletNames
              .map((n) => section.fields.find((f) => f.name === n))
              .filter(Boolean)

            return (
              <div key={field.name} className="md:col-span-2 min-w-0">
                <div className="mb-2">
                  <span className="text-sm font-black text-slate-950 lg:text-xs">
                    {currentFieldNumber}. {groupTitles[field.name]}
                    {field.required && <span className="ml-1 text-red-600">*</span>}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-3 min-w-0">
                  {tripletFields.map((f, idx) => (
                    <div key={f.name} className="min-w-0">
                      <label
                        htmlFor={f.name}
                        className="mb-1.5 block text-xs font-bold text-slate-700"
                      >
                        {subLabels[idx]}
                        {f.required && <span className="ml-1 text-red-600">*</span>}
                      </label>

                      <FieldControl
                        field={f}
                        value={getFieldValue(f)}
                        onChange={f.readOnly ? undefined : onChange}
                        formData={formData}
                      />

                      <div className="mt-1 flex justify-end">
                        <span
                          className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold leading-none ring-1 ${f.status?.startsWith('Required')
                            ? 'bg-red-50 text-red-700 ring-red-200'
                            : 'bg-slate-100 text-slate-600 ring-slate-200'
                            }`}
                        >
                          {f.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          }

          return (
            <div
              key={field.name}
              className={`${field.fullWidth ? 'md:col-span-2' : ''} min-w-0`}
            >
              <div className="mb-2 flex items-center justify-between lg:mb-1">
                <label
                  htmlFor={field.name}
                  className="block text-sm font-black leading-5 text-slate-950 lg:text-xs lg:leading-4"
                >
                  {currentFieldNumber}. {field.label}
                  {field.required && <span className="ml-1 text-red-600">*</span>}
                </label>

                {field.name === 'whatsappNumber' && formData.mobileNumber && (
                  <button
                    type="button"
                    onClick={() => {
                      onChange({
                        target: { name: 'whatsappNumber', value: formData.mobileNumber },
                      })
                    }}
                    className="inline-flex items-center gap-1 rounded bg-amber-50 px-2 py-0.5 text-[11px] font-bold text-amber-800 hover:bg-amber-100 hover:text-amber-900 border border-amber-200 cursor-pointer transition"
                  >
                    Same as Mobile
                  </button>
                )}
              </div>

              <FieldControl
                field={field}
                value={getFieldValue(field)}
                onChange={field.readOnly ? undefined : onChange}
                formData={formData}
              />

              <div className="mt-2 flex justify-end lg:mt-1">
                <span
                  className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-bold leading-none ring-1 lg:px-2 lg:py-0.5 lg:text-[10px] ${field.status?.startsWith('Required')
                    ? 'bg-red-50 text-red-700 ring-red-200'
                    : field.status === 'Auto-Calculated'
                      ? 'bg-blue-50 text-blue-700 ring-blue-200'
                      : 'bg-slate-100 text-slate-600 ring-slate-200'
                    }`}
                >
                  {field.status}
                </span>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-6 flex items-start gap-3 rounded-md border border-amber-200 bg-amber-50 px-3 py-3 text-sm leading-6 text-slate-700 sm:items-center sm:px-4 lg:mt-4 lg:py-2 lg:text-xs lg:leading-4">
        <Info size={16} className="shrink-0 text-[#071733]" />
        <span>
          Fields marked with <span className="font-bold text-red-600">*</span>{' '}
          are mandatory. You can save and continue later.
        </span>
      </div>
    </div>
  )
}

// ============================================================================
// FORM PROVIDER COMPONENT
// ============================================================================

const initialFormData = applicationSections.reduce((sectionFields, section) => {
  section.fields.forEach((field) => {
    sectionFields[field.name] = ''
  })
  return sectionFields
}, {})

export function FormProvider({ children }) {
  const [sectionError, setSectionError] = useState(null)

  // Whenever the Candidate Master Profile Form is opened, it must ALWAYS start with
  // Section 1 (Personal Information) as the default active and visible section.
  const [currentStep, setCurrentStep] = useState(1)

  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('jobApplicationDraft')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        if (parsed.formData) {
          return { ...initialFormData, ...parsed.formData }
        }
      } catch (e) {
        console.error('Failed to restore form data from draft:', e)
      }
    }
    return initialFormData
  })

  const [completedSections, setCompletedSections] = useState(() => {
    const saved = localStorage.getItem('jobApplicationDraft')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        if (Array.isArray(parsed.completedSections)) {
          return new Set(parsed.completedSections)
        }
        if (parsed.formData) {
          const recovered = new Set()
          for (let s = 1; s <= applicationSections.length; s++) {
            const val = validateSection(s, parsed.formData)
            if (val.isValid) {
              const sec = applicationSections.find((item) => item.id === s)
              const hasData = sec?.fields?.some((field) => {
                const name = Array.isArray(field) ? field[1] : field?.name
                const status = Array.isArray(field) ? field[3] : field?.status
                if (status === 'Auto-Calculated') return false
                const v = parsed.formData[name]
                return typeof v === 'string' ? v.trim().length > 0 : Boolean(v)
              })
              if (hasData) {
                recovered.add(s)
              }
            }
          }
          return recovered
        }
      } catch (e) {
        console.error('Failed to restore completed sections from draft:', e)
      }
    }
    return new Set()
  })

  // Whenever FormProvider mounts (form is opened or reopened), always guarantee
  // that the active section starts on Section 1 without clearing entered form data or drafts.
  useEffect(() => {
    setCurrentStep(1)
    setSectionError(null)
  }, [])

  // Persist form data draft while keeping the default entry point anchored to Section 1
  useEffect(() => {
    localStorage.setItem(
      'jobApplicationDraft',
      JSON.stringify({
        currentStep: 1,
        completedSections: Array.from(completedSections),
        formData,
      })
    )
  }, [formData, completedSections])

  const focusAndReportField = (fieldName, message) => {
    if (!fieldName) return
    setSectionError({ field: fieldName, message })
    const el = document.getElementById(fieldName) || document.querySelector(`[name="${fieldName}"]`)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      setTimeout(() => {
        el.focus()
        if (typeof el.setCustomValidity === 'function') {
          el.setCustomValidity(message || 'Please fill in this required field.')
          if (typeof el.reportValidity === 'function') {
            el.reportValidity()
          }
        }
      }, 100)
    }
  }

  const hasSectionData = (secId, data = formData) => {
    const sec = applicationSections.find((s) => s.id === secId)
    if (!sec || !sec.fields) return false
    return sec.fields.some((field) => {
      const name = Array.isArray(field) ? field[1] : field?.name
      const status = Array.isArray(field) ? field[3] : field?.status
      if (status === 'Auto-Calculated') return false
      if (!name) return false
      const val = data[name]
      if (val === undefined || val === null) return false
      if (typeof val === 'string') return val.trim().length > 0
      return Boolean(val)
    })
  }

  const isSectionCompleted = (secId, data = formData) => {
    // 1. Validation check must always pass
    const validation = validateSection(secId, data)
    if (!validation.isValid) {
      return false
    }

    // 2. Purely optional sections: 2 (Physical & Identification), 5 (Social Media), 7 (Trainer & Certificate)
    // These must NOT be marked completed when empty unless explicitly completed by the candidate
    const isPurelyOptionalSection = secId === 2 || secId === 5 || secId === 7
    if (isPurelyOptionalSection) {
      if (secId === 7 && data.internshipIfAny === 'No') {
        return false
      }
      return completedSections.has(secId) || hasSectionData(secId, data)
    }

    // 3. For sections with required fields, validation.isValid guarantees required fields are present
    return hasSectionData(secId, data)
  }

  const canNavigateToStep = (targetStep) => {
    if (targetStep === currentStep) return true
    if (targetStep === 7 && formData.internshipIfAny === 'No') return false

    // Moving backward: allowed to any previous section
    if (targetStep < currentStep) {
      return true
    }

    // Moving forward to targetStep:
    // 1. Current section MUST be valid!
    if (!validateSection(currentStep, formData).isValid) {
      return false
    }

    // 2. Can navigate directly to targetStep if it is the immediate next step
    if (targetStep === currentStep + 1) {
      return true
    }

    // 3. Jumping forward across multiple steps (targetStep > currentStep + 1):
    // Allowed only if targetStep itself is completed AND all intermediate steps are completed
    if (isSectionCompleted(targetStep, formData)) {
      for (let s = 1; s < targetStep; s++) {
        if (s === 7 && formData.internshipIfAny === 'No') continue
        if (!isSectionCompleted(s, formData)) {
          return false
        }
      }
      return true
    }

    return false
  }

  const updateField = (event) => {
    let { name, value } = event.target
    const previousValue = formData[name] || ''

    if (sectionError && sectionError.field === name) {
      setSectionError(null)
    }

    const personalNameFields = [
      'candidateFirstName',
      'candidateMiddleName',
      'candidateLastName',
      'fathersFirstName',
      'fathersMiddleName',
      'fathersLastName',
      'mothersFirstName',
      'mothersMiddleName',
      'mothersLastName',
      'spouseFirstName',
      'spouseMiddleName',
      'spouseLastName',
      'candidateFullName',
      'fathersName',
      'mothersName',
      'emergencyContactPersonName',
      'nameAsPerAadhaarCard',
      'nameAsPerPanCard',
      'travelCandidateFullName',
      'trainerSupervisorName',
      'nickname',
      'relativeNameRelationship',
      'panNumber',
    ]

    const emailFields = [
      'emailId',
      'alternateEmailId',
      'trainerSupervisorEmailId',
      'travelEmailId',
    ]

    if ((emailFields.includes(name) || event.target.type === 'email') && typeof value === 'string') {
      value = value.toLowerCase()
    }

    if (personalNameFields.includes(name) && typeof value === 'string') {
      value = value.toUpperCase()
    }

    if (personalNameFields.includes(name) && name !== 'panNumber') {
      value = value.replace(/[0-9]/g, '')
    }

    const isDateField =
      name === 'dateOfBirth' ||
      name.toLowerCase().endsWith('certificatedate') ||
      name.toLowerCase().endsWith('issuedate') ||
      name.toLowerCase().endsWith('dateofissue')

    if (isDateField) {
      const isDeleting = value.length < previousValue.length

      if (isDeleting) {
        value = value.replace(/[^\d/]/g, '')
      } else {
        let clean = value.replace(/[^\d/]/g, '')
        const digits = clean.replace(/\//g, '')

        let formatted = ''
        if (digits.length > 0) {
          formatted += digits.substring(0, 2)
          if (digits.length === 2) {
            formatted += '/'
          }
        }
        if (digits.length > 2) {
          formatted += '/' + digits.substring(2, 4)
          if (digits.length === 4) {
            formatted += '/'
          }
        }
        if (digits.length > 4) {
          formatted += '/' + digits.substring(4, 8)
        }
        value = formatted
      }
    }

    if (name.toLowerCase().includes('yearofpassing')) {
      value = value.replace(/[^0-9]/g, '').substring(0, 4)
    }

    if (name.toLowerCase().includes('marksobtained') || name.toLowerCase().includes('maximummarks')) {
      value = value.replace(/[^0-9.]/g, '')
      const dotParts = value.split('.')
      if (dotParts.length > 2) {
        value = dotParts[0] + '.' + dotParts.slice(1).join('')
      }
    }

    if (name === 'panNumber') {
      let clean = value.toUpperCase()
      let formatted = ''
      for (let i = 0; i < clean.length && i < 10; i++) {
        const char = clean[i]
        if (i < 5) {
          if (/[A-Z]/.test(char)) formatted += char
        } else if (i < 9) {
          if (/[0-9]/.test(char)) formatted += char
        } else {
          if (/[A-Z]/.test(char)) formatted += char
        }
      }
      value = formatted
    }

    if (name === 'percentageCgpa') {
      value = value.replace(/[^0-9.%]/g, '')
    }

    if (name === 'aadhaarNumber') {
      value = value.replace(/[^0-9]/g, '').substring(0, 12)
    }

    if (CANDIDATE_MOBILE_FIELDS.includes(name)) {
      let clean = value.replace(/[^0-9]/g, '')
      if (clean.length > 10 && clean.startsWith('91')) {
        clean = clean.slice(2)
      } else if (clean.length > 10 && clean.startsWith('0')) {
        clean = clean.slice(1)
      }
      value = clean.substring(0, 10)
    }

    if (name === 'postalPinCode') {
      value = value.replace(/[^0-9]/g, '').substring(0, 6)
    }

    setFormData((previous) => {
      const updated = {
        ...previous,
        [name]: value,
      }

      const calcPairs = [
        ['tenthTotalMarksObtained', 'tenthMaximumMarks', 'tenthPercentageGradeDivision'],
        ['twelfthTotalMarksObtained', 'twelfthMaximumMarks', 'twelfthPercentageGradeDivision'],
        ['itiTotalMarksObtained', 'itiMaximumMarks', 'itiPercentageGradeDivision'],
        ['diplomaTotalMarksObtained', 'diplomaMaximumMarks', 'diplomaPercentageGradeDivision'],
        ['otherQualTotalMarksObtained', 'otherQualMaximumMarks', 'otherQualPercentageGradeDivision'],
        ['bachelorTotalMarksObtained', 'bachelorMaximumMarks', 'bachelorFinalResult'],
        ['masterTotalMarksObtained', 'masterMaximumMarks', 'masterFinalResult'],
      ]

      calcPairs.forEach(([totField, maxField, targetField]) => {
        if (name === totField || name === maxField) {
          const totalStr = name === totField ? value : previous[totField]
          const maxStr = name === maxField ? value : previous[maxField]

          const totalNum = parseFloat(totalStr)
          const maxNum = parseFloat(maxStr)

          if (!isNaN(totalNum) && !isNaN(maxNum) && maxNum > 0 && totalNum >= 0) {
            if (totalNum > maxNum) {
              updated[targetField] = 'Invalid Marks'
            } else {
              const calcPct = (totalNum / maxNum) * 100
              const formatted = (calcPct % 1 === 0 ? calcPct.toFixed(0) : calcPct.toFixed(2)) + '%'
              updated[targetField] = formatted
            }
          } else if (!totalStr || !maxStr) {
            updated[targetField] = ''
          }
        }
      })

      if (name === 'hasBachelorDegree' && value === 'No') {
        const bachelorSection = applicationSections.find((s) => s.id === 12)
        if (bachelorSection) {
          bachelorSection.fields.forEach((f) => {
            if (f.name !== 'hasBachelorDegree') {
              updated[f.name] = ''
            }
          })
        }
      }

      if (name === 'hasMasterDegree' && value === 'No') {
        const masterSection = applicationSections.find((s) => s.id === 13)
        if (masterSection) {
          masterSection.fields.forEach((f) => {
            if (f.name !== 'hasMasterDegree') {
              updated[f.name] = ''
            }
          })
        }
      }

      return updated
    })

    if (name === 'internshipIfAny' && value === 'No') {
      setCompletedSections((prev) => new Set(prev).add(6))
      setTimeout(() => setCurrentStep(8), 100)
    }

    if (name === 'employmentIfAny' && value === 'No') {
      setCompletedSections((prev) => new Set(prev).add(8))
      setTimeout(() => setCurrentStep(9), 100)
    }

    if (name === 'hasBachelorDegree' && value === 'No') {
      setCompletedSections((prev) => new Set(prev).add(12))
      setTimeout(() => setCurrentStep(13), 100)
    }

    if (name === 'hasMasterDegree' && value === 'No') {
      setCompletedSections((prev) => new Set(prev).add(13))
      setTimeout(() => setCurrentStep(14), 100)
    }
  }

  const nextStep = () => {
    const currentValidation = validateSection(currentStep, formData)
    if (!currentValidation.isValid) {
      focusAndReportField(currentValidation.field, currentValidation.message)
      return false
    }

    setSectionError(null)
    setCompletedSections((prev) => {
      const updated = new Set(prev)
      updated.add(currentStep)
      return updated
    })

    setCurrentStep((previous) => {
      if (previous === 6 && formData.internshipIfAny === 'No') {
        return 8
      }
      if (previous === 8 && formData.employmentIfAny === 'No') {
        return 9
      }
      if (previous === 12 && formData.hasBachelorDegree === 'No') {
        return 13
      }
      if (previous === 13 && formData.hasMasterDegree === 'No') {
        return 14
      }
      return Math.min(previous + 1, applicationSections.length)
    })
    return true
  }

  const previousStep = () => {
    setSectionError(null)
    setCurrentStep((previous) => {
      if (previous === 8 && formData.internshipIfAny === 'No') {
        return 6
      }
      if (previous === 9 && formData.employmentIfAny === 'No') {
        return 8
      }
      if (previous === 14 && formData.hasMasterDegree === 'No') {
        return 13
      }
      if (previous === 13 && formData.hasBachelorDegree === 'No') {
        return 12
      }
      return Math.max(previous - 1, 1)
    })
  }

  const goToStep = (step) => {
    if (step === currentStep) return
    if (step === 7 && formData.internshipIfAny === 'No') {
      return
    }

    // Moving forward
    if (step > currentStep) {
      const currentValidation = validateSection(currentStep, formData)
      if (!currentValidation.isValid) {
        focusAndReportField(currentValidation.field, currentValidation.message)
        return
      }

      if (!canNavigateToStep(step)) {
        return
      }

      setCompletedSections((prev) => {
        const updated = new Set(prev)
        updated.add(currentStep)
        return updated
      })
    }

    // Moving backward
    if (step < currentStep) {
      if (!canNavigateToStep(step)) {
        return
      }
    }

    setSectionError(null)
    setCurrentStep(step)
  }

  const resetToFirstSection = () => {
    setSectionError(null)
    setCurrentStep(1)
  }

  const saveDraft = () => {
    localStorage.setItem(
      'jobApplicationDraft',
      JSON.stringify({
        currentStep: 1,
        completedSections: Array.from(completedSections),
        formData,
      })
    )
    alert('Draft saved successfully!')
  }

  const resetForm = () => {
    setFormData(initialFormData)
    setCompletedSections(new Set())
    setCurrentStep(1)
    setSectionError(null)
    localStorage.removeItem('jobApplicationDraft')
  }

  const value = {
    currentStep,
    formData,
    updateField,
    nextStep,
    previousStep,
    goToStep,
    resetToFirstSection,
    saveDraft,
    resetForm,
    sectionError,
    setSectionError,
    focusAndReportField,
    canNavigateToStep,
    isSectionCompleted,
    completedSections,
  }

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}

// ============================================================================
// PROGRESS BAR COMPONENT
// ============================================================================

const steps = applicationSections.map((section) => section.title)

const STEP_ICONS = [
  User,          // 1. Personal Information
  Activity,      // 2. Physical & Identification Information
  GraduationCap, // 3. Education, Skills & Experience
  MapPin,        // 4. Address & Contact Information
  Globe,         // 5. Social Media
  Briefcase,     // 6. Internship Details
  Award,         // 7. Trainer & Certificate Details
  Building,      // 8. Employment Information
  ShieldCheck,   // 9. Identity & Government Information
  FileText,      // 10. 10th Standard Qualification Details
  FileBadge,     // 11. Secondary / Higher Secondary / Technical Qualification Details
  GraduationCap, // 12. Bachelor's Degree / Graduation Qualification Details
  Award,         // 13. Master Degree / Post Graduate Qualification Details
  Globe,         // 14. Travel Eligibility
  Calendar,      // 15. Travel Availability
  Briefcase,     // 16. Field Work Eligibility
  Info,          // 17. Travel Restrictions & Preferences
  Phone,         // 18. Emergency & Extended Travel
]

export function ProgressBar({ currentStep: propCurrentStep }) {
  const formContext = useFormContext()
  const currentStep = propCurrentStep ?? formContext?.currentStep ?? 1
  const goToStep = formContext?.goToStep
  const formData = formContext?.formData || {}
  const canNavigateToStep = formContext?.canNavigateToStep
  const isSectionCompleted = formContext?.isSectionCompleted
  const focusAndReportField = formContext?.focusAndReportField

  const progressPercentage = (currentStep / steps.length) * 100
  const currentStepName = steps[currentStep - 1]
  const nextStepName = currentStep < steps.length ? steps[currentStep] : null

  return (
    <div className="relative mb-6 sm:mb-8 lg:mb-6 pt-4 sm:pt-6 lg:pt-4">
      {/* Soft Ambient Radial Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(109,40,217,0.04),transparent_70%)] pointer-events-none" />

      {/* Header Container */}
      <div className="relative mb-6 text-center sm:mb-8 lg:mb-7">
        {/* Top-Right Decorative Watermark Dots */}
        <div
          className="absolute right-2 sm:right-6 top-0 grid grid-cols-4 gap-1.5 opacity-25 pointer-events-none select-none"
          aria-hidden="true"
        >
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={`dot-tr-${i}`} className="w-1.5 h-1.5 rounded-full bg-purple-300" />
          ))}
        </div>

        {/* Bottom-Left Decorative Watermark Dots */}
        <div
          className="absolute left-2 sm:left-6 -bottom-1 grid grid-cols-4 gap-1.5 opacity-25 pointer-events-none select-none"
          aria-hidden="true"
        >
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={`dot-bl-${i}`} className="w-1.5 h-1.5 rounded-full bg-purple-300" />
          ))}
        </div>

        {/* Main Title */}
        <h2 className="text-xl font-black tracking-tight text-[#0B1F4D] sm:text-3xl sm:tracking-normal lg:text-[28px] uppercase">
          CANDIDATE <span className="text-[#6D28D9]">MASTER</span> PROFILE FORM
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-2 max-w-2xl text-xs leading-relaxed text-slate-500 sm:text-sm font-normal">
          Please fill out all the details carefully. You can save your progress and continue later.
        </p>

        {/* Amber/Gold Accent Bar */}
        <div className="mx-auto mt-2.5 h-1 w-14 sm:w-16 rounded-full bg-[#D4AF37]" />
      </div>

      {/* Mobile Step Card (lg:hidden) */}
      <div className="block lg:hidden px-4 py-4 rounded-xl border border-purple-100 bg-white shadow-sm mb-4 relative overflow-hidden">
        <div className="flex items-center justify-between mb-3.5">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-[#F3EEFF] px-3 py-1 text-xs font-black text-[#6D28D9] ring-1 ring-purple-200">
              Step {currentStep} of {steps.length}
            </span>
          </div>
          <span className="text-xs font-bold text-slate-500">
            {Math.round(progressPercentage)}% Completed
          </span>
        </div>

        <h3 className="text-base font-black text-[#0B1F4D] mb-3.5 flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-[#0B1F4D] text-[#D4AF37] inline-flex items-center justify-center text-xs font-bold shrink-0">
            {currentStep}
          </span>
          <span>{currentStepName}</span>
        </h3>

        <div className="relative h-2 w-full rounded-full bg-slate-100 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#0B1F4D] via-[#173B78] to-[#6D28D9] transition-all duration-500 ease-out shadow-sm"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        {nextStepName && (
          <div className="mt-3.5 text-[11px] text-slate-500 flex items-center justify-between border-t border-slate-100 pt-2.5">
            <span className="font-medium">Next Section:</span>
            <span className="font-bold text-slate-700">{nextStepName}</span>
          </div>
        )}
      </div>

      {/* Desktop Stepper Track (18 Steps) */}
      <div className="hidden lg:block">
        <div className="w-full overflow-x-auto no-scrollbar py-2">
          <div className="min-w-[1140px] w-full flex flex-row items-start justify-between relative px-2">
            {steps.map((step, index) => {
              const stepNumber = index + 1
              const isCompleted = Boolean(isSectionCompleted?.(stepNumber, formData)) && stepNumber !== currentStep
              const active = stepNumber === currentStep
              const isClickable = Boolean(canNavigateToStep?.(stepNumber))
              const StepIcon = STEP_ICONS[index] || User

              return (
                <div
                  key={`step-indicator-${stepNumber}`}
                  className="relative flex flex-1 flex-col items-center px-0.5 text-center min-w-[60px]"
                >
                  {/* Connecting Line to next step */}
                  {index < steps.length - 1 && (
                    <div
                      className="absolute left-1/2 top-[18px] -translate-y-1/2 w-full h-[2px] pointer-events-none"
                      style={{ zIndex: 0 }}
                    >
                      <div
                        className={`h-full w-full transition-colors duration-300 ${
                          isSectionCompleted?.(stepNumber, formData) ? 'bg-[#0B1F4D]' : 'bg-slate-200'
                        }`}
                      />
                    </div>
                  )}

                  {/* Step Badge */}
                  <button
                    type="button"
                    onClick={() => {
                      if (!isClickable) {
                        if (stepNumber > currentStep) {
                          const currentValidation = validateSection(currentStep, formData)
                          if (!currentValidation.isValid) {
                            focusAndReportField?.(currentValidation.field, currentValidation.message)
                          }
                        }
                        return
                      }
                      goToStep?.(stepNumber)
                    }}
                    aria-disabled={!isClickable}
                    className={`relative z-10 transition-all duration-200 group focus:outline-none ${
                      isClickable ? 'cursor-pointer hover:scale-105' : 'cursor-not-allowed opacity-75'
                    }`}
                    title={`Step ${stepNumber}: ${step}${!isClickable ? ' (Unfilled section - complete required fields first)' : ''}`}
                  >
                    {active ? (
                      // Active: Horizontal navy pill capsule with icon and gold details
                      <div className="h-9 min-w-[62px] px-3.5 rounded-full bg-[#0B1F4D] text-white flex items-center justify-center gap-2 shadow-md shadow-[#0B1F4D]/25 ring-2 ring-purple-500/25 border border-[#D4AF37]/50">
                        <StepIcon className="w-4 h-4 text-[#D4AF37] shrink-0" strokeWidth={2.5} />
                        <span className="font-extrabold text-sm text-white leading-none">
                          {stepNumber}
                        </span>
                      </div>
                    ) : isCompleted ? (
                      // Completed: Navy rounded squircle with gold check icon
                      <div className="w-9 h-9 rounded-xl bg-[#173B78] text-[#D4AF37] flex items-center justify-center shadow-sm border border-[#173B78]">
                        <Check className="w-4 h-4 text-[#D4AF37] stroke-[2.5]" />
                      </div>
                    ) : (
                      // Inactive: White squircle with soft border and hover purple
                      <div className={`w-9 h-9 rounded-xl border border-slate-200 bg-white text-slate-700 font-bold text-xs sm:text-[13px] flex items-center justify-center shadow-[0_2px_8px_rgba(11,31,77,0.04)] ${
                        isClickable ? 'group-hover:border-purple-300 group-hover:text-[#6D28D9]' : ''
                      }`}>
                        {stepNumber}
                      </div>
                    )}
                  </button>

                  {/* Step Label */}
                  <span
                    className={`mt-2.5 max-w-[80px] text-[10px] leading-[1.25] text-center transition-colors ${
                      active
                        ? 'font-extrabold text-[#0B1F4D]'
                        : isCompleted
                          ? 'font-semibold text-slate-800'
                          : 'font-medium text-slate-600'
                    }`}
                  >
                    {step}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// SECTION NAVIGATION COMPONENT
// ============================================================================

export function SectionNavigation({
  currentStep = 1,
  totalSteps = 18,
  onPrevious,
  onSaveDraft,
  isSubmitting = false,
}) {
  const isFirstStep = currentStep === 1
  const isLastStep = currentStep === totalSteps

  return (
    <div className="pt-4 lg:pt-3">
      <div className="flex flex-col items-center justify-between gap-3 md:flex-row md:gap-4">
        <button
          type="button"
          onClick={onPrevious}
          disabled={isFirstStep}
          className={`inline-flex h-12 w-full items-center justify-center gap-3 rounded-md border px-5 font-bold transition sm:h-14 md:w-auto md:px-6 lg:h-10 lg:px-5 lg:text-sm ${isFirstStep
            ? 'cursor-not-allowed border-slate-200 bg-white text-slate-400'
            : 'border-slate-300 bg-white text-slate-800 hover:border-slate-400 cursor-pointer'
            }`}
        >
          <ArrowLeft size={18} />
          Previous
        </button>

        <button
          type="button"
          onClick={onSaveDraft}
          className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-md border border-slate-300 bg-white px-5 font-bold text-slate-800 transition hover:border-[#D4AF37] hover:bg-[#F3EEFF]/40 sm:h-14 md:w-auto md:px-6 lg:h-10 lg:px-5 lg:text-sm cursor-pointer"
        >
          <Save size={18} />
          Save & Exit
        </button>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-md bg-[#0B1F4D] hover:bg-[#173B78] px-6 font-black text-white border border-[#D4AF37]/40 shadow-lg shadow-[#0B1F4D]/15 transition disabled:cursor-not-allowed disabled:opacity-60 sm:h-14 md:w-auto md:px-8 lg:h-10 lg:px-6 lg:text-sm cursor-pointer active:scale-95"
        >
          <span>{isLastStep ? 'Submit Application' : 'Save & Continue'}</span>
          <ArrowRight size={18} className="text-[#D4AF37]" />
        </button>
      </div>
    </div>
  )
}

// ============================================================================
// TRUST FOOTER COMPONENT
// ============================================================================

const footerCards = [
  {
    icon: ShieldCheck,
    title: 'Secure',
    text: 'Your data is encrypted and protected.',
    color: 'bg-[#0B1F4D] text-[#D4AF37]',
  },
  {
    icon: BadgeCheck,
    title: 'Save & Continue',
    text: 'You can save your progress anytime.',
    color: 'bg-emerald-600 text-white',
  },
  {
    icon: FileBadge,
    title: 'Easy to Fill',
    text: 'Simple and structured application process.',
    color: 'bg-[#173B78] text-[#F7E7A9]',
  },
  {
    icon: Headphones,
    title: 'Need Help?',
    text: 'Contact our support team anytime.',
    color: 'bg-[#6D28D9] text-white',
  },
]

export function TrustFooter() {
  return (
    <div className="mt-5 grid gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-lg shadow-slate-200/70 sm:mt-6 sm:grid-cols-2 sm:p-5 lg:mt-4 lg:grid-cols-4 lg:gap-3 lg:p-3">
      {footerCards.map((card) => {
        const Icon = card.icon

        return (
          <div
            key={card.title}
            className="flex gap-3 sm:gap-4 lg:border-r lg:border-slate-200 lg:pr-3 last:border-r-0"
          >
            <span
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full sm:h-14 sm:w-14 lg:h-10 lg:w-10 ${card.color}`}
            >
              <Icon size={20} />
            </span>

            <div>
              <h3 className="font-black text-slate-900 lg:text-sm">{card.title}</h3>
              <p className="mt-1 text-sm leading-5 text-slate-600 lg:text-xs lg:leading-4">
                {card.text}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

// ============================================================================
// PAGE COMPONENTS (CandidateMasterProfileFormPage, PreviewPage, SuccessPage, NotFound)
// ============================================================================

/**
 * CandidateMasterProfileFormPage Component - Main 15-step application form page
 */
export function CandidateMasterProfileFormPage({ onGoToPreview, appliedJob }) {
  const {
    currentStep,
    formData,
    updateField,
    nextStep,
    previousStep,
    saveDraft,
    focusAndReportField,
    setSectionError,
  } = useFormContext()

  const navigate = useNavigate()

  const currentSection =
    applicationSections.find((section) => section.id === currentStep) ||
    applicationSections[0]

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentStep])

  const handleSubmit = (e) => {
    e.preventDefault()

    const validation = validateSection(currentStep, formData)
    if (!validation.isValid) {
      focusAndReportField(validation.field, validation.message)
      return
    }

    setSectionError(null)

    if (currentStep === applicationSections.length) {
      if (onGoToPreview) {
        onGoToPreview()
      } else {
        navigate('/preview')
      }
    } else {
      nextStep()
    }
  }

  return (
    <div className="min-h-screen bg-transparent">
      <main className="mx-auto w-full max-w-[1440px] rounded-t-[1.5rem] bg-white border border-slate-200/80 shadow-sm px-2 py-4 sm:px-6 sm:py-8 lg:rounded-t-[2rem] lg:px-5 lg:py-6 xl:px-6">
        <ProgressBar currentStep={currentStep} />

        <div className="w-full min-w-0 relative z-20">
          <section className="w-full min-w-0 rounded-lg border border-slate-200 bg-white shadow-xl shadow-slate-200/70">
            <form onSubmit={handleSubmit} className="w-full min-w-0">
              <CandidateMasterProfileForm
                section={currentSection}
                formData={formData}
                onChange={updateField}
              />

              <div className="border-t border-slate-200 px-3 pb-5 sm:px-8 sm:pb-6 lg:px-6 lg:pb-4">
                <SectionNavigation
                  currentStep={currentStep}
                  totalSteps={applicationSections.length}
                  onPrevious={previousStep}
                  onSaveDraft={saveDraft}
                />
              </div>
            </form>
          </section>
        </div>

        <TrustFooter />
      </main>
    </div>
  )
}

/**
 * PreviewPage Component - Review page before final submit
 */
export function PreviewPage({ onBackToEdit, onSubmitSuccess, appliedJob }) {
  const navigate = useNavigate()
  const { formData } = useFormContext()

  const handleFinalSubmit = () => {
    localStorage.removeItem('jobApplicationDraft')
    if (onSubmitSuccess) {
      onSubmitSuccess()
    } else {
      navigate('/success')
    }
  }

  const handleBackToEdit = () => {
    if (onBackToEdit) {
      onBackToEdit()
    } else {
      navigate('/')
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 mb-3 rounded-full bg-amber-50 px-4 py-1.5 text-xs font-bold text-amber-700 ring-1 ring-amber-200">
            <CheckCircle2 size={14} />
            Preview Before Submission
          </div>
          <h1 className="text-2xl font-black tracking-wide text-slate-900 sm:text-3xl">
            Review Your Application
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Please review all your details carefully before submitting. Click "Back to Edit" to make any changes.
          </p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-amber-400" />
        </div>

        {applicationSections.map((section, index) => {
          const prevFormTitle = index > 0 ? applicationSections[index - 1].formTitle : null
          const showHeader = index === 0 || section.formTitle !== prevFormTitle

          if (section.id === 7 && formData.internshipIfAny === 'No') {
            return null
          }

          return (
            <div key={section.id}>
              {showHeader && (
                <div className="mb-4 mt-8 rounded-lg bg-[#0B1F4D] border border-[#D4AF37]/30 px-5 py-3 text-center first:mt-0 shadow-sm">
                  <h2 className="text-xs font-black uppercase tracking-[0.2em] text-[#D4AF37] sm:text-sm">
                    {section.formTitle}
                  </h2>
                </div>
              )}

              <div className="mb-4 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-100 bg-[#F8FAFC] px-5 py-3">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0B1F4D] text-[11px] font-black text-[#D4AF37]">
                      {section.id}
                    </span>
                    <h3 className="text-sm font-bold text-[#0B1F4D]">
                      {section.title}
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-x-6 gap-y-4 px-5 py-4 sm:grid-cols-2">
                  {section.fields.map((field) => {
                    if (
                      section.id === 6 &&
                      field.name !== 'internshipIfAny' &&
                      formData.internshipIfAny === 'No'
                    ) {
                      return null
                    }

                    if (
                      section.id === 8 &&
                      field.name !== 'employmentIfAny' &&
                      formData.employmentIfAny === 'No'
                    ) {
                      return null
                    }

                    if (section.id === 11 && field.name !== 'twelfthQualificationName') {
                      const selectedQual = formData.twelfthQualificationName || '12th'
                      if (selectedQual === '12th' && !field.name.startsWith('twelfth')) return null
                      if (selectedQual === 'ITI' && !field.name.startsWith('iti')) return null
                      if (selectedQual === 'Diploma' && !field.name.startsWith('diploma')) return null
                      if (selectedQual === 'Other' && !field.name.startsWith('otherQual')) return null
                    }

                    if (
                      section.id === 12 &&
                      field.name !== 'hasBachelorDegree' &&
                      formData.hasBachelorDegree !== 'Yes'
                    ) {
                      return null
                    }

                    if (
                      section.id === 13 &&
                      field.name !== 'hasMasterDegree' &&
                      formData.hasMasterDegree !== 'Yes'
                    ) {
                      return null
                    }
                    const nameGroupConfigs = {
                      candidateFirstName: {
                        label: 'Candidate Full Name',
                        keys: ['candidateFirstName', 'candidateMiddleName', 'candidateLastName'],
                      },
                      fathersFirstName: {
                        label: "Father's Full Name",
                        keys: ['fathersFirstName', 'fathersMiddleName', 'fathersLastName'],
                      },
                      mothersFirstName: {
                        label: "Mother's Full Name",
                        keys: ['mothersFirstName', 'mothersMiddleName', 'mothersLastName'],
                      },
                      spouseFirstName: {
                        label: "Spouse's Full Name",
                        keys: ['spouseFirstName', 'spouseMiddleName', 'spouseLastName'],
                      },
                    }

                    const skippedNameKeys = [
                      'candidateMiddleName',
                      'candidateLastName',
                      'fathersMiddleName',
                      'fathersLastName',
                      'mothersMiddleName',
                      'mothersLastName',
                      'spouseMiddleName',
                      'spouseLastName',
                    ]

                    if (skippedNameKeys.includes(field.name)) {
                      return null
                    }

                    let displayLabel = field.label
                    let val = formData[field.name]

                    if (nameGroupConfigs[field.name]) {
                      const config = nameGroupConfigs[field.name]
                      displayLabel = config.label
                      val = config.keys
                        .map((k) => (formData[k] ? String(formData[k]).trim() : ''))
                        .filter(Boolean)
                        .join(' ')
                    }

                    const isEmpty = !val || val.trim() === ''

                    return (
                      <div key={field.name} className="min-w-0">
                        <p className="mb-0.5 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                          {displayLabel}
                        </p>
                        {isEmpty ? (
                          <p className="text-sm italic text-slate-300">— Not provided —</p>
                        ) : (
                          <p className="break-words text-sm font-medium text-slate-800">
                            {val}
                          </p>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}

        <div className="sticky bottom-0 mt-6 flex flex-col items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white/90 px-5 py-4 shadow-lg backdrop-blur sm:flex-row">
          <button
            type="button"
            onClick={handleBackToEdit}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-slate-50 active:scale-[0.98] sm:w-auto cursor-pointer"
          >
            <ArrowLeft size={16} />
            Back to Edit
          </button>

          <p className="text-xs text-slate-400 sm:text-center hidden sm:block">
            Once submitted, you cannot edit your application.
          </p>

          <button
            type="button"
            onClick={handleFinalSubmit}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#0B1F4D] hover:bg-[#173B78] px-6 py-3 text-sm font-black text-white border border-[#D4AF37]/40 shadow-md transition active:scale-[0.98] sm:w-auto cursor-pointer"
          >
            <Send size={16} className="text-[#D4AF37]" />
            <span>Submit Application</span>
          </button>
        </div>
      </div>
    </div>
  )
}

/**
 * SuccessPage Component - Submission success screen
 */
export function SuccessPage({ onContinue, appliedJob }) {
  const navigate = useNavigate()
  const { resetForm } = useFormContext()

  const handleContinue = () => {
    if (resetForm) resetForm()
    if (onContinue) {
      onContinue()
    } else {
      navigate('/recruitment/current-vacancy/job-vacancy')
    }
  }

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-slate-50 px-4 overflow-hidden"
      style={{
        backgroundImage:
          'radial-gradient(at 0% 0%, rgba(212, 175, 55, 0.08) 0px, transparent 50%), radial-gradient(at 50% 0%, rgba(109, 40, 217, 0.08) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(212, 175, 55, 0.08) 0px, transparent 50%)',
      }}
    >
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-400/5 blur-[100px] pointer-events-none animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-amber-400/5 blur-[100px] pointer-events-none animate-pulse"
        style={{ animationDelay: '2s' }}
      />

      <div className="relative overflow-hidden w-full max-w-md rounded-3xl border border-slate-200/60 bg-white/80 backdrop-blur-xl p-10 text-center shadow-[0_20px_50px_rgba(11,_31,_77,_0.07)]">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#173B78] to-[#6D28D9]" />

        <div className="mx-auto mb-8 relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-50 to-teal-50/50 text-emerald-500 shadow-[0_10px_30px_rgba(16,_185,_129,_0.15)] ring-1 ring-emerald-500/10">
          <span className="absolute inset-0 rounded-full border border-emerald-400/30 animate-ping opacity-40" />
          <div className="absolute inset-2 rounded-full border border-emerald-500/5 bg-white/40 shadow-inner" />
          <Check size={40} className="stroke-[3.5] relative z-10 drop-shadow-sm" />
        </div>

        <h1 className="text-3xl font-black text-[#0B1F4D] tracking-tight leading-snug">
          Application Submitted<br />
          <span className="bg-gradient-to-r from-[#0B1F4D] via-[#173B78] to-[#0B1F4D] bg-clip-text text-transparent">
            Successfully!
          </span>
        </h1>

        <div className="mx-auto my-6 h-0.5 w-12 bg-gradient-to-r from-[#D4AF37] to-[#6D28D9] rounded-full" />

        <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-xs mx-auto">
          Thank you for your submission. Your profile has been securely received and is under initial screening.
        </p>

        {appliedJob && (
          <div className="mt-4 p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600">
            <span className="font-bold text-[#0B1F4D]">{appliedJob.jobTitle}</span> ({appliedJob.jobCode})
          </div>
        )}

        <div className="mt-8">
          <button
            type="button"
            onClick={handleContinue}
            className="group relative inline-flex items-center justify-center w-full gap-2.5 px-8 py-3.5 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-[#0B1F4D] via-[#173B78] to-[#0B1F4D] border border-[#D4AF37]/40 shadow-[0_10px_25px_rgba(11,_31,_77,_0.2)] hover:shadow-[0_15px_30px_rgba(11,_31,_77,_0.3)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Return to Job Vacancies</span>
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 text-[#D4AF37]" />
          </button>
        </div>
      </div>
    </div>
  )
}

/**
 * CandidateMasterProfilePageContent - Handles state switching between Form, Preview, and Success
 */
function CandidateMasterProfilePageContent({ job: propJob, onBack, onHome }) {
  const navigate = useNavigate()
  const location = useLocation()
  const appliedJob = propJob || location.state?.job || null
  const [viewMode, setViewMode] = useState('form') // 'form' | 'preview' | 'success'
  const { resetToFirstSection } = useFormContext()

  useEffect(() => {
    setViewMode('form')
    resetToFirstSection?.()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [viewMode])

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {(onBack || onHome) && (
        <div className="mx-auto w-full max-w-[1440px] px-4 pt-4 pb-1 flex items-center justify-start gap-3">
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 rounded-xl bg-[#081E52] hover:bg-[#0c2b7a] border border-[#D4AF37]/40 px-4 py-2 text-xs sm:text-sm font-bold text-white transition-all cursor-pointer shadow-sm active:scale-95"
            >
              ← Back to Vacancies
            </button>
          )}
          <button
            type="button"
            onClick={() => {
              if (onHome) onHome()
              else {
                window.location.hash = '#home'
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            }}
            className="inline-flex items-center gap-2 rounded-xl bg-[#D4AF37] hover:bg-[#E5C158] px-4 py-2 text-xs sm:text-sm font-bold text-[#040A1A] transition-all cursor-pointer shadow-sm active:scale-95"
          >
            <Home className="w-4 h-4 text-[#040A1A]" />
            <span>Home</span>
          </button>
        </div>
      )}

      {viewMode === 'form' && (
        <CandidateMasterProfileFormPage
          appliedJob={appliedJob}
          onGoToPreview={() => setViewMode('preview')}
        />
      )}

      {viewMode === 'preview' && (
        <PreviewPage
          appliedJob={appliedJob}
          onBackToEdit={() => setViewMode('form')}
          onSubmitSuccess={() => setViewMode('success')}
        />
      )}

      {viewMode === 'success' && (
        <SuccessPage
          appliedJob={appliedJob}
          onContinue={() => {
            if (onBack) onBack()
            else navigate('/recruitment/current-vacancy/job-vacancy')
          }}
        />
      )}
    </div>
  )
}

/**
 * NotFound Component - 404 Error Page
 */
export function NotFound() {
  return (
    <div className="min-h-screen bg-red-50 flex items-center justify-center">
      <h1 className="text-4xl font-bold text-red-700">
        404 - Page Not Found
      </h1>
    </div>
  )
}

export default function CandidateMasterProfilePageWrapper({ job, onBack, onHome }) {
  return (
    <FormProvider>
      <CandidateMasterProfilePageContent job={job} onBack={onBack} onHome={onHome} />
    </FormProvider>
  )
}

