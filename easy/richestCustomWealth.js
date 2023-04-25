function maximumWealth(accounts) {
  // create maxWealth variable to hole the highest value
  let maxWealth = 0;
  // loop through the accounts array
  for (let i = 0; i < accounts.length; i++) {
    // create variable to hold the current wealth
    let currentWealth = 0;
    // loop through the inner array
    for (let j = 0; j < accounts[i].length; j++) {
      // add the value of each index to the current wealth
      currentWealth += accounts[i][j];
    }
    // if current wealth is greater than max wealth, set them to eachother
    if (currentWealth > maxWealth) {
      maxWealth = currentWealth;
    }
  }
  return maxWealth;
}

// time complexity: O(n)
// space complexity: O(1)
