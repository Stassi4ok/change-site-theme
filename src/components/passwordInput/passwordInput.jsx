import './passwordInput.css'
import {useState} from 'react'

export function PasswordInput({placeholder}) {
  const [showPassword, setShowPassword] = useState(false);

  function handleChange(e) {
    setShowPassword(e.target.checked);
  }

  return (
    <div className="form-password-input">
      <input
        className="password-input"
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
      />

      <input
        className="password-input-checkbox"
        type="checkbox"
        checked={showPassword}
        onChange={handleChange}
      />
    </div>
  );
}

