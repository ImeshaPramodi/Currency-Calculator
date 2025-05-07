function convert() {
    const amount = parseFloat(document.getElementById("from").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
  
    if (isNaN(amount) || amount <= 0) {
      document.getElementById("result").innerHTML = "Please enter a valid amount.";
      return;
    }
  
    const apiKey = "b38838d7d512f4590fc0641e"; // Use your actual API key
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.result === "success") {
          const rate = data.conversion_rates[toCurrency];
          const convertedAmount = (amount * rate).toFixed(2);
          document.getElementById("result").innerHTML = 
            `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        } else {
          document.getElementById("result").innerHTML = "Error retrieving exchange rate.";
        }
      })
      .catch(error => {
        console.error("Error:", error);
        document.getElementById("result").innerHTML = "Network error. Try again later.";
      });
  }
  