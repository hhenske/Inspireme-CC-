const verseArray = [
  "Trust in the Lord with all thine heart; a;nd lean not unto thineown understanding. -Proverbs 3:5",
  "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous righ hand. -Issaiah 41:10",
  "Those who hope in the Lord will renew their strength. Isaiah 40:31",
  "God is our refuge and strength, a very present help in trouble therefore we will not fear. -Psalm 46:1",
];

const button = document.getElementById("randomButton");

function handleClick() {
  const randomIndex = Math.floor(Math.random() * verseArray.length);
  const randomItem = verseArray[randomIndex];
  document.getElementById("result").innerText = randomItem;
}

button.addEventListener("click", handleClick);
