const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
  
  
 function findMatching(driversArray, string) {
   const result = driversArray.filter(driver => string.toLowerCase() === driver.toLowerCase()) 
  
   return result
}
 
// expect(fuzzyMatch(drivers, 'Sa')).to.have.members(['Sammy', 'Sarah', 'Sally']);

function fuzzyMatch(driversFirstInitial, strings) {
  const beforeEach = driversFirstInitial.filter(drivers => drivers.slice(0,2) === strings);
  return beforeEach
  }
  
  function matchName(driversMatch, name) {
    return driversMatch.filter((driver) => driver.name === name)
  }
  