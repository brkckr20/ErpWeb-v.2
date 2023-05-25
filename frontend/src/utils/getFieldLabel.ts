export const getFieldLabel = (fieldName: string): string => {
    const labelParts = fieldName.split("_");
    const capitalizedLabelParts = labelParts.map((part) =>
      part.charAt(0).toUpperCase() + part.slice(1)
    );
    return capitalizedLabelParts.join(" ");
  };