import { useState } from 'react'

const passwordVisible = () => {
    const [eye, setEye] = useState(true)

    const changeEye = () => {
        // Atualiza o valor de "eye" para o valor oposto.
        setEye(!eye)
      }
      // Se eye for true, mostra eye-slash, se for false eye.
      const eyeStyle = eye ? 'charm:eye-slash' : 'charm:eye'
      // Mesma coisa aqui, mas setando o tipo do input para password ou vazio, assim escondendo a senha.
      const passwordType = eye ? 'password' : ''

      return { changeEye, eyeStyle, passwordType}
}

export default passwordVisible