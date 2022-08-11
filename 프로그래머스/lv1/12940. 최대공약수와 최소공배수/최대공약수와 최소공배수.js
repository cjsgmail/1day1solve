function solution(n, m) {
    const gcd = gcdMethod(n,m)
    return [gcd, n*m/gcd]
}

function gcdMethod(n, m) {
  const remainder = n % m;
  if (remainder === 0) return m;  
  return gcdMethod(m, remainder);  
}

