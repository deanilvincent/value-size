module.exports = (val) => {
  if (!val) {
    console.error("val-size: val is empty");
    return undefined;
  }

  return Array.isArray(val)
    ? val.length
    : val && typeof val === "object"
    ? val.size || val.length || Object.keys(val).length
    : typeof val === "string"
    ? new Blob([val]).size
    : 0;
};
