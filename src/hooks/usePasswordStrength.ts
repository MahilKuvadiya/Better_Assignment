export const calculatePasswordStrength = (password: string): number => {
    let score = 0;
  
    if (password.length >= 8) score += 2; // Strong length
    else if (password.length >= 6) score++; // Moderate length
  
    if (/[A-Z]/.test(password)) score++;
  
    if (/[a-z]/.test(password)) score++;
  
    if (/[0-9]/.test(password)) score++;
  
    if (/[^A-Za-z0-9]/.test(password)) score++;
  
    const commonPatterns = ['1234', 'password', 'qwerty', 'abcd', '12345678'];
    if (commonPatterns.some((pattern) => password.includes(pattern))) score -= 2;
  
    if (/\s/.test(password)) score--;
  
    score = Math.max(0, score);
  
    return score;
  };
  