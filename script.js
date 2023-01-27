const tabsCard = document.querySelectorAll(".rectangle");
const body = document.querySelector("body");

$apiKey =
  "api_key=live_3TFEVvwGGabde2NtYedxXgrTCD14fsL3TxKWK6ADSpjajjGa1jr9VzvlKwdXgEyI";
$host = "https://api.thecatapi.com/v1/images/search";

tabsCard.forEach(function (item) {
  item.addEventListener("click", async function () {
    item.classList.toggle("active");

    result = await fetch($host + "?" + $apiKey + "&limit=5");
    cats = await result.json();

    cats.forEach(function (cat) {
      catImage = `<img src="${cat.url}">`;

      body.insertAdjacentHTML("beforebegin", catImage);

      console.log(catImage);
    });

    console.log(cats);
  });
});
