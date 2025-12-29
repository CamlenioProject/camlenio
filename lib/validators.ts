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

// PHONE (E.164 international)
export const validatePhone = (value: string): string | null => {
  const digits = value.replace(/\D/g, "");

  // Length check
  if (digits.length < 7 || digits.length > 14) {
    return "Enter a valid phone number.";
  }

  // Reject same digits (e.g., 11111)
  if (/^(\d)\1+$/.test(digits)) {
    return "Invalid phone number.";
  }

  // Reject strict ascending or descending numbers
  const ascending = "0123456789012345";
  const descending = "9876543210987654";

  if (ascending.includes(digits) || descending.includes(digits)) {
    return "Invalid phone number.";
  }

  // Reject any digit repeated 4+ times in a row
  if (/(\d)\1{3,}/.test(digits)) {
    return "Invalid phone number.";
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
