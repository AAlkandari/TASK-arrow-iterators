/*************************************
 * Challenge 1: engineer(array)
 *
 * - Accepts an array
 * - Logs every element of the array with "eng" next to it
 * eg: engineer(["zainab","omar","zahraa"]) => eng.zainab, eng.omar, eng.zahraa
 ************************************/
  const array = ["zainab","omar","zahraa"];

  const engineer = (array) => array.forEach(element => console.log("eng." + element));

  engineer(array);

/*************************************
 * Challenge 2: toKWD(wallets)
 *
 * - Write a function named toKWD
 * - Accepts an array of wallets
 *   in USD
 * - Returns an array of wallets
 *   in KWD
 *
 * The conversion is:
 *   kwd = usd * 0.30
 ************************************/

    const toKWD = (wallets) => (wallets.map((wallet) => wallet * 0.3));
  
    const kwdArray = toKWD([99,124,150]);

    console.log(toKWD([99,124,150]));

/**************************************
 * Challenge 3: richestWallet(wallets,maxAmount)
 *
 * - Write a function named richestWallet
 * - Accepts an array of wallets
 * - Accepts a max amount
 * - Returns an array of wallets
 *   that exceed the maxAmount
 ***************************************/

  const richestWallet = (wallets, maxAmount) => wallets.filter((wallet) => wallet > maxAmount);

  console.log(richestWallet([90, 100, 200, 300, 400, 2333, 3222], 1000));


/******************************************
 * Challenge 4: makeLiteralGrades(grades)
 *
 * - Write a function named makeLiteralGrades
 * - Accepts an array of grades as numbers
 * - Converts evrey grade to its currosponding
 * literal grade in the following scale
 * 90-100 : A
 * 80-90  : B
 * 70-80  : C
 * 60-70  : D
 * < 60   : F
 * Example: makeLiteralGrades([90, 70, 40]) should return ["A", "C", "F"]
 *******************************************/

const makeLiteralGrades = (grades) => {grades.map(element => {

if (element >= 90) return "A";

else if (element >= 80) return "B";

else if (element >= 70) return "C";

else if (element >= 60) return "D";

else return "F";

  })
};

console.log(makeLiteralGrades[90, 100, 70]);