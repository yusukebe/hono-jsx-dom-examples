export async function fetchBio(person: string) {
  const delay = person === 'Bob' ? 2000 : 200
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('This is ' + person + '’s bio.')
    }, delay)
  })
}
