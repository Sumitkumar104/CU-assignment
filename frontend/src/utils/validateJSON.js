const validateJSON = (input) => {
    try {
      const parsed = JSON.parse(input);
      if (!parsed.data || !Array.isArray(parsed.data)) {
        throw new Error("Invalid JSON structure");
      }
      return parsed;
    } catch (error) {
      throw new Error("Invalid JSON format");
    }
  };
  
  export default validateJSON;
  