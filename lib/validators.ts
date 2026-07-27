// NAME
export const validateName = (value: string): string | null => {
  const trimmed = value.trim();
  if (trimmed.length < 2) return "Enter a valid full name.";
  return null;
};

// GMAIL
export const validateEmail = (value: string): string | null => {
  const trimmed = value.trim();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

  if (!emailRegex.test(trimmed)) {
    return "Enter a valid email address.";
  }

  return null;
};

// PHONE
export const validatePhone = (value: string): string | null => {
  const trimmed = (value || "").trim();
  if (!trimmed) {
    return "Enter a valid 10-digit phone number.";
  }

  let digits = trimmed.replace(/\D/g, "");

  if (digits.length === 12 && digits.startsWith("91")) {
    digits = digits.slice(2);
  }

  if (digits.length < 10) {
    return "Phone number must be 10 digits.";
  }

  if (digits.length > 10) {
    return "Phone number cannot exceed 10 digits.";
  }

  if (!/^[6-9]\d{9}$/.test(digits)) {
    return "Enter a valid 10-digit phone number.";
  }

  return null;
};

// MESSAGE
export const validateMessage = (value: string): string | null => {
  const trimmed = value.trim();

  if (trimmed.length < 2) {
    return "Message must be at least 2 characters.";
  }

  const pattern = /^[A-Za-z0-9\s\u0900-\u097F.,?!:;\-_'()]+$/;

  if (!pattern.test(trimmed)) {
    return "Only letters, numbers, spaces, and . , ? ! : ; - _ ' ( ) characters are allowed.";
  }

  return null;
};

// --- APPLY FORM VALIDATORS ---

export interface ApplyFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  linkedin: string;
  portfolio: string;
  resume: File | null;
  coverLetter: string;
}

export const validateUrl = (value: string): string | null => {
  if (!value) return null;
  const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  if (!urlPattern.test(value)) {
    return "Please enter a valid URL (e.g. linkedin.com/in/...).";
  }
  return null;
};

export const validateFile = (file: File | null): string | null => {
  if (!file) return "Resume is required.";
  
  // 5MB Limit
  const MAX_SIZE = 5 * 1024 * 1024;
  if (file.size > MAX_SIZE) {
    return "File size must be less than 5MB.";
  }

  // PDF Only
  if (file.type !== "application/pdf") {
    return "Only PDF files are accepted.";
  }

  return null;
};

export const validateApplyForm = (data: ApplyFormValues) => {
  const errors: Partial<Record<keyof ApplyFormValues, string>> = {};

  if (validateName(data.firstName)) errors.firstName = "First name is invalid.";
  if (validateName(data.lastName)) errors.lastName = "Last name is invalid.";
  
  const emailErr = validateEmail(data.email);
  if (emailErr) errors.email = emailErr;

  // Phone optional but if present must be valid
  if (data.phone) {
    const phoneErr = validatePhone(data.phone);
    if (phoneErr) errors.phone = phoneErr;
  }

  const linkedinErr = validateUrl(data.linkedin);
  if (linkedinErr) errors.linkedin = linkedinErr;

  const portfolioErr = validateUrl(data.portfolio);
  if (portfolioErr) errors.portfolio = portfolioErr;

  const resumeErr = validateFile(data.resume);
  if (resumeErr) errors.resume = resumeErr;

  // Cover Letter optional/simple check (e.g. max length)
  if (data.coverLetter && data.coverLetter.length > 5000) {
    errors.coverLetter = "Cover letter is too long (max 5000 chars).";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
