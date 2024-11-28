const verseArray = [
  "Trust in the Lord with all thine heart; and lean not unto thineown understanding. -Proverbs 3:5",
  "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous righ hand. -Issaiah 41:10",
  "Those who hope in the Lord will renew their strength. Isaiah 40:31",
  "God is our refuge and strength, a very present help in trouble therefore we will not fear. -Psalm 46:1",
  "I've commanded you to be brave and strong, haven't I? Don't be alarmed or terrified because the Lord your God is with you wherever you go. -Joshua 1:9",
  "Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls. - Matthew 11: 28-29",
];

const button = document.getElementById("randomButton");

function handleClick() {
  const randomIndex = Math.floor(Math.random() * verseArray.length);
  const randomItem = verseArray[randomIndex];
  document.getElementById("result").innerText = randomItem;
}

button.addEventListener("click", handleClick);
