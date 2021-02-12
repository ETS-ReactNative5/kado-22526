
export const getPlaceholder = (value, placeholder) => {
  if (!value) {
    return placeholder;
  }
  return value.toString() || placeholder;
};


