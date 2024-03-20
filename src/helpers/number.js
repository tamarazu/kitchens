function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function rupiah(x) {
  const value = numberWithCommas(x);
  return "Rp" + value;
}

export { numberWithCommas, rupiah };
