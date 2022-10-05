let piramid = (max) => {
  
    let result = "";
    
    for (let i = max; i >= 0; i -= 2) {
      result += " ".repeat((max-i)/2) + "*".repeat(i+1) + "\n";
    }
    
    return result
  }
  
console.log(piramid(20))