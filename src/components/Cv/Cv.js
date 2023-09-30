function Cv() {
  const domain = window.location.href.replace(/\/cv$/, '')
  window.location.href = `${domain}/Mario_Pereira_CV.pdf`

  return null
}

export default Cv
