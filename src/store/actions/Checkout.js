export function saveData(inputName, data) {
  return (dispatch) => {
    dispatch({
      type: "SAVE_DATA",
      inputName,
      data
    })
  }
}