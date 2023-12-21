// Async Await

//Async Function return promices

// Async => Await

const fetchNumber = async () => {
  return 25;
};

fetchNumber().then((number) => console.log(number));
//Promise {<fulfilled>: 25}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: 25

const consoleFetchedNumber = async () => {
  const number = await fetchNumber();

  console.log(number);
};

consoleFetchedNumber();


