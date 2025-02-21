exports.processData = (data) => {
    const numbers = [];
    const alphabets = [];
  
    data.forEach((item) => {
      if (/^\d+$/.test(item)) {
        numbers.push(item);
      } else if (/^[A-Za-z]$/.test(item)) {
        alphabets.push(item);
      }
    });
  
    const highestAlphabet = alphabets.length > 0 ? [alphabets.sort().reverse()[0]] : [];
  
    return {
      is_success: true,
      user_id: "Abhishek_Sharma_06082002",
      email: "2236658.cse.cec@cgcedu.in",
      roll_number: "2236658",
      numbers,
      alphabets,
      highest_alphabet: highestAlphabet,
    };
  };