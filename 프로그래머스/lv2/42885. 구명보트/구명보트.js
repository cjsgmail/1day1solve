function solution(people, limit) {
    let twoPeople = 0;
  let sortedPeople = people.sort((a, b) => a - b);
  let leftIdx = 0;
  let rightIdx = sortedPeople.length - 1;
  while(leftIdx < rightIdx) {
      if(sortedPeople[leftIdx] + sortedPeople[rightIdx] <= limit) {
          leftIdx++;
          rightIdx--;
          twoPeople++;
      } else {
              rightIdx--;
      }
  }
  return people.length - twoPeople;
}