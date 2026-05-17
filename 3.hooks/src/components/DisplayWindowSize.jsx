import useWindowSize from "../hooks/useWindowSize"

export const DisplayWindowSize = () => {
    const {width, height} = useWindowSize()

    return (
    <div>
        <p>A largura da janela é: {width}</p>
        <p>A altura da janela é: {height}</p>
    </div>
  )
}
