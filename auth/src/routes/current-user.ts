import express from 'express'

const router = express.Router()

router.get('/api/users/currentuser', (req, res) => {
  function caesarCipher(s: string, k: number) {
    const alphabet = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ]

    const cipher = s.split('').map((letter) => {
      return alphabet.indexOf(letter.toLowerCase()) === -1
        ? letter
        : alphabet.indexOf(letter.toLowerCase()) + k > 26
        ? alphabet[
          alphabet.indexOf(letter.toLowerCase()) + k > 26! ?
          alphabet.indexOf(letter.toLowerCase()) + k - 26 :
          alphabet[alphabet.indexOf(letter.toLowerCase()) + k]
        ]
    })

    console.log(cipher)
  }

  caesarCipher('middle-Outz', 2)

  res.send('Hi Google Cloud Kubernetes Engine!')
})

export { router as currentUserRouter }
