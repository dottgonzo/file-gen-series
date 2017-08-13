export function nextPath(path: string, dim?: number): string {
  const extension = path.split('.')[path.split('.').length - 1]
  const pathwithoutextension = path.split('.')[path.split('.').length - 2]
  let string = ''
  let foundedlast = false
  let pathwithoutnumbers = pathwithoutextension
  let numbercycle
  if (dim) {
    numbercycle = dim
  } else {
    numbercycle = pathwithoutextension.length
  }
  for (let i = 0; i < numbercycle; i++) {
    pathwithoutnumbers = pathwithoutnumbers.substring(0, pathwithoutnumbers.length - 1)
    const char = pathwithoutextension[(pathwithoutextension.length - 1) - i]

    if (dim && isNaN(parseInt(char))) {
      let startnumber: string = ''
      for (let ii = 0; ii < (dim - 1); ii++) {
        startnumber += '0'
      }

      return pathwithoutextension + '_' + startnumber + '1.' + extension
    } else if (isNaN(parseInt(char)) && !foundedlast) {
      foundedlast = true
      const stringlength = string.length
      string = (parseInt(string) + 1).toString()
      const cycle = (stringlength - string.length)

      if (string.length < stringlength) {
        for (let ss = 0; ss < cycle; ss++) {

          string = '0' + string


        }
      }
      return pathwithoutnumbers + '_' + string + '.' + extension
    } else if (!foundedlast) {
      string = char + string
    }


  }

  if (dim) {
    const stringlength = string.length
    string = (parseInt(string) + 1).toString()
    const cycle = (stringlength - string.length)

    if (string.length < stringlength) {
      for (let ss = 0; ss < cycle; ss++) {

        string = '0' + string


      }
    }
    return pathwithoutnumbers + string + '.' + extension
  }

}