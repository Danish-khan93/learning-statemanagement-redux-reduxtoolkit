export const firstName = {
  required: { value: true, message: "is required" },
  minLength: {
    value: 3,
    message: "minimum length is 3",
  },
};

export const email={
  required: { value: true, message: "is required" },
  pattern:{
    value :/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message:"invalid email"
  }
}


export const password={
  required: { value: true, message: "is required" },
  pattern:{
    value :/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    message:"invalid password"
  }
}