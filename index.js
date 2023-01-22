const saveKey = () => {
  const input = document.getElementById("key_input");

  if (input) {
    const { value } = input;

    //encode string
    const encodeValue = encode(value);

    //save to google storage
    chrome.storage.local.set({ "openai-key": encodedValue }, () => {
      document.getElementById("key_needed").style.display = "none";
      document.getElementById("key_entered").style.display = "block";
    });
  }
};

const changeKey = () => {};

document.getElementById("save_key_button").addEventListener("click", saveKey);
document
  .getElementById("change_key_button")
  .addEventListener("click", changeKey);
