function reduceAddress(value: `0x${string}`) {
  return `${value.substring(0, 5)}...${value.substring(38, 5)}`
}

export { reduceAddress }