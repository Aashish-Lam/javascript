function User(email, password) {
    this._email = email; // Store email as-is
    this._password = password;
  
    Object.defineProperty(this, 'email', {
      get: function() {
        return this._email.toUpperCase(); // Return uppercase for access
      },
      set: function(value) {
        this._email = value; // Store the original value
      }
    });
  
    Object.defineProperty(this, 'password', {
      get: function() {
        return this._password;
      },
      set: function(value) {
        this._password = value;
      }
    });
  }
  
  const user = new User('ash@gmail.com', 'pass');
  console.log(user.email); // Outputs: ASH@GMAIL.COM (uppercase)
  