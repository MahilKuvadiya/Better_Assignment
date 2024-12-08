export const saveUserData = (data: any) => {
    // Simulate saving to JSON file (replace with actual backend logic if needed)
    console.log('User data saved:', data);
  };
  
  export const saveEmailToLocalStorage = (email: string) => {
    localStorage.setItem('rememberedEmail', email);
  };
  
  export const getEmailFromLocalStorage = (): string | null => {
    return localStorage.getItem('rememberedEmail');
  };

  export const savePasswordToLocalStorage = (password: string) => {
    localStorage.setItem('remembered password', password);
  }

  export const getPasswordFromLocalStorage = (): string | null => {
    return localStorage.getItem('rememberedPassword');
  }
  
  export const saveToLocalStorage = (key: string, value: string) => {
    localStorage.setItem(key, value);
  };