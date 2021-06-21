const coin = (value, totalCoins = 0) => {

  return (acum) => {

    if (acum < value) {
      return totalCoins
    }

    if(acum >= value) {
      acum -= value;
      totalCoins++;
      return coin(value, totalCoins)(acum)
    }

  }

}
export default coin;