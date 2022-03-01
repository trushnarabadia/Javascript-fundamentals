const addedToBatch = (batch, addingToBatch) => {
  if (batch.length >= 5) {
    return batch;
  }else {
    return batch.concat(addingToBatch);
  }
}
console.log(addedToBatch([1, 2, 3, 4, 5, 6,7 ,8 ,9], 10));