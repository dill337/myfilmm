const history = useHistory();
const goBack = () => {
  history.goBack()
}

return (
  <button type="button" onClick={goBack}>Go Back</button>
)